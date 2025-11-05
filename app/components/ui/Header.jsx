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
  <header className="bg-gray-100 dark:bg-dark-800 shadow-2xl sticky top-0 z-50 border-b border-gray-500 dark:border-dark-500">
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
          ? 'bg-gray-300 dark:bg-gray-900 text-dark-950 dark:text-gray-50 shadow-lg'
          : 'text-gray-700 dark:text-gray-300 hover:text-dark-950 dark:hover:text-gray-50 hover:bg-white/10 dark:hover:bg-white/10'
          }`}
        >
         <item.icon size={18} className={active ? 'animate-pulse' : ''} />
         <span className="text-sm xl:text-base font-semibold">{item.label}</span>
        </Link>
       );
      })}
     </nav>

     <div className="flex items-center gap-3">
      <button
       type="button"
       onClick={() => {
        toggleTheme();
       }}
       className="p-3 rounded-xl bg-gray-500/50 dark:bg-dark-200/50 backdrop-blur-sm hover:bg-dark-500/50 dark:hover:bg-gray-200/50 transition-all duration-300 hover:scale-110 shadow-lg group"
       aria-label="Toggle theme"
      >
       {theme === 'dark' ? (
        <Sun size={20} className="text-gray-800 dark:text-gray-100 group-hover:rotate-180 transition-transform duration-500" />
       ) : (
        <Moon size={20} className="text-gray-800 dark:text-gray-100 group-hover:rotate-180 transition-transform duration-500" />
       )}
      </button>

      <button
       className="lg:hidden p-3 hover:bg-white/10 dark:hover:bg-white/10 rounded-xl transition-all duration-300 backdrop-blur-sm text-dark-950 dark:text-gray-50"
       onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
       {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
     </div>
    </div>

    {mobileMenuOpen && (
     <nav className="lg:hidden pb-6 border-t border-gray-500 dark:border-dark-500 mt-2 pt-4 animate-fadeIn">
      {menuItems.map(item => {
       const active = isActive(item.href);
       return (
        <Link
         key={item.id}
         href={item.href}
         onClick={() => setMobileMenuOpen(false)}
         className={`flex items-center space-x-3 py-4 px-5 rounded-xl transition-all duration-300 w-full mb-2 ${active
          ? 'bg-gray-300 dark:bg-gray-900 text-dark-950 dark:text-gray-50 shadow-lg'
          : 'text-gray-700 dark:text-gray-300 hover:text-dark-950 dark:hover:text-gray-50 hover:bg-white/10 dark:hover:bg-white/10'
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