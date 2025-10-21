'use client';
import { useAppContext } from '@/context/AppContext';
import { useData } from '@/hooks/useData';
import HomeHero from '@/app/components/home/HomeHero';
import HomeWelcome from '@/app/components/home/HomeWelcome';
import HomeFeatures from '@/app/components/home/HomeFeatures';
import HomeCTA from '@/app/components/home/HomeCTA';

export default function HomePage() {
 const { theme } = useAppContext();
 const isDark = theme === 'dark';

 const { data: homeData, loading, error } = useData('home');

 if (loading) {
  return (
   <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-gray-900' : 'bg-emerald-50'
    }`}>
    <div className="text-center">
     <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-emerald-500 mx-auto mb-4"></div>
     <p className={isDark ? 'text-white' : 'text-gray-900'}>Yükleniyor...</p>
    </div>
   </div>
  );
 }

 return (
  <div
   className={`min-h-screen ${isDark
    ? 'bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900'
    : 'bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50'
    } transition-colors duration-300`}
  >
   <HomeHero />
   <HomeWelcome data={homeData} />
   <HomeFeatures data={homeData} />
   <HomeCTA data={homeData} />

   {error && process.env.NODE_ENV === 'development' && (
    <div className="fixed bottom-4 right-4 bg-yellow-500 text-white p-4 rounded-lg shadow-lg">
     <p className="text-sm">⚠️ Fallback data kullanılıyor</p>
    </div>
   )}
  </div>
 );
}