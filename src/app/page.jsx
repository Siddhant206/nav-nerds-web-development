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
      <div className="bg-[url(/HomePageBg.webp)] bg-cover bg-no-repeat bg-bottom min-h-screen">
        <ServicesSection />
        <Packages />
        <IndustryExpertise />
        <MicrosoftBusinessApps />
        <IndustrySpecializations />
      </div>
    </main>
  );
}
