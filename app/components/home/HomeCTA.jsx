'use client';
import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';


const HomeCTA = () => {
 const { theme } = useAppContext();
 const isDark = theme === 'dark';

 return (
  <section className="py-12 md:py-16">
   <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
     <div
      className={`${isDark
       ? 'bg-gradient-to-br from-emerald-700 to-green-800'
       : 'bg-gradient-to-r from-emerald-600 to-green-600'
       } rounded-3xl shadow-2xl p-12 md:p-16 text-center text-white relative overflow-hidden`}
     >
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      <div className="relative z-10">
       <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
        {data.home.cta.title}
       </h3>
       <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
        {data.home.cta.text}
       </p>
       <Link
        href="/contact"
        className="inline-block bg-white text-emerald-700 px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-2xl transform transition-all duration-300"
       >
        Hemen İletişime Geçin
       </Link>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default HomeCTA;