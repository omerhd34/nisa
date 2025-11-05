"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { notFound } from "next/navigation";

export default function ArticleDetailPage({ params }) {
 const { data } = useAppContext();

 const resolvedParams = use(params);

 const article = data?.articles?.find((a) => a.slug === resolvedParams.slug);

 if (!article) {
  notFound();
 }

 return (
  <div className="min-h-screen py-16 md:py-24 transition-colors duration-300 bg-gray-50 dark:bg-dark-900">
   <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
     <Link
      href="/yazilarim"
      className="flex items-center gap-2 mb-8 hover:gap-3 transition-all duration-300 font-semibold text-gray-600 dark:text-gray-300 hover:text-dark-950 dark:hover:text-gray-50"
     >
      <ArrowLeft className="w-5 h-5" />
      Yazılara Dön
     </Link>

     <h1 className="text-4xl md:text-5xl font-bold mb-4 text-dark-950 dark:text-gray-50">
      {article.title}
     </h1>

     {article.writer && (
      <div className="flex items-center mb-10">
       <span className="font-medium italic -mt-2 text-gray-600 dark:text-gray-300">
        {article.writer}
       </span>
      </div>
     )}

     <div className="relative w-full h-96 mb-8 rounded-2xl overflow-hidden shadow-2xl">
      <Image src={article.image} alt={article.title} fill className="object-cover" />
     </div>

     {article.poem && (
      <div className="backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 mb-8 border-2 bg-gray-100 dark:bg-gray-900 border-gray-400 dark:border-gray-700">
       <p className="text-lg leading-relaxed whitespace-pre-line italic text-center text-gray-600 dark:text-gray-300">
        {article.poem}
       </p>
       <p className="text-lg mt-4 font-bold leading-relaxed whitespace-pre-line italic text-center text-gray-600 dark:text-gray-300">{article.writer2}</p>
      </div>
     )}


     <div className="backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 mb-8 border-2 bg-gray-100 dark:bg-gray-900 border-gray-400 dark:border-gray-700">
      <p className="text-lg leading-relaxed whitespace-pre-line text-gray-600 dark:text-gray-300">
       {article.content}
      </p>
     </div>

     {(article.source) && (
      <div className="backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 mb-8 border-2 bg-gray-100 dark:bg-gray-900 border-gray-400 dark:border-gray-700">
       {article.source && (
        <div className="text-sm leading-relaxed whitespace-pre-line italic text-gray-500 dark:text-gray-600">
         <p className="font-semibold not-italic">Kaynak</p>
         <p>{article.source}</p>
        </div>
       )}
      </div>
     )}

    </div>
   </div>
  </div>
 );
}