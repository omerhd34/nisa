"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { notFound } from "next/navigation";
import { data } from "@/data/data";

export default function ArticleDetailPage({ params }) {
 const { theme } = useAppContext();
 const isDark = theme === "dark";

 const article = data.articles.list.find((a) => a.slug === params.slug);

 if (!article) {
  notFound();
 }

 return (
  <div
   className={`min-h-screen ${isDark
    ? "bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900"
    : "bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50"
    } py-16 md:py-24 transition-colors duration-300`}
  >
   <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
     {/* Back Button */}
     <Link
      href="/articles"
      className={`flex items-center gap-2 mb-8 ${isDark ? "text-emerald-400" : "text-emerald-700"
       } hover:gap-3 transition-all duration-300 font-semibold`}
     >
      <ArrowLeft className="w-5 h-5" />
      Yazılara Dön
     </Link>

     {/* Article Title */}
     <h1
      className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"
       } mb-8`}
     >
      {article.title}
     </h1>

     {/* Article Image */}
     <div className="relative w-full h-96 mb-8 rounded-2xl overflow-hidden shadow-2xl">
      <Image
       src={article.image}
       alt={article.title}
       fill
       className="object-cover"
      />
     </div>

     {/* Article Content */}
     <div
      className={`${isDark
       ? "bg-emerald-950/50 border-2 border-emerald-800 backdrop-blur-lg"
       : "bg-white/90 backdrop-blur-sm border-2 border-emerald-200"
       } rounded-3xl shadow-2xl p-8 md:p-12`}
     >
      <p
       className={`text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"
        }`}
      >
       {article.content}
      </p>
     </div>
    </div>
   </div>
  </div>
 );
}