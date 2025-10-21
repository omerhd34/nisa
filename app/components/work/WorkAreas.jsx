'use client';
import { CheckCircle } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';
import { data } from '@/data/data';

const WorkAreas = () => {
 const { theme } = useAppContext();
 const isDark = theme === 'dark';

 return (
  <div className="space-y-10 md:space-y-12 mb-16">
   {data.work.workAreas.map((area, index) => (
    <div
     key={index}
     className={`${isDark
      ? 'bg-emerald-950/50 border-2 border-emerald-800 backdrop-blur-lg'
      : 'bg-white/90 backdrop-blur-sm border-2 border-emerald-200'
      } rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl hover:shadow-emerald-500/20 transform hover:scale-[1.02] transition-all duration-500 animate-slideUp`}
     style={{ animationDelay: `${200 + index * 100}ms` }}
    >
     <div className="grid md:grid-cols-12 gap-0">
      <div
       className={`md:col-span-4 ${isDark
        ? 'bg-gradient-to-br from-emerald-700 to-green-800'
        : 'bg-gradient-to-br from-emerald-500 to-green-600'
        } p-10 md:p-12 flex flex-col items-center justify-center text-center relative overflow-hidden`}
      >
       <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
       <div className="relative z-10">
        <div className="bg-white/20 backdrop-blur-sm p-5 rounded-2xl mb-6 transform hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-2xl flex items-center justify-center">
         <area.icon
          className="w-16 h-16 text-white"
          strokeWidth={1.5}
         />
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

       <div>
        <h3
         className={`text-xl font-semibold ${isDark ? 'text-emerald-400' : 'text-emerald-700'
          } mb-4`}
        >
         Kapsadığı Alanlar:
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
         {area.topics.map((topic, idx) => (
          <div
           key={idx}
           className={`flex items-center gap-3 p-3 rounded-xl ${isDark ? 'bg-emerald-900/30' : 'bg-emerald-50'
            } transform hover:translate-x-1 transition-all duration-300`}
          >
           <CheckCircle
            className={`w-5 h-5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'
             } flex-shrink-0`}
           />
           <span
            className={`${isDark ? 'text-gray-300' : 'text-gray-700'
             } text-base`}
           >
            {topic}
           </span>
          </div>
         ))}
        </div>
       </div>
      </div>
     </div>
    </div>
   ))}
  </div>
 );
};

export default WorkAreas;