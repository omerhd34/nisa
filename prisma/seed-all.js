import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Import all seed functions
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
  console.log("✅ Home data seeded");
}

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
  console.log("✅ About data seeded");
}

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
  console.log("✅ Work data seeded");
}

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
  console.log("✅ Contact data seeded");
}

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
  console.log("✅ Footer data seeded");
}

async function seedArticles() {
  console.log("📝 Seeding Articles data...");
  const articleCount = await prisma.article.count();
  if (articleCount > 0) {
    console.log("⚠️  Articles already exist. Skipping...");
    return;
  }

  const articles = [
    {
      title: "Psikanalitik Psikoterapi Nedir?",
      slug: "psikanalitik-psikoterapi-nedir",
      image: "/hand.jpg",
      readTime: "5 dk",
      excerpt:
        "Psikanalitik psikoterapinin temel ilkeleri ve terapi sürecindeki işleyiş hakkında detaylı bilgiler.",
      content:
        "Bu yazıda psikanalitik psikoterapinin temel ilkeleri, terapi sürecindeki işleyiş ve terapistin rolü ele alınmaktadır. Psikanalitik psikoterapi, bireyin bilinçdışı süreçlerini anlamasına ve geçmiş deneyimlerinin bugünkü davranışları üzerindeki etkilerini fark etmesine yardımcı olur.",
    },
    {
      title: "Psikanalitik Literatürde Savunma Mekanizmaları",
      slug: "psikanalitik-literaturde-savunma-mekanizmalari",
      image: "/horse.jpg",
      readTime: "5 dk",
      excerpt:
        "Savunma mekanizmalarının bireyin psikolojik yapısındaki işlevi ve literatürdeki yeri.",
      content:
        "Bu yazı, savunma mekanizmalarının bireyin psikolojik yapısındaki işlevini ve psikanalitik literatürdeki yerini inceler.",
    },
    {
      title: "Baba İşlevi",
      slug: "baba-islevi",
      image: "/open.jpg",
      readTime: "5 dk",
      excerpt:
        "Baba figürünün çocuk gelişimi ve kimlik oluşumundaki yeri psikanalitik bakış açısıyla.",
      content:
        "Bu yazıda baba figürünün çocuk gelişimi ve kimlik oluşumundaki yeri psikanalitik bir bakış açısıyla ele alınmaktadır.",
    },
    {
      title: "Perde Anılar Üzerine",
      slug: "perde-anilar-uzerine",
      image: "/drop.jpg",
      readTime: "5 dk",
      excerpt:
        "Bilinçdışı süreçlerin hatırlama biçimlerimiz üzerindeki etkisi.",
      content:
        "Perde anılar kavramı, bilinçdışı süreçlerin hatırlama biçimlerimiz üzerindeki etkisini anlamada önemli bir anahtar sunar.",
    },
    {
      title: "Göbek Bağından Feniks'e: Çocuk Gelişimi ve Ego Oluşumu",
      slug: "gobek-bagindan-fenikse-cocuk-gelisimi-ve-ego-olusumu",
      image: "/DALL.webp",
      readTime: "8 dk",
      excerpt: "Çocuk gelişimi ve ego oluşum sürecinde önemli dönüm noktaları.",
      content:
        "Ebeveyn, çocuğa tutma (holding), beraber yaşama (living with) ve birlikte yaşama (living together) desteği sunar.",
    },
    {
      title:
        "Psikoloji ve Şiir: 'Annemle İlgili Şeyler', Psikanalitik Şiir Analizi",
      slug: "psikoloji-ve-siir-annemle-ilgili-seyler-psikanalitik-siir-analiz",
      image: "/sun.jpeg",
      readTime: "6 dk",
      excerpt:
        "Psikanalitik şiir analizi üzerinden annelik teması ve bireysel psikolojik yansımalar.",
      content:
        "Bu yazıda psikanalitik şiir analizi üzerinden annelik teması ve bireysel psikolojik yansımalar ele alınmaktadır.",
    },
    {
      title: "Aktarım ve Karşıaktarım",
      slug: "aktarim-ve-karsiaktarim",
      image: "/above.jpg",
      readTime: "7 dk",
      excerpt:
        "Terapötik ilişkinin merkezinde yer alan aktarım ve karşıaktarım kavramları.",
      content:
        "Aktarım ve karşıaktarım, psikanalitik terapinin en temel kavramlarından ikisidir.",
    },
  ];

  for (const article of articles) {
    await prisma.article.create({ data: article });
  }
  console.log(`✅ ${articles.length} articles seeded`);
}

// Main seeding function
async function main() {
  console.log("🌱 Starting database seeding...\n");

  await seedHome();
  await seedAbout();
  await seedWork();
  await seedArticles();
  await seedContact();
  await seedFooter();

  console.log("\n🎉 Database seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
