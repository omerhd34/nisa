'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Sparkles } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';

const HomeHero = () => {
 const { theme } = useAppContext();
 const isDark = theme === 'dark';
 const [mounted, setMounted] = useState(false);

 useEffect(() => {
  setMounted(true);
 }, []);

 return (
  <section className="relative overflow-hidden py-32 md:py-40 lg:py-44 min-h-screen">
   <div className="absolute inset-0 overflow-hidden min-h-screen">
    <div
     className={`absolute top-20 left-10 w-72 h-72 ${isDark ? 'bg-amber-900/30' : 'bg-amber-300/40'
      } rounded-full blur-3xl animate-pulse`}
    ></div>
    <div
     className={`absolute bottom-20 right-10 w-96 h-96 ${isDark ? 'bg-orange-900/30' : 'bg-orange-300/40'
      } rounded-full blur-3xl animate-pulse`}
     style={{ animationDelay: '1s' }}
    ></div>

    {mounted && (
     <div className="absolute inset-0">
      {[...Array(20)].map((_, i) => (
       <div
        key={i}
        className={`absolute w-2 h-2 ${isDark ? 'bg-amber-500/20' : 'bg-amber-400/30'
         } rounded-full`}
        style={{
         left: `${(i * 5.26) % 100}%`,
         top: `${(i * 7.89) % 100}%`,
         animation: `float ${5 + (i % 10)}s ease-in-out infinite`,
         animationDelay: `${i % 5}s`,
        }}
       />
      ))}
     </div>
    )}

    <div className="absolute top-1/3 right-1/3">
     <Sparkles
      className={`w-8 h-8 ${isDark ? 'text-amber-400/30' : 'text-amber-500/40'
       }`}
      style={{ animation: 'pulse 3s ease-in-out infinite' }}
     />
    </div>
    <div className="absolute bottom-1/2 left-1/3">
     <Sparkles
      className={`w-6 h-6 ${isDark ? 'text-orange-400/30' : 'text-orange-500/40'
       }`}
      style={{
       animation: 'pulse 3s ease-in-out infinite',
       animationDelay: '1.5s',
      }}
     />
    </div>

    <div
     className={`absolute inset-0 ${isDark
      ? 'bg-linear-to-tr from-amber-900/10 via-transparent to-orange-900/10'
      : 'bg-linear-to-tr from-amber-200/20 via-transparent to-orange-200/20'
      }`}
     style={{
      backgroundSize: '200% 200%',
      animation: 'gradient 15s ease infinite',
     }}
    />

    <div
     className="absolute inset-0 opacity-[0.03]"
     style={{
      backgroundImage: `linear-gradient(${isDark ? '#f59e0b' : '#d97706'
       } 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#f59e0b' : '#d97706'
       } 1px, transparent 1px)`,
      backgroundSize: '50px 50px',
     }}
    />

    <div
     className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] ${isDark ? 'bg-amber-600/5' : 'bg-amber-400/10'
      } rounded-full blur-3xl`}
    />
   </div>

   <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
    <div className="max-w-5xl mx-auto text-center w-full">
     <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${isDark
       ? 'bg-amber-900/50 border border-amber-700'
       : 'bg-white/80 border border-amber-300'
       } mb-8 animate-fadeIn shadow-lg backdrop-blur-sm`}
     >
      <Star
       className={`w-5 h-5 ${isDark ? 'text-amber-400' : 'text-amber-600'
        }`}
       fill="currentColor"
      />
      <span
       className={`text-sm font-semibold ${isDark ? 'text-amber-300' : 'text-amber-700'
        }`}
      >
       Uzman Klinik Psikolog
      </span>
     </div>

     <h1
      className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold ${isDark ? 'text-white' : 'text-gray-900'
       } mb-6 md:mb-8 animate-fadeIn leading-tight`}
     >
      Nisa Demir
     </h1>
     <p
      className={`text-xl md:text-2xl lg:text-3xl ${isDark ? 'text-amber-300' : 'text-amber-700'
       } mb-10 md:mb-14 animate-slideUp animation-delay-200 font-medium max-w-3xl mx-auto`}
     >
      Bireysel ve Online Terapi
     </p>

     <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center animate-slideUp animation-delay-400 max-w-md sm:max-w-none mx-auto">
      <Link
       href="/iletisim"
       className={`group ${isDark
        ? 'bg-linear-to-r from-amber-600 to-orange-600 border-2 border-amber-500'
        : 'bg-linear-to-r from-amber-600 to-orange-600 border-2 border-amber-700'
        } text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50 transform transition-all duration-300 flex items-center justify-center gap-2`}
      >
       Randevu Al
       <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
      </Link>
      <Link
       href="/tanisalim"
       className={`group ${isDark
        ? 'bg-linear-to-r from-amber-600 to-orange-600 border-2 border-amber-500 text-white'
        : 'bg-linear-to-r from-amber-500 to-orange-500 border-2 border-amber-700 text-white'
        } px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50 transform transition-all duration-300 flex items-center justify-center gap-2`}
      >
       Daha Fazla Bilgi
      </Link>
     </div>
    </div>
   </div>

   <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
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
 );
};

export default HomeHero;