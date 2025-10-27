import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedHome() {
  console.log("🏠 Seeding Home data...");

  const homeCount = await prisma.home.count();

  if (homeCount > 0) {
    console.log("⚠️  Home data already exists. Skipping...");
    return;
  }

  await prisma.home.create({
    data: {
      welcomeText:
        "Yaşamınızda karşılaştığınız zorluklarla başa çıkmanızda size destek olmak için buradayım. Güvenli ve destekleyici bir ortamda, kişisel gelişiminiz ve ruh sağlığınız için birlikte çalışabiliriz.",
      benefits: [
        "Gizlilik ve güvenlik garantisi",
        "Esnek randevu saatleri",
        "Kişiye özel tedavi planı",
        "Profesyonel ve empatik yaklaşım",
      ],
    },
  });

  console.log("✅ Home data seeded successfully");
}

seedHome()
  .catch((e) => {
    console.error("❌ Home seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
