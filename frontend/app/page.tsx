import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import FeaturesSection from "@/components/home/FeaturesSection";
import LearningJourney from "@/components/home/LearningJourney";
import WhyChoose from "@/components/home/WhyChoose";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturesSection />
      <LearningJourney />
      <WhyChoose />
    </>
  );
}