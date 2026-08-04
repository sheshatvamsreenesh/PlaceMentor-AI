import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import FeaturesSection from "@/components/home/FeaturesSection";
import LearningJourney from "@/components/home/LearningJourney";
import Whychoose from "@/components/home/Whychoose";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturesSection />
      <LearningJourney />
      <Whychoose />
    </>
  );
}