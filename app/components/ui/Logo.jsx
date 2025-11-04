import Link from 'next/link';

const Logo = () => {
 return (
  <Link href="/">
   <div className="group relative w-14 h-14 flex items-center justify-center cursor-pointer 
                    hover:scale-110 transition-all duration-300 shadow-lg 
                    bg-linear-to-br from-orange-500 to-orange-600 rounded-xl 
                    hover:shadow-orange-400/50">

    <div className="relative w-8 h-8">

     <div className="absolute top-0 left-0 w-full h-full border-4 border-white border-r-transparent rounded-full 
                        transform rotate-0 
                        group-hover:rotate-360 transition-transform duration-700 ease-in-out">
     </div>

     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border-4 border-white border-b-transparent rounded-full 
                        transform rotate-0 
                        group-hover:rotate-[-360deg] transition-transform duration-700 ease-in-out">
     </div>

     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full 
                        group-hover:scale-150 transition-transform duration-300">
     </div>
    </div>

    <div className="absolute inset-0 bg-white/20 rounded-xl 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    </div>
   </div>
  </Link>
 );
};

export default Logo;