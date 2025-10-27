'use client';
import { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';

const SUBJECT_OPTIONS = [
 'Bireysel Terapi',
 'Online Terapi',
 'Randevu Talebi',
 'Genel Bilgi',
 'Diğer',
];

const ContactForm = () => {
 const { theme } = useAppContext();
 const isDark = theme === 'dark';
 const [errors, setErrors] = useState({});

 const [formData, setFormData] = useState({
  name: '',
  email: '',
  subject: SUBJECT_OPTIONS[0],
  message: '',
 });
 const [submitted, setSubmitted] = useState(false);
 const [isSubmitting, setIsSubmitting] = useState(false);

 const [isDropdownOpen, setIsDropdownOpen] = useState(false);
 const dropdownRef = useRef(null);

 useEffect(() => {
  function handleClickOutside(event) {
   if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    setIsDropdownOpen(false);
   }
  }
  document.addEventListener("mousedown", handleClickOutside);
  return () => {
   document.removeEventListener("mousedown", handleClickOutside);
  };
 }, [dropdownRef]);

 const handleSubmit = async () => {
  const { name, email, subject, message } = formData;
  const newErrors = {};

  if (!name) newErrors.name = 'Lütfen adınızı girin.';
  if (!email) newErrors.email = 'Lütfen e-posta adresinizi girin.';
  if (!subject) newErrors.subject = 'Lütfen bir konu seçin.';
  if (!message) newErrors.message = 'Lütfen bir mesaj girin.';

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email && !emailRegex.test(email)) {
   newErrors.email = 'Lütfen geçerli bir e-posta adresi girin.';
  }

  if (message && message.trim().length < 15) {
   newErrors.message = 'Mesaj en az 15 karakter olmalıdır.';
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0) return;

  setIsSubmitting(true);

  try {
   const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
   });

   const result = await response.json();

   if (response.ok) {
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: SUBJECT_OPTIONS[0], message: '' });
    setErrors({});
    setTimeout(() => setSubmitted(false), 3000);
   } else {
    setErrors({ general: result.error || 'Mesaj gönderilirken bir hata oluştu.' });
   }
  } catch (error) {
   console.error('Hata:', error);
   setErrors({ general: 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.' });
  } finally {
   setIsSubmitting(false);
  }
 };

 const handleChange = (e) => {
  setFormData({
   ...formData,
   [e.target.name]: e.target.value,
  });
 };

 const handleSubjectSelect = (subject) => {
  setFormData((prev) => ({ ...prev, subject }));
  setIsDropdownOpen(false);
 };

 return (
  <div
   className={`${isDark
    ? 'bg-emerald-950/60 border border-emerald-800/60 backdrop-blur-2xl'
    : 'bg-white/90 border border-emerald-200 backdrop-blur-sm'
    } rounded-3xl shadow-2xl p-8 md:p-10 animate-slideUp h-full flex flex-col space-y-5 transition-all duration-500 hover:shadow-emerald-300/20`}
  >
   <h2
    className={`text-xl md:text-2xl font-bold ${isDark ? 'text-emerald-400' : 'text-emerald-700'
     } mb-4`}
   >
    Benimle İletişime Geçin
   </h2>

   {submitted && (
    <div className="mb-6 p-4 bg-green-500/20 border border-green-500 text-green-400 rounded-xl flex items-center gap-3 animate-fadeIn">
     <CheckCircle2 className="w-6 h-6 shrink-0" />
     <span className="font-semibold">Mesajınız başarıyla gönderildi!</span>
    </div>
   )}

   <div className="space-y-5 flex-1 flex flex-col">
    <div className="transform hover:scale-[1.01] transition-all duration-300">
     <label
      htmlFor="name"
      className={`block ${isDark ? 'text-gray-300' : 'text-gray-700'
       } font-semibold mb-2 text-base`}
     >
      Adınız ve Soyadınız <span className="text-red-500">*</span>
     </label>
     <input
      type="text"
      id="name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      className={`w-full px-4 py-3 ${isDark
       ? 'bg-emerald-900/30 border-emerald-700 text-white placeholder-gray-400'
       : 'bg-white border-emerald-300 text-gray-900 placeholder-gray-500'
       } border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-base`}
      placeholder="Adınız ve Soyadınız"
     />
     {errors.name && (
      <p className="text-red-500 text-sm mt-2">{errors.name}</p>
     )}
    </div>

    <div className="transform hover:scale-[1.01] transition-all duration-300">
     <label
      htmlFor="email"
      className={`block ${isDark ? 'text-gray-300' : 'text-gray-700'
       } font-semibold mb-2 text-base`}
     >
      E-posta <span className="text-red-500">*</span>
     </label>
     <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      className={`w-full px-4 py-3 ${isDark
       ? 'bg-emerald-900/30 border-emerald-700 text-white placeholder-gray-400'
       : 'bg-white border-emerald-300 text-gray-900 placeholder-gray-500'
       } border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-base`}
      placeholder="ornek@email.com"
     />
     {errors.email && (
      <p className="text-red-500 text-sm mt-2">{errors.email}</p>
     )}
    </div>

    <div className="transform hover:scale-[1.01] transition-all duration-300 relative" ref={dropdownRef}>
     <label
      htmlFor="subject"
      className={`block ${isDark ? 'text-gray-300' : 'text-gray-700'
       } font-semibold mb-2 text-base`}
     >
      Konu <span className="text-red-500">*</span>
     </label>

     <button
      type="button"
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      className={`w-full px-4 py-3 pr-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-base cursor-pointer flex justify-between items-center ${isDark
       ? 'bg-emerald-900/30 border-emerald-700 text-white'
       : 'bg-white border-emerald-300 text-gray-900'
       }`}
     >
      {formData.subject}
      <svg
       xmlns="http://www.w3.org/2000/svg"
       width="24"
       height="24"
       viewBox="0 0 24 24"
       fill="none"
       stroke={isDark ? '#34d399' : '#059669'}
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round"
       className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
      >
       <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
     </button>

     {isDropdownOpen && (
      <ul
       className={`absolute z-10 w-full mt-2 rounded-2xl shadow-xl ${isDark
        ? 'bg-emerald-950/95 border border-emerald-700/70'
        : 'bg-white border border-emerald-300'
        } max-h-60 overflow-y-auto animate-fadeIn`}
      >
       {SUBJECT_OPTIONS.map(
        (option) => (
         <li
          key={option}
          onClick={() => handleSubjectSelect(option)}
          className={`p-3 cursor-pointer transition-colors duration-200 text-base ${isDark
           ? 'text-gray-200 hover:bg-emerald-800/50'
           : 'text-gray-800 hover:bg-emerald-100'
           } ${formData.subject === option ? (isDark ? 'bg-emerald-700/50' : 'bg-emerald-200') : ''}
                      first:rounded-t-2xl last:rounded-b-2xl`}
         >
          {option}
         </li>
        )
       )}
      </ul>
     )}

     {errors.subject && (
      <p className="text-red-500 text-sm mt-2">{errors.subject}</p>
     )}
    </div>

    <div className="transform hover:scale-[1.01] transition-all duration-300 flex-1 flex flex-col">
     <label
      htmlFor="message"
      className={`block ${isDark ? 'text-gray-300' : 'text-gray-700'
       } font-semibold mb-2 text-base`}
     >
      Mesaj <span className="text-red-500">*</span>
     </label>
     <textarea
      id="message"
      name="message"
      value={formData.message}
      onChange={handleChange}
      className={`w-full px-4 py-3 flex-1 min-h-[120px] ${isDark
       ? 'bg-emerald-900/30 border-emerald-700 text-white placeholder-gray-400'
       : 'bg-white border-emerald-300 text-gray-900 placeholder-gray-500'
       } border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none transition-all duration-300 text-base`}
      placeholder="Mesajınızı buraya yazın..."
     ></textarea>
     {errors.message && (
      <p className="text-red-500 text-sm mt-2">{errors.message}</p>
     )}
    </div>

    <div className="mt-auto">
     <button
      onClick={handleSubmit}
      disabled={isSubmitting}
      className={`w-full ${isDark
       ? 'bg-liner-to-r from-emerald-700 to-green-800'
       : 'bg-liner-to-r from-emerald-600 to-green-600'
       } text-white px-6 py-4 rounded-xl font-bold text-base hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50 transform transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed`}
     >
      <Send className="w-5 h-5" />
      {isSubmitting ? 'Mesajınız gönderiliyor...' : 'Gönder'}
     </button>
    </div>
   </div>
  </div>
 );
};

export default ContactForm;