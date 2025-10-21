import { Resend } from "resend";
import { NextResponse } from "next/server";
import { saveContactMessage } from "@/lib/dataQueries";
import { getContactData } from "@/lib/dataQueries";

const resend = new Resend(process.env.RESEND_API_KEY);
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const data = await getContactData();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Contact data fetch error:", error);
    return NextResponse.json({ error: "Veriler alınamadı" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tüm alanlar doldurulmalıdır." },
        { status: 400 }
      );
    }

    try {
      await saveContactMessage(name, email, subject || "Genel Bilgi", message);
    } catch (dbError) {
      console.error("Veritabanına kayıt hatası:", dbError);
    }

    const { data, error } = await resend.emails.send({
      from: "İletişim Formu <onboarding@resend.dev>",
      to: ["psikolognisademir@gmail.com"],
      replyTo: email,
      subject: `Web Sitesinden Mesaj - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #10b981; border-bottom: 3px solid #10b981; padding-bottom: 10px;">
            Yeni İletişim Formu Mesajı
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <p style="margin: 10px 0;">
              <strong style="color: #374151;">İsim:</strong> 
              <span style="color: #1f2937;">${name}</span>
            </p>
            <p style="margin: 10px 0;">
              <strong style="color: #374151;">E-posta:</strong> 
              <a href="mailto:${email}" style="color: #10b981; text-decoration: none;">${email}</a>
            </p>
            <p style="margin: 10px 0;">
              <strong style="color: #374151;">Konu:</strong> 
              <span style="color: #1f2937;">${subject || "Belirtilmemiş"}</span>
            </p>
          </div>
          
          <div style="background-color: #ecfdf5; padding: 20px; border-left: 4px solid #10b981; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;">
              <strong style="color: #374151;">Mesaj:</strong>
            </p>
            <p style="margin: 0; color: #1f2937; line-height: 1.6;">
              ${message.replace(/\n/g, "<br>")}
            </p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          
          <p style="color: #6b7280; font-size: 12px; text-align: center;">
            Bu mesaj web sitenizin iletişim formundan gönderilmiştir.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend hatası:", error);
      return NextResponse.json(
        { error: "Email gönderilirken bir hata oluştu." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Mesajınız başarıyla kaydedildi ve gönderildi.",
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email gönderme hatası:", error);
    return NextResponse.json(
      { error: "Mesaj gönderilirken bir hata oluştu.", details: error.message },
      { status: 500 }
    );
  }
}
