import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, Copy, ExternalLink, FileText, Quote, Users } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { publications } from "@/data/content";

type Panel = "abstract" | "bibtex";

const PublicationsSection = () => {
  // Which panel (if any) is open for each publication; keys are publication titles.
  const [openPanel, setOpenPanel] = useState<Record<string, Panel | undefined>>({});

  const togglePanel = (key: string, panel: Panel) => {
    setOpenPanel((prev) => ({
      ...prev,
      [key]: prev[key] === panel ? undefined : panel
    }));
  };

  // Published papers are listed as journal publications; everything else is a working paper.
  const groups = [
    { title: "Working Papers", items: publications.filter((pub) => pub.status !== "Published") },
    { title: "Publications in Peer-Reviewed Journals", items: publications.filter((pub) => pub.status === "Published") },
  ].filter((group) => group.items.length > 0);

  const copyBibtex = async (bibtex: string) => {
    try {
      await navigator.clipboard.writeText(bibtex);
      toast.success("BibTeX copied to clipboard");
    } catch {
      toast.error("Could not copy. Please select the text manually.");
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Article":
        return "bg-primary/20 text-primary";
      case "Manuscript":
        return "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published":
        return "bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-300";
      case "Submitted":
        return "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
    }
  };

  const renderPublication = (pub: (typeof publications)[number]) => (
    <Card key={pub.title} className="shadow-card hover:shadow-elegant transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-start gap-2 mb-3">
          <h3 className="text-base font-semibold text-foreground leading-tight flex-1">
            {pub.title}
          </h3>
          <div className="flex gap-2 shrink-0">
            <Badge className={getTypeColor(pub.type)}>
              {pub.type}
            </Badge>
            <Badge className={getStatusColor(pub.status)}>
              {pub.status}
            </Badge>
          </div>
        </div>

        <div className="text-[13px] text-muted-foreground mb-2">
          <span className="flex items-center gap-1">
            <Users size={14} />
            {pub.authors.join(", ")}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="text-[13px] font-medium text-foreground">
            {pub.venue} • {pub.year}
          </div>

          <div className="flex flex-wrap gap-2">
            {(["abstract", "bibtex"] as const).map((panel) => {
              const isOpen = openPanel[pub.title] === panel;
              return (
                <Button
                  key={panel}
                  variant={isOpen ? "secondary" : "outline"}
                  size="sm"
                  onClick={() => togglePanel(pub.title, panel)}
                  aria-expanded={isOpen}
                >
                  {panel === "abstract"
                    ? <FileText size={14} className="mr-1" />
                    : <Quote size={14} className="mr-1" />}
                  {panel === "abstract" ? "Abstract" : "Cite"}
                  <ChevronDown
                    size={14}
                    className={`ml-1 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </Button>
              );
            })}
            <Button variant="outline" size="sm" asChild>
              <a href={pub.url} target="_blank" rel="noopener noreferrer">
                {pub.linkLabel === "PDF"
                  ? <FileText size={14} className="mr-1" />
                  : <ExternalLink size={14} className="mr-1" />}
                {pub.linkLabel}
              </a>
            </Button>
          </div>
        </div>

        {openPanel[pub.title] === "abstract" && (
          <p className="mt-4 pt-4 border-t border-border text-body text-[14px] text-left sm:text-justify">
            {pub.abstract}
          </p>
        )}

        {openPanel[pub.title] === "bibtex" && (
          <div className="mt-4 pt-4 border-t border-border">
            <div className="relative">
              <pre className="text-xs bg-muted rounded-md p-4 pr-12 overflow-x-auto text-foreground">
                {pub.bibtex}
              </pre>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 h-8 w-8"
                onClick={() => copyBibtex(pub.bibtex)}
                aria-label="Copy BibTeX"
                title="Copy BibTeX"
              >
                <Copy size={14} />
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <section id="publications" className="py-12 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-[26px] font-semibold [font-variant:small-caps] tracking-wide text-foreground mb-4">Research Output</h2>
        </div>

        <div className="space-y-12">
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="text-xl font-semibold [font-variant:small-caps] tracking-wide text-foreground mb-6">{group.title}</h3>
            <div className="space-y-6">
              {group.items.map(renderPublication)}
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
