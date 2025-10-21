'use client';
import { useAppContext } from '@/context/AppContext';
import HomeHero from '@/app/components/home/HomeHero';
import HomeWelcome from '@/app/components/home/HomeWelcome';
import HomeFeatures from '@/app/components/home/HomeFeatures';
import HomeCTA from '@/app/components/home/HomeCTA';

export default function HomePage() {
 const { theme } = useAppContext();
 const isDark = theme === 'dark';

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