import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import FeaturesSection from "@/components/home/FeaturesSection";
import LearningJourney from "@/components/home/LearningJourney";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturesSection />
      <LearningJourney />
    </>
  );
}