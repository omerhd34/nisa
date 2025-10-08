import { notFound } from "next/navigation";
import Image from "next/image";
import { data } from "@/data/data";

export default function ArticleDetail({ params }) {
 const slug = params.slug;
 const article = data.articles.article8.find((a) => a.slug === slug);
 if (!article) {
  return notFound();
 }
 return (
  <div className="min-h-screen flex flex-col">
   <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-16 px-6">
    <div className="max-w-3xl mx-auto">
     <h1 className="relative text-4xl font-bold mb-6 text-white/90 px-4 py-2 rounded-lg backdrop-blur-sm bg-black/30">
      {data.articles.article8.title}
     </h1>

     <div className="relative w-full h-80 mb-8 rounded-2xl overflow-hidden shadow-lg">
      <Image
       src={data.articles.article8.image}
       alt={data.articles.article8.title}
       fill
       className="object-cover"
      />
     </div>

     <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
      {data.articles.article8.content}
     </p>
    </div>
   </main>
  </div>
 );
}