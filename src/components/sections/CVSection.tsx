import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, GraduationCap, Briefcase, Award, BookOpen, Handshake, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { awards } from "@/data/content";

type Education = {
  degree: string;
  institution: string;
  url?: string;
  honours?: string;
  year: string; // year of completion
  supervisor?: { name: string; url: string };
  thesis?: string;
};

type Experience = {
  position: string;
  institution: string;
  url?: string;
  location: string;
  period: string;
  summary?: string;
};

const CVSection = () => {
  // Full detail for the doctorate only; earlier degrees are one line each.
  const education: Education[] = [
    {
      degree: "PhD in Applied Mathematics",
      institution: "King's College London",
      url: "https://www.kcl.ac.uk/study/postgraduate-research/areas/applied-mathematics-research-mphil-phd",
      year: "2026",
      supervisor: { name: "Professor Teemu Pennanen", url: "https://sites.google.com/view/pennanen" },
      thesis: "Statistical Modeling, Portfolio Optimization, and Indifference Pricing in SOFR Derivatives Market"
    },
    {
      degree: "MSc in Financial Mathematics",
      institution: "King's College London",
      url: "https://www.kcl.ac.uk/study/postgraduate-taught/courses/mathematics-msc",
      honours: "Distinction",
      year: "2020"
    },
    {
      degree: "MBA in Finance and Financial Engineering",
      institution: "ISC Paris",
      url: "https://www.iscparis.com",
      year: "2011"
    },
    {
      degree: "MSc in Informatics",
      institution: "ESIEE Paris",
      url: "https://www.esiee.fr",
      year: "2008"
    },
    {
      degree: "BSc in Computer Engineering",
      institution: "AUT",
      url: "https://www.aut.edu",
      year: "2004"
    }
  ];

  const experience: Experience[] = [
    {
      position: "Graduate Teaching Assistant",
      institution: "King's College London",
      url: "https://www.kcl.ac.uk/mathematics",
      location: "London, United Kingdom",
      period: "2021 - 2026",
      summary: "Teaching assistant for graduate and undergraduate modules in financial mathematics and probability."
    },
    {
      position: "Portfolio Manager, FX and Index Futures",
      institution: "A.T. Family Office",
      location: "Cannes, France",
      period: "2013 - 2019",
      summary: "Managed the family's FX and index futures portfolio within defined risk and drawdown limits."
    },
    {
      position: "Financial Analyst",
      institution: "Talan",
      url: "https://www.talan.com",
      location: "Paris, France",
      period: "2011 - 2013",
      summary: "Cash-flow forecasting and financial reporting."
    },
    {
      position: "Project Leader",
      institution: "Tactem",
      location: "Saint-Cloud, France",
      period: "2008 - 2009",
      summary: "Product specification and delivery with teams in four countries."
    }
  ];

  // Which experience entries are expanded; keys are indices into `experience`.
  const [expandedExperience, setExpandedExperience] = useState<Record<number, boolean>>({});

  const toggleExperience = (index: number) => {
    setExpandedExperience((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const skills = [
    { category: "Research Areas", items: ["Financial Mathematics", "Interest Rate Modelling", "Computational Methods in Finance"] },
    { category: "Quantitative Methods", items: ["Pricing and hedging", "Stochastic modelling", "Monte Carlo simulation", "Convex optimisation", "Portfolio optimisation", "Curve construction", "Time series modelling"] },
    { category: "Programming and Software", items: ["Python", "NumPy", "pandas", "SciPy", "Numba", "MOSEK", "Git", "LaTeX"] },
    { category: "Languages", items: ["English (fluent)", "French (native)", "Arabic (native)"] }
  ];

  return (
    <section id="cv" className="py-12 bg-gradient-to-br from-blue-50 to-background dark:bg-none dark:bg-[hsl(var(--section-tint))]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-[26px] font-semibold [font-variant:small-caps] tracking-wide text-foreground mb-4">Curriculum Vitae</h2>
          <Button size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300" asChild>
            <a href="mailto:waleed.taoum@kcl.ac.uk">
              <Download className="mr-2" size={20} />
              Request Full Resume
            </a>
          </Button>
        </div>

        {/* 5/3 split on large screens: Education & Experience | Skills, Awards & Service */}
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-8">
          {/* Left Column - Education & Experience */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Education */}
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl [font-variant:small-caps] tracking-wide">
                  <GraduationCap className="text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-primary/20 pl-4">
                      <h3 className="text-[15px] font-semibold text-foreground">
                        {edu.degree}
                        {edu.honours && (
                          <Badge variant="secondary" className="ml-2 align-middle text-xs">{edu.honours}</Badge>
                        )}
                      </h3>
                      <p className="text-sm font-medium">
                        {edu.url ? (
                          <a
                            href={edu.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            {edu.institution}
                          </a>
                        ) : (
                          <span className="text-primary">{edu.institution}</span>
                        )}
                        <span className="text-[13px] font-normal text-muted-foreground"> · {edu.year}</span>
                      </p>
                      {edu.supervisor && (
                        <p className="text-[13px] text-muted-foreground mt-2">
                          <span className="font-medium text-foreground">Supervisor:</span>{" "}
                          <a
                            href={edu.supervisor.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {edu.supervisor.name}
                          </a>
                        </p>
                      )}
                      {edu.thesis && (
                        <p className="text-[13px] text-muted-foreground">
                          <span className="font-medium text-foreground">Thesis:</span> {edu.thesis}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Professional Experience (grows so both columns end level) */}
            <Card className="flex-1 shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl [font-variant:small-caps] tracking-wide">
                  <Briefcase className="text-primary" />
                  Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {experience.map((exp, index) => {
                    const isExpanded = !!expandedExperience[index];
                    return (
                      <div key={index} className="border-l-2 border-primary/20 pl-4">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-[15px] font-semibold text-foreground">{exp.position}</h3>
                            <p className="text-sm text-primary font-medium">
                              {exp.url ? (
                                <a href={exp.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                  {exp.institution}
                                </a>
                              ) : (
                                exp.institution
                              )}
                              <span className="text-[13px] font-normal text-muted-foreground"> · {exp.location}</span>
                            </p>
                            <p className="text-[13px] text-muted-foreground">{exp.period}</p>
                          </div>
                          {exp.summary && (
                            <button
                              onClick={() => toggleExperience(index)}
                              aria-expanded={isExpanded}
                              aria-label={isExpanded ? `Hide details for ${exp.position}` : `Show details for ${exp.position}`}
                              className="p-1 text-primary hover:text-primary/80 focus:outline-none shrink-0"
                            >
                              {isExpanded ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                            </button>
                          )}
                        </div>
                        {isExpanded && exp.summary && (
                          <p className="text-body text-[14px] mt-2">{exp.summary}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Skills, Awards & Service */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            {/* Skills */}
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl [font-variant:small-caps] tracking-wide">
                  <BookOpen className="text-primary" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skills.map((skillGroup, index) => (
                    <div key={index}>
                      <h3 className="font-semibold text-foreground mb-2">{skillGroup.category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-[13px]">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Awards & Honours */}
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl [font-variant:small-caps] tracking-wide">
                  <Award className="text-primary" />
                  Awards & Honours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {awards.map((award, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-foreground">{award.name}</h3>
                        <p className="text-[13px] text-primary font-medium">{award.year}</p>
                        <p className="text-[13px] text-muted-foreground">{award.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Professional Service (grows so both columns end level) */}
            <Card className="flex-1 shadow-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl [font-variant:small-caps] tracking-wide">
                  <Handshake className="text-primary" />
                  Service to the Community
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-[13px]">
                  <div>
                    <p className="font-medium text-foreground">Workshop Co-organiser</p>
                    <p className="text-muted-foreground">Mathematical Sciences PhD Conference at King's College London (2022)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVSection;
