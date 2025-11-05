'use client';
import { useAppContext } from '@/context/AppContext';
import HomeHero from '@/app/components/home/HomeHero';
import HomeWelcome from '@/app/components/home/HomeWelcome';

export default function HomePage() {
 return (
  <div className="min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-dark-900">
   <HomeHero />
   <HomeWelcome />
  </div>
 );
}
