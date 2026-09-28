import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Globe, LinkedinIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import researcherImage from "@/assets/wt-portrait.webp";
import { ArxivIcon, GoogleScholarIcon, OrcidIcon, ResearchGateIcon, SsrnIcon } from "@/components/BrandIcons";
import {
  ACADEMIA_END_YEAR,
  INDUSTRY_YEARS,
  TEACHING_START_YEAR,
  awards,
  publications,
  yearsBetween,
} from "@/data/content";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/waleedtaoum/", icon: LinkedinIcon },
  { label: "King's College London profile", href: "https://www.kcl.ac.uk/people/waleed-taoum", icon: Globe },
  { label: "Google Scholar", href: "https://scholar.google.co.uk/citations?user=e2Fv5BwAAAAJ&hl=en", icon: GoogleScholarIcon },
  { label: "ORCID", href: "https://orcid.org/0009-0005-7170-4069", icon: OrcidIcon },
  { label: "SSRN", href: "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=4378316", icon: SsrnIcon },
  { label: "arXiv", href: "https://arxiv.org/search/?query=waleed+taoum&searchtype=author&abstracts=show&order=-announced_date_first&size=50", icon: ArxivIcon },
  { label: "ResearchGate", href: "https://www.researchgate.net/profile/Waleed-Taoum-2", icon: ResearchGateIcon },
];

const stats = [
  { label: "Publications", value: publications.length },
  { label: "Years Teaching", value: yearsBetween(TEACHING_START_YEAR, ACADEMIA_END_YEAR) },
  { label: "Awards", value: awards.length },
  { label: "Years in Industry", value: INDUSTRY_YEARS },
];

const ProfileSection = () => {
  return (
    <section id="profile" className="pt-6 pb-12 bg-gradient-to-br from-blue-50 to-background dark:bg-none dark:bg-[hsl(var(--section-tint))]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Image and Quick Info */}
          <div className="lg:col-span-1">
            <Card className="h-full overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6 lg:pb-10 h-full flex flex-col">
                {/* Details are centred in the space above; the icon row sits at the bottom,
                    level with the stats row of the Biography card on large screens. */}
                <div className="text-center flex-1 flex flex-col">
                  <div className="flex-1 flex flex-col justify-center">
                  <div style={{
                    background: 'radial-gradient(circle at center, transparent 0%, #60a5fa 60%, #3b82f6 100%)',
                    }}
                    className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-lg">
                    <img
                      src={researcherImage}
                      alt="Waleed Taoum"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-lg font-bold text-foreground mb-3 [font-variant:small-caps] tracking-wide">
                    {/* "PhD" stays in normal letters so it doesn't render unevenly in small caps */}
                    <span className="[font-variant:normal] tracking-normal">PhD</span> in Applied Mathematics
                  </h2>
                  <p className="text-base text-muted-foreground mb-6">Financial Mathematics Group</p>
                  <p className="text-[13px] text-muted-foreground mb-10">
                    King's College London<br />
                    Department of Mathematics
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-4 text-[13px]">
                    <div className="flex items-center justify-center space-x-2">
                      <Mail size={16} className="text-primary" />
                      <a href="mailto:waleed.taoum@kcl.ac.uk" className="hover:underline">
                        waleed.taoum@kcl.ac.uk
                      </a>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <MapPin size={16} className="text-primary" />
                      <span>Strand, London, WC2R 2LS</span>
                    </div>
                  </div>

                  </div>

                  {/* Social Links */}
                  <div className="flex flex-wrap justify-center gap-1 mt-10 lg:mt-6">
                    {socialLinks.map(({ label, href, icon: Icon }) => (
                      <Button
                        key={label}
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 hover:bg-primary hover:text-primary-foreground"
                        asChild
                      >
                        <a
                          href={href}
                          aria-label={label}
                          title={label}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon size={16} />
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bio and Details */}
          <div className="lg:col-span-2">
            <Card className="h-full shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-[23px] font-semibold [font-variant:small-caps] tracking-wide text-foreground mb-6">Biography</h3>
                <div className="text-body text-left sm:text-justify">
                  <p className="mb-4">
                    Welcome to my website. I recently defended my PhD in the{" "}
                    <a
                      href="https://www.kcl.ac.uk/research/financial-maths"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Financial Mathematics group
                    </a>{" "}
                    at{" "}
                    <a
                      href="https://www.kcl.ac.uk/mathematics"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      King's College London
                    </a>
                    , under the supervision of{" "}
                    <a
                      href="https://sites.google.com/view/pennanen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Professor Teemu Pennanen
                    </a>
                    . My doctoral research was
                    supported through an EPSRC studentship and focused on the newly introduced benchmark
                    rates in the U.S., using indifference pricing techniques to price and hedge SOFR
                    derivatives in incomplete market settings.
                  </p>
                  <p className="mb-4">
                    I hold an MSc in Financial Mathematics from King’s College London, where I graduated
                    with distinction and was awarded the Financial Mathematics Project Prize. Before
                    returning to academia, I spent six years managing an FX and index futures portfolio
                    for my family office, after roles as a financial analyst and project leader. I also
                    hold an MBA in Finance and Financial Engineering from ISC Paris and trained
                    in computer engineering.
                  </p>
                  {/*<p className="mb-4">
                  My motivation stems from a strong interest in bridging theoretical mathematical finance 			
                  with real-world market developments. The global shift away from LIBOR has opened up a
                  wide range of open questions in derivative pricing, risk management, and financial
                  modelling - questions that I aim to explore through both rigorous mathematical
                  approaches and practical relevance.
                  </p> */}
                  <p className="mb-6">
                    My current research interests include interest rate modelling, portfolio optimisation,
                    asset pricing, computational finance, financial econometrics, and convex optimisation.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-border">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-xl font-bold text-primary">{stat.value}</div>
                      <div className="text-[13px] text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
