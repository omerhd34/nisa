"use client";

import { Heart, ArrowRight, CheckCircle, Star } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { data } from "@/data/data";
import Link from "next/link";

export default function HomePage() {
 const { theme } = useAppContext();
 const isDark = theme === "dark";

 return (
  <div
   className={`min-h-screen ${isDark
    ? "bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900"
    : "bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50"
    } transition-colors duration-300`}
  >
   <section className="relative overflow-hidden py-20 md:py-28 lg:py-36">
    <div className="absolute inset-0 overflow-hidden">
     <div
      className={`absolute top-20 left-10 w-72 h-72 ${isDark ? "bg-emerald-900/30" : "bg-emerald-300/40"
       } rounded-full blur-3xl animate-pulse`}
     ></div>
     <div
      className={`absolute bottom-20 right-10 w-96 h-96 ${isDark ? "bg-green-900/30" : "bg-green-300/40"
       } rounded-full blur-3xl animate-pulse`}
      style={{ animationDelay: "1s" }}
     ></div>
    </div>

    <div className="container mx-auto px-4 relative z-10">
     <div className="max-w-5xl mx-auto text-center">
      <div
       className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${isDark
        ? "bg-emerald-900/50 border border-emerald-700"
        : "bg-white/80 border border-emerald-300"
        } mb-8 animate-fadeIn shadow-lg`}
      >
       <Star
        className={`w-5 h-5 ${isDark ? "text-emerald-400" : "text-emerald-600"
         }`}
        fill="currentColor"
       />
       <span
        className={`text-sm font-semibold ${isDark ? "text-emerald-300" : "text-emerald-700"
         }`}
       >
        Uzman Klinik Psikolog
       </span>
      </div>

      <h1
       className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold ${isDark ? "text-white" : "text-gray-900"
        } mb-6 md:mb-8 animate-fadeIn leading-tight`}
      >
       Nisa Demir
      </h1>
      <p
       className={`text-xl md:text-2xl lg:text-3xl ${isDark ? "text-emerald-300" : "text-emerald-700"
        } mb-10 md:mb-14 animate-slideUp animation-delay-200 font-medium max-w-3xl mx-auto`}
      >
       Bireysel ve Online Terapi
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slideUp animation-delay-400">
       <Link
        href="/contact"
        className={`group ${isDark
         ? "bg-gradient-to-r from-emerald-600 to-green-700"
         : "bg-gradient-to-r from-emerald-600 to-green-600"
         } text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50 transform transition-all duration-300 flex items-center gap-2`}
       >
        Randevu Al
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
       </Link>
       <Link
        href="/about"
        className={`${isDark
         ? "bg-emerald-900/50 border-2 border-emerald-700 text-emerald-300"
         : "bg-white border-2 border-emerald-500 text-emerald-700"
         } px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-xl transform transition-all duration-300`}
       >
        Daha Fazla Bilgi
       </Link>
      </div>
     </div>
    </div>
   </section>

   {/* Welcome Section */}
   <section className="py-16 md:py-24 lg:py-32">
    <div className="container mx-auto px-4">
     <div className="max-w-6xl mx-auto">
      <div
       className={`${isDark
        ? "bg-emerald-950/50 border border-emerald-800 backdrop-blur-lg"
        : "bg-white/90 backdrop-blur-sm border-2 border-emerald-200"
        } rounded-3xl shadow-2xl p-10 md:p-14 lg:p-20 animate-slideUp animation-delay-400`}
      >
       <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
         <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold ${isDark ? "text-emerald-400" : "text-emerald-700"
           } mb-6 md:mb-8`}
         >
          Merhaba!         </h2>
         <p
          className={`${isDark ? "text-gray-300" : "text-gray-700"
           } text-lg md:text-xl leading-relaxed mb-8`}
         >
          {data.home.welcomeText}
         </p>

         <div className="space-y-4">
          {data.home.benefits.map((benefit, index) => (
           <div
            key={index}
            className="flex items-start gap-3 animate-slideUp"
            style={{ animationDelay: `${0.6 + index * 0.1}s` }}
           >
            <CheckCircle
             className={`w-6 h-6 ${isDark ? "text-emerald-400" : "text-emerald-600"
              } flex-shrink-0 mt-1`}
            />
            <span
             className={`${isDark ? "text-gray-300" : "text-gray-700"
              } text-lg`}
            >
             {benefit}
            </span>
           </div>
          ))}
         </div>
        </div>

        <div
         className={`relative h-80 md:h-96 rounded-2xl bg-gradient-to-br ${isDark
          ? "from-emerald-700 to-green-800"
          : "from-emerald-400 to-green-500"
          } shadow-2xl overflow-hidden`}
        >
         <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
         <div className="absolute inset-0 flex items-center justify-center">
          <Heart className="w-32 h-32 text-white/80" strokeWidth={1.5} />
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>

   {/* Features Section */}
   <section className="py-16 md:py-24 lg:py-32">
    <div className="container mx-auto px-4">
     <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
       <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"
         } mb-4`}
       >
        {data.home.whyChoose.title}
       </h2>
       <p
        className={`text-lg md:text-xl ${isDark ? "text-gray-400" : "text-gray-600"
         } max-w-2xl mx-auto`}
       >
        {data.home.whyChoose.subtitle}
       </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
       {data.home.features.map((feature, index) => (
        <div
         key={index}
         className={`group ${isDark
          ? "bg-emerald-950/50 border-2 border-emerald-800 backdrop-blur-lg"
          : "bg-white/90 backdrop-blur-sm border-2 border-emerald-200"
          } rounded-3xl shadow-2xl p-8 md:p-10 hover:shadow-3xl hover:shadow-emerald-500/20 transform hover:scale-105 hover:-translate-y-3 transition-all duration-500 animate-slideUp animation-delay-${600 + index * 100
          }`}
        >
         <div
          className={`bg-gradient-to-br ${isDark ? "from-emerald-600 to-green-700" : "from-emerald-500 to-green-600"
           } w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}
         >
          <feature.icon className="w-10 h-10 text-white" />
         </div>
         <h3
          className={`text-2xl md:text-3xl font-bold ${isDark ? "text-white" : "text-gray-800"
           } mb-4 text-center`}
         >
          {feature.title}
         </h3>
         <p
          className={`${isDark ? "text-gray-300" : "text-gray-600"
           } text-base md:text-lg text-center leading-relaxed`}
         >
          {feature.description}
         </p>
        </div>
       ))}
      </div>
     </div>
    </div>
   </section>

   {/* CTA Section */}
   <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
     <div className="max-w-4xl mx-auto">
      <div
       className={`${isDark
        ? "bg-gradient-to-br from-emerald-700 to-green-800"
        : "bg-gradient-to-r from-emerald-600 to-green-600"
        } rounded-3xl shadow-2xl p-12 md:p-16 text-center text-white relative overflow-hidden`}
      >
       <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
       <div className="relative z-10">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
         {data.home.cta.title}
        </h3>
        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
         {data.home.cta.text}
        </p>
        <Link
         href="/contact"
         className="inline-block bg-white text-emerald-700 px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-2xl transform transition-all duration-300"
        >
         Hemen İletişime Geçin
        </Link>
       </div>
      </div>
     </div>
    </div>
   </section>
  </div>
 );
}