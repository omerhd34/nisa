"use client";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { data } from "@/data/data";

const ContactPage = () => {
  const { theme } = useAppContext();
  const isDark = theme === "dark";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert(data.contact.fillAll);
      return;
    }

    setIsSubmitting(true);

    const mailtoLink = `mailto:psikolognisademir@gmail.com?subject=Web Sitesinden Mesaj - ${
      formData.name
    }&body=${encodeURIComponent(
      `İsim: ${formData.name}\nE-posta: ${formData.email}\n\nMesaj:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
    setSubmitted(true);
    setIsSubmitting(false);

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
      } py-16 md:py-24 transition-colors duration-300`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16 animate-fadeIn">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold ${
                isDark ? "text-white" : "text-gray-900"
              } mb-4`}
            >
              {t.title}
            </h1>
            <p
              className={`text-lg md:text-xl ${
                isDark ? "text-gray-400" : "text-gray-600"
              } max-w-2xl mx-auto`}
            >
              Size nasıl yardımcı olabilirim? Benimle iletişime geçin.
            </p>
            <div
              className={`w-24 h-1 ${
                isDark ? "bg-teal-400" : "bg-teal-600"
              } mx-auto mt-6 rounded-full`}
            ></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 md:gap-10">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div
                className={`${
                  isDark
                    ? "bg-gray-800/80 border border-gray-700 backdrop-blur-lg"
                    : "bg-white/90 backdrop-blur-sm"
                } rounded-3xl shadow-2xl p-8 md:p-12 animate-slideUp`}
              >
                <h2
                  className={`text-3xl md:text-4xl font-bold ${
                    isDark ? "text-teal-400" : "text-teal-700"
                  } mb-8`}
                >
                  {t.heading}
                </h2>

                {submitted && (
                  <div className="mb-8 p-5 bg-green-500/20 border border-green-500 text-green-400 rounded-xl flex items-center gap-3 animate-fadeIn">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                    <span className="font-semibold">{t.sending}</span>
                  </div>
                )}

                <div className="space-y-6">
                  <div className="transform hover:scale-[1.01] transition-all duration-300">
                    <label
                      htmlFor="name"
                      className={`block ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      } font-semibold mb-2 text-lg`}
                    >
                      {t.name} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 ${
                        isDark
                          ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                      } border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 text-lg`}
                      placeholder="Adınız Soyadınız"
                    />
                  </div>

                  <div className="transform hover:scale-[1.01] transition-all duration-300">
                    <label
                      htmlFor="email"
                      className={`block ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      } font-semibold mb-2 text-lg`}
                    >
                      {t.email} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 ${
                        isDark
                          ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                      } border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 text-lg`}
                      placeholder="ornek@email.com"
                    />
                  </div>

                  <div className="transform hover:scale-[1.01] transition-all duration-300">
                    <label
                      htmlFor="message"
                      className={`block ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      } font-semibold mb-2 text-lg`}
                    >
                      {t.message} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className={`w-full px-5 py-4 ${
                        isDark
                          ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                      } border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none transition-all duration-300 text-lg`}
                      placeholder="Mesajınızı buraya yazın..."
                    ></textarea>
                  </div>

                  <div>
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className={`w-full ${
                        isDark
                          ? "bg-gradient-to-r from-teal-700 to-blue-800"
                          : "bg-gradient-to-r from-teal-600 to-blue-600"
                      } text-white px-8 py-5 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-2xl transform transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      <Send className="w-5 h-5" />
                      {isSubmitting ? "Gönderiliyor..." : t.send}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {data.contact.contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`${
                    isDark
                      ? "bg-gray-800/80 border border-gray-700"
                      : "bg-white/90"
                  } rounded-2xl shadow-xl p-6 transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 animate-slideUp animation-delay-${
                    200 + index * 100
                  }`}
                >
                  <div
                    className={`w-14 h-14 ${
                      isDark
                        ? "bg-gradient-to-br from-teal-700 to-blue-800"
                        : "bg-gradient-to-br from-teal-500 to-blue-600"
                    } rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3
                    className={`text-lg font-bold ${
                      isDark ? "text-white" : "text-gray-900"
                    } mb-2`}
                  >
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className={`${
                        isDark ? "text-teal-400" : "text-teal-700"
                      } hover:underline block break-all`}
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p
                      className={`${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {info.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
