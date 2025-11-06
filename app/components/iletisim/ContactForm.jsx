'use client';
import { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle2, ChevronDown } from 'lucide-react';

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
  subject: '',
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
    setFormData({ name: '', email: '', subject: '', message: '' });
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
  const { name, value } = e.target;
  setFormData({
   ...formData,
   [name]: value,
  });

  if (name === 'message') {
   if (value.trim().length < 15) {
    if (errors.message) {
     setErrors({
      ...errors,
      message: value.trim().length === 0 ? 'Lütfen bir mesaj girin.' : 'Mesaj en az 15 karakter olmalıdır.',
     });
    }
   } else {
    setErrors({
     ...errors,
     message: undefined,
    });
   }
  } else {
   if (errors[name]) {
    setErrors({
     ...errors,
     [name]: undefined,
    });
   }
  }
 };

 const handleSubjectSelect = (subject) => {
  setFormData((prev) => ({ ...prev, subject }));
  setIsDropdownOpen(false);

  if (errors.subject) {
   setErrors({
    ...errors,
    subject: undefined,
   });
  }
 };

 return (
  <div className="rounded-3xl shadow-2xl p-6 md:p-8 animate-slideUp flex flex-col transition-all duration-500 border-2 border-gray-400 dark:border-gray-700 relative w-full h-full bg-gray-100 dark:bg-gray-900">
   <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-linear-to-r from-orange-50/50 to-amber-50/50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-3xl"></div>
   </div>
   <h2 className="text-xl md:text-2xl font-bold mb-6 text-heading relative z-10">
    Benimle İletişime Geçin
   </h2>

   {submitted && (
    <div className="mb-6 p-4 border rounded-xl flex items-center gap-3 animate-fadeIn bg-gray-800/20 dark:bg-gray-800/20 border-dark-500 dark:border-dark-500 relative z-10">
     <CheckCircle2 className="w-6 h-6 shrink-0 text-gray-700 dark:text-gray-100" />
     <span className="font-semibold text-gray-700 dark:text-gray-100">Mesajınız başarıyla gönderildi!</span>
    </div>
   )}

   <div className="flex flex-col gap-4 relative z-10 flex-1">
    <div className="transform transition-all duration-300">
     <label
      htmlFor="name"
      className="label-base"
     >
      Adınız ve Soyadınız: <span className="text-red-500">*</span>
     </label>
     <input
      type="text"
      id="name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      className="input-base"
      placeholder="Adınız ve Soyadınız"
     />
     {errors.name && (
      <p className="text-red-500 text-sm mt-2">{errors.name}</p>
     )}
    </div>

    <div className="transform  transition-all duration-300">
     <label
      htmlFor="email"
      className="label-base"
     >
      E-posta: <span className="text-red-500">*</span>
     </label>
     <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      className="input-base"
      placeholder="ornek@email.com"
     />
     {errors.email && (
      <p className="text-red-500 text-sm mt-2">{errors.email}</p>
     )}
    </div>

    <div className="transform transition-all duration-300 relative z-50" ref={dropdownRef}>
     <label
      htmlFor="subject"
      className="label-base"
     >
      Konu: <span className="text-red-500">*</span>
     </label>

     <button
      type="button"
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      className="input-base pr-4 cursor-pointer flex justify-between items-center"
     >
      <span className={formData.subject ? 'text-heading' : 'text-body'}>{formData.subject || 'Konu seçiniz'}</span>
      <ChevronDown className={`w-5 h-5 transition-transform duration-300 text-primary dark:text-primary-dark ${isDropdownOpen ? 'rotate-180' : ''}`} />
     </button>
     {isDropdownOpen && (
      <ul className="absolute z-100 w-full mt-2 rounded-xl shadow-xl border max-h-52 overflow-y-auto animate-fadeIn bg-orange-a border-gray-400 dark:border-dark-500">
       {SUBJECT_OPTIONS.map(
        (option) => (
         <li
          key={option}
          onClick={() => handleSubjectSelect(option)}
          className={`px-3 py-2 cursor-pointer transition-all duration-200 text-sm first:rounded-t-xl last:rounded-b-xl relative z-10 ${formData.subject === option
           ? 'bg-black/20 dark:bg-black/30 text-white dark:text-white font-semibold'
           : 'text-white dark:text-white hover:bg-black/15 dark:hover:bg-black/25'
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

    <div className="transform transition-all duration-300 flex flex-col flex-1">
     <label
      htmlFor="message"
      className="label-base"
     >
      Mesaj: <span className="text-red-500">*</span>
     </label>
     <textarea
      id="message"
      name="message"
      value={formData.message}
      onChange={handleChange}
      className="input-base flex-1 resize-none"
      placeholder="Mesajınızı buraya yazın..."
     ></textarea>
     {errors.message && (
      <p className="text-red-500 text-sm mt-2">{errors.message}</p>
     )}
    </div>

    <button
     onClick={handleSubmit}
     disabled={isSubmitting}
     className="w-full px-6 py-3 rounded-xl font-bold text-white hover:scale-103 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-primary-dark/50 focus:ring-offset-2 dark:focus:ring-primary-dark/50 transform transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-90 disabled:cursor-not-allowed bg-orange-a bg-cover bg-center relative overflow-hidden"
    >
     <Send className="w-5 h-5 relative z-10" />
     <span className="relative z-10">{isSubmitting ? 'Mesajınız gönderiliyor...' : 'Gönder'}</span>
    </button>
   </div>
  </div>
 );
};

export default ContactForm;