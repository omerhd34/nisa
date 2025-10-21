import { NextResponse } from "next/server";
import { getHomeData } from "@/lib/dataQueries.js";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await getHomeData();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Home data fetch error:", error);
    return NextResponse.json(
      { error: "Veritabanından veri alınamadı", details: error.message },
      { status: 500 }
    );
  }
}
