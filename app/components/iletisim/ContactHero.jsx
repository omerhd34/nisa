'use client';
import { useAppContext } from '@/context/AppContext';

const ContactHero = () => {
 const { theme, data } = useAppContext();
 const isDark = theme === 'dark';

 return (
  <div className="text-center mb-20 animate-fadeIn">
   <h1
    className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'
     } mb-4`}
   >
    İletişim
   </h1>
   <p
    className={`text-lg md:text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'
     } max-w-2xl mx-auto`}
   >
    {data?.contact?.subtitle}
   </p>
   <div
    className={`w-24 h-1 ${isDark ? 'bg-amber-400' : 'bg-amber-600'
     } mx-auto mt-6 rounded-full transition-all duration-500 hover:w-32`}
   ></div>
  </div>
 );
};

export default ContactHero;