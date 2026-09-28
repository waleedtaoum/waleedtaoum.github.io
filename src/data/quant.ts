// Content for the professional (quant) homepage at /. Drawn from the CV; British spelling to match the site.

export const QUANT_EMAIL = "waleedtaoum@gmail.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/waleedtaoum/";

export const headline = {
  title: "Quantitative Researcher",
  tagline: "Derivatives pricing and hedging · Interest rates · SOFR · Python",
  location: "London, United Kingdom",
  // Shown prominently: right to work is one of the first things UK recruiters check.
  workRights: { title: "UK ILR", details: ["Full right to work", "No sponsorship required"] },
};

// Text between *asterisks* is shown in italics.
export const profile = [
  "Welcome to my website. I am a quantitative researcher working on SOFR derivatives pricing, hedging and portfolio optimisation, with a PhD in applied mathematics from King's College London. My research is on the pricing and hedging of interest rate derivatives in incomplete markets, where perfect replication is not possible.",
  "I build and solve high-dimensional optimisation models and implement them efficiently in Python, cutting a core pricing workflow from 8 minutes to 50 seconds. My SOFR term structure model is published in *Applied Mathematical Finance*, and a second paper, on the optimal pricing and hedging of SOFR derivatives, is under review. I have presented this work at conferences and seminars in Sydney, Vienna, Paris and London.",
  "Before the doctorate, I spent six years running a discretionary FX and index futures book to defined position-sizing and drawdown limits. Fluent in English, native French and Arabic.",
];

export const skills = [
  { category: "Programming", items: ["Python", "NumPy", "pandas", "SciPy", "Numba", "Git"] },
  {
    category: "Quantitative Methods",
    items: [
      "Pricing and hedging",
      "Cash-flow modelling",
      "Discounting and curve construction",
      "Monte Carlo simulation",
      "Portfolio construction and optimisation",
      "Convex optimisation (CVXPY, MOSEK, SciPy)",
      "Stochastic modelling",
      "Linear regression (OLS)",
      "Maximum likelihood estimation",
      "Time series modelling",
    ],
  },
  {
    category: "Markets and Products",
    items: ["SOFR curves", "Interest rate futures", "Swaps", "Swaptions", "Caps", "FX futures", "Index futures"],
  },
  { category: "Tools", items: ["Bloomberg Terminal", "Excel", "LaTeX"] },
  { category: "Languages", items: ["English (fluent)", "French (native)", "Arabic (native)"] },
];

export type QuantExperience = {
  position: string;
  organisation: string;
  url?: string;
  location: string;
  period: string;
  highlights: string[];
};

export const experience: QuantExperience[] = [
  {
    position: "Derivatives Pricing and SOFR Curve Modelling",
    organisation: "King's College London, Doctoral Research",
    url: "https://www.kcl.ac.uk",
    location: "London, United Kingdom",
    period: "Sep 2021 – Oct 2026",
    highlights: [
      "Priced and hedged SOFR swaps, swaptions and caps through hedging-based indifference pricing in incomplete markets, with explicit valuation of the unhedgeable residual risk. Submitted for publication (with T. Pennanen).",
      "Built and solved the underlying high-dimensional, semi-static portfolio optimisation model using convex optimisation, Monte Carlo simulation and out-of-sample validation.",
      "Automated curve construction, simulation, optimisation and pricing workflows in Python using NumPy, pandas and Numba, cutting payoff, cash-flow and forward-curve computation from 8 minutes to 50 seconds.",
      "Developed a statistical term-structure model for SOFR forward curves under the real-world measure, estimated by least squares from four years of SOFR fixings and CME futures quotes. Published in Applied Mathematical Finance (with T. Pennanen).",
    ],
  },
  {
    position: "Portfolio Manager, FX and Index Futures",
    organisation: "A.T. Family Office",
    location: "Cannes, France",
    period: "Sep 2013 – Sep 2019",
    highlights: [
      "Constructed and managed an FX and index futures portfolio under defined position-sizing and capital-allocation rules, within a 9% maximum drawdown limit.",
      "Monitored realised performance and drawdown against the portfolio's risk tolerance, adjusting allocation and position sizing.",
    ],
  },
  {
    position: "Financial Analyst",
    organisation: "Talan",
    url: "https://www.talan.com",
    location: "Paris, France",
    period: "Sep 2011 – Sep 2013",
    highlights: [
      "Automated weekly cash forecasting and cash-flow reporting, cutting manual processing by 90%.",
      "Prepared budget forecasts and reports for the CEO and COO.",
    ],
  },
  {
    position: "Project Leader",
    organisation: "Tactem",
    location: "Saint-Cloud, France",
    period: "Sep 2008 – Sep 2009",
    highlights: [
      "Translated client requirements into product specifications and a prioritised delivery roadmap, working across commercial and technical stakeholders in four countries.",
    ],
  },
];

// Applied summaries of the two papers; titles must match `publications` in content.ts.
export const research = [
  {
    title: "Optimal Pricing and Hedging of SOFR Derivatives",
    summary: "Indifference pricing and hedging of OTC SOFR derivatives using hundreds of CME-listed instruments. Prices are computed in under a minute on a regular PC, and the optimal hedging portfolios are sparse, with an explicit description of the hedging error and its risk.",
  },
  {
    title: "Statistical Modeling of SOFR Term Structure",
    summary: "A real-world SOFR term-structure model with jumps driven by the macroeconomic factors behind central bank policy rates, calibrated to SOFR fixings and CME futures quotes and built for large-scale risk simulations.",
  },
];

export const education = [
  { degree: "PhD in Applied Mathematics", note: "UKRI Scholarship", institution: "King's College London", url: "https://www.kcl.ac.uk/study/postgraduate-research/areas/applied-mathematics-research-mphil-phd", year: "2026" },
  { degree: "MSc Financial Mathematics", note: "Distinction · Top 3 of 96", institution: "King's College London", url: "https://www.kcl.ac.uk/study/postgraduate-taught/courses/financial-mathematics-with-data-science-msc", year: "2020" },
  { degree: "MBA Finance and Financial Engineering", note: "Distinction", institution: "ISC Paris", url: "https://www.iscparis.com", year: "2011" },
  { degree: "Master in Management and Informatics, specialisation in Finance", institution: "ESIEE Paris", url: "https://www.esiee.fr", year: "2008" },
  { degree: "BSc Computer Engineering", institution: "American University of Technology", url: "https://www.aut.edu", year: "2004" },
];
