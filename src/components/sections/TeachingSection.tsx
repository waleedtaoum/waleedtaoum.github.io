import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Plus, Minus } from "lucide-react";
import { useState } from "react";

const TeachingSection = () => {
  const courses = [
    {
      title: "Incomplete Markets (GTA)",
      code: "FM12 (Level 7)",
      semester: "Semester 2: 2023, 2024, 2025",
      level: "Graduate",
      institution: "King's College London",
      description: "Pricing and hedging in incomplete markets. It builds on convex optimisation techniques to construct Asset Liability Management problems."
    },
    {
      title: "Interest Rates and Credit Risk (GTA)",
      code: "FM07 (Level 7)",
      semester: "Semester 2: 2022, 2023, 2024, 2025",
      level: "Graduate",
      institution: "King's College London",
      description: "Fundamentals of interest rate and credit risk models, with application to derivatives pricing."
    },
    {
      title: "Financial Mathematics I (GTA)",
      code: "CM338A (Level 6)",
      semester: "Semester 1: 2023, 2024, 2025",
      level: "Undergraduate",
      institution: "King's College London",
      description: "Financial Mathematics in discrete and continuous time."
    },
    {
      title: "Financial Mathematics II (GTA)",
      code: "CM388A (Level 6)",
      semester: "Semester 2: 2024, 2025",
      level: "Undergraduate",
      institution: "King's College London",
      description: "Introduction to advanced topics in Financial Mathematics: Portfolio theory, Game theory, Utility and utility maximisation."
    },
    {
      title: "Fundamentals of Probability (GTA)",
      code: "CM341A (Level 6)",
      semester: "Semester 1: 2021",
      level: "Undergraduate",
      institution: "King's College London",
      description: "Introduction to advanced topics: Measure theory, Independence, Conditioning, Characteristic functions, etc."
    }
  ];


  // Maintain expanded state for each course; keys are course indices.
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggleExpand = (index: number) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="teaching" className="py-12 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-[26px] font-semibold [font-variant:small-caps] tracking-wide text-foreground mb-4">Teaching</h2>
        </div>

        {/* Modules Taught */}
        <div>
          <h3 className="text-xl font-semibold [font-variant:small-caps] tracking-wide text-foreground mb-6">Modules Taught</h3>
          <div className="flex flex-col gap-6">
            {courses.map((course, index) => {
              const isExpanded = !!expanded[index];
              return (
                <Card
                  key={index}
                  className="w-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <CardHeader>
                  <div className="flex justify-between items-start mb-0">
                    <CardTitle className="text-base font-semibold">{course.title}</CardTitle>
                    <div className="flex items-center gap-5">
                      <Badge variant={course.level === "Graduate" ? "default" : "secondary"}>
                        {course.level}
                      </Badge>
                      <button
                        onClick={() => toggleExpand(index)}
                        aria-expanded={isExpanded}
                        aria-label={isExpanded ? `Hide details for ${course.title}` : `Show details for ${course.title}`}
                        className="p-1 text-primary hover:text-primary/80 focus:outline-none"
                      >
                        {isExpanded ? <Minus className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
                      </button>
                    </div>
                  </div>

                  </CardHeader>


                  {isExpanded && (
                    <CardContent>
                      <div className="pt-0"> {/* Add padding top to give room for the icon */}
                        <div className="flex justify-between text-[13px] text-muted-foreground mb-2">
                          <span>{course.code}</span>
                          <span className="mr-14">{course.semester}</span>
                        </div>
                        <p className="text-body text-[14px] mb-3">{course.description}</p>
                        <div className="flex items-center text-[13px] text-primary">
                          <Building className="h-4 w-4 mr-1" />
                          <span>{course.institution}</span>
                        </div>
                      </div>

                      </CardContent>
                    )}
                </Card>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TeachingSection;
