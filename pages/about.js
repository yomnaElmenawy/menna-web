/**
 * pages/about.js — About page
 *
 * Explains the four key value propositions of the platform
 * (educational, interactive, operational, and inspirational).
 */

import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/About.module.css";

export default function About() {
  // The four value cards shown in the 2×2 grid inside the hero
  const values = [
    {
      title: "Educational Value",
      text: "Explains exchange programs, dual degrees, internships, and internal research clearly.",
    },
    {
      title: "Interactive Value",
      text: "Supports profiles, uploads, applications, filters, and progress tracking.",
    },
    {
      title: "Operational Value",
      text: "Helps staff publish opportunities and evaluate applicants with AI-supported tools.",
    },
    {
      title: "Inspirational Value",
      text: "Uses stories, examples, and results from previous participants to build motivation.",
    },
  ];

  return (
    <>
      <Head>
        <title>About | AIU Global Opportunities Hub</title>
      </Head>

      <Layout ctaText="Explore Now" ctaHref="/opportunities">

        {/* ── Hero ── breadcrumb + title + 2×2 value cards + slogan */}
        <section className="hero page-hero about-hero">
          <div className="hero-copy about-copy">
            {/* Breadcrumb navigation */}
            <div className="breadcrumbs">
              <Link href="/">Home</Link> / About
            </div>
            <h1>Why AIU Global Opportunities Hub?</h1>
          </div>

          {/* 2×2 grid of value proposition cards */}
          <div className="hero-rail about-values-rail">
            {values.map((v) => (
              <article key={v.title} className="feature-card about-value-card">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>

          {/* Motivational slogans at the bottom of the hero */}
          <div className="about-slogan">
            <p>Shape Your Own Identity</p>
            <p>The Future is Yours</p>
          </div>
        </section>

      </Layout>
    </>
  );
}
