import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LinkedinIcon, Mail, MapPin, Send } from "lucide-react";
import researcherImage from "@/assets/wt-portrait.webp";
import { LINKEDIN_URL, QUANT_EMAIL, headline, profile } from "@/data/quant";
import WorkRightsBadge from "@/components/quant/WorkRightsBadge";
import { withItalics } from "@/lib/withItalics";

// Opens an email to request the CV.
const cvRequestLink = `mailto:${QUANT_EMAIL}?subject=${encodeURIComponent("CV request")}&body=${encodeURIComponent(
  "Hello Waleed,\n\nCould you please send me your CV?\n\n"
)}`;

const QuantHero = () => (
  <section id="about" className="pt-6 pb-12 bg-gradient-to-br from-blue-50 to-background dark:bg-none dark:bg-[hsl(var(--section-tint))]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Photo and key facts */}
        <div className="lg:col-span-1">
          <Card className="h-full shadow-card">
            <CardContent className="p-6 h-full flex flex-col justify-center text-center">
              <div
                style={{ background: "radial-gradient(circle at center, transparent 0%, #60a5fa 60%, #3b82f6 100%)" }}
                className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-lg"
              >
                <img src={researcherImage} alt="Waleed Taoum" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-lg font-bold text-foreground mb-3 [font-variant:small-caps] tracking-wide">{headline.title}</h2>
              <p className="text-[13px] text-muted-foreground mb-10">
                {headline.tagline.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </p>
              <div className="space-y-4 text-[13px]">
                <div className="flex items-center justify-center gap-2">
                  <Mail size={16} className="text-primary" />
                  <a href={`mailto:${QUANT_EMAIL}`} className="hover:underline">{QUANT_EMAIL}</a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MapPin size={16} className="text-primary" />
                  <span>{headline.location}</span>
                </div>
              </div>
              <div className="mt-10">
                <WorkRightsBadge />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* About me */}
        <div className="lg:col-span-2">
          <Card className="h-full shadow-card">
            <CardContent className="p-8 h-full flex flex-col">
              <h3 className="text-[23px] font-semibold [font-variant:small-caps] tracking-wide text-foreground mb-6">About Me</h3>
              <div className="space-y-4 text-body text-left sm:text-justify">
                {profile.map((paragraph) => (
                  <p key={paragraph}>{withItalics(paragraph)}</p>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-3 mt-auto pt-8">
                <Button asChild>
                  <a href={cvRequestLink}>
                    <Send size={16} className="mr-2" />
                    Request a CV
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon size={16} className="mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
);

export default QuantHero;
