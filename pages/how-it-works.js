/**
 * pages/how-it-works.js — How It Works page
 *
 * Shows a numbered timeline of the four steps that take a student
 * from profile creation through to tracking their application.
 */

import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/HowItWorks.module.css";

// Each step shown in the timeline
const steps = [
  {
    number: "01",
    title: "Create profile",
    text: "Add CV, GPA, skills, and interests to power matching and application readiness.",
  },
  {
    number: "02",
    title: "Explore options",
    text: "Browse international, internal, research, and graduate opportunities through dedicated pages.",
  },
  {
    number: "03",
    title: "Apply confidently",
    text: "Use page-specific requirements, supporting resources, and partner information.",
  },
  {
    number: "04",
    title: "Track and review",
    text: "Follow progress while faculty and admins manage ranking, feedback, and decisions.",
  },
];

export default function HowItWorks() {
  return (
    <>
      <Head>
        <title>How It Works | AIU Global Opportunities Hub</title>
      </Head>

      <Layout ctaText="Explore Now" ctaHref="/opportunities">

        {/* ── Hero ── breadcrumb + page title */}
        <section className="hero page-hero">
          <div className="hero-copy">
            <div className="breadcrumbs">
              <Link href="/">Home</Link> / How It Works
            </div>
            <h1>How the platform guides students from exploration to application.</h1>
          </div>
        </section>

        {/* ── Timeline ── numbered four-step cards */}
        <section className="section-block">
          <div className="timeline">
            {steps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

      </Layout>
    </>
  );
}
