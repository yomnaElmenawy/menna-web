const opportunities = [
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

const filters = ["All", "Dual Degree", "Internship", "Exchange", "Research", "Graduate", "Training", "Certificate"];

const studentApplications = [
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

const studentPathwaysCatalog = [
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

const studentDashboardState = {
  matchedOpportunities: 12,
  applicationsInProgress: 4,
  profileCompletion: 20,
  upcomingDeadlines: 3,
};

const dashboardContent = {
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

const authModes = {
  login: {
    buttonLabel: "Login to Dashboard",
    fullNamePlaceholder: "Optional for login",
  },
  register: {
    buttonLabel: "Create New Account",
    fullNamePlaceholder: "Your full name",
  },
};

const dashboardRoutes = {
  student: "student-dashboard.html",
  researcher: "researcher-dashboard.html",
  admin: "admin-dashboard.html",
};

const filterBar = document.getElementById("filterBar");
const opportunityGrid = document.getElementById("opportunityGrid");
const dashboardPreview = document.getElementById("dashboardPreview");
const roleDashboardLink = document.getElementById("roleDashboardLink");
const switches = document.querySelectorAll(".switch");
const authSwitches = document.querySelectorAll(".auth-switch");
const authSubmit = document.getElementById("authSubmit");
const authForm = document.getElementById("authForm");
const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const roleInput = document.getElementById("role");
const studentLevelInput = document.getElementById("studentLevel");
const studentFieldInput = document.getElementById("studentField");
const studentLevelRow = document.getElementById("studentLevelRow");
const studentFieldRow = document.getElementById("studentFieldRow");
const studentWelcome = document.getElementById("studentWelcome");
const profileReadinessValue = document.getElementById("profileReadinessValue");
const profileReadinessRing = document.getElementById("profileReadinessRing");
const studentChecklist = document.getElementById("studentChecklist");
const studentTrackerGrid = document.getElementById("studentTrackerGrid");
const studentRecommendations = document.getElementById("studentRecommendations");
const studentMatchedCount = document.getElementById("studentMatchedCount");
const studentApplicationsCount = document.getElementById("studentApplicationsCount");
const studentProfileCount = document.getElementById("studentProfileCount");
const studentDeadlinesCount = document.getElementById("studentDeadlinesCount");
const studentToolsCard = document.getElementById("studentToolsCard");
const studentUpdatesCard = document.getElementById("studentUpdatesCard");
const currentPage = document.body.dataset.page;

let activeFilter = "All";
let activeRole = "student";
let activeAuthMode = "login";

try {
  const storedRole = localStorage.getItem("aiuRole");
  if (storedRole && dashboardRoutes[storedRole]) {
    activeRole = storedRole;
  }
} catch (error) {
  // Ignore storage access issues and use the default role.
}

function renderFilters() {
  if (!filterBar) return;

  filterBar.innerHTML = "";

  filters.forEach((filter) => {
    const button = document.createElement("button");
    button.className = `chip${filter === activeFilter ? " active" : ""}`;
    button.textContent = filter;
    button.addEventListener("click", () => {
      activeFilter = filter;
      renderFilters();
      renderOpportunities();
    });
    filterBar.appendChild(button);
  });
}

function renderOpportunities() {
  if (!opportunityGrid) return;

  const visible = activeFilter === "All"
    ? opportunities
    : opportunities.filter((item) => item.category === activeFilter);

  opportunityGrid.innerHTML = "";

  visible.forEach((item) => {
    const card = document.createElement("article");
    card.className = "opportunity-card";
    card.innerHTML = `
      <p class="card-label">${item.category}</p>
      <h3>${item.title}</h3>
      <div class="meta-row">
        <span class="pill">${item.region}</span>
        <span class="pill alt">${item.audience}</span>
      </div>
      <p>${item.summary}</p>
      <strong>${item.highlight}</strong>
    `;
    opportunityGrid.appendChild(card);
  });
}

function renderDashboard() {
  if (!dashboardPreview) return;

  const view = dashboardContent[activeRole];

  dashboardPreview.innerHTML = `
    <div class="dashboard-panel">
      <section class="dashboard-column">
        <p class="card-label">${view.title}</p>
        <h3>${view.subtitle}</h3>
        <div class="dashboard-kpis">
          ${view.kpis
            .map(
              (kpi) => `
                <article class="kpi">
                  <strong>${kpi.value}</strong>
                  <span>${kpi.label}</span>
                </article>
              `
            )
            .join("")}
        </div>
      </section>
      <section class="dashboard-column">
        <h4>${view.leftTitle}</h4>
        <ul>
          ${view.leftItems.map((item) => `<li>${item}</li>`).join("")}
        </ul>
        <h4>${view.rightTitle}</h4>
        <ul>
          ${view.rightItems.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>
    </div>
  `;

  if (roleDashboardLink) {
    roleDashboardLink.href = dashboardRoutes[activeRole];
    roleDashboardLink.textContent = `Open ${view.title}`;
  }
}

function renderAuthMode() {
  const current = authModes[activeAuthMode];
  if (!authSubmit || !fullNameInput) return;

  authSubmit.textContent = current.buttonLabel;
  fullNameInput.placeholder = current.fullNamePlaceholder;
  fullNameInput.required = activeAuthMode === "register";
  updateStudentRegistrationFields();
}

function highlightActiveNav() {
  if (!currentPage) return;

  document.querySelectorAll(".nav a[data-nav]").forEach((link) => {
    link.classList.toggle("active", link.dataset.nav === currentPage);
  });
}

function routeToDashboard(role) {
  const normalizedRole = dashboardRoutes[role] ? role : "student";
  try {
    localStorage.setItem("aiuRole", normalizedRole);
  } catch (error) {
    // Keep navigation working even if storage is unavailable.
  }
  window.location.href = dashboardRoutes[normalizedRole];
}

function formatStoredName(name) {
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
}

function deriveNameFromEmail(email) {
  const localPart = email.split("@")[0];
  return formatStoredName(localPart.replace(/[._-]+/g, " "));
}

function renderStudentWelcome() {
  if (!studentWelcome) return;

  let storedName = "";
  try {
    storedName = localStorage.getItem("aiuName") || "";
  } catch (error) {
    // Ignore storage access issues and keep the generic greeting.
  }

  studentWelcome.textContent = storedName ? `Welcome, ${storedName}!` : "Welcome";
}

function renderStudentApplications() {
  if (!studentTrackerGrid) return;

  const studentProfile = getStoredStudentProfile();
  const field = studentProfile.field || "";
  const level = studentProfile.level || "";

  const visibleApplications = studentApplications.filter((application) => {
    const fieldMatches = !application.fields || !field || application.fields.includes(field);
    const levelMatches = !application.allowedLevels || !level || application.allowedLevels.includes(level);
    return fieldMatches && levelMatches;
  });

  const applicationsToRender = visibleApplications.length
    ? visibleApplications
    : [
        {
          category: "General",
          title: "No active applications yet",
          statusLabel: "Start Here",
          statusClass: "review",
          description: "Complete your profile and explore eligible pathways to begin your first application.",
          metaLabel: "Suggested next step:",
          metaValue: "Open the opportunities page and review the pathways matched to your level and field.",
        },
      ];

  studentTrackerGrid.innerHTML = applicationsToRender
    .map((application, index) => {
      const stepsMarkup = application.steps
        ? `
          <div class="tracker-steps">
            ${application.steps
              .map((step) => `<span class="${step.state === "upcoming" ? "" : step.state}">${step.label}</span>`)
              .join("")}
          </div>
        `
        : `
          <div class="tracker-meta">
            <strong>${application.metaLabel}</strong>
            <span>${application.metaValue}</span>
          </div>
        `;

      return `
        <article class="student-panel tracker-card${index === 0 ? " tracker-card--active" : ""}">
          <div class="tracker-top">
            <p class="card-label">${application.category}</p>
            <span class="status-pill status-pill--${application.statusClass}">${application.statusLabel}</span>
          </div>
          <h3>${application.title}</h3>
          <p>${application.description}</p>
          ${stepsMarkup}
        </article>
      `;
    })
    .join("");
}

function renderStudentRecommendations() {
  if (!studentRecommendations) return;

  const studentProfile = getStoredStudentProfile();
  const recommendations = getStudentRecommendations(studentProfile);

  studentRecommendations.innerHTML = recommendations
    .map(
      (item) => `
        <article class="student-panel recommendation-card">
          <p class="card-label">${item.label}</p>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="recommendation-tags">
            ${item.tags
              .map((tag, index) => `<span class="pill${index === 0 ? "" : " alt"}">${tag}</span>`)
              .join("")}
          </div>
          <div class="recommendation-actions">
            <a class="solid-button recommendation-apply" href="opportunities.html">Apply now</a>
          </div>
        </article>
      `
    )
    .join("");
}

function getStoredStudentProfile() {
  try {
    return JSON.parse(localStorage.getItem("aiuStudentProfile") || "{}");
  } catch (error) {
    return {};
  }
}

function updateStudentRegistrationFields() {
  const showStudentFields = activeAuthMode === "register" && roleInput && roleInput.value === "student";

  [studentLevelRow, studentFieldRow].forEach((row) => {
    if (row) {
      row.classList.toggle("hidden", !showStudentFields);
    }
  });

  if (studentLevelInput) {
    studentLevelInput.required = showStudentFields;
  }

  if (studentFieldInput) {
    studentFieldInput.required = showStudentFields;
  }
}

function getStudentRecommendations(profile) {
  const field = profile.field || "";
  const level = profile.level || "";

  const eligiblePathways = studentPathwaysCatalog
    .filter((pathway) => {
      const fieldMatches = !pathway.fields || !field || pathway.fields.includes(field);
      const levelMatches = !pathway.allowedLevels || !level || pathway.allowedLevels.includes(level);
      return fieldMatches && levelMatches;
    })
    .sort((a, b) => b.score - a.score);

  const prioritized = eligiblePathways.slice(0, 3);

  if (!prioritized.length) {
    return [
      {
        label: "Research path",
        title: "AIU Intramural Research Grants",
        description: "Recommended as a flexible starting point while your profile becomes more specific in level and field.",
        tags: ["AIU", "Research", "Flexible"],
      },
      {
        label: "Mobility path",
        title: "Virginia Tech Exchange Program",
        description: "A broad exchange option that fits students still exploring the best academic direction.",
        tags: ["USA", "Exchange", "Mobility"],
      },
      {
        label: "Career path",
        title: "William Paterson and Ocean County Programs",
        description: "A practical option for students looking for applied skills and career-facing growth.",
        tags: ["USA", "Training", "Career-facing"],
      },
    ];
  }

  return prioritized.map((pathway) => ({
    label: pathway.label,
    title: pathway.title,
    description: personalizePathwayDescription(pathway, level, field),
    tags: pathway.tags,
  }));
}

function formatLevelLabel(level) {
  const labels = {
    foundation: "foundation",
    "year-1": "Year 1",
    "year-2": "Year 2",
    "year-3": "Year 3",
    "year-4": "Year 4",
    "year-5": "Year 5",
    graduate: "graduate",
  };

  return labels[level] || "student";
}

function formatFieldLabel(field) {
  const labels = {
    engineering: "Engineering",
    "computer-science": "Computer Science",
    business: "Business",
    "arts-communication": "Arts and Communication",
    "public-health": "Public Health",
    pharmacy: "Pharmacy",
    "architecture-design": "Architecture and Design",
    "general-research": "General Research",
  };

  return labels[field] || "your field";
}

function personalizePathwayDescription(pathway, level, field) {
  if (pathway.id === "louisville-22") {
    return `Recommended for ${formatLevelLabel(level)} ${formatFieldLabel(field)} students. Based on the 2+2 transfer structure, this route should be pursued before Year 3.`;
  }

  if (pathway.id === "jean-moulin") {
    return `Recommended for ${formatLevelLabel(level)} students in ${formatFieldLabel(field)} looking for a dual-degree pathway with transfer-based entry.`;
  }

  if (pathway.id === "uab-masters") {
    return "Recommended for engineering graduates because the proposal targets students who already hold a Bachelor of Science in engineering and meet postgraduate admission conditions.";
  }

  if (pathway.id === "william-paterson") {
    return `Recommended for ${formatLevelLabel(level)} ${formatFieldLabel(field)} students building practical analytics, HR, finance, and career-facing skills.`;
  }

  if (pathway.id === "public-health") {
    return `Recommended for ${formatLevelLabel(level)} students in ${formatFieldLabel(field)} seeking flexible certificates, training, and professional development.`;
  }

  return pathway.description;
}

function renderStudentSummaryStats() {
  if (studentMatchedCount) {
    studentMatchedCount.textContent = `${studentDashboardState.matchedOpportunities}`;
  }

  if (studentApplicationsCount) {
    studentApplicationsCount.textContent = `${studentDashboardState.applicationsInProgress}`;
  }

  if (studentProfileCount) {
    studentProfileCount.textContent = `${studentDashboardState.profileCompletion}%`;
  }

  if (studentDeadlinesCount) {
    studentDeadlinesCount.textContent = `${studentDashboardState.upcomingDeadlines}`;
  }
}

function renderDailyStudentTools() {
  if (studentToolsCard) {
    studentToolsCard.innerHTML = `
      <p class="card-label tools-label-red">Quick actions</p>
      <div class="student-action-grid">
        <a class="student-action" href="opportunities.html">
          <strong>${studentDashboardState.matchedOpportunities} matched opportunities</strong>
          <span>Review the programs that currently fit your academic profile and interests.</span>
        </a>
        <a class="student-action" href="account.html">
          <strong>${studentDashboardState.profileCompletion}% profile completion</strong>
          <span>${studentDashboardState.profileCompletion < 100 ? "Complete more profile items to improve matching and application readiness." : "Your profile is complete and ready for stronger recommendations."}</span>
        </a>
        <a class="student-action" href="resources.html">
          <strong>${studentDashboardState.applicationsInProgress} applications in progress</strong>
          <span>Open your required documents and supporting resources for current submissions.</span>
        </a>
        <a class="student-action" href="opportunities.html">
          <strong>${studentDashboardState.upcomingDeadlines} upcoming deadlines</strong>
          <span>Prioritize urgent opportunities and submit before the next closing dates.</span>
        </a>
      </div>
    `;
  }

  if (studentUpdatesCard) {
    const updates = [
      {
        title: "Matching update",
        text: `${studentDashboardState.matchedOpportunities} opportunities are now aligned with your current profile and saved interests.`,
      },
      {
        title: "Application progress",
        text: `You currently have ${studentDashboardState.applicationsInProgress} active applications that still need follow-up or review.`,
      },
      {
        title: "Profile status",
        text: `Your profile is ${studentDashboardState.profileCompletion}% complete. Upload more checklist items to increase your readiness score.`,
      },
      {
        title: "Deadline reminder",
        text: `${studentDashboardState.upcomingDeadlines} deadlines are coming up soon, so focus on the most urgent submissions first.`,
      },
    ];

    studentUpdatesCard.innerHTML = `
      <p class="card-label tools-label-red">Notifications</p>
      <div class="student-updates">
        ${updates
          .map(
            (update) => `
              <div class="student-update">
                <strong>${update.title}</strong>
                <p>${update.text}</p>
              </div>
            `
          )
          .join("")}
      </div>
    `;
  }
}

function initStudentChecklist() {
  if (!studentChecklist || !profileReadinessValue || !profileReadinessRing) return;

  const items = Array.from(studentChecklist.querySelectorAll("li[data-checklist-key]"));
  let storedChecklist = {};

  try {
    storedChecklist = JSON.parse(localStorage.getItem("aiuStudentChecklist") || "{}");
  } catch (error) {
    storedChecklist = {};
  }

  if (!Object.keys(storedChecklist).length) {
    storedChecklist = {
      cv: { name: "student-cv.pdf" },
    };
  }

  function saveChecklist() {
    try {
      localStorage.setItem("aiuStudentChecklist", JSON.stringify(storedChecklist));
    } catch (error) {
      // Ignore storage issues and keep UI functional.
    }
  }

  function updateChecklistUI() {
    let completed = 0;

    items.forEach((item) => {
      const key = item.dataset.checklistKey;
      const record = storedChecklist[key];
      const status = item.querySelector("small");
      const buttonText = item.querySelector(".checklist-upload span");

      const isComplete = Boolean(record && record.name);
      item.classList.toggle("is-complete", isComplete);

      if (status) {
        status.textContent = isComplete ? `Uploaded: ${record.name}` : "Not uploaded yet";
      }

      if (buttonText) {
        buttonText.textContent = isComplete ? "Replace" : "Upload";
      }

      if (isComplete) completed += 1;
    });

    const percentage = Math.round((completed / items.length) * 100);
    studentDashboardState.profileCompletion = percentage;
    profileReadinessValue.textContent = `${percentage}%`;
    profileReadinessRing.style.background = `conic-gradient(#c62828 0 ${percentage}%, rgba(198, 40, 40, 0.12) ${percentage}% 100%)`;
    renderStudentSummaryStats();
    renderDailyStudentTools();
  }

  studentChecklist.querySelectorAll("input[data-checklist-input]").forEach((input) => {
    input.addEventListener("change", (event) => {
      const file = event.target.files && event.target.files[0];
      const key = event.target.dataset.checklistInput;
      if (!key) return;

      if (file) {
        storedChecklist[key] = { name: file.name };
      }

      saveChecklist();
      updateChecklistUI();
    });
  });

  updateChecklistUI();
}

if (roleInput) {
  roleInput.value = activeRole;
  updateStudentRegistrationFields();
  roleInput.addEventListener("change", () => {
    activeRole = roleInput.value;
    updateStudentRegistrationFields();
    const matchingSwitch = Array.from(switches).find((button) => button.dataset.role === activeRole);
    if (matchingSwitch) {
      switches.forEach((item) => item.classList.remove("active"));
      matchingSwitch.classList.add("active");
    }
    renderDashboard();
  });
}

switches.forEach((button) => {
  button.classList.toggle("active", button.dataset.role === activeRole);
  button.addEventListener("click", () => {
    activeRole = button.dataset.role;
    if (roleInput) {
      roleInput.value = activeRole;
    }
    switches.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderDashboard();
  });
});

authSwitches.forEach((button) => {
  button.addEventListener("click", () => {
    activeAuthMode = button.dataset.auth;
    authSwitches.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderAuthMode();
  });
});

if (authForm) {
  authForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const enteredName = fullNameInput ? fullNameInput.value.trim() : "";
    const fallbackName = emailInput && emailInput.value ? deriveNameFromEmail(emailInput.value.trim()) : "";

    try {
      localStorage.setItem("aiuName", enteredName ? formatStoredName(enteredName) : fallbackName);
      if (roleInput && roleInput.value === "student") {
        localStorage.setItem(
          "aiuStudentProfile",
          JSON.stringify({
            level: studentLevelInput ? studentLevelInput.value : "",
            field: studentFieldInput ? studentFieldInput.value : "",
          })
        );
      }
    } catch (error) {
      // Ignore storage access issues and continue routing.
    }

    routeToDashboard(roleInput ? roleInput.value : activeRole);
  });
}

renderFilters();
renderOpportunities();
renderDashboard();
renderAuthMode();
highlightActiveNav();
renderStudentWelcome();
initStudentChecklist();
renderStudentApplications();
renderStudentRecommendations();
renderStudentSummaryStats();
renderDailyStudentTools();
