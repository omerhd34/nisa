'use client';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';

const AboutQuote = () => {
 const { theme, data } = useAppContext();
 const isDark = theme === 'dark';
 const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

 const quotes = data?.about?.quote?.quotes || [];

 const handleNextQuote = () => {
  if (quotes.length > 0) {
   setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  }
 };

 const handlePrevQuote = () => {
  if (quotes.length > 0) {
   setCurrentQuoteIndex(
    (prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length
   );
  }
 };

 useEffect(() => {
  if (quotes.length === 0) return;

  const intervalId = setInterval(() => {
   handleNextQuote();
  }, 5000);

  return () => clearInterval(intervalId);
 }, [quotes.length]);

 if (!quotes || quotes.length === 0) return null;

 return (
  <div
   className={`mt-12 text-center p-8 md:p-12 rounded-3xl ${isDark
    ? 'bg-linear-to-br from-emerald-900/40 to-green-900/40 border-2 border-emerald-700'
    : 'bg-linear-to-br from-emerald-100 to-green-100 border-2 border-emerald-300'
    } flex items-center justify-between`}
  >
   <button
    onClick={handlePrevQuote}
    className={`p-2 rounded-full bg-emerald-600 text-white transition-colors duration-300 flex-shrink-0 ${isDark ? 'hover:bg-emerald-500' : 'hover:bg-emerald-700'
     }`}
   >
    <ChevronLeft className="w-6 h-6" />
   </button>

   <div className="flex-grow mx-4 max-w-4xl">
    <p
     className={`text-2xl md:text-3xl font-semibold italic ${isDark ? 'text-emerald-300' : 'text-emerald-800'
      }`}
    >
     {quotes[currentQuoteIndex].text}
     <span
      className={`block mt-3 font-extrabold italic ${isDark ? 'text-emerald-300' : 'text-emerald-800'
       }`}
     >
      {quotes[currentQuoteIndex].author}
     </span>
    </p>
   </div>

   <button
    onClick={handleNextQuote}
    className={`p-2 rounded-full bg-emerald-600 text-white transition-colors duration-300 flex-shrink-0 ${isDark ? 'hover:bg-emerald-500' : 'hover:bg-emerald-700'
     }`}
   >
    <ChevronRight className="w-6 h-6" />
   </button>
  </div>
 );
};

export default AboutQuote;