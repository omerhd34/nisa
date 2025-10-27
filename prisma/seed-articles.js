import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
        "Bu yazıda psikanalitik psikoterapinin temel ilkeleri, terapi sürecindeki işleyiş ve terapistin rolü ele alınmaktadır. Psikanalitik psikoterapi, bireyin bilinçdışı süreçlerini anlamasına ve geçmiş deneyimlerinin bugünkü davranışları üzerindeki etkilerini fark etmesine yardımcı olur. Terapide, danışan ve terapist arasındaki ilişki merkezi bir rol oynar. Bu ilişki, danışanın geçmiş ilişki kalıplarını yeniden yaşamasına ve anlamasına olanak tanır.",
    },
    {
      title: "Psikanalitik Literatürde Savunma Mekanizmaları",
      slug: "psikanalitik-literaturde-savunma-mekanizmalari",
      image: "/horse.jpg",
      readTime: "5 dk",
      excerpt:
        "Savunma mekanizmalarının bireyin psikolojik yapısındaki işlevi ve literatürdeki yeri.",
      content:
        "Bu yazı, savunma mekanizmalarının bireyin psikolojik yapısındaki işlevini ve psikanalitik literatürdeki yerini inceler. İnkar, yansıtma, bastırma gibi savunma mekanizmalarının günlük yaşantımızda nasıl rol oynadığını detaylı şekilde ele alır. Savunma mekanizmaları, egonun kaygıyla başa çıkmak için kullandığı bilinçdışı stratejilerdir. Her birey, kendi kişilik yapısına ve yaşam deneyimlerine uygun savunma mekanizmaları geliştirir.",
    },
    {
      title: "Baba İşlevi",
      slug: "baba-islevi",
      image: "/open.jpg",
      readTime: "5 dk",
      excerpt:
        "Baba figürünün çocuk gelişimi ve kimlik oluşumundaki yeri psikanalitik bakış açısıyla.",
      content:
        "Bu yazıda baba figürünün çocuk gelişimi ve kimlik oluşumundaki yeri psikanalitik bir bakış açısıyla ele alınmaktadır. Lacan'ın baba işlevi kavramı çerçevesinde, sembolik düzenin kuruluşu ve özneleşme süreci incelenir. Baba işlevi, çocuğun anne ile kuruduğu diyalektik ilişkiden ayrılarak sembolik düzene girmesini sağlar. Bu süreç, kimlik gelişimi ve sosyalleşme açısından kritik öneme sahiptir.",
    },
    {
      title: "Perde Anılar Üzerine",
      slug: "perde-anilar-uzerine",
      image: "/drop.jpg",
      readTime: "5 dk",
      excerpt:
        "Bilinçdışı süreçlerin hatırlama biçimlerimiz üzerindeki etkisi.",
      content:
        "Perde anılar kavramı, bilinçdışı süreçlerin hatırlama biçimlerimiz üzerindeki etkisini anlamada önemli bir anahtar sunar. Freud'un geliştirdiği bu kavram, bazı anıların gerçek travmatik deneyimleri örtmek için nasıl kullanıldığını açıklar. Perde anılar, genellikle çocukluk dönemine ait görünüşte masum anılardır, ancak derin bir analiz gerçek anlamlarını ortaya çıkarabilir.",
    },
    {
      title: "Göbek Bağından Feniks'e: Çocuk Gelişimi ve Ego Oluşumu",
      slug: "gobek-bagindan-fenikse-cocuk-gelisimi-ve-ego-olusumu",
      image: "/DALL.webp",
      readTime: "8 dk",
      excerpt: "Çocuk gelişimi ve ego oluşum sürecinde önemli dönüm noktaları.",
      content:
        "Ebeveyn, çocuğa tutma (holding), beraber yaşama (living with) ve birlikte yaşama (living together) desteği sunar. Başlangıçta çocuğun kendine bakma yeteneği yoktur; bakım verenler bu görevi üstlenir. Ancak zamanla çocuk, dereceli hayal kırıklıklarıyla bakım verenin egosundan, bakımından ayrılmaya başlar.\n\nBebeklik dönemindeki hizmet aksamalara uğrar. Çocuğun kendi egosunun gelişebilmesi için bu aksamalar kaçınılmazdır. İlk bakımı verenler, her zaman o özel dikkati gösteremez ve bu durum, çocuğun iç dünyasında bir dağılmaya yol açar.\n\nNasıl ki kendiliğinden kesilmiş bir göbek bağı, göbekte kalmış bir ucu ile çürümeye, karararak düşmeye başlar ve eğer göbek bağı düşmez ya da hiç kesilmezse, çocuk zehirlenir, organik şoka girer ve enfeksiyon ile ölen dokuların yol açtığı tahribatla yüzleşmek zorunda kalır; temel bakımda da benzer şekilde, bir aksama yaşanır ve bununla birlikte çocuğun egosu gelişir.\n\n'Ego, küllerinden doğan bir phoenix (feniks) kuşudur' der Freud Yas ve Melankoli'de mitolojiye atıfta bulunarak. Yani bir kayıp yaşanır; temel bakım ve o güven veren 'holding' hissi yavaş yavaş yok olur. Çocuk ise bu süreçte kendine bakmayı öğrenir.\n\nEgo, insanın içsel bünyesi, içsel bakıcısıdır. Gerçekliği algılar, uyum sağlar, öğrenir, muhakeme eder, planlar. Bir taraftan da insanı sakinleştirir, yönlendirir, dürtüleri kontrol etmeyi sağlar ve kaygıyı yatıştırır. Bir zamanlar bu işlevleri, bebeğin gazını çıkaran, üşüdüğünde ısıtan, ihtiyacı olduğunda pışpışlayan anne yerine getirirdi; zamanla bu sorumluluğu ego üstlenir.\n\nPsikopatolojinin ağır seyrettiği durumlarda, özellikle psikozda, egonun bu yapısı dağılır. Öz bakım düşer mesela. Diş fırçalamaz, bunun farkında değildir. Kokar ama koktuğunu bilmez. Günlerce aç kalır ama açlığını hissetmez. Riskli davranışlarda bulunur, balkon kenarında yürür, tehlikenin farkında değildir. Bu, hem dışarıda 'dikkat et, yemeğini ye, dişini fırçala' diye uyaracak birinin eksikliğidir hem de içeride aynı uyarıyı yapacak içsel bir mekanizmanın çalışmamasıdır. Orada ego artık devrede değildir.",
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
        "Bu yazıda psikanalitik şiir analizi üzerinden annelik teması ve bireysel psikolojik yansımalar ele alınmaktadır. Şiirin sembolik dili ile bilinçdışı süreçler arasındaki ilişki, nesne ilişkileri kuramı çerçevesinde incelenir. Şiir, bilinçdışının en doğrudan ifade bulduğu sanatsal formlardan biridir. Metaforlar, simgeler ve imgeler aracılığıyla, şair kendi iç dünyasının derinliklerini keşfeder ve okuyucuyla paylaşır.",
    },
    {
      title: "Aktarım ve Karşıaktarım",
      slug: "aktarim-ve-karsiaktarim",
      image: "/above.jpg",
      readTime: "7 dk",
      excerpt:
        "Terapötik ilişkinin merkezinde yer alan aktarım ve karşıaktarım kavramları.",
      content:
        "Aktarım ve karşıaktarım, psikanalitik terapinin en temel kavramlarından ikisidir. Aktarım, danışanın geçmiş ilişkilerinden kaynaklanan duygu ve düşüncelerini terapiste yöneltmesi sürecidir. Karşıaktarım ise terapistin danışana karşı geliştirdiği bilinçdışı tepkilerdir. Bu iki kavram, terapötik ilişkinin dinamiklerini anlamak için kritik öneme sahiptir. Terapist, aktarım ve karşıaktarımı fark edip analiz ederek, danışanın içsel dünyasını daha iyi anlayabilir ve terapötik süreci derinleştirebilir.",
    },
  ];

  for (const article of articles) {
    await prisma.article.create({
      data: article,
    });
  }

  console.log(`✅ ${articles.length} articles seeded successfully`);
}

seedArticles()
  .catch((e) => {
    console.error("❌ Articles seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
