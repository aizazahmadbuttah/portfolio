import { MotionConfig } from "framer-motion";
import "./refined.css";
import Background from "./sections/Background";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Capabilities from "./sections/Capabilities";
import CaseStudy from "./sections/CaseStudy";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";

export default function Portfolio() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen font-sans text-white">
        <Background />
        <Navbar />
        <main>
          <Hero />
          <Capabilities />
          <CaseStudy />
          <Projects />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
