/**
 * pages/opportunities.js — Opportunities page
 *
 * Shows all available opportunities with filter chip buttons at the top.
 * Clicking a chip filters the cards to show only that category.
 *
 * State:
 *   activeFilter — currently selected category string (default: "All")
 */

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Layout from "../components/Layout";
import { opportunities, filters } from "../data/opportunities";
import styles from "../styles/Opportunities.module.css";

export default function Opportunities() {
  // Track which filter chip is currently active
  const [activeFilter, setActiveFilter] = useState("All");

  // Show all cards when "All" is selected, otherwise filter by category
  const visible =
    activeFilter === "All"
      ? opportunities
      : opportunities.filter((item) => item.category === activeFilter);

  return (
    <>
      <Head>
        <title>Opportunities | AIU Global Opportunities Hub</title>
      </Head>

      <Layout ctaText="Apply Faster" ctaHref="/account">

        {/* ── Hero ── */}
        <section className="hero page-hero">
          <div className="hero-copy">
            <div className="breadcrumbs">
              <Link href="/">Home</Link> / Opportunities
            </div>
            <h1>All Opportunities</h1>
          </div>
        </section>

        {/* ── Filter chips + opportunity grid ── */}
        <section className="section-block">

          {/* Filter chip buttons — one per category */}
          <div className="filter-bar">
            {filters.map((filter) => (
              <button
                key={filter}
                // Add "active" class to the currently selected chip
                className={`chip${activeFilter === filter ? " active" : ""}`}
                onClick={() => setActiveFilter(filter)}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Opportunity cards — re-renders when activeFilter changes */}
          <div className="opportunity-grid">
            {visible.map((item) => (
              <article key={item.title} className="opportunity-card">
                <p className="card-label">{item.category}</p>
                <h3>{item.title}</h3>
                <div className="meta-row">
                  <span className="pill">{item.region}</span>
                  <span className="pill alt">{item.audience}</span>
                </div>
                <p>{item.summary}</p>
                <strong>{item.highlight}</strong>
              </article>
            ))}
          </div>

        </section>
      </Layout>
    </>
  );
}
