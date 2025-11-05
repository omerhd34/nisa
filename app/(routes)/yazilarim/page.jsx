'use client';
import ArticlesHero from '@/app/components/yazilarim/ArticlesHero';
import ArticlesGrid from '@/app/components/yazilarim/ArticlesGrid';

export default function ArticlesPage() {
 return (
  <div className="min-h-screen py-16 md:py-24 transition-colors duration-300 bg-gray-50 dark:bg-dark-900">
   <div className="container mx-auto px-4">
    <div className="max-w-7xl mx-auto">
     <ArticlesHero />
     <ArticlesGrid />
    </div>
   </div>
  </div>
 );
}