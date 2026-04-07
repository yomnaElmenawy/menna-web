/**
 * pages/researcher-dashboard.js — Researcher / Faculty Dashboard page
 *
 * An operational workspace for research coordinators.
 * It shows stats, two operational panels, a review workflow timeline,
 * and active research submission tracker cards.
 */

import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/ResearcherDashboard.module.css";

// KPI stats shown at the top of the dashboard
const stats = [
  { value: "8", label: "active calls" },
  { value: "26", label: "submitted applications" },
  { value: "5", label: "shortlisted teams" },
  { value: "3", label: "pending review meetings" },
];

// The four-step review workflow
const workflowSteps = [
  {
    number: "01",
    title: "Open call and criteria",
    text: "Set field requirements, expected outcomes, and scoring standards.",
  },
  {
    number: "02",
    title: "Initial quality screening",
    text: "Flag incomplete proposals and return actionable notes to teams.",
  },
  {
    number: "03",
    title: "Mentor and reviewer assignment",
    text: "Route strong submissions to relevant experts for detailed evaluation.",
  },
  {
    number: "04",
    title: "Shortlist and final decision",
    text: "Finalize outcomes, notify teams, and prepare onboarding for approved projects.",
  },
];

export default function ResearcherDashboard() {
  return (
    <>
      <Head>
        <title>Research Dashboard | AIU Global Opportunities Hub</title>
      </Head>

      <Layout ctaText="Switch Role" ctaHref="/account">

        {/* ── Hero ── */}
        <section className="hero page-hero">
          <div className="hero-copy">
            <div className="breadcrumbs">
              <Link href="/">Home</Link> / <Link href="/dashboards">Dashboards</Link> / Researcher
            </div>
            <h1>Research Dashboard</h1>
            <p>Manage open calls, evaluate submissions, and coordinate mentors through one operational workspace.</p>
          </div>
        </section>

        {/* ── KPI stats ── */}
        <section className="section-block">
          <div className="stats-grid dashboard-stats-grid">
            {stats.map((s) => (
              <article key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </article>
            ))}
          </div>
        </section>

        {/* ── Daily operations panels ── */}
        <section className="section-block">
          <div className="split-heading section-heading">
            <div>
              <h2>Daily Research Operations</h2>
              <p className="section-note">Monitor the full intake pipeline and move qualified applications to shortlist.</p>
            </div>
          </div>
          <div className="student-tools-layout">
            <article className="student-panel">
              <p className="card-label">Research tools</p>
              <h3>Call management and review</h3>
              <p>Publish calls, monitor quality, and assign mentors with clear selection workflows.</p>
            </article>
            <article className="student-panel">
              <p className="card-label">Pipeline</p>
              <h3>Submission funnel</h3>
              <p>Track applications from intake to shortlist and final acceptance.</p>
            </article>
          </div>
        </section>

        {/* ── Review workflow timeline ── */}
        <section className="section-block">
          <div className="split-heading section-heading">
            <div>
              <h2>Review Workflow</h2>
              <p className="section-note">A clear sequence for reviewers, mentors, and program coordinators.</p>
            </div>
          </div>
          <div className="timeline">
            {workflowSteps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Active submission tracker cards ── */}
        <section className="section-block">
          <div className="student-tracker-grid">

            {/* High-priority submission */}
            <article className="student-panel tracker-card tracker-card--active">
              <div className="tracker-top">
                <p className="card-label">High Priority</p>
                <span className="status-pill status-pill--review">In Review</span>
              </div>
              <h3>Sustainable Campus Energy Optimization</h3>
              <p>Proposal cleared eligibility and is waiting for final committee scoring.</p>
              <div className="tracker-steps">
                <span className="done">Intake Complete</span>
                <span className="done">Quality Checked</span>
                <span className="current">Reviewer Scoring</span>
                <span>Decision Pending</span>
              </div>
            </article>

            {/* Submission needing revision */}
            <article className="student-panel tracker-card">
              <div className="tracker-top">
                <p className="card-label">Action Needed</p>
                <span className="status-pill status-pill--draft">Needs Revision</span>
              </div>
              <h3>AI-Driven Public Health Monitoring</h3>
              <p>Budget justification and timeline detail are missing from the latest submission.</p>
              <div className="tracker-meta">
                <strong>Next action:</strong>
                <span>Request updated budget and schedule by Thursday.</span>
              </div>
            </article>

          </div>
        </section>

      </Layout>
    </>
  );
}
