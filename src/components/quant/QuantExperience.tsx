import { Card, CardContent } from "@/components/ui/card";
import { experience } from "@/data/quant";

const QuantExperience = () => (
  <section id="experience" className="py-12 bg-gradient-to-br from-blue-50 to-background dark:bg-none dark:bg-[hsl(var(--section-tint))]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h2 className="text-[26px] font-semibold [font-variant:small-caps] tracking-wide text-foreground mb-4">Experience</h2>
      </div>
      <div className="space-y-6">
        {experience.map((job) => (
          <Card key={`${job.organisation}-${job.period}`} className="shadow-card">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-3">
                <div>
                  <h3 className="text-[15px] font-semibold text-foreground">{job.position}</h3>
                  <p className="text-sm text-primary font-medium">
                    {job.url ? (
                      <a href={job.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {job.organisation}
                      </a>
                    ) : (
                      job.organisation
                    )}
                    <span className="text-[13px] font-normal text-muted-foreground"> · {job.location}</span>
                  </p>
                </div>
                <span className="text-[13px] text-muted-foreground sm:whitespace-nowrap">{job.period}</span>
              </div>
              <ul className="list-disc pl-5 space-y-1.5 text-body text-[14px] text-left sm:text-justify">
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default QuantExperience;
