import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Percent, Scale, Cpu, ExternalLink, FileText } from "lucide-react";
import { publications } from "@/data/content";

const researchAreas = [
  {
    icon: Percent,
    title: "Interest Rate Modelling",
    description: "Statistical models of the SOFR term structure under the real-world measure, capturing the jumps caused by central bank policy decisions and estimated from SOFR fixings and futures quotes.",
    keywords: ["SOFR", "Term structure", "Benchmark rates", "Statistical modelling"],
  },
  {
    icon: Scale,
    title: "Pricing in Incomplete Markets",
    description: "Indifference pricing and hedging of derivatives when residual risk cannot be hedged away, consistent with market quotes, the agent's position and risk preferences.",
    keywords: ["Indifference pricing", "Hedging", "Convex risk measures", "SOFR derivatives"],
  },
  {
    icon: Cpu,
    title: "Optimisation and Computation",
    description: "High-dimensional portfolio optimisation problems solved with convex optimisation and Monte Carlo simulation, with out-of-sample validation.",
    keywords: ["Convex optimisation", "Monte Carlo", "Portfolio optimisation", "Numerical methods"],
  },
];

// Each project links to its entry in the publications data (matched by title).
const projects = [
  {
    title: "Optimal Pricing and Hedging of SOFR Derivatives",
    period: "2023 - 2026",
    description: "Prices and hedges SOFR swaps, swaptions and caps by indifference pricing in incomplete markets. The model uses all available derivative quotes and gives an explicit description of the hedging error and its risk. The underlying high-dimensional, semi-static portfolio optimisation problem is solved with convex optimisation and Monte Carlo simulation.",
  },
  {
    title: "Statistical Modeling of SOFR Term Structure",
    period: "2021 - 2025",
    description: "Develops a statistical model of SOFR forward curves under the real-world measure, suited to risk management and derivatives pricing in incomplete markets. The model incorporates the macroeconomic factors that drive central bank policy rates, which in turn cause the jumps observed in SOFR. It is estimated from several years of SOFR fixings and CME futures quotes.",
  },
].map((project) => ({
  ...project,
  publication: publications.find((pub) => pub.title === project.title),
}));

const ResearchSection = () => {
  return (
    <section id="research" className="py-12 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-[26px] font-semibold [font-variant:small-caps] tracking-wide text-foreground mb-4">Research</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My research is on interest rate modelling and derivatives pricing in incomplete markets,
            focusing on SOFR, the benchmark rate that replaced USD LIBOR. I combine statistical
            modelling of the term structure with convex optimisation to price and hedge derivatives
            when not all risk can be hedged away.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {researchAreas.map((area) => {
            const IconComponent = area.icon;
            return (
              <Card
                key={area.title}
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-base font-semibold text-foreground">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-normal">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.keywords.map((keyword) => (
                      <Badge key={keyword} variant="secondary" className="text-xs font-medium">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Projects */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold [font-variant:small-caps] tracking-wide text-foreground mb-6">Projects</h3>
          <div className="space-y-6">
            {projects.map((project) => (
              <Card key={project.title} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h4 className="text-base font-semibold text-foreground">{project.title}</h4>
                    {project.publication && (
                      <Badge variant="outline" className="shrink-0">{project.publication.status}</Badge>
                    )}
                  </div>
                  <p className="text-body text-[14px] mb-4 text-left sm:text-justify">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between gap-4 text-[13px] text-muted-foreground">
                    <span>{project.period}</span>
                    {project.publication && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.publication.url} target="_blank" rel="noopener noreferrer">
                          {project.publication.linkLabel === "PDF"
                            ? <FileText size={14} className="mr-1" />
                            : <ExternalLink size={14} className="mr-1" />}
                          {project.publication.linkLabel}
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
