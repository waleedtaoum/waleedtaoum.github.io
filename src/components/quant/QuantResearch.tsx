import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, FileText } from "lucide-react";
import { publications } from "@/data/content";
import { research } from "@/data/quant";

// Pair each applied summary with its publication record (venue, year, status, link).
const papers = research.map((paper) => ({
  ...paper,
  publication: publications.find((pub) => pub.title === paper.title),
}));

const QuantResearch = () => (
  <section id="research" className="py-12 bg-muted/30">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h2 className="text-[26px] font-semibold [font-variant:small-caps] tracking-wide text-foreground mb-4">Research</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {papers.map(({ title, summary, publication }) => (
          <Card key={title} className="shadow-card">
            <CardContent className="p-6 h-full flex flex-col">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-base font-semibold text-foreground leading-tight">{title}</h3>
                {publication && <Badge variant="secondary" className="shrink-0">{publication.status}</Badge>}
              </div>
              {publication && (
                <p className="text-[13px] text-muted-foreground mb-3">
                  {publication.venue} • {publication.year} · with T. Pennanen
                </p>
              )}
              <p className="text-body text-[14px] mb-4 text-left sm:text-justify">{summary}</p>
              {publication && (
                <div className="mt-auto">
                  <Button variant="outline" size="sm" asChild>
                    <a href={publication.url} target="_blank" rel="noopener noreferrer">
                      {publication.linkLabel === "PDF"
                        ? <FileText size={14} className="mr-1" />
                        : <ExternalLink size={14} className="mr-1" />}
                      {publication.linkLabel}
                    </a>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-center text-[13px] text-muted-foreground mt-8">
        <Link to="/academic#publications" className="inline-flex items-center gap-1 text-primary hover:underline">
          Full publication list, talks and teaching on my academic website
          <ArrowRight size={14} />
        </Link>
      </p>
    </div>
  </section>
);

export default QuantResearch;
