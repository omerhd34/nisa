"use client";

import { User } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { translations } from "@/translations/translations";

const AboutPage = () => {
  const { theme, language } = useAppContext();
  const t = translations[language].about;
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen ${
        isDark
          ? "bg-gray-900"
          : "bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50"
      } py-12 md:py-20 transition-colors duration-300`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1
            className={`text-3xl md:text-4xl lg:text-5xl font-bold ${
              isDark ? "text-white" : "text-gray-800"
            } mb-10 md:mb-16 text-center animate-fadeIn`}
          >
            {t.title}
          </h1>

          <div
            className={`${
              isDark ? "bg-gray-800 border border-gray-700" : "bg-white"
            } rounded-2xl shadow-2xl p-6 md:p-10 lg:p-12 mb-8 md:mb-12 animate-slideUp`}
          >
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center mb-8 md:mb-10">
              <div
                className={`w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-br ${
                  isDark
                    ? "from-teal-600 to-blue-700"
                    : "from-teal-500 to-blue-600"
                } rounded-full flex items-center justify-center flex-shrink-0 shadow-2xl transform hover:scale-105 hover:rotate-3 transition-all duration-500`}
              >
                <User className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 text-white" />
              </div>
              <div className="flex-1">
                <h2
                  className={`text-2xl md:text-3xl lg:text-4xl font-semibold ${
                    isDark ? "text-teal-400" : "text-teal-700"
                  } mb-4 md:mb-6`}
                >
                  {t.heading}
                </h2>
                <p
                  className={`${
                    isDark ? "text-gray-300" : "text-gray-700"
                  } text-base md:text-lg leading-relaxed mb-4 md:mb-6`}
                >
                  {t.text1}
                </p>
                <p
                  className={`${
                    isDark ? "text-gray-300" : "text-gray-700"
                  } text-base md:text-lg leading-relaxed mb-4 md:mb-6`}
                >
                  {t.text2}
                </p>
                <p
                  className={`${
                    isDark ? "text-gray-300" : "text-gray-700"
                  } text-base md:text-lg leading-relaxed`}
                >
                  {t.text3}
                </p>
              </div>
            </div>
          </div>

          <div
            className={`${
              isDark ? "bg-gray-800 border border-gray-700" : "bg-white"
            } rounded-2xl shadow-2xl p-6 md:p-10 animate-slideUp animation-delay-200`}
          >
            <h3
              className={`text-2xl md:text-3xl font-semibold ${
                isDark ? "text-teal-400" : "text-teal-700"
              } mb-6 md:mb-8`}
            >
              {t.education}
            </h3>
            <ul className="space-y-4 md:space-y-5">
              {[t.edu1, t.edu2, t.edu3].map((item, index) => (
                <li
                  key={index}
                  className={`flex items-start text-base md:text-lg transform hover:translate-x-2 transition-all duration-300`}
                >
                  <span
                    className={`${
                      isDark ? "text-teal-400" : "text-teal-600"
                    } mr-3 md:mr-4 text-2xl font-bold`}
                  >
                    •
                  </span>
                  <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
