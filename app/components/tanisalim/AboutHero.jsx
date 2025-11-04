'use client';
import { useAppContext } from '@/context/AppContext';

const AboutHero = () => {
 const { theme } = useAppContext();
 const isDark = theme === 'dark';

 return (
  <div className="text-center mb-16 animate-fadeIn">
   <h1
    className={`text-4xl md:text-5xl lg:text-6xl font-bold ${isDark ? 'text-white' : 'text-gray-900'
     } mb-4`}
   >
    Tanışalım
   </h1>
   <div
    className={`w-24 h-1 ${isDark ? 'bg-amber-400' : 'bg-amber-600'
     } mx-auto rounded-full`}
   ></div>
  </div>
 );
};

export default AboutHero;