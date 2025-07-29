import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; 
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";


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
  description: "NavNerds A Micorsoft Business 365 services provider.",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased   `} >

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
