'use client';
import { useAppContext } from '@/context/AppContext';

const WorkHero = () => {
 const { data } = useAppContext();

 if (!data?.work) {
  return (
   <div className="text-center mb-16 animate-fadeIn">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-dark-950 dark:text-gray-50">
     Çalışma Alanlarım
    </h1>
    <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
     Veriler yükleniyor...
    </p>
   </div>
  );
 }

 return (
  <div className="text-center mb-16 animate-fadeIn">
   <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-dark-950 dark:text-gray-50">
    Çalışma Alanlarım
   </h1>
   <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
    {data.work.subtitle}
   </p>
   <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-gray-600 dark:bg-gray-700"></div>
  </div>
 );
};

export default WorkHero;