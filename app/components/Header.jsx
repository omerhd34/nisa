'use client';
import { useState } from 'react';
import { Home, User, Briefcase, FileText, Mail, Menu, X, Moon, Sun } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';
import { data } from '@/data/data';
import Logo from './Logo';

const Header = ({ currentPage, setCurrentPage }) => {
 const { theme, toggleTheme, } = useAppContext();
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const isDark = theme === 'dark';

 const menuItems = [
  { id: 'home', label: data.home, icon: Home },
  { id: 'about', label: data.about, icon: User },
  { id: 'work', label: data.work, icon: Briefcase },
  { id: 'articles', label: data.articles, icon: FileText },
  { id: 'contact', label: data.contact, icon: Mail }
 ];

 return (
  <header className={`${isDark ? 'bg-gradient-to-r from-red-800 via-red-950 to-black' : 'bg-gradient-to-r from-red-800 via-red-900 to-red-800'} text-white shadow-2xl sticky top-0 z-50 border-b ${isDark ? 'border-gray-700' : 'border-gray-700/50'}`}>
   <div className="container mx-auto px-4 lg:px-8">
    <div className="flex justify-between items-center py-4 lg:py-5">
     <Logo />
     {/* Desktop Menu - Center */}
     <nav className="hidden lg:flex items-center space-x-2 xl:space-x-3">
      {menuItems.map(item => {
       const isActive = currentPage === item.id;
       return (
        <button
         key={item.id}
         onClick={() => setCurrentPage(item.id)}
         className={`group relative flex items-center space-x-2 px-5 py-3 rounded-xl transition-all duration-300 ${isActive
          ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg shadow-teal-500/30'
          : 'text-gray-300 hover:text-white hover:bg-white/10'
          }`}
        >
         <item.icon size={18} className={isActive ? 'animate-pulse' : ''} />
         <span className="text-sm xl:text-base font-semibold">{item.label}</span>
         {isActive && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></div>
         )}
        </button>
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
       const isActive = currentPage === item.id;
       return (
        <button
         key={item.id}
         onClick={() => {
          setCurrentPage(item.id);
          setMobileMenuOpen(false);
         }}
         className={`flex items-center space-x-3 py-4 px-5 rounded-xl transition-all duration-300 w-full mb-2 ${isActive
          ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg'
          : 'text-gray-300 hover:text-white hover:bg-white/10'
          }`}
        >
         <item.icon size={20} />
         <span className="font-semibold">{item.label}</span>
        </button>
       );
      })}
     </nav>
    )}
   </div>
  </header>
 );
};

export default Header;