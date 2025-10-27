import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedWork() {
  console.log("💼 Seeding Work data...");

  // Mevcut work verilerini sil
  await prisma.work.deleteMany();
  console.log("🗑️  Mevcut work verileri silindi");

  await prisma.work.create({
    data: {
      subtitle: "Size en uygun terapi yöntemini birlikte keşfedelim.",
      workAreas: [
        {
          title: "Bireysel Terapi",
          description:
            "Kişisel gelişim ve ruh sağlığı konularında birebir çalışma yapıyoruz. Her bireyin kendine özgü ihtiyaçlarına göre özelleştirilmiş terapi yaklaşımları uyguluyoruz.",
          icon: "User",
          topics: [
            "Anksiyete ve Stres Yönetimi",
            "Depresyon Tedavisi",
            "Travma Terapisi",
            "Kişilik Bozuklukları",
            "Özgüven Geliştirme",
            "İlişki Sorunları",
          ],
        },
        {
          title: "Online Terapi",
          description:
            "Teknoloji destekli terapi hizmetleri ile evinizin konforunda profesyonel destek alabilirsiniz. Güvenli ve etkili online terapi deneyimi sunuyoruz.",
          icon: "Video",
          topics: [
            "Video Görüşmeleri",
            "Mesajlaşma Terapisi",
            "Online Grup Terapileri",
            "Dijital Kaynaklar",
            "Mobil Uygulama Desteği",
            "7/24 Destek Hattı",
          ],
        },
      ],
      benefits: [
        {
          title: "Uzman Deneyim",
          description:
            "10+ yıllık klinik deneyimimle, kanıtlanmış terapi yöntemlerini kullanarak size en etkili tedaviyi sunuyorum.",
          icon: "Brain",
        },
        {
          title: "Empatik Yaklaşım",
          description:
            "Her danışanımın hikayesini anlayarak, güvenli ve destekleyici bir ortamda terapi sürecini yürütüyorum.",
          icon: "Heart",
        },
        {
          title: "Kişiselleştirilmiş Tedavi",
          description:
            "Size özel ihtiyaçlarınıza göre uyarlanmış terapi planları ile maksimum fayda sağlıyoruz.",
          icon: "Sparkles",
        },
      ],
      cta: {
        title: "Hayatınızı Değiştirmeye Hazır mısınız?",
        text: "Profesyonel destek almak ve ruh sağlığınızı iyileştirmek için bugün iletişime geçin. İlk görüşme ücretsizdir.",
      },
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
