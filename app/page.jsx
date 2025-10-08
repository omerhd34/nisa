"use client";
import { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import HomeContent from "@/app/components/HomeContent";
import AboutPage from "@/app/about/page";
import WorkPage from "@/app/work/page";
import ArticlesPage from "@/app/articles/page";
import ContactPage from "@/app/contact/page";

export default function Home() {
 const [currentPage, setCurrentPage] = useState("home");

 const renderPage = () => {
  switch (currentPage) {
   case "home":
    return <HomeContent />;
   case "about":
    return <AboutPage />;
   case "work":
    return <WorkPage setCurrentPage={setCurrentPage} />;
   case "articles":
    return <ArticlesPage />;
   case "contact":
    return <ContactPage />;
   default:
    return <HomeContent />;
  }
 };

 return (
  <div className="min-h-screen flex flex-col">
   <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
   <main className="flex-1">{renderPage()}</main>
   <Footer />
  </div>
 );
}
