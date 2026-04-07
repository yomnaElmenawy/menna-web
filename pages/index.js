/**
 * pages/index.js — Home page
 *
 * The landing page for AIU Global Opportunities Hub.
 * It shows a two-column hero with a feature card rail, then a
 * "Where to Start" section with three quick-route cards.
 */

import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>AIU Global Opportunities Hub</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Layout wraps every page with the Navbar and page-backdrop */}
      <Layout ctaText="Get Started" ctaHref="/account">

        {/* ── Hero ── two-column: copy on the left, feature cards on the right */}
        <section className="hero home-hero">
          <div className="hero-copy">
            <p className="card-label">AIU Students and Faculty</p>
            <h1>Discover global opportunities, apply faster, and track every step in one place.</h1>
            <p>
              Explore dual degrees, internships, exchanges, research grants, and graduate pathways with
              personalized recommendations.
            </p>
            <div className="hero-actions">
              <Link href="/opportunities" className="solid-button">Browse Opportunities</Link>
              <Link href="/dashboards" className="ghost-button">View Dashboards</Link>
            </div>
          </div>

          {/* Feature cards on the right side of the hero */}
          <div className="hero-rail">
            <article className="feature-card">
              <h3>Smart Matching</h3>
              <p>Programs are filtered by your major, level, and readiness.</p>
            </article>
            <article className="feature-card">
              <h3>Simple Application Flow</h3>
              <p>Upload required files and follow your progress in one timeline.</p>
            </article>
            <article className="feature-card">
              <h3>Academic Growth</h3>
              <p>Move from local opportunities to international pathways confidently.</p>
            </article>
          </div>
        </section>

        {/* ── Where to Start ── three-step quick-route cards */}
        <section className="section-block">
          <div className="split-heading section-heading">
            <div>
              <h2>Where to Start</h2>
              <p className="section-note">Use these quick routes to move directly to the part you need.</p>
            </div>
          </div>

          <div className="opportunity-grid">
            <article className="opportunity-card">
              <p className="card-label">Step 1</p>
              <h3>Create your account</h3>
              <p>Register by role and save your student profile details.</p>
              <Link href="/account" className="solid-button">Open Account</Link>
            </article>

            <article className="opportunity-card">
              <p className="card-label">Step 2</p>
              <h3>Review opportunities</h3>
              <p>Use category filters to find programs that match your goals.</p>
              <Link href="/opportunities" className="solid-button">Open Opportunities</Link>
            </article>

            <article className="opportunity-card">
              <p className="card-label">Step 3</p>
              <h3>Track dashboard progress</h3>
              <p>Monitor profile completion, active applications, and deadlines.</p>
              <Link href="/student-dashboard" className="solid-button">Open Student Dashboard</Link>
            </article>
          </div>
        </section>

      </Layout>
    </>
  );
}
