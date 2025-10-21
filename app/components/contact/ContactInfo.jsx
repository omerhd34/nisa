'use client';
import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';
import { data } from '@/data/data';

const ContactInfo = () => {
 const { theme } = useAppContext();
 const isDark = theme === 'dark';

 return (
  <div className="lg:col-span-1 space-y-6">
   {data.contact.contactInfo.map((info, index) => (
    <div
     key={index}
     style={{
      animationDelay: `${200 + index * 100}ms`,
     }}
     className={`${isDark
      ? 'bg-emerald-950/50 border-2 border-emerald-800'
      : 'bg-white/90 border-2 border-emerald-200'
      } rounded-2xl shadow-xl p-6 transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 animate-slideUp`}
    >
     <div
      className={`w-14 h-14 ${isDark
       ? 'bg-gradient-to-br from-emerald-700 to-green-800'
       : 'bg-gradient-to-br from-emerald-500 to-green-600'
       } rounded-xl flex items-center justify-center mb-4 shadow-lg`}
     >
      <info.icon className="w-7 h-7 text-white" />
     </div>
     <h3
      className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'
       } mb-2`}
     >
      {info.title}
     </h3>
     {info.link ? (
      info.link.startsWith('mailto:') || info.link.startsWith('tel:') ? (
       <Link
        href={info.link}
        className={`${isDark ? 'text-emerald-400' : 'text-emerald-700'
         } hover:underline block break-all`}
       >
        {info.content}
       </Link>
      ) : (
       <Link
        href={info.link}
        className={`${isDark ? 'text-emerald-400' : 'text-emerald-700'
         } hover:underline block break-all`}
       >
        {info.content}
       </Link>
      )
     ) : (
      <p
       className={`${isDark ? 'text-gray-400' : 'text-gray-600'
        } whitespace-pre-line`}
      >
       {info.content}
      </p>
     )}
    </div>
   ))}
  </div>
 );
};

export default ContactInfo;