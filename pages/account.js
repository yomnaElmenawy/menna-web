/**
 * pages/account.js — Login / Register page
 *
 * Provides a login form and a register form.
 * When the user submits, the role and name are saved to localStorage
 * so that dashboard pages can greet the user by name.
 *
 * State:
 *   authMode   — "login" | "register"
 *   role       — currently selected role value from the <select>
 *   name       — value of the Full Name input
 *   email      — value of the Email input
 *   level      — selected student level (register mode + student role only)
 *   field      — selected student field  (register mode + student role only)
 */

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { dashboardRoutes } from "../data/dashboard";
import styles from "../styles/Account.module.css";

// ── Helper: formats a raw name string to Title Case
function formatName(raw) {
  return raw
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
}

// ── Helper: derives a display name from an email address
// e.g. "sara.ahmed@aiu.edu.eg" → "Sara Ahmed"
function nameFromEmail(email) {
  const local = email.split("@")[0];
  return formatName(local.replace(/[._-]+/g, " "));
}

export default function Account() {
  const router = useRouter();

  // Form mode: "login" shows fewer fields, "register" shows all fields
  const [authMode, setAuthMode] = useState("login");

  // Controlled input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("student");
  const [level, setLevel] = useState("");
  const [field, setField] = useState("");

  // Show the student-specific fields only when registering as a student
  const showStudentFields = authMode === "register" && role === "student";

  // ── Called when the form is submitted
  function handleSubmit(e) {
    e.preventDefault();

    // Save role and derived display name to localStorage so dashboards can read them
    const displayName = name.trim() ? formatName(name) : nameFromEmail(email);
    try {
      localStorage.setItem("aiuRole", role);
      localStorage.setItem("aiuName", displayName);
      // Save student profile details so recommendations can be personalised
      if (role === "student") {
        localStorage.setItem(
          "aiuStudentProfile",
          JSON.stringify({ level, field })
        );
      }
    } catch {
      // localStorage may be blocked in some browsers; still navigate
    }

    // Redirect to the correct dashboard for the selected role
    router.push(dashboardRoutes[role] || "/student-dashboard");
  }

  return (
    <>
      <Head>
        <title>Account | AIU Global Opportunities Hub</title>
      </Head>

      <Layout ctaText="View Dashboards" ctaHref="/dashboards">

        {/* ── Hero ── */}
        <section className="hero page-hero">
          <div className="hero-copy">
            <div className="breadcrumbs">
              <Link href="/">Home</Link> / Account
            </div>
            <h1>Login or create your role account</h1>
          </div>
        </section>

        {/* ── Auth card ── */}
        <section className="section-block">
          <article className="auth-card student-panel">

            {/* Login / Register toggle buttons */}
            <div className="auth-mode-switch">
              <button
                type="button"
                className={`auth-switch${authMode === "login" ? " active" : ""}`}
                onClick={() => setAuthMode("login")}
              >
                Login
              </button>
              <button
                type="button"
                className={`auth-switch${authMode === "register" ? " active" : ""}`}
                onClick={() => setAuthMode("register")}
              >
                Register
              </button>
            </div>

            {/* Auth form */}
            <form className="auth-form" onSubmit={handleSubmit}>

              {/* Full Name — placeholder changes based on mode */}
              <label>
                Full Name
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={authMode === "register" ? "Your full name" : "Optional for login"}
                  required={authMode === "register"}
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@aiu.edu.eg"
                  required
                />
              </label>

              <label>
                Role
                <select value={role} onChange={(e) => setRole(e.target.value)} required>
                  <option value="student">Student</option>
                  <option value="researcher">Researcher</option>
                  <option value="admin">Professor / Admin</option>
                </select>
              </label>

              {/* Student Level — only shown when registering as a student */}
              {showStudentFields && (
                <label>
                  Student Level
                  <select value={level} onChange={(e) => setLevel(e.target.value)} required>
                    <option value="">Select level</option>
                    <option value="foundation">Foundation</option>
                    <option value="year-1">Year 1</option>
                    <option value="year-2">Year 2</option>
                    <option value="year-3">Year 3</option>
                    <option value="year-4">Year 4</option>
                    <option value="year-5">Year 5</option>
                    <option value="graduate">Graduate</option>
                  </select>
                </label>
              )}

              {/* Student Field — only shown when registering as a student */}
              {showStudentFields && (
                <label>
                  Student Field
                  <select value={field} onChange={(e) => setField(e.target.value)} required>
                    <option value="">Select field</option>
                    <option value="engineering">Engineering</option>
                    <option value="computer-science">Computer Science</option>
                    <option value="business">Business</option>
                    <option value="arts-communication">Arts and Communication</option>
                    <option value="public-health">Public Health</option>
                    <option value="pharmacy">Pharmacy</option>
                    <option value="architecture-design">Architecture and Design</option>
                    <option value="general-research">General Research</option>
                  </select>
                </label>
              )}

              <button type="submit" className="solid-button">
                {authMode === "login" ? "Login to Dashboard" : "Create New Account"}
              </button>
            </form>

          </article>
        </section>

      </Layout>
    </>
  );
}
