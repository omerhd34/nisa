import { NextResponse } from "next/server";
import { getAboutData } from "@/lib/dataQueries";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await getAboutData();
    return NextResponse.json(data);
  } catch (error) {
    console.error("About data fetch error:", error);
    return NextResponse.json({ error: "Veriler alınamadı" }, { status: 500 });
  }
}
