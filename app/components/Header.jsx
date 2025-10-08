'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Briefcase, FileText, Mail, Menu, X, Moon, Sun } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';
import { data } from '@/data/data';
import Logo from './Logo';

const Header = () => {
 const { theme, toggleTheme } = useAppContext();
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const pathname = usePathname();
 const isDark = theme === 'dark';

 const menuItems = [
  { id: 'home', label: data.nav.home, icon: Home, href: '/' },
  { id: 'about', label: data.nav.about, icon: User, href: '/about' },
  { id: 'work', label: data.nav.work, icon: Briefcase, href: '/work' },
  { id: 'articles', label: data.nav.articles, icon: FileText, href: '/articles' },
  { id: 'contact', label: data.nav.contact, icon: Mail, href: '/contact' }
 ];

 const isActive = (href) => {
  if (href === '/') {
   return pathname === '/';
  }
  return pathname.startsWith(href);
 };

 return (
  <header className={`${isDark ? 'bg-gradient-to-r from-gray-800 via-gray-900 to-black' : 'bg-gradient-to-r from-teal-700 via-teal-800 to-teal-900'} text-white shadow-2xl sticky top-0 z-50 border-b ${isDark ? 'border-gray-700' : 'border-teal-600/50'}`}>
   <div className="container mx-auto px-4 lg:px-8">
    <div className="flex justify-between items-center py-4 lg:py-5">
     <Logo />

     {/* Desktop Menu - Center */}
     <nav className="hidden lg:flex items-center space-x-2 xl:space-x-3">
      {menuItems.map(item => {
       const active = isActive(item.href);
       return (
        <Link
         key={item.id}
         href={item.href}
         className={`group relative flex items-center space-x-2 px-5 py-3 rounded-xl transition-all duration-300 ${active
          ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg shadow-teal-500/30'
          : 'text-gray-300 hover:text-white hover:bg-white/10'
          }`}
        >
         <item.icon size={18} className={active ? 'animate-pulse' : ''} />
         <span className="text-sm xl:text-base font-semibold">{item.label}</span>
         {active && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></div>
         )}
        </Link>
       );
      })}
     </nav>

     {/* Right Side - Theme */}
     <div className="flex items-center gap-3">
      {/* Theme Toggle */}
      <button
       onClick={toggleTheme}
       className={`p-3 rounded-xl ${isDark ? 'bg-gray-700/50' : 'bg-white/10'} backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg group`}
       aria-label="Toggle theme"
      >
       {theme === 'dark' ? (
        <Sun size={20} className="text-yellow-400 group-hover:rotate-180 transition-transform duration-500" />
       ) : (
        <Moon size={20} className="text-blue-300 group-hover:rotate-180 transition-transform duration-500" />
       )}
      </button>

      {/* Mobile Menu Button */}
      <button
       className="lg:hidden p-3 hover:bg-white/10 rounded-xl transition-all duration-300 backdrop-blur-sm"
       onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
       {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
     </div>
    </div>

    {/* Mobile Menu */}
    {mobileMenuOpen && (
     <nav className="lg:hidden pb-6 border-t border-gray-700 mt-2 pt-4 animate-fadeIn">
      {menuItems.map(item => {
       const active = isActive(item.href);
       return (
        <Link
         key={item.id}
         href={item.href}
         onClick={() => setMobileMenuOpen(false)}
         className={`flex items-center space-x-3 py-4 px-5 rounded-xl transition-all duration-300 w-full mb-2 ${active
          ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg'
          : 'text-gray-300 hover:text-white hover:bg-white/10'
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