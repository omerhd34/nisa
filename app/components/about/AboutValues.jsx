'use client';
import { useAppContext } from '@/context/AppContext';
import { data } from '@/data/data';

const AboutValues = () => {
 const { theme } = useAppContext();
 const isDark = theme === 'dark';

 return (
  <div className="mb-12">
   <h3
    className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'
     } mb-10 text-center`}
   >
    Değerlerim
   </h3>
   <div className="grid md:grid-cols-3 gap-6 md:gap-8">
    {data.about.values.map((value, index) => (
     <div
      key={index}
      className={`${isDark
       ? 'bg-emerald-950/50 border-2 border-emerald-800'
       : 'bg-white/90 border-2 border-emerald-200'
       } rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 animate-slideUp animation-delay-${200 + index * 100
       }`}
     >
      <div
       className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
      >
       <value.icon className="w-8 h-8 text-white" />
      </div>
      <h4
       className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'
        } mb-3`}
      >
       {value.title}
      </h4>
      <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
       {value.description}
      </p>
     </div>
    ))}
   </div>
  </div>
 );
};

export default AboutValues;