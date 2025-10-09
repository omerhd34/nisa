"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { data } from "@/data/data";

export default function WorkPage() {
 const { theme } = useAppContext();
 const isDark = theme === "dark";

 return (
  <div
   className={`min-h-screen ${isDark
    ? "bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900"
    : "bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50"
    } py-16 md:py-24 transition-colors duration-300`}
  >
   <div className="container mx-auto px-4">
    <div className="max-w-7xl mx-auto">
     {/* Page Title */}
     <div className="text-center mb-16 animate-fadeIn">
      <h1
       className={`text-4xl md:text-5xl lg:text-6xl font-bold ${isDark ? "text-white" : "text-gray-900"
        } mb-4`}
      >
       {data.work.title}
      </h1>
      <p
       className={`text-lg md:text-xl ${isDark ? "text-gray-400" : "text-gray-600"
        } max-w-3xl mx-auto`}
      >
       {data.work.subtitle}
      </p>
      <div
       className={`w-24 h-1 ${isDark ? "bg-emerald-400" : "bg-emerald-600"
        } mx-auto mt-6 rounded-full`}
      ></div>
     </div>

     {/* Work Areas */}
     <div className="space-y-10 md:space-y-12 mb-16">
      {data.work.workAreas.map((area, index) => (
       <div
        key={index}
        className={`${isDark
         ? "bg-emerald-950/50 border-2 border-emerald-800 backdrop-blur-lg"
         : "bg-white/90 backdrop-blur-sm border-2 border-emerald-200"
         } rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl hover:shadow-emerald-500/20 transform hover:scale-[1.02] transition-all duration-500 animate-slideUp animation-delay-${index * 200
         }`}
       >
        <div className="grid md:grid-cols-12 gap-0">
         {/* Icon Section */}
         <div
          className={`md:col-span-4 ${isDark ? "bg-gradient-to-br from-emerald-700 to-green-800" : "bg-gradient-to-br from-emerald-500 to-green-600"} p-10 md:p-12 flex flex-col items-center justify-center text-center relative overflow-hidden`}
         >
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          <div className="relative z-10">
           <div className="bg-white/20 backdrop-blur-sm p-8 rounded-3xl mb-6 transform hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-2xl">
            <area.icon
             className="w-20 h-20 text-white"
             strokeWidth={1.5}
            />
           </div>
           <h2 className="text-3xl md:text-4xl font-bold text-white">
            {area.title}
           </h2>
          </div>
         </div>

         {/* Content Section */}
         <div className="md:col-span-8 p-8 md:p-12">
          <p
           className={`${isDark ? "text-gray-300" : "text-gray-700"
            } text-lg leading-relaxed mb-8`}
          >
           {area.description}
          </p>

          {/* Topics */}
          <div>
           <h3
            className={`text-xl font-semibold ${isDark ? "text-emerald-400" : "text-emerald-700"
             } mb-4`}
           >
            {data.work.topicsLabel}
           </h3>
           <div className="grid sm:grid-cols-2 gap-3">
            {area.topics.map((topic, idx) => (
             <div
              key={idx}
              className={`flex items-center gap-3 p-3 rounded-xl ${isDark ? "bg-emerald-900/30" : "bg-emerald-50"
               } transform hover:translate-x-1 transition-all duration-300`}
             >
              <CheckCircle
               className={`w-5 h-5 ${isDark ? "text-emerald-400" : "text-emerald-600"
                } flex-shrink-0`}
              />
              <span
               className={`${isDark ? "text-gray-300" : "text-gray-700"
                } text-base`}
              >
               {topic}
              </span>
             </div>
            ))}
           </div>
          </div>
         </div>
        </div>
       </div>
      ))}
     </div>

     {/* Benefits Section */}
     <div className="mb-16">
      <h2
       className={`text-3xl md:text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"
        } mb-10 text-center`}
      >
       {data.work.benefitsTitle}
      </h2>
      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
       {data.work.benefits.map((benefit, index) => (
        <div
         key={index}
         className={`${isDark
          ? "bg-emerald-950/50 border-2 border-emerald-800"
          : "bg-white/90 border-2 border-emerald-200"
          } rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 hover:-translate-y-2 transition-all duration-500`}
        >
         <div
          className={`w-16 h-16 ${isDark
           ? "bg-gradient-to-br from-emerald-700 to-green-800"
           : "bg-gradient-to-br from-emerald-500 to-green-600"
           } rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
         >
          <benefit.icon className="w-8 h-8 text-white" />
         </div>
         <h3
          className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"
           } mb-3`}
         >
          {benefit.title}
         </h3>
         <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
          {benefit.description}
         </p>
        </div>
       ))}
      </div>
     </div>

     {/* CTA Section */}
     <div
      className={`${isDark
       ? "bg-gradient-to-br from-emerald-700 to-green-800"
       : "bg-gradient-to-r from-emerald-600 to-green-600"
       } text-white rounded-3xl shadow-2xl p-10 md:p-16 text-center transform hover:scale-[1.02] transition-all duration-500 relative overflow-hidden`}
     >
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      <div className="relative z-10">
       <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
        {data.work.cta.title}
       </h3>
       <p className="mb-8 text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
        {data.work.cta.text}
       </p>
       <Link
        href="/contact"
        className="inline-block bg-white text-emerald-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 shadow-2xl"
       >
        {data.work.cta.button}
       </Link>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}