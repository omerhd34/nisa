'use client';
import { Heart, CheckCircle } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';
import { data } from '@/data/data';

const HomeWelcome = () => {
 const { theme } = useAppContext();
 const isDark = theme === 'dark';

 return (
  <section className="py-12 md:py-16 lg:py-20">
   <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
     <div
      className={`${isDark
       ? 'bg-emerald-950/50 border border-emerald-800 backdrop-blur-lg'
       : 'bg-white/90 backdrop-blur-sm border-2 border-emerald-200'
       } rounded-3xl shadow-2xl p-10 md:p-14 lg:p-20 animate-slideUp animation-delay-400`}
     >
      <div className="grid md:grid-cols-2 gap-12 items-center">
       <div>
        <h2
         className={`text-3xl md:text-4xl lg:text-5xl font-bold ${isDark ? 'text-emerald-400' : 'text-emerald-700'
          } mb-6 md:mb-8`}
        >
         Merhaba!
        </h2>
        <p
         className={`${isDark ? 'text-gray-300' : 'text-gray-700'
          } text-lg md:text-xl leading-relaxed mb-8`}
        >
         {data.home.welcomeText}
        </p>

        <div className="space-y-4">
         {data.home.benefits.map((benefit, index) => (
          <div
           key={index}
           className="flex items-start gap-3 animate-slideUp"
           style={{ animationDelay: `${0.6 + index * 0.1}s` }}
          >
           <CheckCircle
            className={`w-6 h-6 ${isDark ? 'text-emerald-400' : 'text-emerald-600'
             } flex-shrink-0 mt-1`}
           />
           <span
            className={`${isDark ? 'text-gray-300' : 'text-gray-700'
             } text-lg`}
           >
            {benefit}
           </span>
          </div>
         ))}
        </div>
       </div>

       <div
        className={`relative h-80 md:h-96 rounded-2xl bg-gradient-to-br ${isDark
         ? 'from-emerald-700 to-green-800'
         : 'from-emerald-400 to-green-500'
         } shadow-2xl overflow-hidden`}
       >
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
         <Heart className="w-32 h-32 text-white/80" strokeWidth={1.5} />
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default HomeWelcome;