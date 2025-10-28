'use client';
import { useAppContext } from '@/context/AppContext';
import AboutHero from '@/app/components/about/AboutHero';
import AboutMain from '@/app/components/about/AboutMain';
import AboutValues from '@/app/components/about/AboutValues';
import AboutQuote from '@/app/components/about/AboutQuote';

export default function AboutPage() {
 const { theme } = useAppContext();
 const isDark = theme === 'dark';

 return (
  <div
   className={`min-h-screen ${isDark
    ? 'bg-linear-to-br from-gray-900 via-emerald-950 to-gray-900'
    : 'bg-linear-to-br from-emerald-50 via-green-50 to-teal-50'
    } py-16 md:py-24 transition-colors duration-300`}
  >
   <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
     <AboutHero />
     <AboutMain />
     <AboutValues />
     <AboutQuote />
    </div>
   </div>
  </div>
 );
}