'use client';
import Image from 'next/image';
import { Award } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';

const AboutMain = () => {
 const { data } = useAppContext();

 if (!data?.about) return null;

 return (
  <div className="card p-8 md:p-12 lg:p-16 mb-12 animate-slideUp">
   <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
    <div className="md:col-span-2">
     <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-105 hover:rotate-3 transition-all duration-500 bg-linear-to-br from-dark-500 to-dark-600 dark:from-dark-500 dark:to-dark-600 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent rounded-3xl"></div>
      <Image
       src="/depresif-konum.jpg"
       alt="Profil Resmi"
       width={320}
       height={320}
       className="w-full h-full object-cover rounded-3xl relative z-10"
      />
      <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full flex items-center justify-center shadow-lg animate-pulse  bg-cover bg-center overflow-hidden">
       <div className="absolute inset-0 bg-black/20 dark:bg-black/30"></div>
       <Award className="w-10 h-10 text-dark-950 dark:text-gray-50 relative z-10" />
      </div>
     </div>
    </div>

    <div className="md:col-span-3">
     <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-700 dark:text-gray-100">
      Hakkımda
     </h2>

     <div className="space-y-6">
      <p className="text-lg leading-relaxed text-body">
       {data.about.text1}
      </p>
      <p className="text-lg leading-relaxed text-body">
       {data.about.text2}
      </p>
      <p className="text-lg leading-relaxed text-body">
       {data.about.text3}
      </p>
     </div>
    </div>
   </div>
  </div>
 );
};

export default AboutMain;