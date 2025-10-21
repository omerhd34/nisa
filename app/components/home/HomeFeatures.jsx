'use client';
import { useAppContext } from '@/context/AppContext';


const HomeFeatures = () => {
 const { theme } = useAppContext();
 const isDark = theme === 'dark';

 return (
  <section className="py-12 md:py-16 lg:py-20">
   <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
     <div className="text-center mb-16">
      <h2
       className={`text-3xl md:text-4xl lg:text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'
        } mb-4`}
      >
       {data.home.whyChoose.title}
      </h2>
      <p
       className={`text-lg md:text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'
        } max-w-2xl mx-auto`}
      >
       {data.home.whyChoose.subtitle}
      </p>
     </div>

     <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
      {data.home.features.map((feature, index) => (
       <div
        key={index}
        className={`group ${isDark
         ? 'bg-emerald-950/50 border-2 border-emerald-800 backdrop-blur-lg'
         : 'bg-white/90 backdrop-blur-sm border-2 border-emerald-200'
         } rounded-3xl shadow-2xl p-8 md:p-10 hover:shadow-3xl hover:shadow-emerald-500/20 transform hover:scale-105 hover:-translate-y-3 transition-all duration-500 animate-slideUp animation-delay-${600 + index * 100
         }`}
       >
        <div
         className={`bg-gradient-to-br ${isDark
          ? 'from-emerald-600 to-green-700'
          : 'from-emerald-500 to-green-600'
          } w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-all duration-300`}
        >
         <feature.icon className="w-10 h-10 text-white" />
        </div>
        <h3
         className={`text-2xl md:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-800'
          } mb-4 text-center`}
        >
         {feature.title}
        </h3>
        <p
         className={`${isDark ? 'text-gray-300' : 'text-gray-600'
          } text-base md:text-lg text-center leading-relaxed`}
        >
         {feature.description}
        </p>
       </div>
      ))}
     </div>
    </div>
   </div>
  </section>
 );
};

export default HomeFeatures;