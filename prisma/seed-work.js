import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedWork() {
  console.log("💼 Seeding Work data...");

  const workCount = await prisma.work.count();

  if (workCount > 0) {
    console.log("⚠️  Work data already exists. Skipping...");
    return;
  }

  await prisma.work.create({
    data: {
      subtitle: "Size en uygun terapi yöntemini birlikte keşfedelim.",
    },
  });

  console.log("✅ Work data seeded successfully");
}

seedWork()
  .catch((e) => {
    console.error("❌ Work seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
