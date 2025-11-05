'use client';
import ContactHero from '@/app/components/iletisim/ContactHero';
import ContactForm from '@/app/components/iletisim/ContactForm';
import ContactInfo from '@/app/components/iletisim/ContactInfo';

export default function ContactPage() {
 return (
  <div className="min-h-screen py-16 md:py-24 transition-colors duration-300 bg-gray-50 dark:bg-dark-900">
   <div className="container mx-auto px-4">
    <div className="max-w-7xl mx-auto">
     <ContactHero />
     <div className="grid lg:grid-cols-5 gap-10 md:gap-14">
      <div className="lg:col-span-3">
       <ContactForm />
      </div>
      <div className="lg:col-span-2">
       <ContactInfo />
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}
