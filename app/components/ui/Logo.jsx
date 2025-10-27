import Link from 'next/link';

const Logo = () => {
 return (
  <Link href="/">
   <div className="group relative bg-linear-to-br from-emerald-500 to-green-600 rounded-xl w-14 h-14 flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-emerald-500/50">
    <span className="text-white font-black text-2xl">ND</span>
    <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
   </div>
  </Link>
 );
};

export default Logo;