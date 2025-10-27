'use client';
import Link from 'next/link';
import { Users as UsersIcon, Mail, Clock, MapPin, Target, Briefcase, Video, User } from 'lucide-react'; // 'User' ikonu eklendi
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useAppContext } from '@/context/AppContext';

const ContactInfo = () => {
 const { theme } = useAppContext();
 const isDark = theme === 'dark';

 const socialMedia = [
  { icon: Mail, link: 'mailto:psikolognisademir@gmail.com' },
  { icon: FaInstagram, link: 'https://instagram.com/psikolognisademir' },
  { icon: FaLinkedin, link: 'https://www.linkedin.com/in/nisa-demir-798815202/' },
 ];

 const contactInfo = [
  {
   icon: Clock,
   title: 'Çalışma Saatleri:',
   type: 'schedule',
   schedule: [
    'Pazartesi & Cuma: 10:00 - 20:00',
    'Salı, Çarşamba, Perşamba: 11:00 - 20:00',
    'Cumartesi: 11:00 - 20:00',
   ],
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
   // Briefcase ikonu Çalışma Alanları için uygun.
   icon: Briefcase,
   title: 'Çalışma Alanlarım:',
   type: 'area', // Yeni tip: 'area' olarak ayarlandı
   areas: [ // 'schedule' yerine 'areas' kullanıldı, her biri ikon ve metin içerecek
    { text: 'Bireysel Terapi', icon: User }, // Tek kişi için User ikonu
    { text: 'Online Terapi', icon: Video }, // Online terapi için Video ikonu
   ],
  },
 ];

 return (
  <div className="space-y-6">
   {contactInfo.map((info, index) => (
    <div
     key={index}
     style={{ animationDelay: `${200 + index * 100}ms` }}
     className={`${isDark
      ? 'bg-emerald-950/50 border-2 border-emerald-800'
      : 'bg-white/90 border-2 border-emerald-200'
      } rounded-2xl shadow-xl p-6 transform hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 animate-slideUp`}
    >
     <div className="flex flex-col sm:flex-row items-start gap-4">
      <div
       className={`w-14 h-14 flex-shrink-0 ${isDark
        ? 'bg-linear-to-br from-emerald-700 to-green-800'
        : 'bg-linear-to-br from-emerald-500 to-green-600'
        } rounded-xl flex items-center justify-center shadow-lg`}
      >
       <info.icon className="w-7 h-7 text-white" />
      </div>

      <div className="flex-1 min-w-0">
       <h3
        className={`text-base font-bold ${isDark ? 'text-white' : 'text-gray-900'
         } mb-2`}
       >
        {info.title}
       </h3>

       {info.type === 'schedule' && (
        <ul
         className={`${isDark ? 'text-gray-400' : 'text-gray-600'
          } text-sm leading-relaxed space-y-1`}
        >
         {info.schedule.map((line, i) => (
          <li key={i}>{line}</li>
         ))}
        </ul>
       )}

       {info.type === 'text' && (
        <p
         className={`${isDark ? 'text-gray-400' : 'text-gray-600'
          } whitespace-pre-line text-sm leading-relaxed`}
        >
         {info.content}
        </p>
       )}

       {/* Yeni eklenen Çalışma Alanları (type: 'area') render bloğu */}
       {info.type === 'area' && (
        <ul
         className={`${isDark ? 'text-gray-400' : 'text-gray-600'
          } text-sm leading-relaxed space-y-1`}
        >
         {info.areas.map((area, i) => (
          <li key={i} className="flex items-center gap-2">
           <area.icon className="w-4 h-4 text-emerald-500 flex-shrink-0" /> {/* Her bir alan için ikon */}
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
           className={`${isDark
            ? 'text-emerald-400 hover:text-emerald-300'
            : 'text-emerald-700 hover:text-emerald-600'
            } transition-all duration-300 transform hover:scale-110`}
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