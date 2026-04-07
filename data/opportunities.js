/**
 * data/opportunities.js
 *
 * This file contains all the opportunity data shown on the Opportunities page.
 * Each opportunity has a title, category, region, audience, summary, and highlight.
 * The `filters` array drives the filter-chip buttons at the top of the page.
 *
 * To add a new opportunity, just copy one of the objects below and fill in the fields.
 */

// Each opportunity is an object with these fields:
//   title    - Name of the opportunity
//   category - Used for filtering (must match one of the values in `filters`)
//   region   - Country or location
//   audience - Which students this is intended for
//   summary  - A short paragraph describing the program
//   highlight - One sentence that stands out about this opportunity
export const opportunities = [
  {
    title: "University of Louisville 2+2 Program",
    category: "Dual Degree",
    region: "USA",
    audience: "Engineering Students",
    summary:
      "An undergraduate transfer partnership in Bioengineering and Computer Science Engineering with two years at AIU and two years at UofL.",
    highlight: "Credit transfer guidance, tuition context, and checklist support",
  },
  {
    title: "West Virginia University Pathway",
    category: "Dual Degree",
    region: "USA",
    audience: "Cyber Security, Business, PharmD, Arts and Design",
    summary:
      "A 2+2 and 3+1 style collaboration covering double degrees, student exchange, joint research, and broader academic cooperation.",
    highlight: "Strong cross-discipline international partnership",
  },
  {
    title: "Jean Moulin Lyon 3 Program",
    category: "Dual Degree",
    region: "France",
    audience: "Advertising and Communication Students",
    summary:
      "A dedicated dual degree pathway between AIU and Jean Moulin Lyon 3 for students in Arts and Design aligned study paths.",
    highlight: "European dual degree with transfer-focused presentation",
  },
  {
    title: "Ontario Tech Summer Internships",
    category: "Internship",
    region: "Canada",
    audience: "Computer Science and Engineering",
    summary:
      "Research lab internship placements featured as part of AIU's international practical-learning network.",
    highlight: "Research-driven summer experience abroad",
  },
  {
    title: "Virginia Tech Exchange Program",
    category: "Exchange",
    region: "USA",
    audience: "Mobility Program Applicants",
    summary:
      "A dedicated exchange page layout for semester opportunities, partner campus context, and mobility preparation.",
    highlight: "Exchange-focused page flow for semester mobility journeys",
  },
  {
    title: "International Academy of Public Health",
    category: "Certificate",
    region: "Online",
    audience: "Public Health Learners",
    summary:
      "Courses, training diploma programs, internships, professional certificates, and residency-aligned opportunities.",
    highlight: "Flexible online and professional-development path",
  },
  {
    title: "William Paterson and Ocean County Programs",
    category: "Training",
    region: "USA",
    audience: "Business and Data-Oriented Students",
    summary:
      "Opportunities in data analysis, financial planning, Human Resources, and related professional tracks.",
    highlight: "Career-facing academic and training mix",
  },
  {
    title: "UAB Civil Engineering Master's Track",
    category: "Graduate",
    region: "USA / Online",
    audience: "Engineering Graduates",
    summary:
      "Dual master's routes and online or hybrid Construction Engineering Management opportunities connected to UAB and HBRC.",
    highlight: "Graduate progression with hybrid delivery options",
  },
  {
    title: "AlMaktoum College MBA Pathway",
    category: "Graduate",
    region: "Scotland",
    audience: "Business Students",
    summary:
      "A graduate-facing agreement that opens a double degree MBA path and future expansion opportunities.",
    highlight: "International MBA-oriented progression",
  },
  {
    title: "AIU Intramural Research Grants",
    category: "Research",
    region: "AIU",
    audience: "Faculty and Students",
    summary:
      "Internal research funding that supports community impact, environmental needs, and AIU's strategic research goals.",
    highlight: "Formal submission and review experience for internal research",
  },
];

// The list of filter chip labels shown above the opportunity cards.
// "All" shows every opportunity; the rest filter by category.
export const filters = [
  "All",
  "Dual Degree",
  "Internship",
  "Exchange",
  "Research",
  "Graduate",
  "Training",
  "Certificate",
];
