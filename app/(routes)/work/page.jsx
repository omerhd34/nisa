'use client';
import { useAppContext } from '@/context/AppContext';
import WorkHero from '@/app/components/work/WorkHero';
import WorkAreas from '@/app/components/work/WorkAreas';
import WorkBenefits from '@/app/components/work/WorkBenefits';
import WorkCTA from '@/app/components/work/WorkCTA';

export default function WorkPage() {
 const { theme } = useAppContext();
 const isDark = theme === 'dark';

 return (
  <div
   className={`min-h-screen ${isDark
    ? 'bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900'
    : 'bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50'
    } py-16 md:py-24 transition-colors duration-300`}
  >
   <div className="container mx-auto px-4">
    <div className="max-w-7xl mx-auto">
     <WorkHero />
     <WorkAreas />
     <WorkBenefits />
     <WorkCTA />
    </div>
   </div>
  </div>
 );
}