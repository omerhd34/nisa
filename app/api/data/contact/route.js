import { NextResponse } from "next/server";
import { getContactData } from "@/lib/dataQueries";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await getContactData();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Contact data fetch error:", error);
    return NextResponse.json(
      { error: "Veritabanından veri alınamadı", details: error.message },
      { status: 500 }
    );
  }
}
