import { HeroSection } from "@/components/ui/landing/hero-section";
import { LandingHeader } from "@/components/ui/landing/landing-header";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <LandingHeader />
      <HeroSection />
      {/*<FeaturesSection />
      <HowItWorksSection />
      <IntegrationSection />
      <CTASection />*/}
    </div>
  );
}
