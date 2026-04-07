/**
 * pages/internships.js — Internships page
 *
 * Shows three internship route cards covering research labs,
 * professional tracks, and career-growth pathways.
 */

import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Internships.module.css";

// Three internship cards shown on this page
const internshipCards = [
  {
    label: "Research Labs",
    title: "Ontario Tech Summer Internships",
    text: "Hands-on research placements for engineering and computer science students.",
  },
  {
    label: "Professional Tracks",
    title: "Public Health and Training Streams",
    text: "Flexible online and hybrid opportunities with professional-development outcomes.",
  },
  {
    label: "Career Growth",
    title: "Business and Data Skills",
    text: "Career-facing pathways in analytics, planning, and human resources.",
  },
];

export default function Internships() {
  return (
    <>
      <Head>
        <title>Internships | AIU Global Opportunities Hub</title>
      </Head>

      <Layout ctaText="Apply Faster" ctaHref="/account">

        {/* ── Hero ── */}
        <section className="hero page-hero">
          <div className="hero-copy">
            <div className="breadcrumbs">
              <Link href="/">Home</Link> / Internships
            </div>
            <h1>International internships and practical training routes</h1>
          </div>
        </section>

        {/* ── Internship cards ── */}
        <section className="section-block">
          <div className="opportunity-grid">
            {internshipCards.map((card) => (
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
