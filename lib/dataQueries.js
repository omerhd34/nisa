import { getConnection, closeConnection } from "./db.js";

// Ana sayfa verilerini getir
export async function getHomeData() {
  let connection;
  try {
    connection = await getConnection();

    // Ana içerik
    const [homeContent] = await connection.query(
      "SELECT * FROM home_content LIMIT 1"
    );

    // Özellikler
    const [features] = await connection.query(
      "SELECT * FROM home_features ORDER BY display_order"
    );

    // Faydalar
    const [benefits] = await connection.query(
      "SELECT benefit_text FROM home_benefits ORDER BY display_order"
    );

    return {
      welcomeText: homeContent[0].welcome_text,
      features: features.map((f) => ({
        title: f.title,
        description: f.description,
        iconName: f.icon_name,
      })),
      benefits: benefits.map((b) => b.benefit_text),
      cta: {
        title: homeContent[0].cta_title,
        text: homeContent[0].cta_text,
      },
      whyChoose: {
        title: homeContent[0].why_choose_title,
        subtitle: homeContent[0].why_choose_subtitle,
      },
    };
  } catch (error) {
    console.error("Ana sayfa verileri alınırken hata:", error);
    throw error;
  } finally {
    await closeConnection(connection);
  }
}

// Hakkımda verilerini getir
export async function getAboutData() {
  let connection;
  try {
    connection = await getConnection();

    // Ana içerik
    const [aboutContent] = await connection.query(
      "SELECT * FROM about_content LIMIT 1"
    );

    // Değerler
    const [values] = await connection.query(
      "SELECT * FROM about_values ORDER BY display_order"
    );

    // Alıntılar
    const [quotes] = await connection.query(
      "SELECT quote_text, author FROM about_quotes ORDER BY display_order"
    );

    return {
      text1: aboutContent[0].text1,
      text2: aboutContent[0].text2,
      text3: aboutContent[0].text3,
      edu1: aboutContent[0].edu1,
      edu2: aboutContent[0].edu2,
      edu3: aboutContent[0].edu3,
      values: values.map((v) => ({
        title: v.title,
        description: v.description,
        iconName: v.icon_name,
        color: v.color_gradient,
      })),
      quote: {
        quotes: quotes.map((q) => ({
          text: q.quote_text,
          author: q.author,
        })),
      },
    };
  } catch (error) {
    console.error("Hakkımda verileri alınırken hata:", error);
    throw error;
  } finally {
    await closeConnection(connection);
  }
}

// Çalışma alanları verilerini getir
export async function getWorkData() {
  let connection;
  try {
    connection = await getConnection();

    // Ana içerik
    const [workContent] = await connection.query(
      "SELECT * FROM work_content LIMIT 1"
    );

    // Çalışma alanları
    const [workAreas] = await connection.query(
      "SELECT * FROM work_areas ORDER BY display_order"
    );

    // Her çalışma alanı için konuları getir
    const workAreasWithTopics = await Promise.all(
      workAreas.map(async (area) => {
        const [topics] = await connection.query(
          "SELECT topic_text FROM work_area_topics WHERE work_area_id = ? ORDER BY display_order",
          [area.id]
        );
        return {
          title: area.title,
          description: area.description,
          iconName: area.icon_name,
          gradient: area.gradient,
          topics: topics.map((t) => t.topic_text),
        };
      })
    );

    // Faydalar
    const [benefits] = await connection.query(
      "SELECT * FROM work_benefits ORDER BY display_order"
    );

    return {
      subtitle: workContent[0].subtitle,
      workAreas: workAreasWithTopics,
      benefits: benefits.map((b) => ({
        title: b.title,
        description: b.description,
        iconName: b.icon_name,
      })),
      cta: {
        title: workContent[0].cta_title,
        text: workContent[0].cta_text,
      },
    };
  } catch (error) {
    console.error("Çalışma alanları verileri alınırken hata:", error);
    throw error;
  } finally {
    await closeConnection(connection);
  }
}

// Makaleler verilerini getir
export async function getArticlesData() {
  let connection;
  try {
    connection = await getConnection();

    // Sayfa içeriği
    const [articlesContent] = await connection.query(
      "SELECT * FROM articles_content LIMIT 1"
    );

    // Makaleler listesi
    const [articles] = await connection.query(
      "SELECT * FROM articles WHERE is_published = TRUE ORDER BY created_at DESC"
    );

    return {
      subtitle: articlesContent[0].subtitle,
      list: articles.map((a) => ({
        title: a.title,
        slug: a.slug,
        image: a.image_url,
        readTime: a.read_time,
        excerpt: a.excerpt,
        content: a.content,
      })),
    };
  } catch (error) {
    console.error("Makaleler verileri alınırken hata:", error);
    throw error;
  } finally {
    await closeConnection(connection);
  }
}

// Tek bir makale getir
export async function getArticleBySlug(slug) {
  let connection;
  try {
    connection = await getConnection();

    const [articles] = await connection.query(
      "SELECT * FROM articles WHERE slug = ? AND is_published = TRUE LIMIT 1",
      [slug]
    );

    if (articles.length === 0) {
      return null;
    }

    const article = articles[0];
    return {
      title: article.title,
      slug: article.slug,
      image: article.image_url,
      readTime: article.read_time,
      excerpt: article.excerpt,
      content: article.content,
    };
  } catch (error) {
    console.error("Makale alınırken hata:", error);
    throw error;
  } finally {
    await closeConnection(connection);
  }
}

// İletişim sayfası verilerini getir
export async function getContactData() {
  let connection;
  try {
    connection = await getConnection();

    const [contactContent] = await connection.query(
      "SELECT * FROM contact_content LIMIT 1"
    );

    return {
      subtitle: contactContent[0].subtitle,
    };
  } catch (error) {
    console.error("İletişim verileri alınırken hata:", error);
    throw error;
  } finally {
    await closeConnection(connection);
  }
}

// Footer verilerini getir
export async function getFooterData() {
  let connection;
  try {
    connection = await getConnection();

    const [footerContent] = await connection.query(
      "SELECT * FROM footer_content LIMIT 1"
    );

    return {
      description: footerContent[0].description,
    };
  } catch (error) {
    console.error("Footer verileri alınırken hata:", error);
    throw error;
  } finally {
    await closeConnection(connection);
  }
}

// İletişim mesajı kaydet
export async function saveContactMessage(name, email, subject, message) {
  let connection;
  try {
    connection = await getConnection();

    const [result] = await connection.query(
      "INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)",
      [name, email, subject, message]
    );

    return result.insertId;
  } catch (error) {
    console.error("İletişim mesajı kaydedilirken hata:", error);
    throw error;
  } finally {
    await closeConnection(connection);
  }
}

// Tüm verileri getir (data.js yerine)
export async function getAllData() {
  try {
    const [home, about, work, articles, contact, footer] = await Promise.all([
      getHomeData(),
      getAboutData(),
      getWorkData(),
      getArticlesData(),
      getContactData(),
      getFooterData(),
    ]);

    return {
      home,
      about,
      work,
      articles,
      contact,
      footer,
    };
  } catch (error) {
    console.error("Tüm veriler alınırken hata:", error);
    throw error;
  }
}
