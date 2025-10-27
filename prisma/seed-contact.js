import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedContact() {
  console.log("📧 Seeding Contact data...");

  const contactCount = await prisma.contact.count();

  if (contactCount > 0) {
    console.log("⚠️  Contact data already exists. Skipping...");
    return;
  }

  await prisma.contact.create({
    data: {
      subtitle: "Size nasıl yardımcı olabilirim? Benimle iletişime geçin.",
    },
  });

  console.log("✅ Contact data seeded successfully");
}

seedContact()
  .catch((e) => {
    console.error("❌ Contact seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
