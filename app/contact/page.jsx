'use client';
import { useAppContext } from '@/context/AppContext';
import ContactHero from '@/app/components/contact/ContactHero';
import ContactForm from '@/app/components/contact/ContactForm';
import ContactInfo from '@/app/components/contact/ContactInfo';

export default function ContactPage() {
 const { theme } = useAppContext();
 const isDark = theme === 'dark';

 return (
  <div
   className={`min-h-screen ${isDark
    ? 'bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900'
    : 'bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50'
    } py-16 md:py-24 transition-colors duration-300`}
  >
   <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
     <ContactHero />

     <div className="grid lg:grid-cols-3 gap-8 md:gap-10">
      <div className="lg:col-span-2">
       <ContactForm />
      </div>

      <ContactInfo />
     </div>
    </div>
   </div>
  </div>
 );
}