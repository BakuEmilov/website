import Faq from "./components/Faq";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";

export default function Home() {
  return ( 
    <div>
      <Navbar/>
      <Hero/>
      <div className="px-[20px] lg:px-20 mx-auto">
        <Features/>
        <Faq/>
        <Pricing/>
      </div>
    </div>
  );
}
