'use client';
import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';

const ContactForm = () => {
 const { theme } = useAppContext();
 const isDark = theme === 'dark';
 const [errors, setErrors] = useState({});

 const [formData, setFormData] = useState({
  name: '',
  email: '',
  subject: 'Bireysel Terapi',
  message: '',
 });
 const [submitted, setSubmitted] = useState(false);
 const [isSubmitting, setIsSubmitting] = useState(false);

 const handleSubmit = async () => {
  const { name, email, subject, message } = formData;
  const newErrors = {};

  // Boş alan kontrolü
  if (!name) newErrors.name = 'Lütfen adınızı girin.';
  if (!email) newErrors.email = 'Lütfen e-posta adresinizi girin.';
  if (!subject) newErrors.subject = 'Lütfen bir konu seçin.';
  if (!message) newErrors.message = 'Lütfen bir mesaj girin.';

  // E-posta formatı kontrolü
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email && !emailRegex.test(email)) {
   newErrors.email = 'Lütfen geçerli bir e-posta adresi girin.';
  }

  // Mesaj uzunluğu kontrolü
  if (message && message.trim().length < 15) {
   newErrors.message = 'Mesaj en az 15 karakter olmalıdır.';
  }

  setErrors(newErrors);

  // Eğer hata varsa API'ye istek atma
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
    setFormData({ name: '', email: '', subject: 'Bireysel Terapi', message: '' });
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

 return (
  <div
   className={`${isDark
    ? 'bg-emerald-950/50 border-2 border-emerald-800 backdrop-blur-lg'
    : 'bg-white/90 backdrop-blur-sm border-2 border-emerald-200'
    } rounded-3xl shadow-2xl p-8 md:p-12 animate-slideUp`}
  >
   <h2
    className={`text-xl md:text-2xl font-bold ${isDark ? 'text-emerald-400' : 'text-emerald-700'
     } mb-4`}
   >
    Benimle İletişime Geçin
   </h2>

   {submitted && (
    <div className="mb-8 p-5 bg-green-500/20 border border-green-500 text-green-400 rounded-xl flex items-center gap-3 animate-fadeIn">
     <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
     <span className="font-semibold">Mesajınız başarıyla gönderildi!</span>
    </div>
   )}

   <div className="space-y-6">
    <div className="transform hover:scale-[1.01] transition-all duration-300">
     <label
      htmlFor="name"
      className={`block ${isDark ? 'text-gray-300' : 'text-gray-700'
       } font-semibold mb-2 text-lg`}
     >
      Adınız ve Soyadınız <span className="text-red-500">*</span>
     </label>
     <input
      type="text"
      id="name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      className={`w-full px-5 py-4 ${isDark
       ? 'bg-emerald-900/30 border-emerald-700 text-white placeholder-gray-400'
       : 'bg-white border-emerald-300 text-gray-900 placeholder-gray-500'
       } border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-lg`}
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
       } font-semibold mb-2 text-lg`}
     >
      E-posta <span className="text-red-500">*</span>
     </label>
     <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      className={`w-full px-5 py-4 ${isDark
       ? 'bg-emerald-900/30 border-emerald-700 text-white placeholder-gray-400'
       : 'bg-white border-emerald-300 text-gray-900 placeholder-gray-500'
       } border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-lg`}
      placeholder="ornek@email.com"
     />
     {errors.email && (
      <p className="text-red-500 text-sm mt-2">{errors.email}</p>
     )}
    </div>

    <div className="transform hover:scale-[1.01] transition-all duration-300">
     <label
      htmlFor="subject"
      className={`block ${isDark ? 'text-gray-300' : 'text-gray-700'
       } font-semibold mb-2 text-lg`}
     >
      Konu <span className="text-red-500">*</span>
     </label>
     <select
      id="subject"
      name="subject"
      value={formData.subject}
      onChange={handleChange}
      className={`w-full px-5 py-4 pr-12 ${isDark
       ? 'bg-emerald-900/30 border-emerald-700 text-white'
       : 'bg-white border-emerald-300 text-gray-900'
       } border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-lg cursor-pointer appearance-none bg-no-repeat bg-right`}
      style={{
       backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='${isDark ? '%2310b981' : '%23059669'}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
       backgroundPosition: 'right 1rem center',
       backgroundSize: '1.5rem'
      }}
     >
      <option value="Bireysel Terapi">Bireysel Terapi</option>
      <option value="Online Terapi">Online Terapi</option>
      <option value="Randevu Talebi">Randevu Talebi</option>
      <option value="Genel Bilgi">Genel Bilgi</option>
      <option value="Diğer">Diğer</option>
     </select>
     {errors.subject && (
      <p className="text-red-500 text-sm mt-2">{errors.subject}</p>
     )}
    </div>

    <div className="transform hover:scale-[1.01] transition-all duration-300">
     <label
      htmlFor="message"
      className={`block ${isDark ? 'text-gray-300' : 'text-gray-700'
       } font-semibold mb-2 text-lg`}
     >
      Mesaj <span className="text-red-500">*</span>
     </label>
     <textarea
      id="message"
      name="message"
      value={formData.message}
      onChange={handleChange}
      rows={5}
      className={`w-full px-5 py-4 ${isDark
       ? 'bg-emerald-900/30 border-emerald-700 text-white placeholder-gray-400'
       : 'bg-white border-emerald-300 text-gray-900 placeholder-gray-500'
       } border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none transition-all duration-300 text-lg`}
      placeholder="Mesajınızı buraya yazın..."
     ></textarea>
     {errors.message && (
      <p className="text-red-500 text-sm mt-2">{errors.message}</p>
     )}
    </div>

    <div>
     <button
      onClick={handleSubmit}
      disabled={isSubmitting}
      className={`w-full ${isDark
       ? 'bg-gradient-to-r from-emerald-700 to-green-800'
       : 'bg-gradient-to-r from-emerald-600 to-green-600'
       } text-white px-8 py-5 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50 transform transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed`}
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