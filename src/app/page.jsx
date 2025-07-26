import Banner from "@/Components/Section/Banner"; 
import ServicesSection from "@/Components/Section/Services"; 

export default function Home() {
  return (
    <main className=" w-full overflow-hidden">
     <Banner/>
      <div className="bg-[url(/HomePageBg.webp)] bg-cover bg-bottom min-h-screen "> 
        <ServicesSection/>  
      </div>
    </main>
  );
}
