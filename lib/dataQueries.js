import prisma from "./prisma.js";

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
    console.error("Contact message save error:", error);
    throw error;
  }
}

async function getSiteDataFromDB(section) {
  try {
    const siteData = await prisma.siteData.findUnique({
      where: { section },
    });

    if (siteData && siteData.data) {
      return siteData.data;
    }

    throw new Error(`No data found for section: ${section}`);
  } catch (error) {
    console.error(`Error fetching ${section} from database:`, error);
    throw error;
  }
}

export async function getHomeData() {
  return await getSiteDataFromDB("home");
}

export async function getAboutData() {
  return await getSiteDataFromDB("about");
}

export async function getWorkData() {
  return await getSiteDataFromDB("work");
}

export async function getArticlesData() {
  return await getSiteDataFromDB("articles");
}

export async function getContactData() {
  return await getSiteDataFromDB("contact");
}

export async function getFooterData() {
  return await getSiteDataFromDB("footer");
}
