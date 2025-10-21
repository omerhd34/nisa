'use client';
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';

const ScrollToTop = () => {
 const [isVisible, setIsVisible] = useState(false);
 const { theme } = useAppContext();
 const isDark = theme === 'dark';

 useEffect(() => {
  const toggleVisibility = () => {
   if (window.scrollY > 300) {
    setIsVisible(true);
   } else {
    setIsVisible(false);
   }
  };

  window.addEventListener('scroll', toggleVisibility);

  return () => {
   window.removeEventListener('scroll', toggleVisibility);
  };
 }, []);

 const scrollToTop = () => {
  window.scrollTo({
   top: 0,
   behavior: 'smooth',
  });
 };

 return (
  <>
   {isVisible && (
    <button
     onClick={scrollToTop}
     className={`hidden lg:flex fixed bottom-8 right-8 z-50 p-3 xl:p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${isDark
      ? 'bg-gradient-to-br from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600'
      : 'bg-gradient-to-br from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700'
      } text-white animate-fadeIn items-center justify-center`}
     aria-label="Yukarı çık"
    >
     <ArrowUp className="w-5 h-5 xl:w-6 xl:h-6" />
    </button>
   )}
  </>
 );
};

export default ScrollToTop;