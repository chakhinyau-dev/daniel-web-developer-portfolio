import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import SkillsSection from "@/components/portfolio/SkillsSection";
import WhatICanWorkOnSection from "@/components/portfolio/WhatICanWorkOnSection";
import EducationSection from "@/components/portfolio/EducationSection";
import CertificationsSection from "@/components/portfolio/CertificationsSection";
import ProjectCatalog from "@/components/portfolio/ProjectCatalog";
import Footer from "@/components/portfolio/Footer";
import ScrollToTop from "@/components/portfolio/ScrollToTop";
import AIChatbot from "@/components/portfolio/AIChatbot";
import HireTag from "@/components/portfolio/HireTag";
import GlobalSnow from "@/components/portfolio/GlobalSnow";

const Index = () => {
  return (
    <LanguageProvider>
      {/* ── Fixed full-page snow crystal dot texture ── */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          backgroundImage: `
            radial-gradient(circle, hsl(200 80% 93% / 0.022) 1px, transparent 1px),
            radial-gradient(circle, hsl(200 80% 93% / 0.011) 1px, transparent 1px)
          `,
          backgroundSize: "46px 46px, 23px 23px",
          backgroundPosition: "0 0, 11.5px 11.5px",
        }}
      />

      {/* ── Full-page falling snow ── */}
      <GlobalSnow />

      <main className="relative min-h-screen bg-background overflow-y-auto scroll-smooth" style={{ zIndex: 3 }}>
        <Header />
        <Hero />
        <div className="px-6 md:px-10 max-w-6xl mx-auto pb-16">
          <div id="services">
            <WhatICanWorkOnSection />
          </div>
          <div id="skills">
            <SkillsSection />
          </div>
          <div id="education">
            <EducationSection />
          </div>
          <div id="certifications">
            <CertificationsSection />
          </div>
        </div>
        <div className="px-6 md:px-10 max-w-6xl mx-auto pb-24">
          <ProjectCatalog />
        </div>
        <Footer />
        <ScrollToTop />
        <HireTag />
        <AIChatbot />
      </main>
    </LanguageProvider>
  );
};

export default Index;
