'use client';
import { useAppContext } from '@/context/AppContext';

const WorkHero = () => {
 const { theme, data } = useAppContext();
 const isDark = theme === 'dark';

 if (!data?.work) {
  return (
   <div className="text-center mb-16 animate-fadeIn">
    <h1
     className={`text-4xl md:text-5xl lg:text-6xl font-bold ${isDark ? 'text-white' : 'text-gray-900'
      } mb-4`}
    >
     Çalışma Alanlarım
    </h1>
    <p
     className={`text-lg md:text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'
      } max-w-3xl mx-auto`}
    >
     Veriler yükleniyor...
    </p>
   </div>
  );
 }

 return (
  <div className="text-center mb-16 animate-fadeIn">
   <h1
    className={`text-4xl md:text-5xl lg:text-6xl font-bold ${isDark ? 'text-white' : 'text-gray-900'
     } mb-4`}
   >
    Çalışma Alanlarım
   </h1>
   <p
    className={`text-lg md:text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'
     } max-w-3xl mx-auto`}
   >
    {data.work.subtitle}
   </p>
   <div
    className={`w-24 h-1 ${isDark ? 'bg-emerald-400' : 'bg-emerald-600'
     } mx-auto mt-6 rounded-full`}
   ></div>
  </div>
 );
};

export default WorkHero;