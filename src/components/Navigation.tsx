import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export interface NavSection {
  id: string;
  label: string;
}

interface NavigationProps {
  sections: NavSection[];
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation = ({ sections, activeSection, onSectionChange }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">
              {/* Clicking the name goes back to the first section of the current page */}
              <button
                type="button"
                onClick={() => {
                  onSectionChange(sections[0].id);
                  setIsMenuOpen(false);
                }}
                className="[font-variant:small-caps] tracking-wide rounded-sm transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                title="Back to top"
              >
                Waleed Taoum
              </button>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-1">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? "default" : "ghost"}
                  onClick={() => onSectionChange(section.id)}
                  className="text-base [font-variant:small-caps] tracking-wide transition-all duration-300 hover:shadow-md"
                >
                  {section.label}
                </Button>
              ))}
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-1">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? "default" : "ghost"}
                  onClick={() => {
                    onSectionChange(section.id);
                    setIsMenuOpen(false);
                  }}
                  className="w-full justify-start text-base [font-variant:small-caps] tracking-wide"
                >
                  {section.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
