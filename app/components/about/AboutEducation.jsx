'use client';
import { BookOpen } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';
import { data } from '@/data/data';

const AboutEducation = () => {
 const { theme } = useAppContext();
 const isDark = theme === 'dark';

 return (
  <div
   className={`${isDark
    ? 'bg-emerald-950/50 border-2 border-emerald-800 backdrop-blur-lg'
    : 'bg-white/90 backdrop-blur-sm border-2 border-emerald-200'
    } rounded-3xl shadow-2xl p-8 md:p-12 animate-slideUp animation-delay-400`}
  >
   <div className="flex items-center gap-4 mb-8">
    <div
     className={`w-14 h-14 bg-gradient-to-br ${isDark
      ? 'from-emerald-700 to-green-800'
      : 'from-emerald-500 to-green-600'
      } rounded-xl flex items-center justify-center shadow-lg`}
    >
     <BookOpen className="w-7 h-7 text-white" />
    </div>
    <h3
     className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-emerald-400' : 'text-emerald-700'
      }`}
    >
     Eğitim ve Uzmanlık
    </h3>
   </div>

   <div className="space-y-6">
    {[data.about.edu1, data.about.edu2, data.about.edu3].map(
     (item, index) => (
      <div
       key={index}
       className={`flex items-start gap-4 p-5 rounded-xl ${isDark ? 'bg-emerald-900/30' : 'bg-emerald-50'
        } transform hover:translate-x-2 transition-all duration-300`}
      >
       <div
        className={`w-8 h-8 flex-shrink-0 rounded-full ${isDark ? 'bg-emerald-600' : 'bg-emerald-500'
         } flex items-center justify-center text-white font-bold shadow-lg`}
       >
        {index + 1}
       </div>
       <span
        className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'
         } flex-1`}
       >
        {item}
       </span>
      </div>
     )
    )}
   </div>
  </div>
 );
};

export default AboutEducation;