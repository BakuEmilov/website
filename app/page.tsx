import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return ( 
    <div>
      <Navbar/>
      <Hero/>
      <div className="px-[20px] lg:px-20 mx-auto">
        <Features/>
      </div>
    </div>
  );
}
