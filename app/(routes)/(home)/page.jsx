'use client';
import { useAppContext } from '@/context/AppContext';
import HomeHero from '@/app/components/home/HomeHero';
import HomeWelcome from '@/app/components/home/HomeWelcome';

export default function HomePage() {
 const { theme } = useAppContext();
 const isDark = theme === 'dark';

 return (
  <div
   className={`min-h-screen ${isDark
    ? 'bg-linear-to-br from-gray-900 via-amber-950 to-gray-900'
    : 'bg-linear-to-br from-amber-50 via-orange-50 to-amber-50'
    } transition-colors duration-300`}
  >
   <HomeHero />
   <HomeWelcome />
  </div>
 );
}
