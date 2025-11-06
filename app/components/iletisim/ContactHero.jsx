'use client';
import { useAppContext } from '@/context/AppContext';
import { Send } from 'lucide-react';
import SectionHero from '../ui/SectionHero';

const ContactHero = () => {
 const { data } = useAppContext();

 return (
  <SectionHero
   icon={Send}
   pillText="İletişim"
   title="İletişim"
   subtitle={data?.contact?.subtitle}
   className="mb-20"
  />
 );
};

export default ContactHero;