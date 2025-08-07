import Banner from "@/components/section/banner";
import IndustrySpecializations from "@/components/section/industrySpecializations";
import Packages from "@/components/section/packages";
import ServicesSection from "@/components/section/services";

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
