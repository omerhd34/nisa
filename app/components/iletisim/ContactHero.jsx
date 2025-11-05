'use client';
import { useAppContext } from '@/context/AppContext';

const ContactHero = () => {
 const { data } = useAppContext();

 return (
  <div className="text-center mb-20 animate-fadeIn">
   <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-dark-950 dark:text-gray-50">
    İletişim
   </h1>
   <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
    {data?.contact?.subtitle}
   </p>
   <div className="w-24 h-1 mx-auto mt-6 rounded-full transition-all duration-500 hover:w-32 bg-gray-600 dark:bg-gray-700"></div>
  </div>
 );
};

export default ContactHero;