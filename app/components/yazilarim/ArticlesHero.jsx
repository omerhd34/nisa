'use client';
import { BookOpen } from 'lucide-react';

const ArticlesHero = () => {
 return (
  <div className="text-center mb-16 animate-fadeIn">
   <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full mb-6 shadow-lg border bg-gray-300 dark:bg-gray-900 border-gray-600 dark:border-gray-700">
    <BookOpen className="w-5 h-5 text-gray-700 dark:text-gray-100" />
    <span className="text-sm font-semibold text-gray-700 dark:text-gray-100">
     Blog & Makaleler
    </span>
   </div>

   <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-dark-950 dark:text-gray-50">
    Yazılarım
   </h1>

   <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
    Ruh sağlığı, kişisel gelişim ve terapi hakkında yazılar
   </p>
   <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-gray-600 dark:bg-gray-700"></div>
  </div>
 );
};

export default ArticlesHero;