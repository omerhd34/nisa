'use client';
import { BookOpen } from 'lucide-react';
import SectionHero from '@/app/components/ui/SectionHero';
import ArticlesGrid from '@/app/components/yazilarim/ArticlesGrid';

export default function ArticlesPage() {
 return (
  <div className="min-h-screen py-16 md:py-24 transition-colors duration-300 bg-gray-50 dark:bg-dark-900">
   <div className="container mx-auto px-4">
    <div className="max-w-7xl mx-auto">
     <SectionHero
      icon={BookOpen}
      pillText="Blog & Makaleler"
      title="Yazılarım"
      subtitle="Ruh sağlığı, kişisel gelişim ve terapi hakkında yazılar"
     />
     <ArticlesGrid />
    </div>
   </div>
  </div>
 );
}