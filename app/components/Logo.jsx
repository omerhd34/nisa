const Logo = () => {
 return (
  <div
   className="group relative bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl w-14 h-14 flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-teal-500/50"
   onClick={() => setCurrentPage('home')}
  >
   <span className="text-white font-black text-2xl">N</span>
   <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
 )
}

export default Logo