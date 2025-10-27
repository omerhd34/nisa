import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedFooter() {
  console.log("🦶 Seeding Footer data...");

  const footerCount = await prisma.footer.count();

  if (footerCount > 0) {
    console.log("⚠️  Footer data already exists. Skipping...");
    return;
  }

  await prisma.footer.create({
    data: {
      description:
        "Bireysel ve online terapi hizmetleriyle yanınızdayım. Ruh sağlığınız için profesyonel destek.",
    },
  });

  console.log("✅ Footer data seeded successfully");
}

seedFooter()
  .catch((e) => {
    console.error("❌ Footer seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
