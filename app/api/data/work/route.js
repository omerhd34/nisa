import { NextResponse } from "next/server";
import { getWorkData } from "@/lib/dataQueries.js";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await getWorkData();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Work data fetch error:", error);
    console.error("Error name:", error.name);
    console.error("Error code:", error.code);
    console.error("Error meta:", error.meta);

    let errorMessage = "Veritabanından veri alınamadı";
    let errorDetails = error.message || "Bilinmeyen hata";

    if (error.message?.includes("DATABASE_URL")) {
      errorMessage = "Veritabanı bağlantı bilgisi yapılandırılmamış";
    } else if (error.code === "P2002" || error.code === "P2025") {
      errorMessage = "Veritabanında work verisi bulunamadı veya çakışma var";
    } else if (error.code) {
      errorMessage = `Prisma hatası: ${error.code}`;
      errorDetails = `${error.message} - Code: ${error.code}`;
    } else if (
      error.message?.includes("findFirst") ||
      error.message?.includes("No work data found")
    ) {
      errorMessage = "Veritabanında work verisi bulunamadı";
    }

    return NextResponse.json(
      {
        error: errorMessage,
        details: errorDetails,
        code: error.code || null,
        hint:
          process.env.NODE_ENV === "production"
            ? "Vercel'da DATABASE_URL environment variable'ını kontrol edin. Veritabanında work koleksiyonunun var olduğundan ve veri içerdiğinden emin olun."
            : "Local .env dosyanızda DATABASE_URL'i kontrol edin",
      },
      { status: 500 }
    );
  }
}
