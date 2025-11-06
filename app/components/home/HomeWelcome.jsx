'use client';
import Image from 'next/image';
import { useAppContext } from '@/context/AppContext';

const HomeWelcome = () => {
 const { data } = useAppContext();

 if (!data?.home) return null;

 const { texts = [], images = [], titles = [], books = [] } = data.home;

 return (
  <section className="py-8 sm:py-10 md:py-12 lg:py-16 relative">
   <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="max-w-5xl md:max-w-6xl lg:max-w-6xl xl:max-w-7xl mx-auto">
     <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading mb-3 sm:mb-4 animate-fadeIn">
       Sözler
      </h1>
      <div className="w-20 sm:w-24 md:w-32 h-1 mx-auto bg-primary dark:bg-primary-dark rounded-full"></div>
     </div>
     {texts.map((text, index) => {
      const image = images[index];
      const title = titles[index];
      const book = books[index];
      const isEven = index % 2 === 0;

      if (!image) return null;

      return (
       <div
        key={index}
        className={`group relative ${index > 0 ? 'mt-8 sm:mt-10 md:mt-12 lg:mt-16' : ''} backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl py-6 sm:py-8 md:py-10 lg:py-12 px-5 sm:px-6 md:px-8 lg:px-12 xl:px-14 animate-slideUp transition-all duration-700 overflow-hidden border bg-gray-100 dark:bg-gray-900 border-gray-400 dark:border-gray-700`}
       >
        <div className="absolute inset-0 transition-opacity duration-700 bg-gray-800/10 dark:bg-gray-800/10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-8 lg:gap-12 xl:gap-16 relative z-10">
         <div className={`space-y-5 sm:space-y-6 ${isEven ? 'order-2 md:order-1' : 'order-1 md:order-2'}`}>
          <div className="relative">
           <div className="absolute -left-3 sm:-left-4 top-0 bottom-0 w-1 rounded-full shadow-lg animate-pulse bg-primary dark:bg-primary-dark"></div>
           <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed wrap-break-word pl-4 sm:pl-5 md:pl-6 lg:pl-8 font-medium tracking-wide text-heading">
            {text}
           </p>
          </div>

          {title && (
           <div className="pt-5 sm:pt-6 border-t border-primary dark:border-primary-dark space-y-2 sm:space-y-3">
            {book && book.trim() && (
             <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold italic leading-tight tracking-tight text-gray-700 dark:text-gray-100">
              {book}
             </p>
            )}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl italic leading-relaxed font-medium text-body">
             {title}
            </p>
           </div>
          )}
         </div>

         <div className={`flex justify-center ${isEven ? 'md:justify-end' : 'md:justify-start'} ${isEven ? 'order-1 md:order-2' : 'order-2 md:order-1'}`}>
          <div className={`relative group/image${index} w-full max-w-[320px] sm:max-w-[400px] md:max-w-none`}>
           <div
            className={`relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl ${isEven ? 'animate-slideRight' : 'animate-slideLeft'} transition-all duration-700 hover:scale-[1.02]`}
            style={{ aspectRatio: '4/3' }}
           >
            <Image
             src={image}
             fill
             alt={text}
             className={`object-cover rounded-2xl sm:rounded-3xl transition-transform duration-700 group-hover/image${index}:scale-105`}
             sizes="(max-width: 640px) 320px, (max-width: 768px) 400px, 50vw"
             quality={100}
             unoptimized
            />

            <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl ring-2 ring-gray-500/20 dark:ring-gray-500/20 opacity-0 group-hover/image${index}:opacity-100 transition-opacity duration-700`}></div>
           </div>

           <div className={`absolute -z-10 ${isEven ? '-top-2 -right-2' : '-top-2 -left-2'} w-full h-full rounded-2xl sm:rounded-3xl bg-gray-500/10 dark:bg-gray-500/10 blur-xl opacity-0 group-hover/image${index}:opacity-100 transition-opacity duration-700`}></div>
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
