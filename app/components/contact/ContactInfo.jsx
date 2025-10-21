'use client';
import Link from 'next/link';
import { Users as UsersIcon, Mail, Clock, MapPin } from 'lucide-react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useAppContext } from '@/context/AppContext';

const ContactInfo = () => {
 const { theme } = useAppContext();
 const isDark = theme === 'dark';

 const contactInfo = [
  {
   icon: Mail,
   title: "E-posta:",
   content: "psikolognisademir@gmail.com",
   link: "mailto:psikolognisademir@gmail.com",
  },
  {
   icon: Clock,
   title: "Çalışma Saatleri:",
   content: "Pazartesi-Cuma: 09:00 - 18:00\nCumartesi-Pazar: 11:00 - 16:00",
  },
  {
   icon: MapPin,
   title: "Lokasyon:",
   content: "İstanbul",
  },
 ];

 const socialMedia = [
  {
   icon: FaInstagram,
   link: "https://instagram.com/psikolognisademir",
  },
  {
   icon: FaLinkedin,
   link: "https://www.linkedin.com/in/nisa-demir-798815202/",
  },
 ];

 return (
  <div className="lg:col-span-1 space-y-6">
   {contactInfo.map((info, index) => (
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

   {/* Sosyal Medya İkonları */}
   <div
    style={{
     animationDelay: `${200 + contactInfo.length * 100}ms`,
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
     <UsersIcon className="w-7 h-7 text-white" />
    </div>
    <h3
     className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'
      } mb-3`}
    >
     Sosyal Medya
    </h3>
    <div className="flex gap-4 justify-center">
     {socialMedia.map((social, index) => (
      <Link
       key={index}
       href={social.link}
       target="_blank"
       rel="noopener noreferrer"
       className={`${isDark ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-700 hover:text-emerald-600'
        } transition-all duration-300 transform hover:scale-110`}
      >
       <social.icon className="w-8 h-8" />
      </Link>
     ))}
    </div>
   </div>
  </div>
 );
};

export default ContactInfo;