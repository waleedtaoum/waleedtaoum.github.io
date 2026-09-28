// Shared site content. Stats shown in the Profile and CV sections are derived
// from these lists, so adding a talk or publication here updates the counts too.

export const TEACHING_START_YEAR = 2021; // first GTA module (CM341A, Semester 1 2021)
export const ACADEMIA_END_YEAR = 2026; // PhD defended; counts stop growing after this year
export const INDUSTRY_YEARS = 9; // total across Tactem, Talan and A.T. Family Office (confirmed by Waleed)

// Years from `start` until now, capped at `end` so past periods don't keep growing.
export const yearsBetween = (start: number, end: number) =>
  Math.min(new Date().getFullYear(), end) - start;

export const publications = [
  {
    title: "Optimal Pricing and Hedging of SOFR Derivatives",
    authors: ["Teemu Pennanen", "Waleed Taoum"],
    venue: "arXiv preprint",
    year: 2026,
    type: "Manuscript",
    status: "Submitted",
    url: "https://arxiv.org/pdf/2608.10711",
    linkLabel: "PDF",
    bibtex: `@misc{pennanen2026optimal,
  author        = {Pennanen, Teemu and Taoum, Waleed},
  title         = {Optimal Pricing and Hedging of {SOFR} Derivatives},
  year          = {2026},
  eprint        = {2608.10711},
  archivePrefix = {arXiv},
  primaryClass  = {q-fin.PR},
  url           = {https://arxiv.org/abs/2608.10711}
}`,
    abstract:
      "Thousands of SOFR derivatives are available in exchanges and OTC, but the market remains illiquid and incomplete. Such a market is beyond the scope of classic risk-neutral approaches that imply linear pricing rules and, at best, approximate hedging strategies whose hedging error may be difficult to quantify. This paper develops an indifference pricing model which is consistent with observed derivative quotes, the agent's financial position and views about the uncertain future as well as risk preferences as described by a convex risk measure. In addition to prices and hedging strategies, the model gives an explicit description of the hedging error and the associated risk. The approach is illustrated numerically using hundreds of CME-listed derivatives to price and hedge unreplicable OTC SOFR derivatives. The indifference prices are computed in less than a minute on a regular PC. We find that the optimal hedging portfolios tend to be sparse but still provide good approximations of the derivative payouts."
  },
  {
    title: "Statistical Modeling of SOFR Term Structure",
    authors: ["Teemu Pennanen", "Waleed Taoum"],
    venue: "Applied Mathematical Finance, 32(4), 253–288",
    year: 2025,
    type: "Article",
    status: "Published",
    url: "https://www.tandfonline.com/doi/full/10.1080/1350486X.2026.2620091",
    linkLabel: "Journal",
    bibtex: `@article{pennanen2025statistical,
  author  = {Pennanen, Teemu and Taoum, Waleed},
  title   = {Statistical Modeling of {SOFR} Term Structure},
  journal = {Applied Mathematical Finance},
  volume  = {32},
  number  = {4},
  pages   = {253--288},
  year    = {2025},
  doi     = {10.1080/1350486X.2026.2620091}
}`,
    abstract:
      "SOFR derivatives market remains illiquid and incomplete so it is not amenable to classical risk-neutral term structure models which are based on the assumption of perfect liquidity and completeness. This paper develops a statistical SOFR term structure model that is well-suited for risk management and derivatives pricing within the incomplete markets paradigm. The model incorporates relevant macroeconomic factors that drive central bank policy rates which, in turn, cause jumps often observed in the SOFR rates. The model is easy to calibrate to historical data, current market quotes, and the user's views concerning the future development of the relevant macroeconomic factors. The model is well suited for large-scale simulations often required in risk management, portfolio optimization and indifference pricing of interest rate derivatives."
  },
];

export type Talk = {
  title: string;
  event: string;
  date: string;
  venue: string;
  location: string;
  type: string;
  status: "upcoming" | "completed";
};

export const talks: Talk[] = [
  {
    title: "Statistical Modeling of SOFR Term Structure",
    event: "Vienna Congress on Mathematical Finance",
    date: "July 2025",
    venue: "Wirtschaftsuniversität Wien",
    location: "Vienna, Austria",
    type: "Contributed Talk",
    status: "completed",
  },
  {
    title: "Statistical Modeling of SOFR Term Structure",
    event: "Seminar FM07",
    date: "February 2025",
    venue: "King's College London",
    location: "London, United Kingdom",
    type: "Invited Talk",
    status: "completed",
  },
  {
    title: "Statistical Modeling of SOFR Term Structure",
    event: "Internal Financial Mathematics Seminar",
    date: "February 2025",
    venue: "King's College London",
    location: "London, United Kingdom",
    type: "Invited Talk",
    status: "completed",
  },
  {
    title: "Pricing and Hedging SOFR Derivatives",
    event: "Quantitative Methods in Finance",
    date: "December 2024",
    venue: "University of Technology Sydney",
    location: "Sydney, Australia",
    type: "Contributed Talk",
    status: "completed",
  },
  {
    title: "Statistical Modeling of SOFR Term Structure",
    event: "London-Paris Bachelier Workshop",
    date: "September 2024",
    venue: "Institut Henri Poincaré",
    location: "Paris, France",
    type: "Contributed Talk",
    status: "completed",
  },
];

export const awards = [
  { name: "Financial Mathematics Project Prize", year: "2020", description: "Best MSc thesis of the year" },
  { name: "Scholarship for Doctoral Studies", year: "2021", description: "UKRI / EPSRC Scholarship" },
];
