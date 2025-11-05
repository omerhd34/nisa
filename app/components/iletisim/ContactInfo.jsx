'use client';
import Link from 'next/link';
import { Users as UsersIcon, Mail, Clock, MapPin, Target, Briefcase, Video, User } from 'lucide-react';
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
   icon: UsersIcon,
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
  <div className="space-y-6">
   {contactInfo.map((info, index) => (
    <div
     key={index}
     style={{ animationDelay: `${200 + index * 100}ms` }}
     className="border-2 rounded-2xl shadow-xl p-6 transform hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 animate-slideUp bg-gray-100 dark:bg-gray-900 border-gray-400 dark:border-gray-700"
    >
     <div className="flex flex-col sm:flex-row items-start gap-4">
      <div className="w-14 h-14 shrink-0 rounded-xl flex items-center justify-center shadow-lg bg-gray-800 dark:bg-dark-950">
       <info.icon className="w-7 h-7 text-white" />
      </div>

      <div className="flex-1 min-w-0">
       <h3 className="text-base font-bold mb-2 text-dark-950 dark:text-gray-50">
        {info.title}
       </h3>

       {info.type === 'schedule' && (
        <ul className="text-sm leading-relaxed space-y-1 text-gray-600 dark:text-gray-300">
         {info.schedule.map((line, i) => (
          <li key={i}>{line}</li>
         ))}
        </ul>
       )}

       {info.type === 'text' && (
        <p className="whitespace-pre-line text-sm leading-relaxed text-gray-600 dark:text-gray-300">
         {info.content}
        </p>
       )}

       {info.type === 'area' && (
        <ul className="text-sm leading-relaxed space-y-1 text-gray-600 dark:text-gray-300">
         {info.areas.map((area, i) => (
          <li key={i} className="flex items-center gap-2">
           <area.icon className="w-4 h-4 shrink-0 text-gray-500 dark:text-gray-600" />
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
           className="transition-all duration-300 transform hover:scale-110 text-gray-500 dark:text-gray-600 hover:text-gray-700 dark:hover:text-gray-400"
          >
           <social.icon className="w-7 h-7" />
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
