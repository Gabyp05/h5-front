"use client";
import LandingLayout from "./components/landing/Layout";
import Contact from "./components/landing/Contact";
import DiscoverSection from "./components/landing/DiscoverSection";
import Hero from "./components/landing/Hero";
import TechSection from "./components/landing/TechSection";
import Testimonials from "./components/landing/Testimonials";
import ToBusiness from "./components/landing/ToBusiness";
import ToPerson from "./components/landing/ToPerson";
import ToProfessionals from "./components/landing/ToProfessionals";
import BackToTopButton from "./utils/BackToTopButton";
import Pricing from "./components/landing/Pricing";
import WhatsappBtn from "./utils/WhatsappBtn";

const Home = () => {
  return (
    <LandingLayout>
      <main className="flex flex-col mx-auto pt-[70px] lg:pt-28">
        <Hero />
        <TechSection />
        <DiscoverSection />
        <ToPerson />
        <ToProfessionals />
        <ToBusiness />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <WhatsappBtn />
      <BackToTopButton />
    </LandingLayout>
  );
};

export default Home;
