/**
 * data/student.js
 *
 * Contains all data used by the Student Dashboard page.
 *
 * `studentApplications`    - The list of in-progress applications shown in the tracker section.
 * `studentPathwaysCatalog` - All possible recommended pathways; filtered by the student's field/level.
 * `studentDashboardState`  - Default numeric stats shown in the KPI row at the top of the dashboard.
 */

// Each application in the tracker has:
//   id            - Unique key for this application
//   category      - Short label (e.g. "Dual Degree", "Internship")
//   title         - Full program name
//   statusLabel   - Text shown in the status pill
//   statusClass   - CSS modifier: "review" | "draft" | "success"
//   description   - One or two sentences about the current state
//   fields        - (optional) Which student fields this applies to
//   allowedLevels - (optional) Which year levels are allowed
//   steps         - (optional) Array of { label, state } where state is "done" | "current" | "upcoming"
//   metaLabel     - (optional) Label for a note row (used when steps is absent)
//   metaValue     - (optional) Value for that note row
export const studentApplications = [
  {
    id: "louisville-22",
    category: "Dual Degree",
    title: "University of Louisville 2+2 Program",
    statusLabel: "Under Review",
    statusClass: "review",
    description:
      "Academic documents were accepted and the international office is reviewing your pathway eligibility.",
    fields: ["engineering", "computer-science"],
    allowedLevels: ["foundation", "year-1", "year-2"],
    steps: [
      { label: "Submitted", state: "done" },
      { label: "Documents Checked", state: "done" },
      { label: "Review Stage", state: "current" },
      { label: "Final Decision", state: "upcoming" },
    ],
  },
  {
    id: "ontario-tech",
    category: "Internship",
    title: "Ontario Tech Research Labs",
    statusLabel: "Needs Action",
    statusClass: "draft",
    description:
      "Your statement of purpose is still missing. Complete it before the submission window closes this week.",
    fields: ["engineering", "computer-science"],
    allowedLevels: ["year-2", "year-3", "year-4", "year-5", "graduate"],
    metaLabel: "Next action:",
    metaValue: "Upload statement of purpose before Friday",
  },
  {
    id: "virginia-tech",
    category: "Exchange",
    title: "Virginia Tech Exchange Program",
    statusLabel: "Shortlisted",
    statusClass: "success",
    description:
      "You have been shortlisted and are waiting for final nomination confirmation from AIU.",
    metaLabel: "Update:",
    metaValue: "Interview completed successfully",
  },
];

// Each pathway in the catalog has:
//   id            - Matches an opportunity id for cross-reference
//   label         - Short badge text (e.g. "Best match", "Career path")
//   title         - Program name
//   description   - A short explanation of why this is a good fit
//   tags          - Array of short label strings shown as pills
//   fields        - (optional) Student fields this is relevant to
//   allowedLevels - (optional) Year levels this is open to
//   score         - Number used to sort recommendations (higher = higher priority)
export const studentPathwaysCatalog = [
  {
    id: "louisville-22",
    label: "Best match",
    title: "University of Louisville 2+2 Program",
    description:
      "An international transfer route for engineering and computing students preparing for the Louisville 2+2 structure.",
    tags: ["USA", "Dual Degree", "Transfer"],
    fields: ["engineering", "computer-science"],
    allowedLevels: ["foundation", "year-1", "year-2"],
    score: 10,
  },
  {
    id: "ontario-tech",
    label: "Career path",
    title: "Ontario Tech Summer Internships",
    description:
      "A practical research and technical experience abroad for students building applied engineering or computing skills.",
    tags: ["Canada", "Internship", "Applied"],
    fields: ["engineering", "computer-science"],
    allowedLevels: ["year-2", "year-3", "year-4", "year-5", "graduate"],
    score: 9,
  },
  {
    id: "jean-moulin",
    label: "Best match",
    title: "Jean Moulin Lyon 3 Program",
    description:
      "A strong Arts and Communication dual-degree route connected to the Jean Moulin Lyon 3 agreement.",
    tags: ["France", "Dual Degree", "High fit"],
    fields: ["arts-communication"],
    score: 10,
  },
  {
    id: "public-health",
    label: "Best match",
    title: "International Academy of Public Health",
    description:
      "A flexible public-health path with certificates, training, and professional development opportunities.",
    tags: ["Online", "Certificate", "High fit"],
    fields: ["public-health"],
    score: 10,
  },
  {
    id: "uab-masters",
    label: "Graduate path",
    title: "UAB Civil Engineering Master's Track",
    description:
      "A graduate progression route for engineering students moving into advanced study and dual master's opportunities.",
    tags: ["USA", "Graduate", "Engineering"],
    fields: ["engineering"],
    allowedLevels: ["graduate"],
    score: 10,
  },
  {
    id: "almaktoum",
    label: "Graduate path",
    title: "AlMaktoum College MBA Pathway",
    description:
      "An international MBA-oriented progression option for students preparing for advanced business study.",
    tags: ["Scotland", "Graduate", "MBA"],
    fields: ["business"],
    allowedLevels: ["year-4", "year-5", "graduate"],
    score: 9,
  },
  {
    id: "william-paterson",
    label: "Career path",
    title: "William Paterson and Ocean County Programs",
    description:
      "A practical route for students building business, HR, finance, or analytics experience.",
    tags: ["USA", "Training", "Career-facing"],
    fields: ["business"],
    score: 8,
  },
  {
    id: "virginia-tech",
    label: "Mobility path",
    title: "Virginia Tech Exchange Program",
    description:
      "A broad international mobility option for students seeking partner-campus academic exposure.",
    tags: ["USA", "Exchange", "Mobility"],
    score: 6,
  },
  {
    id: "aiu-research",
    label: "Research path",
    title: "AIU Intramural Research Grants",
    description:
      "A flexible funded research route open to students who want faculty-led academic work and project experience.",
    tags: ["AIU", "Research", "Funding"],
    score: 7,
  },
];

// Default stats shown in the KPI row at the top of the Student Dashboard.
// In a real app these numbers would come from a backend API.
export const studentDashboardState = {
  matchedOpportunities: 12,
  applicationsInProgress: 4,
  profileCompletion: 20,
  upcomingDeadlines: 3,
};
