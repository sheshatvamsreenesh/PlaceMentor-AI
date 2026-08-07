import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import FeaturesSection from "@/components/home/FeaturesSection";
import LearningJourney from "@/components/home/LearningJourney";
import WhyChoose from "@/components/home/WhyChoose";
import StudentSuccessStories from "@/components/home/StudentSuccessStories";
import FAQ from "@/components/home/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturesSection />
      <LearningJourney />
      <WhyChoose />
      <StudentSuccessStories />
      <FAQ />
    </>
  );
}