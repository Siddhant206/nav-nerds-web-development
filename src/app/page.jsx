import Banner from "@/components/Section/Banner";
import IndustrySpecializations from "@/components/Section/IndustrySpecializations";
import Packages from "@/components/Section/Packages";
import ServicesSection from "@/components/Section/Services";

export default function Home() {
  return (
    <main className=" max-w-screen overflow-hidden">
      <Banner />
      <div className="bg-[url(/HomePageBg.webp)]  bg-cover bg-no-repeat bg-bottom min-h-screen ">
        <ServicesSection />
        <Packages />
        <IndustrySpecializations />
      </div>
    </main>
  );
}
