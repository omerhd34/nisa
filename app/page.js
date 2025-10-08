"use client";

import { useState } from "react";
import Header from "@/components/Header";
import HomePage from "@/app/page";
import AboutPage from "@/app/tanisalim/page";
import WorkAreasPage from "@/app/calisma-alanlarim/page";
import ArticlesPage from "@/app/yazilarim/page";
import ContactPage from "@/app/iletisim/page";
import { AppProvider } from "@/context/AppContext";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutPage />;
      case "work":
        return <WorkAreasPage setCurrentPage={setCurrentPage} />;
      case "articles":
        return <ArticlesPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <AppProvider>
      <div className="min-h-screen">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        {renderPage()}
      </div>
    </AppProvider>
  );
}
