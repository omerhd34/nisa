'use client';
import Image from 'next/image';
import { useAppContext } from '@/context/AppContext';

const HomeWelcome = () => {
 const { theme, data } = useAppContext();
 const isDark = theme === 'dark';

 if (!data?.home) return null;

 const { texts = [], images = [], titles = [], books = [] } = data.home;

 return (
  <section className="py-8 sm:py-10 md:py-12 lg:py-16 relative">
   <div className={`absolute inset-0 opacity-30 blur-3xl pointer-events-none ${isDark ? 'bg-amber-500/20' : 'bg-amber-400/10'}`}></div>

   <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="max-w-7xl mx-auto">
     {texts.map((text, index) => {
      const image = images[index];
      const title = titles[index];
      const book = books[index];
      const isEven = index % 2 === 0;

      if (!image) return null;

      return (
       <div
        key={index}
        className={`group relative ${index > 0 ? 'mt-8 sm:mt-10 md:mt-12 lg:mt-16' : ''} ${isDark
         ? 'bg-linear-to-br from-amber-950/80 via-amber-900/70 to-amber-950/80 border border-amber-700/60 backdrop-blur-xl'
         : 'bg-linear-to-br from-white/98 via-amber-50/30 to-white/98 backdrop-blur-xl border-2 border-amber-200/80 shadow-lg'
         } rounded-2xl sm:rounded-3xl shadow-2xl py-6 sm:py-8 md:py-10 lg:py-12 px-5 sm:px-7 md:px-10 lg:px-14 animate-slideUp hover:shadow-amber-500/30 transition-all duration-700 overflow-hidden`}
       >
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${isDark
         ? 'bg-linear-to-r from-transparent via-amber-500/10 to-transparent'
         : 'bg-linear-to-r from-transparent via-amber-400/5 to-transparent'
         }`}></div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10 lg:gap-16 relative z-10">
         <div className={`space-y-5 sm:space-y-6 ${isEven ? 'order-2 md:order-1' : 'order-1 md:order-2'}`}>
          <div className="relative">
           <div className={`absolute -left-3 sm:-left-4 top-0 bottom-0 w-1 ${isDark
            ? 'bg-linear-to-b from-amber-400 via-amber-500 to-amber-400'
            : 'bg-linear-to-b from-amber-500 via-amber-600 to-amber-500'
            } rounded-full shadow-lg shadow-amber-500/50 animate-pulse`}></div>

           <div className={`absolute -left-3 sm:-left-4 top-0 bottom-0 w-1 ${isDark
            ? 'bg-amber-400'
            : 'bg-amber-500'
            } rounded-full opacity-60 blur-sm animate-pulse`}></div>

           <p
            className={`${isDark ? 'text-gray-100' : 'text-gray-800'
             } text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed wrap-break-word pl-4 sm:pl-6 md:pl-8 font-medium tracking-wide`}
           >
            {text}
           </p>
          </div>

          {title && (
           <div className={`pt-5 sm:pt-6 border-t ${isDark
            ? 'border-amber-700/60'
            : 'border-amber-200/70'
            } space-y-2 sm:space-y-3`}>
            {book && book.trim() && (
             <p className={`${isDark ? 'text-transparent bg-clip-text bg-linear-to-r from-amber-300 via-amber-200 to-amber-300' : 'text-transparent bg-clip-text bg-linear-to-r from-amber-700 via-amber-600 to-amber-700'} text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold italic leading-tight tracking-tight`}>
              {book}
             </p>
            )}
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm sm:text-base md:text-lg lg:text-xl italic leading-relaxed font-medium`}>
             {title}
            </p>
           </div>
          )}
         </div>

         <div className={`flex justify-center ${isEven ? 'md:justify-end' : 'md:justify-start'} ${isEven ? 'order-1 md:order-2' : 'order-2 md:order-1'}`}>
          <div className={`relative group/image${index}`}>
           <div
            className={`relative w-full max-w-[400px] sm:max-w-[450px] md:w-96 md:max-w-none lg:w-md xl:w-lg rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl ${isEven ? 'animate-slideRight' : 'animate-slideLeft'} hover:shadow-amber-500/40 transition-all duration-700 hover:scale-[1.02]`}
            style={{ aspectRatio: '4/3' }}
           >
            <Image
             src={image}
             fill
             alt={text}
             className={`object-cover rounded-2xl sm:rounded-3xl transition-transform duration-700 group-hover/image${index}:scale-105`}
             sizes="(max-width: 640px) 400px, (max-width: 768px) 450px, (max-width: 1024px) 384px, (max-width: 1280px) 448px, 512px"
             quality={100}
             unoptimized
            />

            <div className={`absolute inset-0 bg-linear-to-l ${isDark
             ? 'from-amber-950/40 via-amber-950/10 to-transparent'
             : 'from-white/50 via-white/20 to-transparent'
             } pointer-events-none rounded-2xl sm:rounded-3xl transition-opacity duration-700 group-hover/image${index}:opacity-0`}></div>

            <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl ${isDark
             ? 'ring-2 ring-amber-500/30'
             : 'ring-2 ring-amber-400/40'
             } opacity-0 group-hover/image${index}:opacity-100 transition-opacity duration-700`}></div>
           </div>

           <div className={`absolute -z-10 ${isEven ? '-top-2 -right-2' : '-top-2 -left-2'} w-full h-full rounded-2xl sm:rounded-3xl ${isDark
            ? 'bg-amber-500/20'
            : 'bg-amber-400/20'
            } blur-xl opacity-0 group-hover/image${index}:opacity-100 transition-opacity duration-700`}></div>
          </div>
         </div>
        </div>
       </div>
      );
     })}
    </div>
   </div>
  </section>
 );
};

export default HomeWelcome;