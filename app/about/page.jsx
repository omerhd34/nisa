"use client";
import { User, Award, BookOpen } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { data } from "@/data/data";

const AboutPage = () => {
 const { theme } = useAppContext();
 const isDark = theme === "dark";

 return (
  <div
   className={`min-h-screen ${isDark
    ? "bg-gray-900"
    : "bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50"
    } py-16 md:py-24 transition-colors duration-300`}
  >
   <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
     <div className="text-center mb-16 animate-fadeIn">
      <h1
       className={`text-4xl md:text-5xl lg:text-6xl font-bold ${isDark ? "text-white" : "text-gray-900"
        } mb-4`}
      >
       {data.about.title}
      </h1>
      <div
       className={`w-24 h-1 ${isDark ? "bg-teal-400" : "bg-teal-600"
        } mx-auto rounded-full`}
      ></div>
     </div>

     {/* Main About Section */}
     <div
      className={`${isDark
       ? "bg-gray-800/80 border border-gray-700 backdrop-blur-lg"
       : "bg-white/90 backdrop-blur-sm"
       } rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 mb-12 animate-slideUp`}
     >
      <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
       <div className="md:col-span-2">
        <div
         className={`relative w-64 h-64 md:w-80 md:h-80 mx-auto bg-gradient-to-br ${isDark
          ? "from-teal-700 to-blue-800"
          : "from-teal-500 to-blue-600"
          } rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-105 hover:rotate-3 transition-all duration-500`}
        >
         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
         <User
          className="w-32 h-32 md:w-40 md:h-40 text-white relative z-10"
          strokeWidth={1.5}
         />

         {/* Decorative elements */}
         <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
          <Award className="w-10 h-10 text-white" />
         </div>
        </div>
       </div>

       {/* Text Content */}
       <div className="md:col-span-3">
        <h2
         className={`text-3xl md:text-4xl font-bold ${isDark ? "text-teal-400" : "text-teal-700"
          } mb-6`}
        >
         {data.about.heading}
        </h2>

        <div className="space-y-6">
         <p
          className={`${isDark ? "text-gray-300" : "text-gray-700"
           } text-lg leading-relaxed`}
         >
          {data.about.text1}
         </p>
         <p
          className={`${isDark ? "text-gray-300" : "text-gray-700"
           } text-lg leading-relaxed`}
         >
          {data.about.text2}
         </p>
         <p
          className={`${isDark ? "text-gray-300" : "text-gray-700"
           } text-lg leading-relaxed`}
         >
          {data.about.text3}
         </p>
        </div>
       </div>
      </div>
     </div>

     {/* Values Section */}
     <div className="mb-12">
      <h3
       className={`text-3xl md:text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"
        } mb-10 text-center`}
      >
       Değerlerim
      </h3>
      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
       {data.about.values.map((value, index) => (
        <div
         key={index}
         className={`${isDark
          ? "bg-gray-800/80 border border-gray-700"
          : "bg-white/90"
          } rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 animate-slideUp animation-delay-${200 + index * 100
          }`}
        >
         <div
          className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
         >
          <value.icon className="w-8 h-8 text-white" />
         </div>
         <h4
          className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"
           } mb-3`}
         >
          {value.title}
         </h4>
         <p
          className={`${isDark ? "text-gray-400" : "text-gray-600"}`}
         >
          {value.description}
         </p>
        </div>
       ))}
      </div>
     </div>

     {/* Education Section */}
     <div
      className={`${isDark
       ? "bg-gray-800/80 border border-gray-700 backdrop-blur-lg"
       : "bg-white/90 backdrop-blur-sm"
       } rounded-3xl shadow-2xl p-8 md:p-12 animate-slideUp animation-delay-400`}
     >
      <div className="flex items-center gap-4 mb-8">
       <div
        className={`w-14 h-14 bg-gradient-to-br ${isDark
         ? "from-teal-700 to-blue-800"
         : "from-teal-500 to-blue-600"
         } rounded-xl flex items-center justify-center shadow-lg`}
       >
        <BookOpen className="w-7 h-7 text-white" />
       </div>
       <h3
        className={`text-3xl md:text-4xl font-bold ${isDark ? "text-teal-400" : "text-teal-700"
         }`}
       >
        {data.about.education}
       </h3>
      </div>

      <div className="space-y-6">
       {[data.about.edu1, data.about.edu2, data.about.edu3].map(
        (item, index) => (
         <div
          key={index}
          className={`flex items-start gap-4 p-5 rounded-xl ${isDark ? "bg-gray-700/50" : "bg-teal-50"
           } transform hover:translate-x-2 transition-all duration-300`}
         >
          <div
           className={`w-8 h-8 flex-shrink-0 rounded-full ${isDark ? "bg-teal-600" : "bg-teal-500"
            } flex items-center justify-center text-white font-bold shadow-lg`}
          >
           {index + 1}
          </div>
          <span
           className={`text-lg ${isDark ? "text-gray-300" : "text-gray-700"
            } flex-1`}
          >
           {item}
          </span>
         </div>
        )
       )}
      </div>
     </div>

     {/* Quote Section */}
     <div
      className={`mt-12 text-center p-8 md:p-12 rounded-3xl ${isDark
       ? "bg-gradient-to-br from-teal-900/30 to-blue-900/30 border border-teal-700"
       : "bg-gradient-to-br from-teal-100 to-blue-100"
       }`}
     >
      <p
       className={`text-2xl md:text-3xl font-semibold italic ${isDark ? "text-teal-300" : "text-teal-800"
        }`}
      >
       Kişideki eksik, ötekinde saklı değildir. Aşkın bütün sorunu budur.
       <span
        className={`block mt-3 font-extrabold italic ${isDark ? "text-teal-300" : "text-teal-800"
         }`}
       >
        Jacques Lacan
       </span>
      </p>
     </div>
    </div>
   </div>
  </div>
 );
};

export default AboutPage;
