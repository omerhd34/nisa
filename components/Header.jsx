'use client';
import { useState } from 'react';
import { Home, User, Briefcase, FileText, Mail, Menu, X, Moon, Sun } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';
import { translations } from '@/translations/translations';

const Header = ({ currentPage, setCurrentPage }) => {
 const { theme, toggleTheme, language, toggleLanguage } = useAppContext();
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const t = translations[language].nav;

 const menuItems = [
  { id: 'home', label: t.home, icon: Home },
  { id: 'about', label: t.about, icon: User },
  { id: 'work', label: t.work, icon: Briefcase },
  { id: 'articles', label: t.articles, icon: FileText },
  { id: 'contact', label: t.contact, icon: Mail }
 ];

 return (
  <header className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white shadow-lg sticky top-0 z-50">
   <div className="container mx-auto px-4 lg:px-8">
    <div className="flex justify-between items-center py-3 lg:py-4">
     {/* Logo */}
     <div
      className="bg-white rounded-lg w-12 h-12 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-md"
      onClick={() => setCurrentPage('home')}
     >
      <span className="text-gray-800 font-bold text-2xl">N</span>
     </div>

     {/* Desktop Menu - Center */}
     <nav className="hidden lg:flex items-center space-x-1 xl:space-x-3">
      {menuItems.map(item => (
       <button
        key={item.id}
        onClick={() => setCurrentPage(item.id)}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${currentPage === item.id
         ? 'bg-white/10 text-white'
         : 'text-gray-300 hover:text-white hover:bg-white/5'
         }`}
       >
        <item.icon size={18} />
        <span className="text-sm xl:text-base">{item.label}</span>
       </button>
      ))}
     </nav>

     {/* Right Side - Language & Theme */}
     <div className="flex items-center gap-2">
      {/* Language Buttons - Always visible */}
      <div className="flex items-center bg-white/10 rounded-lg p-1">
       <button
        onClick={() => {
         if (language !== 'tr') toggleLanguage();
        }}
        className={`px-3 py-1.5 rounded-md text-sm font-semibold transition-all duration-300 ${language === 'tr'
         ? 'bg-white text-gray-800'
         : 'text-gray-300 hover:text-white'
         }`}
       >
        TR
       </button>
       <button
        onClick={() => {
         if (language !== 'en') toggleLanguage();
        }}
        className={`px-3 py-1.5 rounded-md text-sm font-semibold transition-all duration-300 ${language === 'en'
         ? 'bg-white text-gray-800'
         : 'text-gray-300 hover:text-white'
         }`}
       >
        EN
       </button>
      </div>

      {/* Theme Toggle */}
      <button
       onClick={toggleTheme}
       className="p-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
       aria-label="Toggle theme"
      >
       {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Mobile Menu Button - Hidden on lg and above */}
      <button
       className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition ml-1"
       onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
       {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
     </div>
    </div>

    {/* Mobile Menu */}
    {mobileMenuOpen && (
     <nav className="lg:hidden pb-4 border-t border-gray-700 mt-2 pt-4 animate-fadeIn">
      {menuItems.map(item => (
       <button
        key={item.id}
        onClick={() => {
         setCurrentPage(item.id);
         setMobileMenuOpen(false);
        }}
        className={`flex items-center space-x-3 py-3 px-4 rounded-lg transition-all duration-300 w-full ${currentPage === item.id
         ? 'bg-white/10 text-white'
         : 'text-gray-300 hover:text-white hover:bg-white/5'
         }`}
       >
        <item.icon size={20} />
        <span>{item.label}</span>
       </button>
      ))}
     </nav>
    )}
   </div>
  </header>
 );
};

export default Header;