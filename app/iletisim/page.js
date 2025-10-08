"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { translations } from "@/translations/translations";

const ContactPage = () => {
  const { theme, language } = useAppContext();
  const t = translations[language].contact;
  const isDark = theme === "dark";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert(t.fillAll);
      return;
    }

    const mailtoLink = `mailto:psikolognisademir@gmail.com?subject=Web Sitesinden Mesaj - ${
      formData.name
    }&body=${encodeURIComponent(
      `İsim: ${formData.name}\nE-posta: ${formData.email}\n\nMesaj:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
    setSubmitted(true);

    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className={`min-h-screen ${
        isDark
          ? "bg-gray-900"
          : "bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50"
      } py-12 md:py-20 transition-colors duration-300`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
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
            } rounded-2xl shadow-2xl p-6 md:p-10 lg:p-12 animate-slideUp`}
          >
            <h2
              className={`text-2xl md:text-3xl font-semibold ${
                isDark ? "text-teal-400" : "text-teal-700"
              } mb-6 md:mb-8 text-center`}
            >
              {t.heading}
            </h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-xl text-center animate-fadeIn font-semibold">
                {t.sending}
              </div>
            )}

            <div className="space-y-6">
              <div className="transform hover:scale-[1.01] transition-all duration-300">
                <label
                  htmlFor="name"
                  className={`block ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  } font-medium mb-2 text-base md:text-lg`}
                >
                  {t.name} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 md:px-5 py-3 md:py-4 ${
                    isDark
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  } border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 text-base md:text-lg`}
                />
              </div>

              <div className="transform hover:scale-[1.01] transition-all duration-300">
                <label
                  htmlFor="email"
                  className={`block ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  } font-medium mb-2 text-base md:text-lg`}
                >
                  {t.email} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 md:px-5 py-3 md:py-4 ${
                    isDark
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  } border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300 text-base md:text-lg`}
                />
              </div>

              <div className="transform hover:scale-[1.01] transition-all duration-300">
                <label
                  htmlFor="message"
                  className={`block ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  } font-medium mb-2 text-base md:text-lg`}
                >
                  {t.message} <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className={`w-full px-4 md:px-5 py-3 md:py-4 ${
                    isDark
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white border-gray-300 text-gray-900"
                  } border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none transition-all duration-300 text-base md:text-lg`}
                ></textarea>
              </div>

              <div className="text-right">
                <button
                  onClick={handleSubmit}
                  className={`${
                    isDark
                      ? "bg-gradient-to-r from-teal-600 to-blue-700"
                      : "bg-gradient-to-r from-teal-600 to-blue-600"
                  } text-white px-8 md:px-12 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg hover:scale-105 hover:shadow-2xl transform transition-all duration-300`}
                >
                  {t.send}
                </button>
              </div>
            </div>

            <div
              className={`mt-8 md:mt-10 pt-8 border-t ${
                isDark ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <div
                className={`text-center ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <p className="mb-2 flex items-center justify-center gap-2 text-base md:text-lg">
                  <Mail size={20} />
                  <a
                    href="mailto:psikolognisademir@gmail.com"
                    className={`${
                      isDark ? "text-teal-400" : "text-teal-700"
                    } hover:underline font-semibold`}
                  >
                    psikolognisademir@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
