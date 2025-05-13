"use client";

import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Benefits from "@/components/sections/Benefits";
import Journey from "@/components/sections/Journey";
import Classes from "@/components/sections/Classes";
import Choreography from "@/components/sections/Choreography";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Benefits />
      <Journey />
      {/* <Classes /> */}
      {/* <Choreography /> */}
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}