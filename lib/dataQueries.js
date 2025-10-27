import prisma from "./prisma.js";

export async function getHomeData() {
  try {
    const homeData = await prisma.home.findFirst();

    if (!homeData) {
      throw new Error("Home data not found. Please run: npm run prisma:seed");
    }

    const staticData = {
      whyChoose: {
        title: "Çalışma Alanlarım",
        subtitle:
          "Her bireyin kendine özgü bir hikayesi vardır. Size özel terapi yaklaşımıyla bu yolculukta yanınızdayım.",
      },
      features: [
        {
          title: "Bireysel Terapi",
          description:
            "Psikodinamik yaklaşımla, kendinizi daha iyi anlamanız ve içsel çatışmalarınızla başa çıkabilmeniz için güvenli bir alan sunuyorum.",
        },
        {
          title: "Online Terapi",
          description:
            "Nerede olursanız olun, esnek randevu saatleriyle profesyonel terapi desteğine ulaşın. Güvenli platform üzerinden yüz yüze terapi kalitesinde hizmet.",
        },
      ],
      cta: {
        title: "İlk Adımı Atmaya Hazır Mısınız?",
        text: "Bugün kendinize yatırım yapın. Daha mutlu ve sağlıklı bir yaşam için birlikte çalışalım.",
      },
    };

    return {
      welcomeText: homeData.welcomeText,
      benefits: homeData.benefits,
      ...staticData,
    };
  } catch (error) {
    console.error("Error fetching home data:", error);
    throw error;
  }
}

// ABOUT DATA
export async function getAboutData() {
  try {
    const aboutData = await prisma.about.findFirst();

    if (!aboutData) {
      throw new Error("About data not found. Please run: npm run prisma:seed");
    }

    // Static data for values and quotes
    const staticData = {
      values: [
        {
          title: "Empati",
          description: "Her danışanımı dinler ve anlamaya çalışırım.",
          color: "from-rose-500 to-pink-600",
        },
        {
          title: "Hedef Odaklı",
          description: "Bireysel hedeflerinize ulaşmanız için çalışırım.",
          color: "from-emerald-500 to-green-600",
        },
        {
          title: "Güven",
          description: "Güvenli ve yargılamayan bir ortam sunarım.",
          color: "from-green-500 to-teal-600",
        },
      ],
      quote: {
        quotes: [
          {
            text: "Kişideki eksik, ötekinde saklı değildir. Aşkın bütün sorunu budur.",
            author: "Jacques Lacan",
          },
          {
            text: "Gizlenmek keyiflidir ama bulunmamak felaket.(Oyun ve Gerçeklik)",
            author: "D. Winnicott",
          },
          {
            text: "Genelde insanlar uykudadır. Uyanık olduğunu düşündüğün zamanlarda bile uyanık değilsin.",
            author: "Buddha",
          },
          {
            text: "Her sanat, sanatçının ruhunun bir portesidir.",
            author: "Pablo Picasso",
          },
          {
            text: "Kendinizi nasıl gördüğünüz, başkalarının sizi nasıl gördüğünden çok daha önemlidir.",
            author: "Zig Ziglar",
          },
        ],
      },
    };

    return {
      text1: aboutData.text1,
      text2: aboutData.text2,
      text3: aboutData.text3,
      edu1: aboutData.edu1,
      edu2: aboutData.edu2,
      edu3: aboutData.edu3,
      ...staticData,
    };
  } catch (error) {
    console.error("Error fetching about data:", error);
    throw error;
  }
}

// WORK DATA
export async function getWorkData() {
  try {
    const workData = await prisma.work.findFirst();

    if (!workData) {
      throw new Error("Work data not found. Please run: npm run prisma:seed");
    }

    // Static data for work areas and benefits
    const staticData = {
      workAreas: [
        {
          title: "Bireysel Terapi",
          description:
            "Psikoterapi, karmaşık iç dünyalarla baş edebilmek için bir yolculuktur. Her ruhsallığın hikayesi kendine özgüdür ve terapide bu hikayenin derinliklerine inilir.",
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
            "Psikolojik danışmanlık ve psikoterapide yüz yüze görüşmelerin önemi büyüktür ancak teknolojik ilerlemelerle birlikte çevrimiçi araçlarla görüşme imkanı da ortaya çıkmıştır.",
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
          title: "Bilimsel Yaklaşım",
          description: "Kanıta dayalı terapi yöntemleri kullanırım",
        },
        {
          title: "Empatik Destek",
          description: "Yargılamadan, anlayışla yanınızdayım",
        },
        {
          title: "Kişiselleştirilmiş Plan",
          description: "Her danışana özel tedavi programı",
        },
      ],
      cta: {
        title: "Randevu Almak İster Misiniz?",
        text: "Size en uygun terapi yöntemini birlikte belirleyebiliriz.",
      },
    };

    return {
      subtitle: workData.subtitle,
      ...staticData,
    };
  } catch (error) {
    console.error("Error fetching work data:", error);
    throw error;
  }
}

// ARTICLES DATA
export async function getArticlesData() {
  try {
    const articles = await prisma.article.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    if (articles.length === 0) {
      throw new Error("Articles not found. Please run: npm run prisma:seed");
    }

    return {
      subtitle:
        "Ruh sağlığı, kişisel gelişim ve terapi hakkında bilgilendirici yazılar",
      list: articles.map((article) => ({
        title: article.title,
        slug: article.slug,
        image: article.image,
        readTime: article.readTime,
        excerpt: article.excerpt,
        content: article.content,
      })),
    };
  } catch (error) {
    console.error("Error fetching articles data:", error);
    throw error;
  }
}

// CONTACT DATA
export async function getContactData() {
  try {
    const contactData = await prisma.contact.findFirst();

    if (!contactData) {
      throw new Error(
        "Contact data not found. Please run: npm run prisma:seed"
      );
    }

    return {
      subtitle: contactData.subtitle,
      fillAll: "Lütfen tüm alanları doldurun.",
    };
  } catch (error) {
    console.error("Error fetching contact data:", error);
    throw error;
  }
}

// FOOTER DATA
export async function getFooterData() {
  try {
    const footerData = await prisma.footer.findFirst();

    if (!footerData) {
      throw new Error("Footer data not found. Please run: npm run prisma:seed");
    }

    return {
      description: footerData.description,
    };
  } catch (error) {
    console.error("Error fetching footer data:", error);
    throw error;
  }
}

// SAVE CONTACT MESSAGE
export async function saveContactMessage(name, email, subject, message) {
  try {
    const contactMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });

    return contactMessage;
  } catch (error) {
    console.error("Error saving contact message:", error);
    throw error;
  }
}
