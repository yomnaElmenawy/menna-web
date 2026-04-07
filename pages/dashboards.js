/**
 * pages/dashboards.js — Dashboards overview page
 *
 * Lets the user preview each role's dashboard by clicking role buttons.
 * The preview panel updates without a page reload using React state.
 *
 * State:
 *   activeRole — the currently previewed role key: "student" | "researcher" | "admin"
 */

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Layout from "../components/Layout";
import { dashboardContent, dashboardRoutes } from "../data/dashboard";
import styles from "../styles/Dashboards.module.css";

// The three role buttons shown above the preview panel
const roleButtons = [
  { key: "student", label: "Student" },
  { key: "researcher", label: "Researcher" },
  { key: "admin", label: "Professor / Admin" },
];

export default function Dashboards() {
  // Track which role the user has selected
  const [activeRole, setActiveRole] = useState("student");

  // Look up the content for the currently selected role
  const view = dashboardContent[activeRole];

  return (
    <>
      <Head>
        <title>Dashboards | AIU Global Opportunities Hub</title>
      </Head>

      <Layout ctaText="Switch Role" ctaHref="/account">

        {/* ── Hero ── */}
        <section className="hero page-hero">
          <div className="hero-copy">
            <div className="breadcrumbs">
              <Link href="/">Home</Link> / Dashboards
            </div>
            <h1>Pick a role dashboard preview</h1>
          </div>
        </section>

        {/* ── Role switcher + preview panel ── */}
        <section className="section-block">

          {/* Role selection buttons */}
          <div className="role-switches">
            {roleButtons.map((btn) => (
              <button
                key={btn.key}
                type="button"
                // Highlight the active role button
                className={`switch${activeRole === btn.key ? " active" : ""}`}
                onClick={() => setActiveRole(btn.key)}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Dashboard preview panel — shows KPIs and feature lists */}
          <div className="dashboard-panel">
            <section className="dashboard-column">
              <p className="card-label">{view.title}</p>
              <h3>{view.subtitle}</h3>

              {/* KPI tiles */}
              <div className="dashboard-kpis">
                {view.kpis.map((kpi) => (
                  <article key={kpi.label} className="kpi">
                    <strong>{kpi.value}</strong>
                    <span>{kpi.label}</span>
                  </article>
                ))}
              </div>
            </section>

            <section className="dashboard-column">
              <h4>{view.leftTitle}</h4>
              <ul>
                {view.leftItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h4>{view.rightTitle}</h4>
              <ul>
                {view.rightItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>

          {/* Dynamic link to the full dashboard for the selected role */}
          <Link href={dashboardRoutes[activeRole]} className="solid-button">
            Open {view.title}
          </Link>

        </section>
      </Layout>
    </>
  );
}
