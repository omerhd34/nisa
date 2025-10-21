"use client";

import { Heart, ArrowRight, CheckCircle, Star, Sparkles } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { data } from "@/data/data";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
 const { theme } = useAppContext();
 const isDark = theme === "dark";
 const [mounted, setMounted] = useState(false);

 useEffect(() => {
  setMounted(true);
 }, []);

 return (
  <div
   className={`min-h-screen ${isDark
    ? "bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900"
    : "bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50"
    } transition-colors duration-300`}
  >
   <section className="relative overflow-hidden py-32 md:py-40 lg:py-44 min-h-screen">
    {/* Animated Background Elements */}
    <div className="absolute inset-0 overflow-hidden min-h-screen">
     {/* Large Gradient Blobs */}
     <div
      className={`absolute top-20 left-10 w-72 h-72 ${isDark ? "bg-emerald-900/30" : "bg-emerald-300/40"
       } rounded-full blur-3xl animate-pulse`}
     ></div>
     <div
      className={`absolute bottom-20 right-10 w-96 h-96 ${isDark ? "bg-green-900/30" : "bg-green-300/40"
       } rounded-full blur-3xl animate-pulse`}
      style={{ animationDelay: "1s" }}
     ></div>

     {/* Floating Particles */}
     {mounted && (
      <div className="absolute inset-0">
       {[...Array(20)].map((_, i) => (
        <div
         key={i}
         className={`absolute w-2 h-2 ${isDark ? "bg-emerald-500/20" : "bg-emerald-400/30"} rounded-full`}
         style={{
          left: `${(i * 5.26) % 100}%`,
          top: `${(i * 7.89) % 100}%`,
          animation: `float ${5 + (i % 10)}s ease-in-out infinite`,
          animationDelay: `${(i % 5)}s`,
         }}
        />
       ))}
      </div>
     )}



     {/* Sparkle Effect */}
     <div className="absolute top-1/3 right-1/3">
      <Sparkles className={`w-8 h-8 ${isDark ? "text-emerald-400/30" : "text-emerald-500/40"}`}
       style={{ animation: "pulse 3s ease-in-out infinite" }}
      />
     </div>
     <div className="absolute bottom-1/2 left-1/3">
      <Sparkles className={`w-6 h-6 ${isDark ? "text-green-400/30" : "text-green-500/40"}`}
       style={{ animation: "pulse 3s ease-in-out infinite", animationDelay: "1.5s" }}
      />
     </div>

     {/* Gradient Mesh */}
     <div className={`absolute inset-0 ${isDark
      ? "bg-gradient-to-tr from-emerald-900/10 via-transparent to-green-900/10"
      : "bg-gradient-to-tr from-emerald-200/20 via-transparent to-green-200/20"
      }`}
      style={{
       backgroundSize: "200% 200%",
       animation: "gradient 15s ease infinite"
      }}
     />

     {/* Grid Pattern */}
     <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
       backgroundImage: `linear-gradient(${isDark ? "#10b981" : "#059669"} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? "#10b981" : "#059669"} 1px, transparent 1px)`,
       backgroundSize: "50px 50px"
      }}
     />

     {/* Radial Glow */}
     <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] ${isDark ? "bg-emerald-600/5" : "bg-emerald-400/10"
      } rounded-full blur-3xl`} />
    </div>

    <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
     <div className="max-w-5xl mx-auto text-center w-full">
      <div
       className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${isDark
        ? "bg-emerald-900/50 border border-emerald-700"
        : "bg-white/80 border border-emerald-300"
        } mb-8 animate-fadeIn shadow-lg backdrop-blur-sm`}
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

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center animate-slideUp animation-delay-400 max-w-md sm:max-w-none mx-auto">
       <Link
        href="/contact"
        className={`group ${isDark
         ? "bg-gradient-to-r from-emerald-600 to-green-600 border-2 border-emerald-500"
         : "bg-gradient-to-r from-emerald-600 to-green-600 border-2 border-emerald-700"
         } text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50 transform transition-all duration-300 flex items-center justify-center gap-2`}
       >
        Randevu Al
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
       </Link>
       <Link
        href="/about"
        className={`group ${isDark
         ? "bg-gradient-to-r from-teal-600 to-cyan-600 border-2 border-teal-500 text-white"
         : "bg-gradient-to-r from-teal-500 to-cyan-500 border-2 border-teal-700 text-white"
         } px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/50 transform transition-all duration-300 flex items-center justify-center gap-2`}
       >
        Daha Fazla Bilgi
       </Link>
      </div>
     </div>
    </div>

    {/* CSS Animations */}
    <style jsx>{`
     @keyframes float {
      0%, 100% {
       transform: translateY(0) translateX(0);
       opacity: 0.3;
      }
      50% {
       transform: translateY(-20px) translateX(10px);
       opacity: 0.6;
      }
     }
     @keyframes spin {
      from {
       transform: rotate(0deg);
      }
      to {
       transform: rotate(360deg);
      }
     }
     @keyframes gradient {
      0% {
       background-position: 0% 50%;
      }
      50% {
       background-position: 100% 50%;
      }
      100% {
       background-position: 0% 50%;
      }
     }
    `}</style>
   </section>

   {/* Welcome Section */}
   <section className="py-12 md:py-16 lg:py-20">
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
          Merhaba!
         </h2>
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
   <section className="py-12 md:py-16 lg:py-20">
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
   <section className="py-12 md:py-16">
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