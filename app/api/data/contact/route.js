import { NextResponse } from "next/server";
import { getContactData } from "@/lib/dataQueries.js";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await getContactData();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Contact data fetch error:", error);

    let errorMessage = "Veritabanından veri alınamadı";
    if (error.message?.includes("DATABASE_URL")) {
      errorMessage = "Veritabanı bağlantı bilgisi yapılandırılmamış";
    } else if (error.message?.includes("findFirst")) {
      errorMessage = "Veritabanında contact verisi bulunamadı";
    }

    return NextResponse.json(
      {
        error: errorMessage,
        details: error.message,
        hint:
          process.env.NODE_ENV === "production"
            ? "Vercel'da DATABASE_URL environment variable'ını kontrol edin"
            : "Local .env dosyanızda DATABASE_URL'i kontrol edin",
      },
      { status: 500 }
    );
  }
}
