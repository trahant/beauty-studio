import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageEffects } from "@/components/PageEffects";

export const metadata: Metadata = {
  title: "Hours & Location | Beauty Secrets Studio | West Los Angeles",
  description:
    "Visit Beauty Secrets Studio on Washington Blvd in West LA. Open daily — walk-ins welcome. Facials, threading, waxing, henna. Call (310) 306-3191.",
};

export default function HoursAndLocationPage() {
  return (
    <>
      <Nav />
      <div className="page-wrapper">
        <header className="page-hero">
          <div className="page-hero-inner">
            <p className="page-hero-eyebrow">West Los Angeles, CA &middot; Walk-Ins Welcome</p>
            <h1 className="page-hero-title">Hours &amp; Location</h1>
            <div className="divider" />
            <p className="page-hero-desc">
              Visit us on Washington Blvd in West Los Angeles. Open daily —
              walk-ins welcome for most services.
            </p>
            <div className="page-hero-actions">
              <a href="tel:3103063191" className="btn-primary">
                Call (310) 306-3191
              </a>
              <a
                href="https://maps.google.com/?q=12833+W+Washington+Blvd+Los+Angeles+CA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Get Directions
              </a>
            </div>
          </div>
        </header>

        <div className="page-marquee" aria-hidden="true">
          <div className="marquee-track">
            <span>Signature Facials</span>
            <span className="dot">&middot;</span>
            <span>Threading</span>
            <span className="dot">&middot;</span>
            <span>Waxing</span>
            <span className="dot">&middot;</span>
            <span>Henna</span>
            <span className="dot">&middot;</span>
            <span>Lashes</span>
            <span className="dot">&middot;</span>
            <span>West Los Angeles</span>
            <span className="dot">&middot;</span>
            <span>Signature Facials</span>
            <span className="dot">&middot;</span>
            <span>Threading</span>
            <span className="dot">&middot;</span>
            <span>Waxing</span>
            <span className="dot">&middot;</span>
            <span>Henna</span>
            <span className="dot">&middot;</span>
            <span>Lashes</span>
            <span className="dot">&middot;</span>
            <span>West Los Angeles</span>
            <span className="dot">&middot;</span>
          </div>
        </div>

        <section className="page-section">
          <div className="page-content-block">
            <p className="section-eyebrow">Our Address</p>
            <h2 className="section-title">Visit Us</h2>
            <div className="divider" />
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.4rem",
                color: "var(--espresso)",
                marginBottom: "0.8rem",
              }}
            >
              12833 1/2 W Washington Blvd
              <br />
              Los Angeles, CA 90066
            </p>
            <p className="footer-address" style={{ color: "var(--muted)" }}>
              <a href="tel:3103063191" style={{ color: "var(--clay)" }}>(310) 306-3191</a>
              <br />
              <a
                href="https://maps.google.com/?q=12833+W+Washington+Blvd+Los+Angeles+CA"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--clay)" }}
              >
                Get Directions &rarr;
              </a>
            </p>
          </div>

          <div className="page-content-block">
            <div className="walkin-badge">Walk-Ins Accepted Daily</div>
            <table className="hours-table">
              <tbody>
                <tr><td>Monday</td><td>10:00 AM &ndash; 6:00 PM</td></tr>
                <tr><td>Tuesday</td><td>10:00 AM &ndash; 6:00 PM</td></tr>
                <tr><td>Wednesday</td><td>10:00 AM &ndash; 7:00 PM</td></tr>
                <tr><td>Thursday</td><td>10:00 AM &ndash; 7:00 PM</td></tr>
                <tr><td>Friday</td><td>10:00 AM &ndash; 7:00 PM</td></tr>
                <tr><td>Saturday</td><td>10:00 AM &ndash; 6:00 PM</td></tr>
                <tr><td>Sunday</td><td>10:00 AM &ndash; 5:00 PM</td></tr>
              </tbody>
            </table>
          </div>

          <div className="page-content-block">
            <h2>Nearby Areas We Serve</h2>
            <p>
              Culver City &middot; Mar Vista &middot; Marina del Rey &middot;
              Playa Vista &middot; Playa del Rey &middot; Venice &middot; Santa
              Monica &middot; Inglewood &middot; Baldwin Hills
            </p>
            <Link href="/" className="btn-primary" style={{ marginTop: "1.5rem", display: "inline-block" }}>
              Back to Home
            </Link>
          </div>
        </section>
      </div>
      <Footer />
      <PageEffects />
    </>
  );
}
