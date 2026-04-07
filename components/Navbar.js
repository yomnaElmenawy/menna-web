/**
 * components/Navbar.js
 *
 * The site-wide navigation bar used on every page.
 *
 * Props:
 *   ctaText  - Text label for the right-side action button  (e.g. "Get Started")
 *   ctaHref  - URL the action button links to               (e.g. "/account")
 *
 * How it works:
 *   1. We import Next.js <Link> so navigation is fast (client-side routing, no full page reload).
 *   2. We use useRouter() to read the current URL path and add an "active" class
 *      to whichever nav link matches it.
 *   3. The AIU logo is rendered with Next.js <Image> which automatically optimizes the image.
 */

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// All navigation links in the order they appear in the bar.
// `href` is the Next.js route path; `label` is the visible text.
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/internships", label: "Internships" },
  { href: "/exchange", label: "Exchange" },
  { href: "/research", label: "Research" },
  { href: "/dashboards", label: "Dashboards" },
];

export default function Navbar({ ctaText = "Get Started", ctaHref = "/account" }) {
  // useRouter gives us the current page path so we can highlight the active link.
  const router = useRouter();

  return (
    <header className="topbar">
      <div className="topbar-inner">

        {/* Brand / logo area — clicking it always goes back to the home page */}
        <Link href="/" className="brand">
          <Image
            src="/aiu-logo.png"
            alt="AIU logo"
            width={54}
            height={54}
            className="brand-logo"
            priority
          />
          <span className="brand-copy">
            <strong>AIU Global Opportunities Hub</strong>
            <small>International pathways, research calls, and student growth</small>
          </span>
        </Link>

        {/* Main navigation links */}
        <nav className="nav">
          {navLinks.map((link) => {
            // A link is "active" when the current route exactly matches its href.
            const isActive = router.pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={isActive ? "active" : ""}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right-side call-to-action button — text and destination change per page */}
        <Link href={ctaHref} className="solid-button">
          {ctaText}
        </Link>

      </div>
    </header>
  );
}
