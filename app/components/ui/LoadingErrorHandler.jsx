'use client';
import { useAppContext } from '@/context/AppContext';

export default function LoadingErrorHandler({ children }) {
 const { theme, dataLoading, dataError } = useAppContext();
 const isDark = theme === 'dark';

 if (dataLoading) {
  return (
   <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-gray-900' : 'bg-emerald-50'}`}>
    <div className="text-center">
     <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-emerald-500 mx-auto mb-5"></div>
    </div>
   </div>
  );
 }

 if (dataError) {
  return (
   <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-gray-900' : 'bg-emerald-50'}`}>
    <div className="text-center max-w-md mx-auto p-8">
     <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mb-4">
      <p className="font-bold">Veritabanı Bağlantı Hatası</p>
      <p className="text-sm mt-2">{dataError}</p>
     </div>
     <button
      onClick={() => window.location.reload()}
      className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition-colors"
     >
      Tekrar Dene
     </button>
    </div>
   </div>
  );
 }

 // Normal durum - children'ı render et
 return children;
}
