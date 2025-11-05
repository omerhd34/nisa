'use client';
import Link from 'next/link';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';

const ArticlesGrid = () => {
 const { data } = useAppContext();

 if (!data?.articles || !Array.isArray(data.articles)) {
  return (
   <div className="text-center py-16">
    <p className="text-lg text-gray-600 dark:text-gray-300">
     {data?.articles ? 'Makaleler yükleniyor...' : 'Makale bulunamadı'}
    </p>
   </div>
  );
 }

 return (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
   {data.articles.map((article, index) => (
    <Link
     key={index}
     href={`/yazilarim/${article.slug}`}
     className={`group backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 hover:-translate-y-3 transition-all duration-500 cursor-pointer animate-fadeIn border-2 bg-gray-100 dark:bg-gray-900 border-gray-400 dark:border-gray-700`}
     style={{ animationDelay: `${index * 100}ms` }}
    >
     <div
      className={`relative h-64 flex items-center justify-center p-8 bg-center bg-cover`}
      style={{
       backgroundImage: `url(${article.image})`,
      }}
     >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>

      <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm p-3 rounded-xl">
       <BookOpen className="w-6 h-6 text-white" />
      </div>

      <h3 className="relative z-10 text-2xl md:text-3xl font-bold text-center leading-tight group-hover:scale-105 transition-transform duration-500 text-gray-100 dark:text-gray-100">
       {article.title}
      </h3>
     </div>

     <div className="p-6 md:p-8">
      <div className="flex items-center gap-4 mb-4">
       <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
        <Clock className="w-4 h-4" />
        <span className="text-sm">{article.readTime}</span>
       </div>
       <div className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-300 dark:bg-dark-800 text-gray-700 dark:text-gray-100">
        Psikoloji
       </div>
      </div>
      <p className="text-base leading-relaxed mb-6 text-gray-600 dark:text-gray-300">
       {article.excerpt}
      </p>
      <div className="group/btn flex items-center gap-2 font-semibold hover:gap-3 transition-all duration-300 text-gray-700 dark:text-gray-100">
       Devamını Oku
       <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
      </div>
     </div>
    </Link>
   ))}
  </div>
 );
};

export default ArticlesGrid;