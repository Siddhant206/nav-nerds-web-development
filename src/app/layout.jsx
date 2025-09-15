import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GoogleTagManager } from '@next/third-parties/google'
import FloatingContacts from "@/components/UI/FloatingContacts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],

});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NavNerds",
  description: "NavNerds A Micorsoft Business 365 Services Provider.",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-PN6PVXLB" />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased   `} >
        <FloatingContacts />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
