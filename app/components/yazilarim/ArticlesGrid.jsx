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
     className={`group card overflow-hidden hover-card cursor-pointer animate-fadeIn flex flex-col`}
     style={{ animationDelay: `${index * 100}ms` }}
    >
     <div
      className={`relative h-64 flex items-center justify-center p-8 bg-center bg-cover shrink-0`}
      style={{
       backgroundImage: `url(${article.image})`,
      }}
     >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>

      <div className="absolute top-6 right-6 bg-primary dark:bg-primary-dark backdrop-blur-sm p-3 rounded-xl">
       <BookOpen className="w-6 h-6 text-white" />
      </div>

      <h3 className="relative z-10 text-2xl md:text-3xl font-bold text-center leading-tight group-hover:scale-105 transition-transform duration-500 text-gray-100 dark:text-gray-100">
       {article.title}
      </h3>
     </div>

     <div className="p-6 md:p-8 flex flex-col flex-1">
      <div className="flex items-center gap-4 mb-4">
       <div className="flex items-center gap-2 text-body">
        <Clock className="w-4 h-4 text-primary dark:text-primary-dark" />
        <span className="text-sm">{article.readTime}</span>
       </div>
       <div className="px-3 py-1 rounded-full text-xs font-semibold bg-primary dark:bg-primary-dark text-white dark:text-white/70">
        Psikoloji
       </div>
      </div>
      <p className="text-base leading-relaxed mb-6 text-body flex-1">
       {article.excerpt}
      </p>
      <div className="group/btn flex items-center gap-2 font-semibold hover:gap-3 transition-all duration-300 text-primary dark:text-primary-dark mt-auto">
       Devamını Oku
       <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform " />
      </div>
     </div>
    </Link>
   ))}
  </div>
 );
};

export default ArticlesGrid;