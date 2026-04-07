/**
 * pages/research.js — Research page
 *
 * Shows platform-wide research statistics, three featured research pathways,
 * a four-step application workflow, and two quick-action panels.
 */

import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Research.module.css";

// Live stats displayed in the KPI row
const stats = [
  { value: "8", label: "active research calls" },
  { value: "26", label: "current submissions" },
  { value: "5", label: "shortlisted teams" },
  { value: "12", label: "faculty mentors" },
];

// Featured research pathway cards
const pathways = [
  {
    label: "Internal Funding",
    title: "AIU Intramural Research Grants",
    text: "Funded opportunities focused on community impact and strategic research priorities.",
  },
  {
    label: "Collaboration",
    title: "Joint Research Pathways",
    text: "Cross-institutional supervision and proposal development with partner universities.",
  },
  {
    label: "Output Growth",
    title: "Mentored Publication Routes",
    text: "Move from proposal to review with structured academic support and milestones.",
  },
];

// Four steps in the research application process
const workflowSteps = [
  {
    number: "01",
    title: "Define your topic",
    text: "Align your proposal with AIU strategic goals and partner research priorities.",
  },
  {
    number: "02",
    title: "Build your team",
    text: "Add student members, assign roles, and map required supervision support.",
  },
  {
    number: "03",
    title: "Submit proposal pack",
    text: "Upload abstract, timeline, expected outcomes, and budget documentation.",
  },
  {
    number: "04",
    title: "Review and shortlist",
    text: "Follow reviewer notes, revise if needed, and prepare for final decision.",
  },
];

export default function Research() {
  return (
    <>
      <Head>
        <title>Research | AIU Global Opportunities Hub</title>
      </Head>

      <Layout ctaText="Open Research Role" ctaHref="/account">

        {/* ── Hero ── */}
        <section className="hero page-hero">
          <div className="hero-copy">
            <div className="breadcrumbs">
              <Link href="/">Home</Link> / Research
            </div>
            <h1>Research calls, grants, and faculty-guided projects</h1>
            <p>
              Explore active themes, submission windows, and collaboration opportunities with AIU and global partners.
            </p>
          </div>
        </section>

        {/* ── Platform stats ── */}
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

        {/* ── Featured pathways ── */}
        <section className="section-block">
          <div className="split-heading section-heading">
            <div>
              <h2>Featured Research Pathways</h2>
              <p className="section-note">Select the route that fits your academic level and project objective.</p>
            </div>
          </div>
          <div className="opportunity-grid">
            {pathways.map((p) => (
              <article key={p.title} className="opportunity-card">
                <p className="card-label">{p.label}</p>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Application workflow ── */}
        <section className="section-block">
          <div className="split-heading section-heading">
            <div>
              <h2>How Research Applications Move Forward</h2>
              <p className="section-note">A simple process to keep teams aligned from idea to approved proposal.</p>
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

        {/* ── Quick actions ── */}
        <section className="section-block">
          <div className="student-tools-layout">
            <article className="student-panel">
              <p className="card-label">Research Support</p>
              <h3>Proposal Readiness Checklist</h3>
              <p>Track abstract quality, ethics notes, budget items, and timeline completeness before submission.</p>
            </article>
            <article className="student-panel">
              <p className="card-label">Quick Actions</p>
              <h3>Go to Role Dashboard</h3>
              <p>Use the dashboard to monitor call status, reviewer feedback, and shortlist progress in one place.</p>
              <div className="hero-actions">
                <Link href="/researcher-dashboard" className="solid-button">Open Research Dashboard</Link>
                <Link href="/account" className="ghost-button">Switch Role</Link>
              </div>
            </article>
          </div>
        </section>

      </Layout>
    </>
  );
}
