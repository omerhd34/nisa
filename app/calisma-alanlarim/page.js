"use client";

import { User, Mail } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { translations } from "@/translations/translations";

const WorkAreasPage = ({ setCurrentPage }) => {
  const { theme, language } = useAppContext();
  const t = translations[language].work;
  const isDark = theme === "dark";

  const workAreas = [
    {
      title: t.therapy1Title,
      description: t.therapy1Text,
      icon: User,
      gradient: "from-teal-500 to-teal-600",
    },
    {
      title: t.therapy2Title,
      description: t.therapy2Text,
      icon: Mail,
      gradient: "from-blue-500 to-blue-600",
    },
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
        <div className="max-w-6xl mx-auto">
          <h1
            className={`text-3xl md:text-4xl lg:text-5xl font-bold ${
              isDark ? "text-white" : "text-gray-800"
            } mb-10 md:mb-16 text-center animate-fadeIn`}
          >
            {t.title}
          </h1>

          <div className="space-y-8 md:space-y-10">
            {workAreas.map((area, index) => (
              <div
                key={index}
                className={`${
                  isDark ? "bg-gray-800 border border-gray-700" : "bg-white"
                } rounded-2xl shadow-2xl p-6 md:p-10 lg:p-12 hover:shadow-3xl transform hover:scale-[1.02] transition-all duration-500`}
              >
                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                  <div
                    className={`bg-gradient-to-br ${area.gradient} p-5 md:p-6 rounded-2xl flex-shrink-0 shadow-lg transform hover:scale-110 hover:rotate-6 transition-all duration-300`}
                  >
                    <area.icon className="w-10 h-10 md:w-14 md:h-14 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2
                      className={`text-2xl md:text-3xl lg:text-4xl font-semibold ${
                        isDark ? "text-white" : "text-gray-800"
                      } mb-4 md:mb-6`}
                    >
                      {area.title}
                    </h2>
                    <p
                      className={`${
                        isDark ? "text-gray-300" : "text-gray-700"
                      } leading-relaxed text-base md:text-lg lg:text-xl`}
                    >
                      {area.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`mt-12 md:mt-16 ${
              isDark
                ? "bg-gradient-to-br from-teal-600 to-blue-700"
                : "bg-gradient-to-r from-teal-600 to-blue-600"
            } text-white rounded-2xl shadow-2xl p-8 md:p-12 text-center transform hover:scale-[1.02] transition-all duration-500`}
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6">
              {t.ctaTitle}
            </h3>
            <p className="mb-6 md:mb-8 text-base md:text-lg lg:text-xl opacity-90">
              {t.ctaText}
            </p>
            <button
              onClick={() => setCurrentPage("contact")}
              className="bg-white text-teal-700 px-8 md:px-10 lg:px-12 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 shadow-lg"
            >
              {t.ctaButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkAreasPage;
