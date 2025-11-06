'use client';

const SectionHero = ({
 icon: Icon,
 pillText,
 title,
 subtitle,
 className = ''
}) => {
 return (
  <div className={`text-center mb-16 animate-fadeIn ${className}`}>
   <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full mb-6 shadow-lg border bg-orange-a border-gray-600 dark:border-gray-700">
    <Icon className="w-5 h-5 text-white dark:text-black" />
    <span className="text-sm font-semibold text-white dark:text-black">
     {pillText}
    </span>
   </div>
   <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-heading">
    {title}
   </h1>
   <div className="w-20 sm:w-24 md:w-32 h-1 mx-auto bg-primary dark:bg-primary-dark rounded-full mb-5"></div>
   {subtitle && (
    <p className="text-lg md:text-xl max-w-3xl mx-auto text-body">
     {subtitle}
    </p>
   )}
  </div>
 );
};

export default SectionHero;

