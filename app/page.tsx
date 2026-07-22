import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Hero from "@/app/sections/Hero";
import About from "@/app/sections/About";
import Skills from "@/app/sections/Skills";
import Projects from "@/app/sections/Projects";
import Contact from "@/app/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
