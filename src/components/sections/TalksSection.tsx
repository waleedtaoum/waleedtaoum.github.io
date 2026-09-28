import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";
import { talks, type Talk } from "@/data/content";

const TalkCard = ({ talk, isUpcoming }: { talk: Talk, isUpcoming: boolean }) => (
  <Card className={`shadow-card hover:shadow-elegant transition-all duration-300 ${isUpcoming ? 'border-primary/50' : 'border-border/50'}`}>
    <CardHeader>
      <div className="flex items-start justify-between gap-4">
        <CardTitle className="text-base font-semibold text-foreground leading-tight">
          {talk.event}
        </CardTitle>
        <Badge
          variant={isUpcoming ? "default" : "secondary"}
          className="shrink-0"
        >
          {talk.type}
        </Badge>
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-3">
        <div className="text-[13px] text-muted-foreground">
          <div className="flex items-center gap-2 mb-2">
            <Calendar size={16} className="text-primary" />
            <span>{talk.date}</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Building size={16} className="text-primary" />
            <span>{talk.venue}</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <MapPin size={16} className="text-primary" />
            <span>{talk.location}</span>
          </div>
        </div>

        <p className="text-[13px] text-muted-foreground leading-normal">
          {talk.title}
        </p>
      </div>
    </CardContent>
  </Card>
);

const TalksSection = () => {
  const upcomingTalks = talks.filter(talk => talk.status === "upcoming");
  const pastTalks = talks.filter(talk => talk.status === "completed");
  const pastGroups = [
    { title: "Invited Talks", items: pastTalks.filter(talk => talk.type === "Invited Talk") },
    { title: "Conference Presentations", items: pastTalks.filter(talk => talk.type !== "Invited Talk") },
  ].filter(group => group.items.length > 0);

  return (
    <section id="talks" className="py-12 bg-gradient-to-br from-blue-50 to-background dark:bg-none dark:bg-[hsl(var(--section-tint))]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-[26px] font-semibold [font-variant:small-caps] tracking-wide text-foreground mb-4">Talks</h2>
        </div>

        {/* Upcoming Talks (only shown when a talk in src/data/content.ts has status "upcoming") */}
        {upcomingTalks.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold [font-variant:small-caps] tracking-wide text-foreground mb-6 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
              Upcoming Talks
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {upcomingTalks.map((talk, index) => (
                <TalkCard key={index} talk={talk} isUpcoming={true} />
              ))}
            </div>
          </div>
        )}

        {/* Past Talks, grouped by type */}
        <div className="space-y-12">
          {pastGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xl font-semibold [font-variant:small-caps] tracking-wide text-foreground mb-6">{group.title}</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {group.items.map((talk) => (
                  <TalkCard key={`${talk.event}-${talk.date}`} talk={talk} isUpcoming={false} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TalksSection;
