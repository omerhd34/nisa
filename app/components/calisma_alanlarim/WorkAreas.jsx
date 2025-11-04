'use client';
import { CheckCircle, User, Video } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';

const iconMap = {
 User,
 Video,
};

const WorkAreas = () => {
 const { theme, data } = useAppContext();
 const isDark = theme === 'dark';

 if (!data?.work?.workAreas) return null;

 return (
  <div className="space-y-10 md:space-y-12 mb-16">
   {data.work.workAreas.map((area, index) => {
    const IconComponent = iconMap[area.icon];

    return (
     <div
      key={index}
      className={`${isDark
       ? 'bg-amber-950/50 border-2 border-amber-800 backdrop-blur-lg'
       : 'bg-white/90 backdrop-blur-sm border-2 border-amber-200'
       } rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl hover:shadow-amber-500/20 transform hover:scale-[1.02] transition-all duration-500 animate-slideUp`}
      style={{ animationDelay: `${200 + index * 100}ms` }}
     >
      <div className="grid md:grid-cols-12 gap-0">
       <div
        className={`md:col-span-4 ${isDark
         ? 'bg-linear-to-br from-amber-700 to-orange-800'
         : 'bg-linear-to-br from-amber-500 to-orange-600'
         } p-10 md:p-12 flex flex-col items-center justify-center text-center relative overflow-hidden`}
       >
        <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
        <div className="relative z-10">
         <div className="bg-white/20 backdrop-blur-sm p-5 rounded-2xl mb-6 transform hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-2xl flex items-center justify-center">
          {IconComponent && (
           <IconComponent
            className="w-16 h-16 text-white"
            strokeWidth={1.5}
           />
          )}
         </div>
         <h2 className="text-3xl md:text-4xl font-bold text-white">
          {area.title}
         </h2>
        </div>
       </div>

       <div className="md:col-span-8 p-8 md:p-12">
        <p
         className={`${isDark ? 'text-gray-300' : 'text-gray-700'
          } text-lg leading-relaxed mb-8`}
        >
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