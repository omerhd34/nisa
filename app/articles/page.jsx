"use client";

import { BookOpen, Clock, ArrowRight } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { data } from "@/data/data";
import Link from "next/link";

const ArticlesPage = () => {
 const { theme } = useAppContext();
 const isDark = theme === "dark";

 return (
  <div
   className={`min-h-screen ${isDark
    ? "bg-gray-900"
    : "bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50"
    } py-16 md:py-24 transition-colors duration-300`}
  >
   <div className="container mx-auto px-4">
    <div className="max-w-7xl mx-auto">
     {/* Page Header */}
     <div className="text-center mb-16 animate-fadeIn">
      <div
       className={`inline-flex items-center gap-3 px-5 py-2 rounded-full ${isDark
        ? "bg-teal-900/30 border border-teal-700"
        : "bg-white/80 border border-teal-200"
        } mb-6 shadow-lg`}
      >
       <BookOpen
        className={`w-5 h-5 ${isDark ? "text-teal-400" : "text-teal-600"
         }`}
       />
       <span
        className={`text-sm font-semibold ${isDark ? "text-teal-300" : "text-teal-700"
         }`}
       >
        Blog & Makaleler
       </span>
      </div>

      <h1
       className={`text-4xl md:text-5xl lg:text-6xl font-bold ${isDark ? "text-white" : "text-gray-900"
        } mb-6`}
      >
       {data.articles.title}
      </h1>

      <p
       className={`text-lg md:text-xl ${isDark ? "text-gray-400" : "text-gray-600"
        } max-w-3xl mx-auto`}
      >
       Ruh sağlığı, kişisel gelişim ve terapi hakkında bilgilendirici yazılar
      </p>
      <div
       className={`w-24 h-1 ${isDark ? "bg-teal-400" : "bg-teal-600"
        } mx-auto mt-6 rounded-full`}
      ></div>
     </div>

     {/* Articles Grid */}
     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
      {data.article7.map((article, index) => (
       <article
        key={index}
        className={`group ${isDark
         ? "bg-gray-800/80 border border-gray-700 backdrop-blur-lg"
         : "bg-white/90 backdrop-blur-sm"
         } rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transform hover:scale-105 hover:-translate-y-3 transition-all duration-500 cursor-pointer animate-fadeIn animation-delay-${index * 100
         }`}
       >
        {/* Article Header with Gradient */}
        <div
         className={`relative h-64 flex items-center justify-center p-8 bg-center bg-cover`}
         style={{
          backgroundImage: `url(${article.image})`,
         }}
        >
         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>

         {/* Decorative Icon */}
         <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm p-3 rounded-xl">
          <BookOpen className="w-6 h-6 text-white" />
         </div>

         <h3 className="relative z-10 text-gray-300 text-2xl md:text-3xl font-bold text-center leading-tight group-hover:scale-105 transition-transform duration-500">
          {article.title}
         </h3>
        </div>

        {/* Article Content */}
        <div className="p-6 md:p-8">
         <div className="flex items-center gap-4 mb-4">
          <div
           className={`flex items-center gap-2 ${isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
           <Clock className="w-4 h-4" />
           <span className="text-sm">{article.readTime}</span>
          </div>
          <div
           className={`px-3 py-1 rounded-full text-xs font-semibold ${isDark
            ? "bg-teal-900/50 text-teal-400"
            : "bg-teal-100 text-teal-700"
            }`}
          >
           Psikoloji
          </div>
         </div>
         <p
          className={`${isDark ? "text-gray-400" : "text-gray-600"
           } text-base leading-relaxed mb-6`}
         >
          {article.excerpt}
         </p>
         <Link
          href={`/articles/${data.articles.article7.slug}`}
          className={`group/btn flex items-center gap-2 ${isDark ? "text-teal-400" : "text-teal-700"
           } font-semibold hover:gap-3 transition-all duration-300`}
         >
          Devamını Oku
          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
         </Link>
        </div>
       </article>
      ))}
     </div>
    </div>
   </div>
  </div>
 );
};

export default ArticlesPage;
