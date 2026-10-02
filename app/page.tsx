import Header from "@/components/header/Header";

import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Services from "@/components/services/Services";
import Projects from "@/components/projects/Projects";
import Technologies from "@/components/technologies/Technologies";
import Contact from "@/components/contact/Contact";

import AssistantSection from "@/components/assistant/AssistantSection";

import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-black text-white">
        <Hero />

        <About />

        <Services />

        <Projects />

        <Technologies />

        <Contact />

        {/* =========================================
            ASSISTENTE IA
        ========================================== */}
        <AssistantSection />
      </main>

      <Footer />
    </>
  );
}