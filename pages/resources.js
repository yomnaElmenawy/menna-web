/**
 * pages/resources.js — Resources page
 *
 * A reference page listing required documents, statement tips, and deadline planning advice.
 */

import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Resources.module.css";

// Three resource cards shown on this page
const resourceCards = [
  {
    label: "Checklist",
    title: "Required documents",
    text: "Prepare CV, transcript, language certificate, and ID copies before submission.",
  },
  {
    label: "Templates",
    title: "Statement and motivation tips",
    text: "Use clear goals, concise achievements, and role-specific evidence.",
  },
  {
    label: "Deadlines",
    title: "Priority plan",
    text: "Sort by closing date first, then complete the closest deadline items.",
  },
];

export default function Resources() {
  return (
    <>
      <Head>
        <title>Resources | AIU Global Opportunities Hub</title>
      </Head>

      <Layout ctaText="Back to Dashboard" ctaHref="/student-dashboard">

        {/* ── Hero ── */}
        <section className="hero page-hero">
          <div className="hero-copy">
            <div className="breadcrumbs">
              <Link href="/">Home</Link> / Resources
            </div>
            <h1>Student resources and document guidance</h1>
          </div>
        </section>

        {/* ── Resource cards ── */}
        <section className="section-block">
          <div className="opportunity-grid">
            {resourceCards.map((card) => (
              <article key={card.title} className="opportunity-card">
                <p className="card-label">{card.label}</p>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

      </Layout>
    </>
  );
}
