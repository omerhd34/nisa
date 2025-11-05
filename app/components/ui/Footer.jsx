'use client';

import Link from 'next/link';
import { Clock, Mail, MapPin } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import { useAppContext } from '@/context/AppContext';

export default function Footer() {
 const { data } = useAppContext();
 const currentYear = new Date().getFullYear();

 const quickLinks = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Tanışalım', href: '/tanisalim' },
  { label: 'Çalışma Alanlarım', href: '/calisma_alanlarim' },
  { label: 'Yazılarım', href: '/yazilarim' },
  { label: 'İletişim', href: '/iletisim' },
 ];

 const socialMedia = [
  { icon: Mail, link: 'mailto:psikolognisademir@gmail.com', label: 'E-posta' },
  { icon: FaInstagram, link: 'https://instagram.com/psikolognisademir', label: 'Instagram' },
 ];

 const workingHours = data?.footer?.workingHours;

 return (
  <footer className="py-14 md:py-16 transition-colors duration-500 border-t bg-gray-100 dark:bg-dark-800 border-gray-500 dark:border-dark-500">
   <div className="container mx-auto px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-10 text-center md:text-left">
     <div className="flex flex-col items-center md:items-start space-y-3">
      <div className="flex items-center gap-3">
       <div className="rounded-xl w-12 h-12 flex items-center justify-center shadow-lg bg-gray-300 dark:bg-gray-900">
        <span className="text-white font-black text-xl">ND</span>
       </div>
       <div>
        <h3 className="text-xl font-bold text-dark-950 dark:text-gray-50">Nisa DEMİR</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300">Uzman Klinik Psikolog</p>
       </div>
      </div>

      <p className="text-sm leading-relaxed max-w-xs mt-2 text-gray-700 dark:text-gray-300">
       {data?.footer?.description || 'Bireysel ve online terapi hizmetleriyle yanınızdayım.'}
      </p>
     </div>

     <div>
      <h4 className="text-lg font-bold mb-4 text-dark-950 dark:text-gray-50 tracking-wide">Hızlı Erişim</h4>
      <ul className="space-y-2">
       {quickLinks.map((item, idx) => (
        <li key={idx} className="flex justify-center md:justify-start">
         <Link
          href={item.href}
          className="transition-colors duration-300 text-sm inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-dark-950 dark:hover:text-gray-50 hover:bg-white/10 dark:hover:bg-white/10 rounded-xl px-2 py-1"
         >
          <span className="w-1.5 h-1.5 rounded-full bg-gray-800 dark:bg-gray-100" aria-hidden />
          {item.label}
         </Link>
        </li>
       ))}
      </ul>
     </div>

     <div>
      <h4 className="text-lg font-bold mb-4 text-dark-950 dark:text-gray-50 tracking-wide">İletişim</h4>

      <div className="space-y-3 mb-6">
       <div className="transition-colors duration-300 text-sm flex items-center justify-center md:justify-start gap-3 text-gray-700 dark:text-gray-300 rounded-xl px-2 py-1">
        <MapPin className="w-5 h-5 shrink-0 text-gray-800 dark:text-gray-100" />
        <span className="font-medium">İstanbul & Online Terapi</span>
       </div>

       {socialMedia.map((s, i) => (
        <Link
         key={i}
         href={s.link}
         target={s.link.startsWith('http') ? '_blank' : undefined}
         rel={s.link.startsWith('http') ? 'noopener noreferrer' : undefined}
         aria-label={s.label}
         className="transition-colors duration-300 text-sm flex items-center justify-center md:justify-start gap-3 group text-gray-700 dark:text-gray-300 hover:text-dark-950 dark:hover:text-gray-50 hover:bg-white/10 dark:hover:bg-white/10 rounded-xl px-2 py-1"
        >
         <s.icon className="w-5 h-5 shrink-0 transform group-hover:scale-110 transition-transform text-gray-800 dark:text-gray-100" />
         <span className="font-medium">{s.label === 'E-posta' ? 'psikolognisademir@gmail.com' : s.label}</span>
        </Link>
       ))}
      </div>

      <div>
       <h4 className="text-lg font-bold mb-4 text-dark-950 dark:text-gray-50 tracking-wide">Çalışma Saatleri</h4>
       <div className="transition-colors duration-300 text-sm flex items-center justify-center md:justify-start gap-3 text-gray-700 dark:text-gray-300 rounded-xl px-2 py-1">
        <Clock className="w-5 h-5 shrink-0 text-gray-800 dark:text-gray-100" />
        <div className="flex flex-col space-y-1">
         {workingHours.map((hours, idx) => (
          <p key={idx}>{hours}</p>
         ))}
        </div>
       </div>
      </div>
     </div>
    </div>

    <div className="pt-6 border-t border-gray-500 dark:border-dark-500 flex flex-col md:flex-row justify-between items-center gap-4">
     <p className="text-sm text-gray-700 dark:text-gray-300">
      © {currentYear} { }
      <span className="text-dark-950 dark:text-gray-50 font-semibold transition-colors"> Nisa DEMİR</span>
     </p>
     <p className="text-sm text-gray-700 dark:text-gray-300">Tüm hakları saklıdır.</p>
    </div>
   </div>
  </footer>
 );
}
