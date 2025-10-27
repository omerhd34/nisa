import prisma from "./prisma.js";
import { data } from "@/data/data.js";

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

    return data[section] || null;
  } catch (error) {
    console.error(`Error fetching ${section} from database:`, error);
    return data[section] || null;
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

export async function seedDatabase() {
  try {
    const sections = ["home", "about", "work", "articles", "contact", "footer"];

    for (const section of sections) {
      await prisma.siteData.upsert({
        where: { section },
        update: {
          data: data[section],
        },
        create: {
          section,
          data: data[section],
        },
      });
    }

    console.log("Database seeded successfully!");
    return true;
  } catch (error) {
    console.error("Database seed error:", error);
    throw error;
  }
}
