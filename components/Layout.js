/**
 * components/Layout.js
 *
 * A wrapper component that every page uses to get:
 *   - The Navbar at the top
 *   - A decorative background overlay (page-backdrop)
 *   - A <main> block that contains the page's own content
 *
 * Props:
 *   children - The JSX content of the page (passed automatically when you wrap a page with <Layout>)
 *   ctaText  - Forwarded to Navbar: text for the right-side button
 *   ctaHref  - Forwarded to Navbar: link destination for that button
 *
 * Usage in a page file:
 *   <Layout ctaText="Explore Now" ctaHref="/opportunities">
 *     <section>...</section>
 *   </Layout>
 */

import Navbar from "./Navbar";

export default function Layout({ children, ctaText, ctaHref }) {
  return (
    <>
      {/* Full-screen decorative gradient overlay (defined in globals.css) */}
      <div className="page-backdrop"></div>

      {/* Navigation bar — accepts optional CTA button customisation */}
      <Navbar ctaText={ctaText} ctaHref={ctaHref} />

      {/* Page content — each page passes its sections as children */}
      <main className="site-shell">
        {children}
      </main>
    </>
  );
}
