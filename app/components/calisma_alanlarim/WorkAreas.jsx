'use client';
import { User, Video } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';

const iconMap = {
 User,
 Video,
};

const WorkAreas = () => {
 const { data } = useAppContext();

 if (!data?.work?.workAreas) return null;

 return (
  <div className="space-y-10 md:space-y-12 mb-16">
   {data.work.workAreas.map((area, index) => {
    const IconComponent = iconMap[area.icon];

    return (
     <div
      key={index}
      className="rounded-3xl shadow-2xl overflow-hidden animate-slideUp border-2 bg-gray-100 dark:bg-gray-900 border-gray-400 dark:border-gray-700"
      style={{ animationDelay: `${200 + index * 100}ms` }}
     >
      <div className="grid md:grid-cols-12 gap-0">
       <div className="md:col-span-4 p-10 md:p-12 flex flex-col items-center justify-center text-center relative overflow-hidden bg-gray-800 dark:bg-dark-950">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10">
         <div className=" bg-cover bg-center backdrop-blur-sm p-5 rounded-2xl mb-6 transform hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-2xl flex items-center justify-center relative overflow-hidden bg-orange-a">
          <div className="absolute inset-0"></div>
          {IconComponent && (
           <IconComponent
            className="w-16 h-16 text-dark-950 dark:text-gray-50 relative z-10"
            strokeWidth={1.5}
           />
          )}
         </div>
         <h2 className="text-3xl md:text-4xl font-bold text-white">
          {area.title}
         </h2>
        </div>
       </div>

       <div className="md:col-span-8 p-8 md:p-12 relative overflow-hidden">
        <div className="absolute inset-0 ">
         <div className="absolute inset-0 bg-linear-to-r from-orange-50/50 to-amber-50/50 dark:from-orange-900/20 dark:to-amber-900/20"></div>
        </div>
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 relative z-10">
         {area.description}
        </p>
       </div>
      </div>
     </div>
    );
   })}
  </div>
 );
};

export default WorkAreas;