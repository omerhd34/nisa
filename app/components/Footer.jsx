'use client';
import Link from 'next/link';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';
import { data } from '@/data/data';

const Footer = () => {
 const { theme } = useAppContext();
 const isDark = theme === 'dark';
 const currentYear = new Date().getFullYear();

 const quickLinks = [
  { label: "Ana Sayfa", href: '/' },
  { label: "Tanışalım", href: '/about' },
  { label: "Çalışma Alanlarım", href: '/work' },
  { label: "Yazılarım", href: '/articles' },
  { label: "İletişim", href: '/contact' }
 ];

 return (
  <footer className={`${isDark ? 'bg-gradient-to-r from-emerald-950 via-green-950 to-emerald-950 border-t border-emerald-900' : 'bg-gradient-to-r from-emerald-800 via-green-800 to-emerald-800'} text-white py-10 sm:py-12 md:py-16`}>
   <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-10 lg:gap-15 mb-8">

      {/* Brand Section */}
      <div className="md:col-span-1 lg:col-span-1">
       <div className="flex items-center gap-3 mb-4">
        <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl w-12 h-12 flex items-center justify-center shadow-lg">
         <span className="text-white font-black text-xl">N</span>
        </div>
        <div>
         <h3 className="text-xl font-bold text-white">Nisa DEMİR</h3>
         <p className="text-sm text-emerald-300">Uzman Klinik Psikolog</p>
        </div>
       </div>
       <p className="hidden md:block text-emerald-200 text-sm leading-relaxed">
        {data.footer.description}
       </p>
      </div>

      {/* Quick Links */}
      <div className="hidden lg:block lg:col-span-1 lg:pl-15">
       <h4 className="text-lg font-bold mb-4 text-white">
        Hızlı Erişim
       </h4>
       <ul className="space-y-2">
        {quickLinks.map((item, index) => (
         <li key={index}>
          <Link
           href={item.href}
           className="text-emerald-200 hover:text-emerald-400 transition-colors duration-300 text-sm flex items-center gap-2"
          >
           <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
           {item.label}
          </Link>
         </li>
        ))}
       </ul>
      </div>

      {/* Contact Info */}
      <div className="md:col-span-1 lg:col-span-1">
       <h4 className="text-lg font-bold mb-4 text-white">İletişim</h4>
       <div className="space-y-3">
        <Link
         href={data.contact.contactInfo[0].link}
         className="flex items-center gap-3 text-emerald-200 hover:text-emerald-400 transition-colors duration-300 text-sm group"
        >
         <Mail className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
         <span className="break-all">{data.contact.contactInfo[0].content}</span>
        </Link>

        <div className="flex items-center gap-3 text-emerald-200 text-sm">
         <MapPin className="w-5 h-5 flex-shrink-0" />
         <span>{data.contact.contactInfo[2].content}</span>
        </div>

        <div className="flex items-center gap-3 text-emerald-200 text-sm">
         <Clock className="w-5 h-5 flex-shrink-0" />
         <span className="whitespace-pre-line">Pazartesi-Cuma: 09:00 - 18:00</span>
         <span className="whitespace-pre-line">Cumartesi-Pazar: 11:00 - 16:00</span>
        </div>
       </div>
      </div>
     </div>

     {/* Bottom Bar */}
     <div className={`pt-8 border-t ${isDark ? 'border-emerald-900' : 'border-emerald-700'} flex flex-col md:flex-row justify-between items-center gap-4`}>
      <p className="text-emerald-300 text-sm flex items-center gap-2">
       © {currentYear}
       <span className="text-emerald-400 font-semibold">Nisa DEMİR</span>
       <span>•</span>
       Tüm hakları saklıdır. </p>
     </div>
    </div>
   </div>
  </footer>
 );
};

export default Footer;