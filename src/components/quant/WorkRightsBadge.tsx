import { headline } from "@/data/quant";

// Highlighted badge for the UK right-to-work statement, in the site's blue accent.
const WorkRightsBadge = () => (
  <div
    className="inline-flex items-center rounded-xl border px-4 py-2 text-left
      border-primary/40 bg-primary/10 text-primary"
  >
    <div className="leading-tight">
      <p className="font-bold">{headline.workRights.title}</p>
      {headline.workRights.details.map((detail) => (
        <p key={detail} className="text-xs font-medium">{detail}</p>
      ))}
    </div>
  </div>
);

export default WorkRightsBadge;
