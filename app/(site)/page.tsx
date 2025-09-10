import About from "@/components/About";
import Brands from "@/components/Brands";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Feature from "@/components/Features";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Hero from "@/components/Hero";
// import Integration from "@/components/Integration";
import Testimonials from "@/components/Testimonial/Testimonial";
import Workflow from "@/components/Workflow/Workflow";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: " NeuronsNest - A Complete tech solution",
  description: "Enhance Your Business With NeuronsNest. Work Smarter, Not Harder — AI Services to Grow Your Business",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Feature />
      <Workflow />
      <About />
      <FeaturesTab />
      <FunFact />
      {/* <Integration /> */}
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}
