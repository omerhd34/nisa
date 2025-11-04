'use client';
import { useAppContext } from '@/context/AppContext';
import ArticlesHero from '@/app/components/yazilarim/ArticlesHero';
import ArticlesGrid from '@/app/components/yazilarim/ArticlesGrid';

export default function ArticlesPage() {
 const { theme } = useAppContext();
 const isDark = theme === 'dark';

 return (
  <div
   className={`min-h-screen ${isDark
    ? 'bg-linear-to-br from-gray-900 via-amber-950 to-gray-900'
    : 'bg-linear-to-br from-amber-50 via-orange-50 to-amber-50'
    } py-16 md:py-24 transition-colors duration-300`}
  >
   <div className="container mx-auto px-4">
    <div className="max-w-7xl mx-auto">
     <ArticlesHero />
     <ArticlesGrid />
    </div>
   </div>
  </div>
 );
}