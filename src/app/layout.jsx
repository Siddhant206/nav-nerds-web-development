import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { GoogleTagManager } from '@next/third-parties/google'
import FloatingContacts from "@/component/UI/FloatingContacts";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],

});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Microsoft Dynamics 365 Experts | NavNerds",
  description:
    "NavNerds — Microsoft Dynamics 365 experts offering ERP Implementation, Integration, Support & Training to automate and grow your business.",
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
