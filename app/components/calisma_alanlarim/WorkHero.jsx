'use client';
import { useAppContext } from '@/context/AppContext';
import { Briefcase } from 'lucide-react';
import SectionHero from '../ui/SectionHero';

const WorkHero = () => {
 const { data } = useAppContext();

 return (
  <SectionHero
   icon={Briefcase}
   pillText="Çalışma Alanlarım"
   title="Çalışma Alanlarım"
   subtitle={data?.work?.subtitle || "Veriler yükleniyor..."}
  />
 );
};

export default WorkHero;