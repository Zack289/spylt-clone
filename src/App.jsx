import gsap from "gsap";
import Navbar from './components/Navbar'
import HeroSection from "./sections/HeroSection";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import MessageSection from './sections/MessageSection';



gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MessageSection />
    </main>
  )
}

export default App
