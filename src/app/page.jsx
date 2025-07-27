import Banner from "@/Components/Section/Banner"; 
import IndustrySpecializations from "@/Components/Section/IndustrySpecializations";
import Packages from "@/Components/Section/Packages";
import ServicesSection from "@/Components/Section/Services"; 

export default function Home() {
  return (
    <main className=" max-w-screen overflow-hidden">
     <Banner/>
      <div className="bg-[url(/HomePageBg.webp)]  bg-cover bg-no-repeat bg-bottom min-h-screen "> 
        <ServicesSection/> 
        <Packages/>
        <IndustrySpecializations/>
      </div>
    </main>
  );
}
