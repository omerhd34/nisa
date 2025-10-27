import prisma from "./prisma.js";

export async function getHomeData() {
  try {
    const homeData = await prisma.home.findFirst();
    if (!homeData) {
      throw new Error("No home data found");
    }
    return homeData;
  } catch (error) {
    console.error("Error fetching home data:", error);
    throw error;
  }
}

export async function getAboutData() {
  try {
    const aboutData = await prisma.about.findFirst();
    if (!aboutData) {
      throw new Error("No about data found");
    }
    return aboutData;
  } catch (error) {
    console.error("Error fetching about data:", error);
    throw error;
  }
}

export async function getWorkData() {
  try {
    const workData = await prisma.work.findFirst();
    if (!workData) {
      throw new Error("No work data found");
    }
    return workData;
  } catch (error) {
    console.error("Error fetching work data:", error);
    throw error;
  }
}

export async function getArticlesData() {
  try {
    const articles = await prisma.article.findMany({
      orderBy: { createdAt: "desc" },
    });
    return articles;
  } catch (error) {
    console.error("Error fetching articles data:", error);
    throw error;
  }
}

export async function getContactData() {
  try {
    const contactData = await prisma.contact.findFirst();
    if (!contactData) {
      throw new Error("No contact data found");
    }
    return contactData;
  } catch (error) {
    console.error("Error fetching contact data:", error);
    throw error;
  }
}

export async function getFooterData() {
  try {
    const footerData = await prisma.footer.findFirst();
    if (!footerData) {
      throw new Error("No footer data found");
    }
    return footerData;
  } catch (error) {
    console.error("Error fetching footer data:", error);
    throw error;
  }
}
