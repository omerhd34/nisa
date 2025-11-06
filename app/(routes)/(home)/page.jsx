'use client';
import HomeHero from '@/app/components/home/HomeHero';
import HomeWelcome from '@/app/components/home/HomeWelcome';

export default function HomePage() {
 return (
  <div className="min-h-screen transition-colors duration-300 bg-linear-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-dark-900 dark:via-dark-800 dark:to-dark-950">
   <HomeHero />
   <HomeWelcome />
  </div>
 );
}
