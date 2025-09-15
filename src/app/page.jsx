import Banner from "@/component/Section/Banner";
import IndustrySpecializations from "@/component/Section/IndustrySpecializations";
import Packages from "@/component/Section/Packages";
import ServicesSection from "@/component/Section/Services";

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
