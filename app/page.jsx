'use client';
import { useAppContext } from '@/context/AppContext';
import HomeHero from '@/app/components/home/HomeHero';
import HomeWelcome from '@/app/components/home/HomeWelcome';
import HomeFeatures from '@/app/components/home/HomeFeatures';
import HomeCTA from '@/app/components/home/HomeCTA';

export default function HomePage() {
 const { theme, dataLoading, dataError } = useAppContext();
 const isDark = theme === 'dark';

 if (dataLoading) {
  return (
   <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-gray-900' : 'bg-emerald-50'
    }`}>
    <div className="text-center">
     <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-emerald-500 mx-auto "></div>
     <p className={isDark ? 'text-white' : 'text-gray-900'}>Veriler yükleniyor...</p>
    </div>
   </div>
  );
 }

 if (dataError) {
  return (
   <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-gray-900' : 'bg-emerald-50'
    }`}>
    <div className="text-center max-w-md mx-auto p-8">
     <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mb-4">
      <p className="font-bold">Veritabanı Bağlantı Hatası</p>
     </div>
    </div>
   </div>
  );
 }

 return (
  <div
   className={`min-h-screen ${isDark
    ? 'bg-linear-to-br from-gray-900 via-emerald-950 to-gray-900'
    : 'bg-linear-to-br from-emerald-50 via-green-50 to-teal-50'
    } transition-colors duration-300`}
  >
   <HomeHero />
   <HomeWelcome />
   <HomeFeatures />
   <HomeCTA />
  </div>
 );
}