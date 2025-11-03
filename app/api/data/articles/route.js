import { NextResponse } from "next/server";
import { getArticlesData } from "@/lib/dataQueries.js";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await getArticlesData();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Articles data fetch error:", error);

    let errorMessage = "Veritabanından veri alınamadı";
    if (error.message?.includes("DATABASE_URL")) {
      errorMessage = "Veritabanı bağlantı bilgisi yapılandırılmamış";
    } else if (error.message?.includes("findMany")) {
      errorMessage = "Veritabanında articles verisi bulunamadı";
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
