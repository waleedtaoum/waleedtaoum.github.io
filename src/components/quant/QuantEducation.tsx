import { Card, CardContent } from "@/components/ui/card";
import { education } from "@/data/quant";

const QuantEducation = () => (
  <section id="education" className="py-12 bg-gradient-to-br from-blue-50 to-background dark:bg-none dark:bg-[hsl(var(--section-tint))]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h2 className="text-[26px] font-semibold [font-variant:small-caps] tracking-wide text-foreground mb-4">Education</h2>
      </div>
      <Card className="shadow-card">
        <CardContent className="p-6 divide-y divide-border">
          {education.map((item) => (
            <div key={item.degree} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 py-4 first:pt-0 last:pb-0">
              <div>
                <h3 className="text-[15px] font-semibold text-foreground">
                  {item.degree}
                  {item.note && <span className="font-normal text-muted-foreground"> · {item.note}</span>}
                </h3>
                <p className="text-[13px] text-primary">
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {item.institution}
                    </a>
                  ) : (
                    item.institution
                  )}
                </p>
              </div>
              <span className="text-[13px] text-muted-foreground">{item.year}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  </section>
);

export default QuantEducation;
