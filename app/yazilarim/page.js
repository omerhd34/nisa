"use client";

import { useAppContext } from "@/context/AppContext";
import { translations } from "@/translations/translations";

const ArticlesPage = () => {
  const { theme, language } = useAppContext();
  const t = translations[language].articles;
  const isDark = theme === "dark";

  const articles = [
    { title: t.article1, gradient: "from-rose-500 to-pink-600" },
    { title: t.article2, gradient: "from-blue-500 to-indigo-600" },
    { title: t.article3, gradient: "from-teal-500 to-cyan-600" },
    { title: t.article4, gradient: "from-purple-500 to-pink-600" },
    { title: t.article5, gradient: "from-orange-500 to-red-600" },
    { title: t.article6, gradient: "from-green-500 to-teal-600" },
  ];

  return (
    <div
      className={`min-h-screen ${
        isDark
          ? "bg-gray-900"
          : "bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50"
      } py-12 md:py-20 transition-colors duration-300`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h1
            className={`text-3xl md:text-4xl lg:text-5xl font-bold ${
              isDark ? "text-white" : "text-gray-800"
            } mb-10 md:mb-16 text-center animate-fadeIn`}
          >
            {t.title}
          </h1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {articles.map((article, index) => (
              <div
                key={index}
                className={`${
                  isDark ? "bg-gray-800 border border-gray-700" : "bg-white"
                } rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer animate-fadeIn animation-delay-${
                  index * 100
                }`}
              >
                <div
                  className={`relative h-56 md:h-64 lg:h-72 bg-gradient-to-br ${article.gradient} flex items-center justify-center p-6`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <h3 className="relative z-10 text-white text-xl md:text-2xl font-bold text-center leading-tight">
                    {article.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;
