import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TwoPaths from "@/components/TwoPaths";
import TabbedFeatures from "@/components/TabbedFeatures";
import Problems from "@/components/Problems";
import WhatsAvailable from "@/components/WhatsAvailable";
import SolutionsDemo from "@/components/SolutionsDemo";
import SocialProof from "@/components/SocialProof";
import FeatureCards from "@/components/FeatureCards";
import BuiltByOperators from "@/components/BuiltByOperators";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import TechStack from "@/components/TechStack";
import InterestForm from "@/components/InterestForm";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <TwoPaths />
        <TabbedFeatures />
        <SolutionsDemo />
        <WhatsAvailable />
        <FeatureCards />
        <BuiltByOperators />
        <SocialProof />
        <WhoThisIsFor />
        <TechStack />
        <InterestForm />
      </main>
      <Footer />
      <ScrollAnimations />
    </>
  );
}
