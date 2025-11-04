'use client';
import { BookOpen } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';

const ArticlesHero = () => {
 const { theme, data } = useAppContext();
 const isDark = theme === 'dark';

 return (
  <div className="text-center mb-16 animate-fadeIn">
   <div
    className={`inline-flex items-center gap-3 px-5 py-2 rounded-full ${isDark
     ? 'bg-amber-900/50 border border-amber-700'
     : 'bg-white/80 border border-amber-300'
     } mb-6 shadow-lg`}
   >
    <BookOpen
     className={`w-5 h-5 ${isDark ? 'text-amber-400' : 'text-amber-600'
      }`}
    />
    <span
     className={`text-sm font-semibold ${isDark ? 'text-amber-300' : 'text-amber-700'
      }`}
    >
     Blog & Makaleler
    </span>
   </div>

   <h1
    className={`text-4xl md:text-5xl lg:text-6xl font-bold ${isDark ? 'text-white' : 'text-gray-900'
     } mb-6`}
   >
    Yazılarım
   </h1>

   <p
    className={`text-lg md:text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'
     } max-w-3xl mx-auto`}
   >
    Ruh sağlığı, kişisel gelişim ve terapi hakkında yazılar
   </p>
   <div
    className={`w-24 h-1 ${isDark ? 'bg-amber-400' : 'bg-amber-600'
     } mx-auto mt-6 rounded-full`}
   ></div>
  </div>
 );
};

export default ArticlesHero;