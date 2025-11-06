'use client';
import { useAppContext } from '@/context/AppContext';

export default function LoadingErrorHandler({ children }) {
 const { dataLoading, dataError } = useAppContext();

 if (dataLoading) {
  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-900">
    <div className="text-center">
     <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 mx-auto mb-5 border-primary dark:border-primary-dark "></div>
     <p className="text-gray-700 dark:text-gray-300 text-lg font-medium">Uzman Klinik Psikolog</p>
     <p className="text-gray-700 dark:text-gray-300 text-lg font-medium">Nisa DEMİR</p>
    </div>
   </div>
  );
 }

 if (dataError) {
  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-900">
    <div className="text-center max-w-md mx-auto p-8">
     <div className="border px-4 py-3 rounded-xl mb-4 bg-gray-100 dark:bg-gray-900 border-gray-400 dark:border-gray-700 text-gray-700 dark:text-gray-100">
      <p className="font-bold">Veritabanı Bağlantı Hatası</p>
      <p className="text-sm mt-2">{dataError}</p>
     </div>
     <button
      onClick={() => window.location.reload()}
      className="text-white px-4 py-2 rounded-lg transition-colors bg-gray-800 dark:bg-dark-950 hover:bg-gray-700 dark:hover:bg-dark-500"
     >
      Tekrar Dene
     </button>
    </div>
   </div>
  );
 }
 return children;
}
