'use client';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';
import Link from 'next/link';

const Footer = () => {
 const { theme } = useAppContext();
 const isDark = theme === 'dark';
 const currentYear = new Date().getFullYear();

 return (
  <footer className={`${isDark ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-800'} text-white py-12 md:py-16`}>
   <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
     <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8">
      {/* Brand Section */}
      <div>
       <div className="flex items-center gap-3 mb-4">
        <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl w-12 h-12 flex items-center justify-center shadow-lg">
         <span className="text-white font-black text-xl">N</span>
        </div>
        <div>
         <h3 className="text-xl font-bold text-white">Nisa DEMİR</h3>
         <p className="text-sm text-gray-400">Uzman Klinik Psikolog</p>
        </div>
       </div>
       <p className="text-gray-400 text-sm leading-relaxed">
        Bireysel ve online terapi hizmetleriyle yanınızdayım. Ruh sağlığınız için profesyonel destek.
       </p>
      </div>

      {/* Quick Links */}
      <div>
       <h4 className="text-lg font-bold mb-4 text-white">
        Hızlı Erişim
       </h4>
       <ul className="space-y-2">
        {[
         { tr: 'Ana Sayfa', href: '/' },
         { tr: 'Hakkımda', href: '/about' },
         { tr: 'Çalışma Alanlarım', href: '/workAreas' },
         { tr: 'Yazılarım', href: '/articles' },
         { tr: 'İletişim', href: '/contact' }
        ].map((item, index) => (
         <li key={index}>
          <Link
           href={item.href}
           className="text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm flex items-center gap-2"
          >
           <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
           {item.tr}
          </Link>
         </li>
        ))}
       </ul>
      </div>

      {/* Contact Info */}
      <div>
       <h4 className="text-lg font-bold mb-4 text-white">İletişim</h4>
       <div className="space-y-3">
        <a
         href="mailto:psikolognisademir@gmail.com"
         className="flex items-start gap-3 text-gray-400 hover:text-teal-400 transition-colors duration-300 text-sm group"
        >
         <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
         <span className="break-all">psikolognisademir@gmail.com</span>
        </a>

        <div className="flex items-start gap-3 text-gray-400 text-sm">
         <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
         <span>İstanbul</span>
        </div>

        <div className="flex items-start gap-3 text-gray-400 text-sm">
         <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
         <span>
          Pzt-Cum: 09:00 - 18:00</span>
        </div>
       </div>
      </div>
     </div>

     {/* Bottom Bar */}
     <div className={`pt-8 border-t ${isDark ? 'border-gray-800' : 'border-gray-700'} flex flex-col md:flex-row justify-between items-center gap-4`}>
      <p className="text-gray-500 text-sm flex items-center gap-2">
       © {currentYear}
       <span className="text-teal-400 font-semibold">Nisa DEMİR</span>
       <span>•</span>
       Tüm hakları saklıdır.
      </p>
     </div>
    </div>
   </div>
  </footer>
 );
};

export default Footer;