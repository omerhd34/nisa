'use client';
import Link from 'next/link';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';
import { data } from '@/data/data';

const ArticlesGrid = () => {
 const { theme } = useAppContext();
 const isDark = theme === 'dark';

 return (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
   {data.articles.list.map((article, index) => (
    <Link
     key={index}
     href={`/articles/${article.slug}`}
     className={`group ${isDark
      ? 'bg-emerald-950/50 border-2 border-emerald-800 backdrop-blur-lg'
      : 'bg-white/90 backdrop-blur-sm border-2 border-emerald-200'
      } rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl hover:shadow-emerald-500/20 transform hover:scale-105 hover:-translate-y-3 transition-all duration-500 cursor-pointer animate-fadeIn animation-delay-${index * 100
      }`}
    >
     <div
      className={`relative h-64 flex items-center justify-center p-8 bg-center bg-cover`}
      style={{
       backgroundImage: `url(${article.image})`,
      }}
     >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>

      <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm p-3 rounded-xl">
       <BookOpen className="w-6 h-6 text-white" />
      </div>

      <h3 className="relative z-10 text-gray-300 text-2xl md:text-3xl font-bold text-center leading-tight group-hover:scale-105 transition-transform duration-500">
       {article.title}
      </h3>
     </div>

     <div className="p-6 md:p-8">
      <div className="flex items-center gap-4 mb-4">
       <div
        className={`flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'
         }`}
       >
        <Clock className="w-4 h-4" />
        <span className="text-sm">{article.readTime}</span>
       </div>
       <div
        className={`px-3 py-1 rounded-full text-xs font-semibold ${isDark
         ? 'bg-emerald-900/50 text-emerald-400'
         : 'bg-emerald-100 text-emerald-700'
         }`}
       >
        Psikoloji
       </div>
      </div>
      <p
       className={`${isDark ? 'text-gray-400' : 'text-gray-600'
        } text-base leading-relaxed mb-6`}
      >
       {article.excerpt}
      </p>
      <div
       className={`group/btn flex items-center gap-2 ${isDark ? 'text-emerald-400' : 'text-emerald-700'
        } font-semibold hover:gap-3 transition-all duration-300`}
      >
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