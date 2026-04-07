/**
 * pages/exchange.js — Exchange page
 *
 * Shows the four-step process for applying to a semester
 * exchange or mobility opportunity.
 */

import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Exchange.module.css";

// The four steps in the exchange application process
const steps = [
  {
    number: "01",
    title: "Check eligibility",
    text: "Confirm your level, GPA, and language requirements before applying.",
  },
  {
    number: "02",
    title: "Prepare documents",
    text: "Upload transcript, CV, and supporting certificates to complete the checklist.",
  },
  {
    number: "03",
    title: "Submit preference",
    text: "Select your partner university options and submit your priorities.",
  },
  {
    number: "04",
    title: "Follow nomination",
    text: "Track shortlist and final nomination updates on your dashboard.",
  },
];

export default function Exchange() {
  return (
    <>
      <Head>
        <title>Exchange | AIU Global Opportunities Hub</title>
      </Head>

      <Layout ctaText="Start Application" ctaHref="/account">

        {/* ── Hero ── */}
        <section className="hero page-hero">
          <div className="hero-copy">
            <div className="breadcrumbs">
              <Link href="/">Home</Link> / Exchange
            </div>
            <h1>Semester exchange and mobility opportunities</h1>
          </div>
        </section>

        {/* ── Four-step timeline ── */}
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
