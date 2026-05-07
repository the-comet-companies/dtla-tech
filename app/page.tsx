import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TwoPaths from "@/components/TwoPaths";
import TabbedFeatures from "@/components/TabbedFeatures";
import Problems from "@/components/Problems";
import AIPlatform from "@/components/AIPlatform";
import WhatsAvailable from "@/components/WhatsAvailable";
import SolutionsDemo from "@/components/SolutionsDemo";
import FeatureCards from "@/components/FeatureCards";
import BuiltByOperators from "@/components/BuiltByOperators";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import TechStack from "@/components/TechStack";
// import InterestForm from "@/components/InterestForm"; // hidden — DTLA Print Difference + Request Early Access form contradict the case-study framing; left in repo for revert
// import SocialProof from "@/components/SocialProof"; // hidden — fabricated testimonials (Sarah Martinez / Premier Embroidery Co., etc.) undermine the case-study credibility; reinstate once we have real DTLA quotes
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

export default function Home() {
  return (
    <>
      {/* <Preloader /> */}
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <TwoPaths />
        <TabbedFeatures />
        <SolutionsDemo />
        <AIPlatform />
        <WhatsAvailable />
        <FeatureCards />
        <BuiltByOperators />
        {/* <SocialProof /> hidden — see comment on import above (fake testimonials) */}
        <WhoThisIsFor />
        <TechStack />
        {/* <InterestForm /> hidden — see comment on import above */}
      </main>
      <Footer />
      <ScrollAnimations />
    </>
  );
}
