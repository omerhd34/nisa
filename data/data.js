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
  nav: {
    home: "Ana Sayfa",
    about: "Tanışalım",
    work: "Çalışma Alanlarım",
    articles: "Yazılarım",
    contact: "İletişim",
  },
  home: {
    title: "Nisa Demir",
    subtitle: "Bireysel ve Online Terapi Desteği",
    welcome: "Hoş Geldiniz",
    welcomeText:
      "Yaşamınızda karşılaştığınız zorluklarla başa çıkmanızda size destek olmak için buradayım. Güvenli ve destekleyici bir ortamda, kişisel gelişiminiz ve ruh sağlığınız için birlikte çalışabiliriz.",
    card2Title: "Bireysel Terapi",
    card2Text: "Kişiye özel terapi programları",
    card3Title: "Online Terapi",
    card3Text: "Uzaktan güvenli terapi seansları",
    features: [
      {
        icon: Users,
        title: "Bireysel Terapi",
        description: "Kişiye özel terapi programları",
        gradient: "from-blue-500 to-indigo-600",
      },
      {
        icon: Video,
        title: "Online Terapi",
        description: "Uzaktan güvenli terapi seansları",
        gradient: "from-teal-500 to-cyan-600",
      },
    ],
    benefits: [
      "Gizlilik ve güvenlik garantisi",
      "Esnek randevu saatleri",
      "Kişiye özel tedavi planı",
      "Profesyonel ve empatik yaklaşım",
    ],
  },
  about: {
    title: "Tanışalım",
    heading: "Hakkımda",
    text1:
      "Klinik Psikolog Nisa Demir, İstanbul Ticaret Üniversitesi Psikoloji bölümünü 2021 yılında tamamladıktan sonra İstanbul Okan Üniversitesi Tezli Klinik Psikoloji yüksek lisans programına 2023 yılında kabul edilmiş, Haziran 2025’te “Romantik İlişkisi Olan Yetişkin Bireylerin Nesne İlişkileri ile Cinsel Doyum Düzeyleri Arasındaki İlişkide Obsesif Kompulsif Belirti Bozukluk Belirtilerinin Aracılık Rolünün İncelenmesi” adlı yüksek lisans tezini başarıyla savunarak “Uzman Klinik Psikolog” ünvanını almaya hak kazanmıştır.",
    text2:
      "Lisans döneminde, çeşitli danışmanlık merkezlerinde staj yapmış; yüksek lisans döneminde ise Psikodinamik Psikoterapi Uygulama ve Süpervizyon dersi kapsamında Pınar Arslantürk’ten süpervizyon eğitimi almış ve beraberinde terapi hizmeti vermeye başlamıştır. Ardından psikanalist Yavuz Erten’den Psikanalizden Psikodinamik Terapilere eğitimini tamamlamıştır.",
    text3:
      "Şu an ise psikanalitik psikoterapi çerçevesinde yetişkinlerle bireysel olmak üzere yüz yüze ve online olarak bireysel psikoterapi hizmeti vermektedir. Ayrıca, psikanalitik yönelimli bireysel terapisinden geçmekte ve mesleki süpervizyonuna devam etmektedir.",
    education: "Eğitim ve Uzmanlık",
    edu1: "Klinik Psikoloji Uzmanlığı",
    edu2: "Bireysel Terapi ve Danışmanlık",
    edu3: "Online Terapi Sertifikasyonu",
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
        color: "from-blue-500 to-indigo-600",
      },
      {
        icon: UsersIcon,
        title: "Trust",
        description: "Güvenli ve yargılamayan bir ortam sunarım.",
        color: "from-teal-500 to-cyan-600",
      },
    ],
  },
  work: {
    title: "Çalışma Alanlarım",
    therapy1Title: "Bireysel Terapi",
    therapy1Text:
      "Bireysel terapi, kişinin kendini daha iyi anlaması, duygusal zorluklarla başa çıkması ve yaşam kalitesini artırması için sunulan profesyonel destek hizmetidir. Anksiyete, depresyon, travma, stres yönetimi, kişisel gelişim ve ilişki sorunları gibi birçok konuda bireysel terapi sunuyorum.",
    therapy2Title: "Online Terapi",
    therapy2Text:
      "Online terapi, teknolojinin sunduğu imkanlarla, fiziksel olarak bir araya gelmeden, güvenli video konferans platformları üzerinden gerçekleştirilen terapi seanslarıdır. Coğrafi kısıtlamalar, zaman sıkıntısı veya pandemi gibi nedenlerle yüz yüze terapi alamayan kişiler için ideal bir çözümdür.",
    ctaTitle: "Randevu Almak İster Misiniz?",
    ctaText: "Size en uygun terapi yöntemini birlikte belirleyebiliriz.",
    ctaButton: "İletişime Geçin",
    workAreas: [
      {
        title: "Bireysel Terapi",
        description:
          "Bireysel terapi, kişinin kendini daha iyi anlaması, duygusal zorluklarla başa çıkması ve yaşam kalitesini artırması için sunulan profesyonel destek hizmetidir. Anksiyete, depresyon, travma, stres yönetimi, kişisel gelişim ve ilişki sorunları gibi birçok konuda bireysel terapi sunuyorum.",
        icon: User,
        gradient: "from-teal-500 to-teal-600",
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
        gradient: "from-blue-500 to-blue-600",
        topics: [
          "Esnek Randevu Sistemi",
          "Güvenli Platform",
          "Coğrafi Sınırlamasız",
          "Konforlu Ortam",
          "Gizlilik Garantisi",
        ],
      },
    ],
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
  },
  articles: {
    title: "Yazılarım",
    article1: "Psikanalitik Psikoterapi Nedir?",
    article2: "Psikanalitik Literatürde Savunma Mekanizmaları",
    article3: "Baba İşlevi",
    article4: "Perde Anılar Üzerine",
    article5: "Göbek Bağından Feniks’e: Çocuk Gelişimi ve Ego Oluşumu",
    article6:
      "Psikoloji ve Şiir: “Annemle İlgili Şeyler”, Psikanalitik Şiir Analiz",
    article7: [
      {
        title: "Psikanalitik Psikoterapi Nedir?",
        slug: "psikanalitik-psikoterapi-nedir",
        image: "/hand.jpg",
        readTime: "5 dk",
        excerpt: "Lorem23",
      },
      {
        title: "Psikanalitik Literatürde Savunma Mekanizmaları",
        slug: "psikanalitik-literaturde-savunma-mekanizmalari",
        image: "/horse.jpg",
        readTime: "5 dk",
        excerpt: "Lorem23",
      },
      {
        title: "Baba İşlevi",
        slug: "baba-islevi",
        image: "/open.jpg",
        readTime: "5 dk",
        excerpt: "Lorem23",
      },
      {
        title: "Perde Anılar Üzerine",
        slug: "perde-anilar-uzerine",
        image: "/drop.jpg",
        readTime: "5 dk",
        excerpt: "Lorem23",
      },
      {
        title: "Göbek Bağından Feniks’e: Çocuk Gelişimi ve Ego Oluşumu",
        slug: "gobek-bagindan-fenikse-cocuk-gelisimi-ve-ego-olusumu",
        image: "/DALL.webp",
        readTime: "5 dk",
        excerpt: "Lorem23",
      },
      {
        title:
          "Psikoloji ve Şiir: “Annemle İlgili Şeyler”, Psikanalitik Şiir Analiz",
        slug: "psikoloji-ve-siir-annemle-ilgili-seyler-psikanalitik-siir-analiz",
        image: "/sun.jpeg",
        readTime: "5 dk",
        excerpt: "Lorem23",
      },
    ],
    article8: [
      {
        slug: "psikanalitik-psikoterapi-nedir",
        title: "Psikanalitik Psikoterapi Nedir?",
        image: "/hand.jpg",
        content:
          "Bu yazıda psikanalitik psikoterapinin temel ilkeleri, terapi sürecindeki işleyiş ve terapistin rolü ele alınmaktadır...",
      },
      {
        slug: "psikanalitik-literaturde-savunma-mekanizmalari",
        title: "Psikanalitik Literatürde Savunma Mekanizmaları",
        image: "/horse.jpg",
        content:
          "Bu yazı, savunma mekanizmalarının bireyin psikolojik yapısındaki işlevini ve psikanalitik literatürdeki yerini inceler...",
      },
      {
        slug: "baba-islevi",
        title: "Baba İşlevi",
        image: "/open.jpg",
        content:
          "Bu yazıda baba figürünün çocuk gelişimi ve kimlik oluşumundaki yeri psikanalitik bir bakış açısıyla ele alınmaktadır...",
      },
      {
        slug: "perde-anilar-uzerine",
        title: "Perde Anılar Üzerine",
        image: "/drop.jpg",
        content:
          "Perde anılar kavramı, bilinçdışı süreçlerin hatırlama biçimlerimiz üzerindeki etkisini anlamada önemli bir anahtar sunar...",
      },
      {
        slug: "gobek-bagindan-fenikse-cocuk-gelisimi-ve-ego-olusumu",
        title: "Göbek Bağından Feniks’e: Çocuk Gelişimi ve Ego Oluşumu",
        image: "/DALL.webp",
        content:
          "Bu yazı, çocuk gelişimi ve ego oluşum sürecinde önemli dönüm noktalarını psikanalitik bakış açısıyla ele alır...",
      },
      {
        slug: "psikoloji-ve-siir-annemle-ilgili-seyler-psikanalitik-siir-analiz",
        title:
          "Psikoloji ve Şiir: “Annemle İlgili Şeyler”, Psikanalitik Şiir Analiz",
        image: "/sun.jpeg",
        content:
          "Bu yazıda psikanalitik şiir analizi üzerinden annelik teması ve bireysel psikolojik yansımalar ele alınmaktadır...",
      },
    ],
  },
  contact: {
    title: "İletişim",
    heading: "Benimle İletişime Geçin",
    name: "İsim",
    email: "E-posta",
    message: "Mesaj",
    send: "Gönder",
    sending: "Mesajınız gönderiliyor...",
    fillAll: "Lütfen tüm alanları doldurun.",
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
        content: "Pzt-Cum: 09:00 - 18:00",
      },
      {
        icon: MapPin,
        title: "Lokasyon",
        content: "Online Terapi",
      },
    ],
  },
};
