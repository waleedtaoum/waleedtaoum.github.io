import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/quant";

const QuantSkills = () => (
  <section id="skills" className="py-12 bg-muted/30">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h2 className="text-[26px] font-semibold [font-variant:small-caps] tracking-wide text-foreground mb-4">Skills</h2>
      </div>
      {/* Quantitative Methods has the most items, so it spans two columns; dense flow fills any gaps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row-dense gap-6">
        {skills.map((group) => (
          <Card
            key={group.category}
            className={`shadow-card ${group.category === "Quantitative Methods" ? "md:col-span-2" : ""}`}
          >
            <CardHeader>
              <CardTitle className="text-lg font-semibold [font-variant:small-caps] tracking-wide">{group.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} variant="secondary" className="text-[13px]">
                    {item}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default QuantSkills;
