import {
  Heart,
  Target,
  Users as UsersIcon,
  Mail,
  MapPin,
  Clock,
  User,
  Video,
  Brain,
  Sparkles,
  Users,
} from "lucide-react";

export const data = {
  // Navigation Labels
  nav: {
    home: "Ana Sayfa",
    about: "Tanışalım",
    work: "Çalışma Alanlarım",
    articles: "Yazılarım",
    contact: "İletişim",
  },

  // Home Page
  home: {
    title: "Nisa Demir",
    subtitle: "Bireysel ve Online Terapi",
    welcome: "Merhaba!",
    welcomeText:
      "Yaşamınızda karşılaştığınız zorluklarla başa çıkmanızda size destek olmak için buradayım. Güvenli ve destekleyici bir ortamda, kişisel gelişiminiz ve ruh sağlığınız için birlikte çalışabiliriz.",
    features: [
      {
        icon: Users,
        title: "Bireysel Terapi",
        description: "............................",
      },
      {
        icon: Video,
        title: "Online Terapi",
        description: "............................",
      },
    ],
    benefits: [
      "Gizlilik ve güvenlik garantisi",
      "Esnek randevu saatleri",
      "Kişiye özel tedavi planı",
      "Profesyonel ve empatik yaklaşım",
    ],
    cta: {
      title: "İlk Adımı Atmaya Hazır Mısınız?",
      text: "Bugün kendinize yatırım yapın. Daha mutlu ve sağlıklı bir yaşam için birlikte çalışalım.",
      button: "Hemen İletişime Geçin",
    },
    whyChoose: {
      title: "Çalışma Alanlarım",
      subtitle: "...................",
    },
  },

  // About Page
  about: {
    title: "Tanışalım",
    heading: "Hakkımda",
    text1:
      "Klinik Psikolog Nisa Demir, İstanbul Ticaret Üniversitesi Psikoloji bölümünü 2021 yılında tamamladıktan sonra İstanbul Okan Üniversitesi Tezli Klinik Psikoloji yüksek lisans programına 2023 yılında kabul edilmiş, Haziran 2025'te 'Romantik İlişkisi Olan Yetişkin Bireylerin Nesne İlişkileri ile Cinsel Doyum Düzeyleri Arasındaki İlişkide Obsesif Kompulsif Belirti Bozukluk Belirtilerinin Aracılık Rolünün İncelenmesi' adlı yüksek lisans tezini başarıyla savunarak 'Uzman Klinik Psikolog' ünvanını almaya hak kazanmıştır.",
    text2:
      "Lisans döneminde, çeşitli danışmanlık merkezlerinde staj yapmış; yüksek lisans döneminde ise Psikodinamik Psikoterapi Uygulama ve Süpervizyon dersi kapsamında Pınar Arslantürk'ten süpervizyon eğitimi almış ve beraberinde terapi hizmeti vermeye başlamıştır. Ardından psikanalist Yavuz Erten'den Psikanalizden Psikodinamik Terapilere eğitimini tamamlamıştır.",
    text3:
      "Şu an ise psikanalitik psikoterapi çerçevesinde yetişkinlerle bireysel olmak üzere yüz yüze ve online olarak bireysel psikoterapi hizmeti vermektedir. Ayrıca, psikanalitik yönelimli bireysel terapisinden geçmekte ve mesleki süpervizyonuna devam etmektedir.",
    education: "Eğitim ve Uzmanlık",
    edu1: "Klinik Psikoloji Uzmanlığı",
    edu2: "Bireysel Terapi ve Danışmanlık",
    edu3: "Online Terapi Sertifikasyonu",
    valuesTitle: "Değerlerim",
    values: [
      {
        icon: Heart,
        title: "Empati",
        description: "Her danışanımı dinler ve anlamaya çalışırım.",
        color: "from-rose-500 to-pink-600",
      },
      {
        icon: Target,
        title: "Hedef Odaklı",
        description: "Bireysel hedeflerinize ulaşmanız için çalışırım.",
        color: "from-emerald-500 to-green-600",
      },
      {
        icon: UsersIcon,
        title: "Güven",
        description: "Güvenli ve yargılamayan bir ortam sunarım.",
        color: "from-green-500 to-teal-600",
      },
    ],
    quote: {
      text: "Kişideki eksik, ötekinde saklı değildir. Aşkın bütün sorunu budur.",
      author: "Jacques Lacan",
    },
  },
  // Work Page
  work: {
    title: "Çalışma Alanlarım",
    subtitle: "Size en uygun terapi yöntemini birlikte keşfedelim.",
    workAreas: [
      {
        title: "Bireysel Terapi",
        description:
          "Bireysel terapi, kişinin kendini daha iyi anlaması, duygusal zorluklarla başa çıkması ve yaşam kalitesini artırması için sunulan profesyonel destek hizmetidir. Anksiyete, depresyon, travma, stres yönetimi, kişisel gelişim ve ilişki sorunları gibi birçok konuda bireysel terapi sunuyorum.",
        icon: User,
        gradient: "from-emerald-500 to-emerald-600",
        topics: [
          "Anksiyete ve Stres",
          "Depresyon",
          "Travma İyileşmesi",
          "Kişisel Gelişim",
          "İlişki Sorunları",
        ],
      },
      {
        title: "Online Terapi",
        description:
          "Online terapi, teknolojinin sunduğu imkanlarla, fiziksel olarak bir araya gelmeden, güvenli video konferans platformları üzerinden gerçekleştirilen terapi seanslarıdır. Coğrafi kısıtlamalar, zaman sıkıntısı veya pandemi gibi nedenlerle yüz yüze terapi alamayan kişiler için ideal bir çözümdür.",
        icon: Video,
        gradient: "from-green-500 to-green-600",
        topics: [
          "Esnek Randevu Sistemi",
          "Güvenli Platform",
          "Coğrafi Sınırlamasız",
          "Konforlu Ortam",
          "Gizlilik Garantisi",
        ],
      },
    ],
    benefitsTitle: "Neden Benimle Çalışmalısınız?",
    benefits: [
      {
        icon: Brain,
        title: "Bilimsel Yaklaşım",
        description: "Kanıta dayalı terapi yöntemleri kullanırım",
      },
      {
        icon: Heart,
        title: "Empatik Destek",
        description: "Yargılamadan, anlayışla yanınızdayım",
      },
      {
        icon: Sparkles,
        title: "Kişiselleştirilmiş Plan",
        description: "Her danışana özel tedavi programı",
      },
    ],
    topicsLabel: "Kapsadığı Alanlar:",
    cta: {
      title: "Randevu Almak İster Misiniz?",
      text: "Size en uygun terapi yöntemini birlikte belirleyebiliriz.",
      button: "İletişime Geçin",
    },
  },
  // Articles Page
  articles: {
    title: "Yazılarım",
    subtitle:
      "Ruh sağlığı, kişisel gelişim ve terapi hakkında bilgilendirici yazılar",
    badge: "Blog & Makaleler",
    categoryLabel: "Psikoloji",
    readMore: "Devamını Oku",
    list: [
      {
        title: "Psikanalitik Psikoterapi Nedir?",
        slug: "psikanalitik-psikoterapi-nedir",
        image: "/hand.jpg",
        readTime: "5 dk",
        excerpt:
          "Psikanalitik psikoterapinin temel ilkeleri ve terapi sürecindeki işleyiş hakkında detaylı bilgiler.",
        content:
          "Bu yazıda psikanalitik psikoterapinin temel ilkeleri, terapi sürecindeki işleyiş ve terapistin rolü ele alınmaktadır. Psikanalitik psikoterapi, bireyin bilinçdışı süreçlerini anlamasına ve geçmiş deneyimlerinin bugünkü davranışları üzerindeki etkilerini fark etmesine yardımcı olur...",
      },
      {
        title: "Psikanalitik Literatürde Savunma Mekanizmaları",
        slug: "psikanalitik-literaturde-savunma-mekanizmalari",
        image: "/horse.jpg",
        readTime: "5 dk",
        excerpt:
          "Savunma mekanizmalarının bireyin psikolojik yapısındaki işlevi ve literatürdeki yeri.",
        content:
          "Bu yazı, savunma mekanizmalarının bireyin psikolojik yapısındaki işlevini ve psikanalitik literatürdeki yerini inceler. İnkar, yansıtma, bastırma gibi savunma mekanizmalarının günlük yaşantımızda nasıl rol oynadığını detaylı şekilde ele alır...",
      },
      {
        title: "Baba İşlevi",
        slug: "baba-islevi",
        image: "/open.jpg",
        readTime: "5 dk",
        excerpt:
          "Baba figürünün çocuk gelişimi ve kimlik oluşumundaki yeri psikanalitik bakış açısıyla.",
        content:
          "Bu yazıda baba figürünün çocuk gelişimi ve kimlik oluşumundaki yeri psikanalitik bir bakış açısıyla ele alınmaktadır. Lacan'ın baba işlevi kavramı çerçevesinde, sembolik düzenin kuruluşu ve özneleşme süreci incelenir...",
      },
      {
        title: "Perde Anılar Üzerine",
        slug: "perde-anilar-uzerine",
        image: "/drop.jpg",
        readTime: "5 dk",
        excerpt:
          "Bilinçdışı süreçlerin hatırlama biçimlerimiz üzerindeki etkisi.",
        content:
          "Perde anılar kavramı, bilinçdışı süreçlerin hatırlama biçimlerimiz üzerindeki etkisini anlamada önemli bir anahtar sunar. Freud'un geliştirdiği bu kavram, bazı anıların gerçek travmatik deneyimleri örtmek için nasıl kullanıldığını açıklar...",
      },
      {
        title: "Göbek Bağından Feniks'e: Çocuk Gelişimi ve Ego Oluşumu",
        slug: "gobek-bagindan-fenikse-cocuk-gelisimi-ve-ego-olusumu",
        image: "/DALL.webp",
        readTime: "5 dk",
        excerpt:
          "Çocuk gelişimi ve ego oluşum sürecinde önemli dönüm noktaları.",
        content:
          "Bu yazı, çocuk gelişimi ve ego oluşum sürecinde önemli dönüm noktalarını psikanalitik bakış açısıyla ele alır. Ayrılma-bireyleşme sürecinden sembolik düzenin kuruluşuna kadar olan gelişimsel aşamalar detaylı incelenir...",
      },
      {
        title:
          "Psikoloji ve Şiir: 'Annemle İlgili Şeyler', Psikanalitik Şiir Analiz",
        slug: "psikoloji-ve-siir-annemle-ilgili-seyler-psikanalitik-siir-analiz",
        image: "/sun.jpeg",
        readTime: "5 dk",
        excerpt:
          "Psikanalitik şiir analizi üzerinden annelik teması ve bireysel psikolojik yansımalar.",
        content:
          "Bu yazıda psikanalitik şiir analizi üzerinden annelik teması ve bireysel psikolojik yansımalar ele alınmaktadır. Şiirin sembolik dili ile bilinçdışı süreçler arasındaki ilişki, nesne ilişkileri kuramı çerçevesinde incelenir...",
      },
    ],
  },
  // Contact Page
  contact: {
    title: "İletişim",
    subtitle: "Size nasıl yardımcı olabilirim? Benimle iletişime geçin.",
    heading: "Benimle İletişime Geçin",
    name: "Adınız ve Soyadınız",
    email: "E-posta",
    message: "Mesaj",
    send: "Gönder",
    sending: "Mesajınız gönderiliyor...",
    sent: "Mesajınız başarıyla gönderildi!",
    fillAll: "Lütfen tüm alanları doldurun.",
    namePlaceholder: "Adınız ve Soyadınız",
    emailPlaceholder: "ornek@email.com",
    messagePlaceholder: "Mesajınızı buraya yazın...",
    contactInfo: [
      {
        icon: Mail,
        title: "E-posta",
        content: "psikolognisademir@gmail.com",
        link: "mailto:psikolognisademir@gmail.com",
      },
      {
        icon: Clock,
        title: "Çalışma Saatleri",
        content:
          "Pazartesi-Cuma: 09:00 - 18:00\nCumartesi-Pazar: 11:00 - 16:00",
      },
      {
        icon: MapPin,
        title: "Lokasyon",
        content: "İstanbul",
      },
    ],
  },
  // Footer
  footer: {
    brand: {
      name: "Nisa DEMİR",
      title: "Uzman Klinik Psikolog",
      description:
        "Bireysel ve online terapi hizmetleriyle yanınızdayım. Ruh sağlığınız için profesyonel destek.",
    },
    quickLinksTitle: "Hızlı Erişim",
    contactTitle: "İletişim",
    workingHours:
      "Pazartesi-Cuma: 09:00 - 18:00\nCumartesi-Pazar: 11:00 - 16:00",
    copyright: "Tüm hakları saklıdır.",
  },
};
