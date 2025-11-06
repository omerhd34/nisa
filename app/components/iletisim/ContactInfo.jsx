'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Mail, Clock, MapPin, Briefcase, Video, User } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { useAppContext } from '@/context/AppContext';

const ContactInfo = () => {
 const { data } = useAppContext();

 const socialMedia = [
  { icon: Mail, link: 'mailto:psikolognisademir@gmail.com' },
  { icon: FaInstagram, link: 'https://instagram.com/psikolognisademir' },
 ];

 const contactInfo = [
  {
   icon: Clock,
   title: 'Çalışma Saatleri:',
   type: 'schedule',
   schedule: data?.contact?.workingHours
  },
  {
   icon: MapPin,
   title: 'Lokasyon:',
   content: 'İstanbul',
   type: 'text',
  },
  {
   icon: Users,
   title: 'İletişim:',
   type: 'social',
   socialLinks: socialMedia,
  },
  {
   icon: Briefcase,
   title: 'Çalışma Alanlarım:',
   type: 'area',
   areas: [
    { text: 'Bireysel Terapi', icon: User },
    { text: 'Online Terapi', icon: Video },
   ],
  },
 ];

 return (
  <div className="flex flex-col gap-7 h-full w-full">
   {contactInfo.map((info, index) => (
    <div
     key={index}
     style={{ animationDelay: `${200 + index * 100}ms` }}
     className="border-2 rounded-2xl shadow-xl p-6 transform hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 animate-slideUp bg-gray-100 dark:bg-gray-900 border-gray-400 dark:border-gray-700 relative overflow-hidden"
    >
     <div className="absolute inset-0 ">
      <div className="absolute inset-0 bg-linear-to-r from-orange-50/50 to-amber-50/50 dark:from-orange-900/20 dark:to-amber-900/20"></div>
     </div>
     <div className="flex flex-col sm:flex-row items-start gap-4 relative z-10">
      <div className="w-14 h-14 shrink-0 rounded-xl flex items-center justify-center shadow-lg  bg-cover bg-center relative overflow-hidden">
       <div className="absolute inset-0 bg-primary dark:bg-primary-dark"></div>
       <info.icon className="w-7 h-7 text-heading relative z-10" />
      </div>

      <div className="flex-1 min-w-0">
       <h3 className="text-base font-bold mb-2 text-heading">
        {info.title}
       </h3>

       {info.type === 'schedule' && (
        <ul className="text-sm leading-relaxed space-y-1 text-body">
         {info.schedule.map((line, i) => (
          <li key={i}>{line}</li>
         ))}
        </ul>
       )}

       {info.type === 'text' && (
        <p className="whitespace-pre-line text-sm leading-relaxed text-body">
         {info.content}
        </p>
       )}

       {info.type === 'area' && (
        <ul className="text-sm leading-relaxed space-y-1 text-body">
         {info.areas.map((area, i) => (
          <li key={i} className="flex items-center gap-2">
           <area.icon className="w-4 h-4 shrink-0 text-primary dark:text-primary-dark" />
           <span>{area.text}</span>
          </li>
         ))}
        </ul>
       )}

       {info.type === 'social' && (
        <div className="flex gap-4 mt-3">
         {info.socialLinks.map((social, idx) => (
          <Link
           key={idx}
           href={social.link}
           target="_blank"
           rel="noopener noreferrer"
           className="transition-all duration-300 transform hover:scale-110 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400"
          >
           <social.icon className="w-7 h-7 text-primary dark:text-primary-dark" />
          </Link>
         ))}
        </div>
       )}
      </div>
     </div>
    </div>
   ))}
  </div>
 );
};

export default ContactInfo;