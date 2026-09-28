import { useEffect } from "react";
import Navigation, { type NavSection } from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProfileSection from "@/components/sections/ProfileSection";
// import ResearchSection from "@/components/sections/ResearchSection";
import TeachingSection from "@/components/sections/TeachingSection";
import TalksSection from "@/components/sections/TalksSection";
import PublicationsSection from "@/components/sections/PublicationsSection";
import CVSection from "@/components/sections/CVSection";
import { useSectionNavigation } from "@/hooks/useSectionNavigation";

// Add { id: "research", label: "Research" } back when re-enabling the Research section.
const sections: NavSection[] = [
  { id: "profile", label: "About" },
  { id: "publications", label: "Research Output" },
  { id: "talks", label: "Talks" },
  { id: "teaching", label: "Teaching" },
  { id: "cv", label: "Vitae" },
];
const sectionIds = sections.map((section) => section.id);

// Academic site, served at /academic.
const Academic = () => {
  const { activeSection, scrollToSection } = useSectionNavigation(sectionIds);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Waleed Taoum · Applied Mathematics, King's College London";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation
        sections={sections}
        activeSection={activeSection}
        onSectionChange={scrollToSection}
      />

      <main>
        <ProfileSection />
        {/* <ResearchSection /> */}
        <PublicationsSection />
        <TalksSection />
        <TeachingSection />
        <CVSection />
      </main>

      <Footer />
    </div>
  );
};

export default Academic;
