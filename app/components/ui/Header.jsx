'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Briefcase, FileText, Mail, Menu, X, Moon, Sun } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';
import Logo from './Logo';

const Header = () => {
 const { theme, toggleTheme } = useAppContext();
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const pathname = usePathname();
 const isDark = theme === 'dark';

 const menuItems = [
  { id: 'home', label: "Ana Sayfa", icon: Home, href: '/' },
  { id: 'about', label: "Tanışalım", icon: User, href: '/tanisalim' },
  { id: 'work', label: "Çalışma Alanlarım", icon: Briefcase, href: '/calisma_alanlarim' },
  { id: 'articles', label: "Yazılarım", icon: FileText, href: '/yazilarim' },
  { id: 'contact', label: "İletişim", icon: Mail, href: '/iletisim' }
 ];

 const isActive = (href) => {
  if (href === '/') {
   return pathname === '/';
  }
  return pathname.startsWith(href);
 };

 return (
  <header className={`${isDark ? 'bg-linear-to-r from-emerald-900 via-green-900 to-emerald-900' : 'bg-linear-to-r from-emerald-700 via-green-700 to-emerald-700'} text-white shadow-2xl sticky top-0 z-50 border-b ${isDark ? 'border-emerald-800' : 'border-emerald-600/50'}`}>
   <div className="container mx-auto px-4 lg:px-8">
    <div className="flex justify-between items-center py-4 lg:py-5">
     <Logo />

     <nav className="hidden lg:flex items-center space-x-2 xl:space-x-3">
      {menuItems.map(item => {
       const active = isActive(item.href);
       return (
        <Link
         key={item.id}
         href={item.href}
         className={`group relative flex items-center space-x-2 px-5 py-3 rounded-xl transition-all duration-300 ${active
          ? 'bg-linear-to-r from-emerald-500 to-green-500 text-white shadow-lg shadow-emerald-500/30'
          : 'text-emerald-100 hover:text-white hover:bg-white/10'
          }`}
        >
         <item.icon size={18} className={active ? 'animate-pulse' : ''} />
         <span className="text-sm xl:text-base font-semibold">{item.label}</span>
         {active && (
          <div className="absolute bottom-0 left-0 right-0 bg-linear-to-r from-emerald-400 to-green-400 rounded-full"></div>
         )}
        </Link>
       );
      })}
     </nav>

     <div className="flex items-center gap-3">
      <button
       onClick={toggleTheme}
       className={`p-3 rounded-xl ${isDark ? 'bg-emerald-800/50' : 'bg-white/10'} backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg group`}
       aria-label="Toggle theme"
      >
       {theme === 'dark' ? (
        <Sun size={20} className="text-yellow-400 group-hover:rotate-180 transition-transform duration-500" />
       ) : (
        <Moon size={20} className="text-emerald-200 group-hover:rotate-180 transition-transform duration-500" />
       )}
      </button>

      <button
       className="lg:hidden p-3 hover:bg-white/10 rounded-xl transition-all duration-300 backdrop-blur-sm"
       onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
       {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
     </div>
    </div>

    {mobileMenuOpen && (
     <nav className="lg:hidden pb-6 border-t border-emerald-800 mt-2 pt-4 animate-fadeIn">
      {menuItems.map(item => {
       const active = isActive(item.href);
       return (
        <Link
         key={item.id}
         href={item.href}
         onClick={() => setMobileMenuOpen(false)}
         className={`flex items-center space-x-3 py-4 px-5 rounded-xl transition-all duration-300 w-full mb-2 ${active
          ? 'bg-linear-to-r from-emerald-500 to-green-500 text-white shadow-lg'
          : 'text-emerald-100 hover:text-white hover:bg-white/10'
          }`}
        >
         <item.icon size={20} />
         <span className="font-semibold">{item.label}</span>
        </Link>
       );
      })}
     </nav>
    )}
   </div>
  </header>
 );
};

export default Header;