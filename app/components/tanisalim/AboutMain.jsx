'use client';
import { User, Award } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';

const AboutMain = () => {
 const { theme, data } = useAppContext();
 const isDark = theme === 'dark';

 if (!data?.about) return null;

 return (
  <div
   className={`${isDark
    ? 'bg-amber-950/50 border-2 border-amber-800 backdrop-blur-lg'
    : 'bg-white/90 backdrop-blur-sm border-2 border-amber-200'
    } rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 mb-12 animate-slideUp`}
  >
   <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
    <div className="md:col-span-2">
     <div
      className={`relative w-64 h-64 md:w-80 md:h-80 mx-auto bg-linear-to-br ${isDark
       ? 'from-amber-700 to-orange-800'
       : 'from-amber-500 to-orange-600'
       } rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-105 hover:rotate-3 transition-all duration-500`}
     >
      <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent rounded-3xl"></div>
      <User
       className="w-32 h-32 md:w-40 md:h-40 text-white relative z-10"
       strokeWidth={1.5}
      />
      <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
       <Award className="w-10 h-10 text-white" />
      </div>
     </div>
    </div>

    <div className="md:col-span-3">
     <h2
      className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-amber-400' : 'text-amber-700'
       } mb-6`}
     >
      Hakkımda
     </h2>

     <div className="space-y-6">
      <p
       className={`${isDark ? 'text-gray-300' : 'text-gray-700'
        } text-lg leading-relaxed`}
      >
       {data.about.text1}
      </p>
      <p
       className={`${isDark ? 'text-gray-300' : 'text-gray-700'
        } text-lg leading-relaxed`}
      >
       {data.about.text2}
      </p>
      <p
       className={`${isDark ? 'text-gray-300' : 'text-gray-700'
        } text-lg leading-relaxed`}
      >
       {data.about.text3}
      </p>
     </div>
    </div>
   </div>
  </div>
 );
};

export default AboutMain;