import { NextResponse } from "next/server";
import { getWorkData } from "@/lib/dataQueries.js";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await getWorkData();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Work data fetch error:", error);
    return NextResponse.json(
      { error: "Veritabanından veri alınamadı", details: error.message },
      { status: 500 }
    );
  }
}
