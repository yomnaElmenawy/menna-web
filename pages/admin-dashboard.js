/**
 * pages/admin-dashboard.js — Professor / Admin Dashboard page
 *
 * An administrative workspace for faculty and staff.
 * Shows KPI stats and two operation panels for listings and decisions.
 */

import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/AdminDashboard.module.css";

// KPI stats shown at the top of the admin dashboard
const stats = [
  { value: "143", label: "applications reviewed" },
  { value: "31", label: "open listings" },
  { value: "9", label: "AI-ranked queues" },
  { value: "12", label: "decisions pending" },
];

export default function AdminDashboard() {
  return (
    <>
      <Head>
        <title>Admin Dashboard | AIU Global Opportunities Hub</title>
      </Head>

      <Layout ctaText="Switch Role" ctaHref="/account">

        {/* ── Hero ── */}
        <section className="hero page-hero">
          <div className="hero-copy">
            <div className="breadcrumbs">
              <Link href="/">Home</Link> / <Link href="/dashboards">Dashboards</Link> / Admin
            </div>
            <h1>Professor / Admin Dashboard</h1>
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

        {/* ── Operations panels ── */}
        <section className="section-block">
          <div className="student-tools-layout">
            <article className="student-panel">
              <p className="card-label">Operations</p>
              <h3>Listings and approvals</h3>
              <p>Create opportunities, monitor deadlines, and close calls on schedule.</p>
            </article>
            <article className="student-panel">
              <p className="card-label">Decisions</p>
              <h3>Candidate ranking and outcomes</h3>
              <p>Review AI-assisted rankings, apply final decisions, and notify applicants.</p>
            </article>
          </div>
        </section>

      </Layout>
    </>
  );
}
