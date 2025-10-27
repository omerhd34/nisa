import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedAbout() {
  console.log("👤 Seeding About data...");

  const aboutCount = await prisma.about.count();

  if (aboutCount > 0) {
    console.log("⚠️  About data already exists. Skipping...");
    return;
  }

  await prisma.about.create({
    data: {
      text1:
        "Klinik Psikolog Nisa Demir, İstanbul Ticaret Üniversitesi Psikoloji bölümünü 2021 yılında tamamladıktan sonra İstanbul Okan Üniversitesi Tezli Klinik Psikoloji yüksek lisans programına 2023 yılında kabul edilmiş, Haziran 2025'te 'Romantik İlişkisi Olan Yetişkin Bireylerin Nesne İlişkileri ile Cinsel Doyum Düzeyleri Arasındaki İlişkide Obsesif Kompulsif Belirti Bozukluk Belirtilerinin Aracılık Rolünün İncelenmesi' adlı yüksek lisans tezini başarıyla savunarak 'Uzman Klinik Psikolog' ünvanını almaya hak kazanmıştır.",
      text2:
        "Lisans döneminde, çeşitli danışmanlık merkezlerinde staj yapmış; yüksek lisans döneminde ise Psikodinamik Psikoterapi Uygulama ve Süpervizyon dersi kapsamında Pınar Arslantürk'ten süpervizyon eğitimi almış ve beraberinde terapi hizmeti vermeye başlamıştır. Ardından psikanalist Yavuz Erten'den Psikanalizden Psikodinamik Terapilere eğitimini tamamlamıştır.",
      text3:
        "Şu an ise psikanalitik psikoterapi çerçevesinde yetişkinlerle bireysel olmak üzere yüz yüze ve online olarak bireysel psikoterapi hizmeti vermektedir. Ayrıca, psikanalitik yönelimli bireysel terapisinden geçmekte ve mesleki süpervizyonuna devam etmektedir.",
      edu1: "Klinik Psikoloji Uzmanlığı - İstanbul Okan Üniversitesi (2025)",
      edu2: "Psikanalizden Psikodinamik Terapilere Eğitimi - Yavuz Erten",
      edu3: "Psikodinamik Psikoterapi Süpervizyon Eğitimi - Pınar Arslantürk",
    },
  });

  console.log("✅ About data seeded successfully");
}

seedAbout()
  .catch((e) => {
    console.error("❌ About seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
