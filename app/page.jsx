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
     <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-emerald-500 mx-auto mb-4"></div>
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
      <p className="font-bold mb-2">Veritabanı Bağlantı Hatası</p>
      <p className="text-sm">{dataError}</p>
     </div>
     <div className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
      <p className="mb-2">Lütfen şunları kontrol edin:</p>
      <ul className="list-disc list-inside text-left">
       <li>MySQL servisi çalışıyor mu?</li>
       <li>.env dosyası doğru yapılandırılmış mı?</li>
       <li>Veritabanı tabloları oluşturulmuş mu?</li>
      </ul>
     </div>
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
   <HomeWelcome />
   <HomeFeatures />
   <HomeCTA />
  </div>
 );
}