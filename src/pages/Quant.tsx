import { useEffect } from "react";
import Navigation, { type NavSection } from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuantHero from "@/components/quant/QuantHero";
import QuantSkills from "@/components/quant/QuantSkills";
import QuantExperience from "@/components/quant/QuantExperience";
import QuantResearch from "@/components/quant/QuantResearch";
import QuantEducation from "@/components/quant/QuantEducation";
import { useSectionNavigation } from "@/hooks/useSectionNavigation";

// Professional (quant) page, served as the homepage at /.
const sections: NavSection[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "education", label: "Education" },
];
const sectionIds = sections.map((section) => section.id);

const Quant = () => {
  const { activeSection, scrollToSection } = useSectionNavigation(sectionIds);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Waleed Taoum · Quantitative Researcher";
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
        <QuantHero />
        <QuantSkills />
        <QuantExperience />
        <QuantResearch />
        <QuantEducation />
      </main>

      <Footer />
    </div>
  );
};

export default Quant;
