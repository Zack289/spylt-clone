import Navbar from './components/Navbar'
import HeroSection from "./sections/HeroSection";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  return (
    <main>
      <Navbar />
      <HeroSection />
    </main>
  )
}

export default App
