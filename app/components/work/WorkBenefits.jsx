'use client';
import { useAppContext } from '@/context/AppContext';

const WorkBenefits = () => {
 const { theme, data } = useAppContext();
 const isDark = theme === 'dark';

 if (!data?.work?.benefits) return null;

 return (
  <div className="mb-16">
   <h2
    className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'
     } mb-10 text-center`}
   >
    Neden Benimle Çalışmalısınız?
   </h2>
   <div className="grid md:grid-cols-3 gap-6 md:gap-8">
    {data.work.benefits.map((benefit, index) => (
     <div
      key={index}
      className={`${isDark
       ? 'bg-emerald-950/50 border-2 border-emerald-800'
       : 'bg-white/90 border-2 border-emerald-200'
       } rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 hover:-translate-y-2 transition-all duration-500`}
     >
      <div
       className={`w-16 h-16 ${isDark
        ? 'bg-gradient-to-br from-emerald-700 to-green-800'
        : 'bg-gradient-to-br from-emerald-500 to-green-600'
        } rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
      >
       <benefit.icon className="w-8 h-8 text-white" />
      </div>
      <h3
       className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'
        } mb-3`}
      >
       {benefit.title}
      </h3>
      <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
       {benefit.description}
      </p>
     </div>
    ))}
   </div>
  </div>
 );
};

export default WorkBenefits;