import Banner from "@/component/Section/Banner";
import IndustryExpertise from "@/component/Section/IndustryExpertise";
import MicrosoftBusinessApps from "@/component/Section/MicrosoftBusinessApps";
import IndustrySpecializations from "@/component/Section/IndustrySpecializations";
import Packages from "@/component/Section/Packages";
import ServicesSection from "@/component/Section/Services";
import { generateMetadata } from "@/component/SEO/generateMetadata";
import { pagesMetadata } from "@/component/SEO/pages-metadata";

export const metadata = generateMetadata(pagesMetadata.home);

export default function Home() {
  return (
    <main className="max-w-screen overflow-hidden">
      <Banner />
      <div className="min-h-screen bg-gradient-to-b from-white via-slate-50/60 to-[#EEF8FF]/40">
        <ServicesSection />
        <Packages />
        <IndustryExpertise />
        <MicrosoftBusinessApps />
        <IndustrySpecializations />
      </div>
    </main>
  );
}
