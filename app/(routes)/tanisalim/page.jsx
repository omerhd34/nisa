'use client';
import { UserCircle } from 'lucide-react';
import SectionHero from '@/app/components/ui/SectionHero';
import AboutMain from '@/app/components/tanisalim/AboutMain';

export default function AboutPage() {
 return (
  <div className="min-h-screen py-16 md:py-24 transition-colors duration-300 bg-gray-50 dark:bg-dark-900">
   <div className="container mx-auto px-4">
    <div className="max-w-7xl mx-auto">
     <SectionHero
      icon={UserCircle}
      pillText="Hakkımda"
      title="Tanışalım"
     />
     <AboutMain />
    </div>
   </div>
  </div>
 );
}