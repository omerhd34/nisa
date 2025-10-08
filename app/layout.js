import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Uzman Klinik Psikolog Nisa Demir | Bireysel ve Online Terapi",
  description:
    "Uzman Klinik Psikolog Nisa Demir - Bireysel terapi, online terapi ve psikolojik danışmanlık hizmetleri. Anksiyete, depresyon, stres yönetimi ve kişisel gelişim konularında profesyonel destek.",
  keywords:
    "psikolog, klinik psikolog, terapi, online terapi, bireysel terapi, psikolojik danışmanlık, Nisa Demir",
  authors: [{ name: "Nisa Demir" }],
  openGraph: {
    title: "Uzman Klinik Psikolog Nisa Demir",
    description: "Bireysel ve Online Terapi Hizmetleri",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
