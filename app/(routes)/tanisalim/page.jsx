'use client';
import { useAppContext } from '@/context/AppContext';
import AboutHero from '@/app/components/tanisalim/AboutHero';
import AboutMain from '@/app/components/tanisalim/AboutMain';

export default function AboutPage() {
 return (
  <div className="min-h-screen py-16 md:py-24 transition-colors duration-300 bg-gray-50 dark:bg-dark-900">
   <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
     <AboutHero />
     <AboutMain />
    </div>
   </div>
  </div>
 );
}