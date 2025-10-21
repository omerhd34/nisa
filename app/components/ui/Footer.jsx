'use client';

import Link from 'next/link';
import { Clock, Mail, MapPin } from 'lucide-react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useAppContext } from '@/context/AppContext';
import { data } from '@/data/data';

export default function Footer() {
 const { theme } = useAppContext();
 const isDark = theme === 'dark';
 const currentYear = new Date().getFullYear();

 const quickLinks = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Tanışalım', href: '/about' },
  { label: 'Çalışma Alanlarım', href: '/work' },
  { label: 'Yazılarım', href: '/articles' },
  { label: 'İletişim', href: '/contact' },
 ];

 const socialMedia = [
  { icon: Mail, link: 'mailto:psikolognisademir@gmail.com', label: 'E-posta' },
  { icon: FaInstagram, link: 'https://instagram.com/psikolognisademir', label: 'Instagram' },
  { icon: FaLinkedin, link: 'https://www.linkedin.com/in/nisa-demir-798815202/', label: 'LinkedIn' },
 ];

 return (
  <footer
   className={`${isDark
    ? 'bg-gradient-to-r from-emerald-950 via-green-950 to-emerald-950 border-t border-emerald-900'
    : 'bg-gradient-to-r from-emerald-700 via-green-700 to-emerald-800'
    } text-white py-14 md:py-16 transition-colors duration-500`}
  >
   <div className="container mx-auto px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-10 text-center md:text-left">
     <div className="flex flex-col items-center md:items-start space-y-3">
      <div className="flex items-center gap-3">
       <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl w-12 h-12 flex items-center justify-center shadow-lg">
        <span className="text-white font-black text-xl">ND</span>
       </div>
       <div>
        <h3 className="text-xl font-bold text-white">Nisa DEMİR</h3>
        <p className="text-sm text-emerald-200">Uzman Klinik Psikolog</p>
       </div>
      </div>

      <p className="text-emerald-200 text-sm leading-relaxed max-w-xs mt-2">
       {data?.footer?.description ?? 'Bireysel ve online terapi hizmetleriyle yanınızdayım.'}
      </p>
     </div>

     <div>
      <h4 className="text-lg font-bold mb-4 text-white tracking-wide">Hızlı Erişim</h4>
      <ul className="space-y-2">
       {quickLinks.map((item, idx) => (
        <li key={idx}>
         <Link
          href={item.href}
          className="text-emerald-200 hover:text-white transition-colors duration-300 text-sm flex items-center justify-center md:justify-start gap-2"
         >
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" aria-hidden />
          {item.label}
         </Link>
        </li>
       ))}
      </ul>
     </div>

     <div>
      <h4 className="text-lg font-bold mb-4 text-white tracking-wide">İletişim</h4>

      <div className="flex justify-center md:justify-start items-start gap-3 text-emerald-200 text-sm mb-4">
       <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
       <span className="font-medium">İstanbul (Online Terapi Hizmeti)</span>
      </div>

      <div className="space-y-3 mb-6">
       {socialMedia.map((s, i) => (
        <Link
         key={i}
         href={s.link}
         target={s.link.startsWith('http') ? '_blank' : undefined}
         rel={s.link.startsWith('http') ? 'noopener noreferrer' : undefined}
         aria-label={s.label}
         className="text-emerald-200 hover:text-white transition-colors duration-300 text-sm flex items-center justify-center md:justify-start gap-3 group"
        >
         <s.icon className="w-5 h-5 flex-shrink-0 text-emerald-300 group-hover:text-white transform group-hover:scale-110 transition-transform" />
         <span className="font-medium">{s.label === 'E-posta' ? 'psikolognisademir@gmail.com' : s.label}</span>
        </Link>
       ))}
      </div>

      <div>
       <h5 className="text-md font-semibold mb-2 text-white">Çalışma Saatleri</h5>
       <div className="flex justify-center md:justify-start items-center gap-3 text-emerald-200 text-sm">
        <Clock className="w-5 h-5 flex-shrink-0" />
        <div className="flex flex-col space-y-1">
         <p>Pazartesi, Cuma: 10:00 - 20:00</p>
         <p>Salı - Perşembe: 11:00 - 20:00</p>
         <p>Cumartesi: 11:00 - 20:00</p>
        </div>
       </div>
      </div>

     </div>
    </div>

    <div
     className={`pt-6 border-t ${isDark ? 'border-emerald-900' : 'border-emerald-600/60'
      } flex flex-col md:flex-row justify-between items-center gap-4`}
    >
     <p className="text-emerald-300 text-sm">
      © {currentYear}{' '}
      <span className="text-emerald-400 font-semibold hover:text-white transition-colors">Nisa DEMİR</span>
     </p>
     <p className="text-emerald-300 text-sm">Tüm hakları saklıdır.</p>
    </div>
   </div>
  </footer>
 );
}