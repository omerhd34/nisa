import { NextResponse } from "next/server";
import { getFooterData } from "@/lib/dataQueries";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await getFooterData();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Footer data fetch error:", error);
    return NextResponse.json({ error: "Veriler alınamadı" }, { status: 500 });
  }
}
