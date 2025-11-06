'use client';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

const HomeHero = () => {
 return (
  <section className="relative overflow-hidden min-h-screen flex items-center justify-center py-8">
   <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full -translate-y-12">
    <div className="max-w-5xl md:max-w-6xl lg:max-w-6xl xl:max-w-7xl mx-auto text-center w-full">
     <div className="relative rounded-3xl bg-[url('/yol.jpeg')] bg-cover bg-center bg-no-repeat border border-gray-200/50 dark:border-gray-700/50 shadow-2xl shadow-gray-900/10 dark:shadow-black/50 p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 transform transition-all duration-500 overflow-hidden">
      <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
      <div className="relative z-10">
       <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full mb-6 sm:mb-8 animate-fadeIn shadow-md backdrop-blur-md border border-gray-300/80 dark:border-gray-600/80 bg-linear-to-r from-gray-100/90 to-gray-200/90 dark:from-dark-700/90 dark:to-dark-800/90">
        <Star className="w-5 h-5 text-primary dark:text-primary-dark" fill="currentColor" />
        <span className="text-sm font-semibold text-black dark:text-white tracking-wide">
         Uzman Klinik Psikolog
        </span>
        <Star className="w-5 h-5 text-primary dark:text-primary-dark" fill="currentColor" />
       </div>

       <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-5 sm:mb-6 md:mb-8 animate-fadeIn leading-tight bg-linear-to-r from-dark-950 via-gray-800 to-dark-950 dark:from-gray-50 dark:via-gray-100 dark:to-gray-50 bg-clip-text text-black dark:text-white">
        Nisa Demir
       </h1>
       <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-10 md:mb-12 lg:mb-14 animate-slideUp animation-delay-200 font-medium max-w-2xl md:max-w-3xl lg:max-w-3xl mx-auto text-black dark:text-white leading-relaxed">
        Bireysel ve Online Terapi
       </p>

       <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center items-stretch sm:items-center animate-slideUp animation-delay-400 max-w-sm sm:max-w-md md:max-w-none mx-auto">
        <Link
         href="/iletisim"
         className="group relative overflow-hidden border-2 border-black dark:border-white bg-orange-a text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-2xl font-semibold text-sm sm:text-base md:text-lg hover:scale-105 hover:shadow-2xl hover:shadow-gray-900/30 dark:hover:shadow-black/50 transform transition-all duration-300 flex items-center justify-center gap-2"
        >
         <span className="absolute inset-0 bg-orange-a opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
         <span className="relative z-10 text-black dark:text-white">Randevu Al</span>
         <ArrowRight className="w-4 h-4 sm:w-4 md:w-5 sm:h-4 md:h-5 relative z-10 group-hover:translate-x-1 transition-transform text-black dark:text-white" />
        </Link>
        <Link
         href="/tanisalim"
         className="group relative overflow-hidden border-2 border-black dark:border-white bg-orange-a text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-2xl font-semibold text-sm sm:text-base md:text-lg hover:scale-105 hover:shadow-2xl hover:shadow-gray-900/30 dark:hover:shadow-black/50 transform transition-all duration-300 flex items-center justify-center gap-2"
        >
         <span className="absolute inset-0 bg-orange-a opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
         <span className="relative z-10 text-black dark:text-white">Daha Fazla Bilgi</span>
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