'use client';
import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';
import { data } from '@/data/data';

const WorkCTA = () => {
 const { theme } = useAppContext();
 const isDark = theme === 'dark';

 return (
  <div
   className={`${isDark
    ? 'bg-gradient-to-br from-emerald-700 to-green-800'
    : 'bg-gradient-to-r from-emerald-600 to-green-600'
    } text-white rounded-3xl shadow-2xl p-10 md:p-16 text-center transform hover:scale-[1.02] transition-all duration-500 relative overflow-hidden`}
  >
   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
   <div className="relative z-10">
    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
     {data.work.cta.title}
    </h3>
    <p className="mb-8 text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
     {data.work.cta.text}
    </p>
    <Link
     href="/contact"
     className="inline-block bg-white text-emerald-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 shadow-2xl"
    >
     İletişime Geçin
    </Link>
   </div>
  </div>
 );
};

export default WorkCTA;