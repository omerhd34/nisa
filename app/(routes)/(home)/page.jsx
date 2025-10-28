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
    ? 'bg-linear-to-br from-gray-900 via-emerald-950 to-gray-900'
    : 'bg-linear-to-br from-emerald-50 via-green-50 to-teal-50'
    } transition-colors duration-300`}
  >
   <HomeHero />
   <HomeWelcome />
  </div>
 );
}
