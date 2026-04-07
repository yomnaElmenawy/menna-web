/**
 * data/dashboard.js
 *
 * Contains data for the Dashboards overview page.
 *
 * `dashboardContent` - Holds the preview content for each role (student, researcher, admin).
 *   Each role entry has a title, subtitle, KPI numbers, and two lists of features.
 *
 * `dashboardRoutes` - Maps role names to their Next.js page paths.
 *   Used to build the "Open [Role] Dashboard" button link.
 */

// dashboardContent drives the preview panel on the /dashboards page.
// When a user clicks a role button, the matching object is rendered.
export const dashboardContent = {
  student: {
    title: "Student Dashboard",
    subtitle: "A student-first workspace for discovery, application, and status tracking.",
    kpis: [
      { value: "12", label: "matched opportunities" },
      { value: "4", label: "applications in progress" },
      { value: "87%", label: "profile completion" },
    ],
    leftTitle: "Main student tools",
    leftItems: [
      "Profile setup with CV, GPA, interests, and skills",
      "Saved opportunities and document checklist tracking",
      "Application timeline and notification center",
    ],
    rightTitle: "Suggested layout blocks",
    rightItems: [
      "Recommended programs based on field and goals",
      "Quick filters for internships, research, and exchange",
      "Status cards for each submitted application",
    ],
  },
  researcher: {
    title: "Research Dashboard",
    subtitle: "A review space for project listings, submission intake, and mentor oversight.",
    kpis: [
      { value: "8", label: "active calls" },
      { value: "26", label: "submitted applications" },
      { value: "5", label: "shortlisted teams" },
    ],
    leftTitle: "Research tools",
    leftItems: [
      "Publish calls with requirements, funding notes, and deadlines",
      "Review submission quality, fit, and field alignment",
      "Monitor submissions by topic and applicant type",
    ],
    rightTitle: "Suggested layout blocks",
    rightItems: [
      "Submission funnel and reviewer notes",
      "Research themes and SDG alignment summaries",
      "Mentor assignment and shortlist actions",
    ],
  },
  admin: {
    title: "Professor / Admin Dashboard",
    subtitle: "An operational panel for posting, ranking, communication, and final decisions.",
    kpis: [
      { value: "143", label: "applications reviewed" },
      { value: "31", label: "open listings" },
      { value: "9", label: "AI-ranked queues" },
    ],
    leftTitle: "Administrative tools",
    leftItems: [
      "Create and manage opportunities across internal and partner pathways",
      "Review applicants with AI-supported ranking indicators",
      "Control final decisions, notifications, and listing updates",
    ],
    rightTitle: "Suggested layout blocks",
    rightItems: [
      "Sortable candidate tables and fit insights",
      "Listing performance and deadline monitoring",
      "Decision-ready review queue layouts",
    ],
  },
};

// Maps each role key to the Next.js route path for that role's dashboard.
export const dashboardRoutes = {
  student: "/student-dashboard",
  researcher: "/researcher-dashboard",
  admin: "/admin-dashboard",
};
