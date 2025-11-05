'use client';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

const HomeHero = () => {
 return (
  <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-dark-900 dark:via-dark-800 dark:to-dark-950 py-8">
   <div className="absolute inset-0 overflow-hidden pointer-events-none ">
    <div className="absolute top-20 left-10 w-72 h-72 bg-gray-300 dark:bg-dark-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-400 dark:bg-dark-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
   </div>

   <div className="container mx-auto px-4 relative z-10 w-full -translate-y-12">
    <div className="max-w-5xl mx-auto text-center w-full">
     <div className="relative rounded-3xl bg-[url('/yol.jpeg')] bg-cover bg-center bg-no-repeat border border-gray-200/50 dark:border-gray-700/50 shadow-2xl shadow-gray-900/10 dark:shadow-black/50 p-8 md:p-12 lg:p-16 transform transition-all duration-500 hover:shadow-3xl hover:scale-[1.01] overflow-hidden">
      <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
      <div className="relative z-10">
       <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8 animate-fadeIn shadow-md backdrop-blur-md border border-gray-300/80 dark:border-gray-600/80 bg-linear-to-r from-gray-100/90 to-gray-200/90 dark:from-dark-700/90 dark:to-dark-800/90">
        <Star className="w-5 h-5 text-gray-700 dark:text-gray-200" fill="currentColor" />
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 tracking-wide">
         Uzman Klinik Psikolog
        </span>
        <Star className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="currentColor" />
       </div>

       <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 animate-fadeIn leading-tight bg-linear-to-r from-dark-950 via-gray-800 to-dark-950 dark:from-gray-50 dark:via-gray-100 dark:to-gray-50 bg-clip-text text-transparent">
        Nisa Demir
       </h1>
       <p className="text-xl md:text-2xl lg:text-3xl mb-10 md:mb-14 animate-slideUp animation-delay-200 font-medium max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
        Bireysel ve Online Terapi
       </p>

       <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-stretch sm:items-center animate-slideUp animation-delay-400 max-w-md sm:max-w-none mx-auto">
        <Link
         href="/iletisim"
         className="group relative overflow-hidden border-2 bg-linear-to-r from-gray-800 to-dark-950 dark:from-dark-950 dark:to-gray-900 border-gray-800 dark:border-dark-950 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-2xl font-semibold text-base sm:text-lg hover:scale-105 hover:shadow-2xl hover:shadow-gray-900/30 dark:hover:shadow-black/50 transform transition-all duration-300 flex items-center justify-center gap-2"
        >
         <span className="absolute inset-0 bg-linear-to-r from-gray-700 to-gray-900 dark:from-gray-900 dark:to-dark-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
         <span className="relative z-10">Randevu Al</span>
         <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
         href="/tanisalim"
         className="group relative overflow-hidden border-2 bg-transparent border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 px-8 py-4 sm:px-10 sm:py-5 rounded-2xl font-semibold text-base sm:text-lg hover:scale-105 hover:shadow-xl hover:bg-gray-100 dark:hover:bg-dark-700 hover:border-gray-400 dark:hover:border-gray-500 transform transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
        >
         Daha Fazla Bilgi
        </Link>
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default HomeHero;