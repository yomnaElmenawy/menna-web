/**
 * pages/student-dashboard.js — Student Dashboard page
 *
 * A personalised workspace for students. It shows:
 *   1. A greeting that reads the student's name from localStorage
 *   2. KPI stats row (matched opportunities, applications, profile %, deadlines)
 *   3. Profile section — circular readiness ring + file-upload checklist
 *   4. Application tracker — cards for each in-progress application
 *   5. Recommended pathways — personalised suggestions based on profile
 *   6. Daily tools — quick-action links and notification summaries
 *
 * State / Effects:
 *   All state comes from localStorage (written by the account page)
 *   and local React state for the checklist upload simulation.
 */

import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import {
  studentApplications,
  studentPathwaysCatalog,
  studentDashboardState,
} from "../data/student";
import styles from "../styles/StudentDashboard.module.css";

// ── Helper: returns the top 3 pathway recommendations for a given profile
function getRecommendations(profile) {
  const { field = "", level = "" } = profile;

  const eligible = studentPathwaysCatalog
    .filter((p) => {
      const fieldOk = !p.fields || !field || p.fields.includes(field);
      const levelOk = !p.allowedLevels || !level || p.allowedLevels.includes(level);
      return fieldOk && levelOk;
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  // Fall back to three generic recommendations when no profile info is available
  if (!eligible.length) {
    return [
      {
        label: "Research path",
        title: "AIU Intramural Research Grants",
        description: "Recommended as a flexible starting point while your profile is still being completed.",
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

  return eligible.map((p) => ({
    label: p.label,
    title: p.title,
    description: p.description,
    tags: p.tags,
  }));
}

// ── Helper: filter applications to those matching the student's field and level
function getVisibleApplications(profile) {
  const { field = "", level = "" } = profile;

  const visible = studentApplications.filter((app) => {
    const fieldOk = !app.fields || !field || app.fields.includes(field);
    const levelOk = !app.allowedLevels || !level || app.allowedLevels.includes(level);
    return fieldOk && levelOk;
  });

  // If nothing matches show a placeholder card prompting the student to start
  if (!visible.length) {
    return [
      {
        category: "General",
        title: "No active applications yet",
        statusLabel: "Start Here",
        statusClass: "review",
        description:
          "Complete your profile and explore eligible pathways to begin your first application.",
        metaLabel: "Suggested next step:",
        metaValue:
          "Open the opportunities page and review the pathways matched to your level and field.",
      },
    ];
  }

  return visible;
}

// ── The checklist items the student must upload to complete their profile
const checklistItems = [
  { key: "cv", label: "CV uploaded" },
  { key: "gpa", label: "GPA transcript uploaded" },
  { key: "language", label: "Language certificate added" },
  { key: "skills", label: "Skills portfolio uploaded" },
  { key: "passport", label: "Passport and ID documents updated" },
];

export default function StudentDashboard() {
  // Student's display name (read from localStorage on mount)
  const [studentName, setStudentName] = useState("");

  // Student's saved profile (field + level, used for filtering)
  const [profile, setProfile] = useState({});

  // Which checklist items have been "uploaded" (simulated — stored in localStorage)
  // Each key maps to an object like { name: "filename.pdf" } or null
  const [checklist, setChecklist] = useState({});

  // Stats bar values — recalculated when checklist changes
  const [stats, setStats] = useState({ ...studentDashboardState });

  // Load data from localStorage when the component first mounts
  useEffect(() => {
    try {
      setStudentName(localStorage.getItem("aiuName") || "");
      const rawProfile = localStorage.getItem("aiuStudentProfile");
      setProfile(rawProfile ? JSON.parse(rawProfile) : {});

      // Pre-populate checklist with one uploaded file to show the UI state
      const rawChecklist = localStorage.getItem("aiuStudentChecklist");
      setChecklist(rawChecklist ? JSON.parse(rawChecklist) : { cv: { name: "student-cv.pdf" } });
    } catch {
      setChecklist({ cv: { name: "student-cv.pdf" } });
    }
  }, []);

  // Recalculate profile completion % whenever the checklist changes
  useEffect(() => {
    const completed = checklistItems.filter(
      (item) => checklist[item.key]?.name
    ).length;
    const pct = Math.round((completed / checklistItems.length) * 100);
    setStats((prev) => ({ ...prev, profileCompletion: pct }));
  }, [checklist]);

  // ── Called when a file input inside the checklist changes
  function handleFileUpload(key, file) {
    if (!file) return;
    const updated = { ...checklist, [key]: { name: file.name } };
    setChecklist(updated);
    try {
      localStorage.setItem("aiuStudentChecklist", JSON.stringify(updated));
    } catch {
      // Ignore storage errors; UI still updates
    }
  }

  // Compute readiness ring gradient (conic-gradient reflects completion %)
  const ringStyle = {
    background: `conic-gradient(#c62828 0 ${stats.profileCompletion}%, rgba(198,40,40,0.12) ${stats.profileCompletion}% 100%)`,
  };

  const visibleApplications = getVisibleApplications(profile);
  const recommendations = getRecommendations(profile);

  return (
    <>
      <Head>
        <title>Student Dashboard | AIU Global Opportunities Hub</title>
      </Head>

      <Layout ctaText="Switch Role" ctaHref="/account">

        {/* ── Hero ── */}
        <section className="hero page-hero">
          <div className="hero-copy">
            <div className="breadcrumbs">
              <Link href="/">Home</Link> / <Link href="/dashboards">Dashboards</Link> / Student
            </div>
            {/* Personalised greeting; falls back to "Welcome" when no name is stored */}
            <h1>{studentName ? `Welcome, ${studentName}!` : "Welcome"}</h1>
          </div>
        </section>

        {/* ── KPI stats row ── */}
        <section className="section-block">
          <div className="stats-grid dashboard-stats-grid">
            <article>
              <strong>{stats.matchedOpportunities}</strong>
              <span>matched opportunities</span>
            </article>
            <article>
              <strong>{stats.applicationsInProgress}</strong>
              <span>applications in progress</span>
            </article>
            <article>
              <strong>{stats.profileCompletion}%</strong>
              <span>profile completion</span>
            </article>
            <article>
              <strong>{stats.upcomingDeadlines}</strong>
              <span>upcoming deadlines</span>
            </article>
          </div>
        </section>

        {/* ── Profile section ── readiness ring + upload checklist ── */}
        <section className="section-block">
          <div className="split-heading section-heading">
            <div>
              <h2>Profile</h2>
              <p className="section-note">
                Keep your academic profile complete so the platform can recommend stronger opportunities.
              </p>
            </div>
          </div>

          <div className="student-readiness-layout">
            {/* Circular readiness indicator */}
            <article className="student-panel readiness-card">
              <div className="readiness-ring" style={ringStyle}>
                <strong>{stats.profileCompletion}%</strong>
                <span>ready</span>
              </div>
              <div className="readiness-copy">
                <h3>Your profile is nearly complete</h3>
                <p>
                  Finish the missing items below to unlock more accurate matching for exchange,
                  internship, research, and graduate routes.
                </p>
              </div>
            </article>

            {/* Upload checklist */}
            <article className="student-panel checklist-card">
              <p className="card-label">Completion checklist</p>
              <ul className="student-checklist">
                {checklistItems.map((item) => {
                  const record = checklist[item.key];
                  const isComplete = Boolean(record?.name);
                  return (
                    <li key={item.key} className={isComplete ? "is-complete" : ""}>
                      {/* Green dot when complete, grey when not */}
                      <span></span>
                      <div className="checklist-item-copy">
                        <strong>{item.label}</strong>
                        <small>{isComplete ? `Uploaded: ${record.name}` : "Not uploaded yet"}</small>
                      </div>
                      {/* Hidden file input styled as a labelled button */}
                      <label className="checklist-upload">
                        <input
                          type="file"
                          onChange={(e) => handleFileUpload(item.key, e.target.files?.[0])}
                        />
                        <span>{isComplete ? "Replace" : "Upload"}</span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </article>
          </div>
        </section>

        {/* ── Application tracker ── */}
        <section className="section-block">
          <div className="split-heading section-heading">
            <div>
              <h2>Application tracking</h2>
              <p className="section-note">
                Follow each opportunity from draft submission to review and final decision.
              </p>
            </div>
          </div>

          <div className="student-tracker-grid">
            {visibleApplications.map((app, index) => (
              <article
                key={app.id || app.title}
                className={`student-panel tracker-card${index === 0 ? " tracker-card--active" : ""}`}
              >
                <div className="tracker-top">
                  <p className="card-label">{app.category}</p>
                  <span className={`status-pill status-pill--${app.statusClass}`}>
                    {app.statusLabel}
                  </span>
                </div>
                <h3>{app.title}</h3>
                <p>{app.description}</p>

                {/* Show step pills when the application has a steps array */}
                {app.steps ? (
                  <div className="tracker-steps">
                    {app.steps.map((step) => (
                      <span
                        key={step.label}
                        className={step.state === "upcoming" ? "" : step.state}
                      >
                        {step.label}
                      </span>
                    ))}
                  </div>
                ) : (
                  /* Otherwise show a single meta note */
                  <div className="tracker-meta">
                    <strong>{app.metaLabel}</strong>
                    <span>{app.metaValue}</span>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* ── Recommended pathways ── */}
        <section className="section-block">
          <div className="split-heading section-heading">
            <div>
              <h2>Recommended pathways</h2>
              <p className="section-note">
                Personalised suggestions based on your major, profile details, and readiness level.
              </p>
            </div>
          </div>

          <div className="student-recommendations">
            {recommendations.map((rec) => (
              <article key={rec.title} className="student-panel recommendation-card">
                <p className="card-label">{rec.label}</p>
                <h3>{rec.title}</h3>
                <p>{rec.description}</p>
                <div className="recommendation-tags">
                  {rec.tags.map((tag, i) => (
                    <span key={tag} className={`pill${i > 0 ? " alt" : ""}`}>{tag}</span>
                  ))}
                </div>
                <div className="recommendation-actions">
                  <Link href="/opportunities" className="solid-button">Apply now</Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Daily tools ── quick actions + notifications ── */}
        <section className="section-block">
          <div className="split-heading section-heading">
            <div>
              <h2>Daily student tools</h2>
              <p className="section-note">
                Actions students use most often — progress, saved items, and reminders stay visible.
              </p>
            </div>
          </div>

          <div className="student-tools-layout">
            {/* Quick action links */}
            <article className="student-panel">
              <p className="card-label">Quick actions</p>
              <div className="student-action-grid">
                <Link href="/opportunities" className="student-action">
                  <strong>{stats.matchedOpportunities} matched opportunities</strong>
                  <span>Review the programs that currently fit your academic profile and interests.</span>
                </Link>
                <Link href="/account" className="student-action">
                  <strong>{stats.profileCompletion}% profile completion</strong>
                  <span>
                    {stats.profileCompletion < 100
                      ? "Complete more profile items to improve matching and application readiness."
                      : "Your profile is complete and ready for stronger recommendations."}
                  </span>
                </Link>
                <Link href="/resources" className="student-action">
                  <strong>{stats.applicationsInProgress} applications in progress</strong>
                  <span>Open required documents and supporting resources for current submissions.</span>
                </Link>
                <Link href="/opportunities" className="student-action">
                  <strong>{stats.upcomingDeadlines} upcoming deadlines</strong>
                  <span>Prioritize urgent opportunities and submit before the next closing dates.</span>
                </Link>
              </div>
            </article>

            {/* Notification summaries */}
            <article className="student-panel">
              <p className="card-label">Notifications</p>
              <div className="student-updates">
                <div className="student-update">
                  <strong>Matching update</strong>
                  <p>{stats.matchedOpportunities} opportunities are aligned with your current profile and saved interests.</p>
                </div>
                <div className="student-update">
                  <strong>Application progress</strong>
                  <p>You have {stats.applicationsInProgress} active applications that still need follow-up or review.</p>
                </div>
                <div className="student-update">
                  <strong>Profile status</strong>
                  <p>Your profile is {stats.profileCompletion}% complete. Upload more checklist items to increase your readiness score.</p>
                </div>
                <div className="student-update">
                  <strong>Deadline reminder</strong>
                  <p>{stats.upcomingDeadlines} deadlines are coming up soon — focus on the most urgent submissions first.</p>
                </div>
              </div>
            </article>
          </div>
        </section>

      </Layout>
    </>
  );
}
