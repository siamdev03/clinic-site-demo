import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";
import { clinic } from "../data/clinic";

export const metadata = {
  title: `${clinic.name} | ময়মনসিংহ`,
  description: `${clinic.nameBn} - অভিজ্ঞ ডাক্তার, আধুনিক ডায়াগনস্টিক সেবা ও অনলাইন অ্যাপয়েন্টমেন্ট। ${clinic.address}`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
