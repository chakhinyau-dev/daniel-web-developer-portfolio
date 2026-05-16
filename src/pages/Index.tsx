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

const Index = () => {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-background overflow-y-auto scroll-smooth">
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
        <AIChatbot />
      </main>
    </LanguageProvider>
  );
};

export default Index;
