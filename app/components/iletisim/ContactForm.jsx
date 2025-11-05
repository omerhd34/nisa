'use client';
import { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const SUBJECT_OPTIONS = [
 'Bireysel Terapi',
 'Online Terapi',
 'Randevu Talebi',
 'Genel Bilgi',
 'Diğer',
];

const ContactForm = () => {
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
  <div className="backdrop-blur-2xl rounded-3xl shadow-2xl p-8 md:p-10 animate-slideUp h-full flex flex-col space-y-5 transition-all duration-500 border bg-gray-100 dark:bg-gray-900 border-gray-400 dark:border-gray-700">
   <h2 className="text-xl md:text-2xl font-bold mb-4 text-dark-950 dark:text-gray-50">
    Benimle İletişime Geçin
   </h2>

   {submitted && (
    <div className="mb-6 p-4 border rounded-xl flex items-center gap-3 animate-fadeIn bg-gray-800/20 dark:bg-gray-800/20 border-dark-500 dark:border-dark-500">
     <CheckCircle2 className="w-6 h-6 shrink-0 text-gray-700 dark:text-gray-100" />
     <span className="font-semibold text-gray-700 dark:text-gray-100">Mesajınız başarıyla gönderildi!</span>
    </div>
   )}

   <div className="space-y-5 flex-1 flex flex-col">
    <div className="transform hover:scale-[1.01] transition-all duration-300">
     <label
      htmlFor="name"
      className="block font-semibold mb-2 text-base text-gray-600 dark:text-gray-300"
     >
      Adınız ve Soyadınız <span className="text-red-500">*</span>
     </label>
     <input
      type="text"
      id="name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 text-base bg-gray-200 dark:bg-dark-800 border-gray-400 dark:border-dark-500 text-dark-950 dark:text-gray-50"
      placeholder="Adınız ve Soyadınız"
     />
     {errors.name && (
      <p className="text-red-500 text-sm mt-2">{errors.name}</p>
     )}
    </div>

    <div className="transform hover:scale-[1.01] transition-all duration-300">
     <label
      htmlFor="email"
      className="block font-semibold mb-2 text-base text-gray-600 dark:text-gray-300"
     >
      E-posta <span className="text-red-500">*</span>
     </label>
     <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      className="w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 text-base bg-gray-200 dark:bg-dark-800 border-gray-400 dark:border-dark-500 text-dark-950 dark:text-gray-50"
      placeholder="ornek@email.com"
     />
     {errors.email && (
      <p className="text-red-500 text-sm mt-2">{errors.email}</p>
     )}
    </div>

    <div className="transform hover:scale-[1.01] transition-all duration-300 relative" ref={dropdownRef}>
     <label
      htmlFor="subject"
      className="block font-semibold mb-2 text-base text-gray-600 dark:text-gray-300"
     >
      Konu <span className="text-red-500">*</span>
     </label>

     <button
      type="button"
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      className="w-full px-4 py-3 pr-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 text-base cursor-pointer flex justify-between items-center bg-gray-200 dark:bg-dark-800 border-gray-400 dark:border-dark-500 text-dark-950 dark:text-gray-50"
     >
      {formData.subject}
      <svg
       xmlns="http://www.w3.org/2000/svg"
       width="24"
       height="24"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="2"
       strokeLinecap="round"
       strokeLinejoin="round"
       className={`transition-transform duration-300 text-gray-600 dark:text-gray-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
      >
       <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
     </button>

     {isDropdownOpen && (
      <ul className="absolute z-10 w-full mt-2 rounded-2xl shadow-xl border max-h-60 overflow-y-auto animate-fadeIn bg-gray-100 dark:bg-gray-900 border-gray-400 dark:border-dark-500">
       {SUBJECT_OPTIONS.map(
        (option) => (
         <li
          key={option}
          onClick={() => handleSubjectSelect(option)}
          className={`p-3 cursor-pointer transition-colors duration-200 text-base first:rounded-t-2xl last:rounded-b-2xl ${formData.subject === option
           ? 'bg-gray-300 dark:bg-dark-800 text-dark-950 dark:text-gray-50'
           : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700'
           }`}
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
      className="block font-semibold mb-2 text-base text-gray-600 dark:text-gray-300"
     >
      Mesaj <span className="text-red-500">*</span>
     </label>
     <textarea
      id="message"
      name="message"
      value={formData.message}
      onChange={handleChange}
      className="w-full px-4 py-3 flex-1 min-h-[120px] border-2 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent resize-none transition-all duration-300 text-base bg-gray-200 dark:bg-dark-800 border-gray-400 dark:border-dark-500 text-dark-950 dark:text-gray-50"
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
      className="w-full px-6 py-4 rounded-xl font-bold text-white hover:scale-105 hover:shadow-2xl transform transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-800 dark:bg-dark-950 hover:bg-gray-700 dark:hover:bg-dark-900"
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
