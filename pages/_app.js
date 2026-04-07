/**
 * pages/_app.js
 *
 * This is the root wrapper for every page in the Next.js app.
 * It runs once, imports the global CSS, and then renders whatever page was requested.
 *
 * `Component` — the current page component (e.g. pages/index.js)
 * `pageProps`  — any props that were fetched for that page (e.g. via getStaticProps)
 */

// Global CSS is imported here so it applies to every page.
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  // Render the current page and pass it any pre-fetched props.
  return <Component {...pageProps} />
}
