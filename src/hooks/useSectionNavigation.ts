import { useEffect, useState } from "react";

const NAV_HEIGHT = 64; // sticky navigation bar (h-16)
const TITLE_GAP = 24; // space left between the navigation bar and the section title

// Tracks which section is on screen and scrolls to a section when its menu item is clicked.
// The first id is the top of the page and always scrolls to the very top.
export const useSectionNavigation = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  const scrollToSection = (sectionId: string, behavior: ScrollBehavior = "smooth") => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Skip the section's own top padding so its title lands just below the navigation bar.
      const paddingTop = parseFloat(getComputedStyle(element).paddingTop) || 0;
      const top = sectionId === sectionIds[0]
        ? 0
        : element.offsetTop + paddingTop - NAV_HEIGHT - TITLE_GAP;
      window.scrollTo({ top: Math.max(0, top), behavior });
    }
    setActiveSection(sectionId);
  };

  // On arrival (e.g. from the other page), jump to the section named in the URL hash
  // such as /academic#publications; otherwise start at the top of the page.
  useEffect(() => {
    const target = window.location.hash.slice(1);
    const frame = requestAnimationFrame(() => {
      if (sectionIds.includes(target)) {
        scrollToSection(target, "auto");
      } else {
        window.scrollTo({ top: 0 });
      }
    });
    return () => cancelAnimationFrame(frame);
    // Runs once per page visit.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { activeSection, scrollToSection };
};
