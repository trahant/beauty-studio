import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { PricingSection } from "@/components/PricingSection";
import { BOOK_URL } from "@/lib/sitemap";
import { getCategoryPricing } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Eyebrow & Facial Threading in Los Angeles | Beauty Secrets Studio",
  description:
    "Professional eyebrow threading and facial threading in West LA. Precise shaping, no chemicals, walk-ins welcome. Call (310) 306-3191.",
};

export default function ThreadingPage() {
  return (
    <PageLayout
      title="Eyebrow & Facial Threading"
      description="Professional eyebrow threading and facial threading in West LA. Precise shaping with the traditional thread technique — no chemicals, no irritation. Walk-ins welcome."
      breadcrumb={[{ label: "Threading", href: "/threading" }]}
    >
      <section className="page-section">
        <div className="page-content-block">
          <p className="section-eyebrow">Traditional Technique</p>
          <h2 className="section-title">Why Threading?</h2>
          <div className="divider" />
          <p className="section-sub">
            Threading is an ancient hair removal technique that uses a twisted
            cotton thread to remove hair at the follicle. It&apos;s precise,
            gentle, and ideal for sensitive areas.
          </p>
          <p>
            Unlike waxing or depilatory creams, threading involves no chemicals
            — making it safe for sensitive skin and those with allergies. The
            thread removes hair at the root, and many clients find that hair
            grows back finer over time with regular threading.
          </p>
          <ul>
            <li>No chemicals — safe for sensitive skin</li>
            <li>Precise shaping for clean, defined brows</li>
            <li>Minimal discomfort; most describe a brief pinch</li>
            <li>Quick results; our threaders work efficiently</li>
            <li>Walk-ins welcome for most threading services</li>
          </ul>

          <div className="page-stats" aria-hidden="true">
            <div className="page-stat-item">
              <span className="page-stat-num">2</span>
              <span className="page-stat-label">Threading Services</span>
            </div>
            <div className="page-stat-item">
              <span className="page-stat-num">~15</span>
              <span className="page-stat-label">Min Typical</span>
            </div>
            <div className="page-stat-item">
              <span className="page-stat-num">0</span>
              <span className="page-stat-label">Chemicals</span>
            </div>
          </div>

          <div className="page-feature-grid">
            <div className="page-feature-item">
              <div className="page-feature-icon">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h4>Chemical-Free</h4>
              <p>Only a cotton thread. Safe for sensitive skin and allergies.</p>
            </div>
            <div className="page-feature-item">
              <div className="page-feature-icon">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h4>Quick & Precise</h4>
              <p>Clean lines and defined brows in minutes. No downtime.</p>
            </div>
            <div className="page-feature-item">
              <div className="page-feature-icon">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <h4>Walk-Ins Welcome</h4>
              <p>No appointment needed. We keep availability open daily.</p>
            </div>
          </div>

          <div className="page-quote-block">
            <blockquote>
              &ldquo;Best eyebrow threading in West LA. Fast, precise, and my skin never gets irritated. I walk in every few weeks.&rdquo;
            </blockquote>
            <cite>— Client review</cite>
          </div>
        </div>

        <PricingSection items={getCategoryPricing("threading")} title="Threading Prices" />

        <div className="page-content-block">
          <p className="section-eyebrow">Our Services</p>
          <h2 className="section-title">Threading Services</h2>
          <div className="divider" />
          <div className="sub-pages-grid">
            <Link href="/threading/eyebrow-threading" className="sub-page-link fade-up">
              <h3>Eyebrow Threading</h3>
              <p>Sharp, defined brows with the traditional thread technique. Walk-ins welcome.</p>
            </Link>
            <Link href="/threading/facial-threading" className="sub-page-link fade-up">
              <h3>Facial Threading</h3>
              <p>Upper lip, chin, cheeks & sideburns. Gentle, chemical-free hair removal.</p>
            </Link>
          </div>
        </div>

        <div className="page-cta-strip">
          <p>Walk-ins welcome for threading. Book ahead or drop by — we&apos;re here for you.</p>
          <div className="btns">
            <a href={BOOK_URL} className="btn-primary">Book Now</a>
            <a href="tel:3103063191" className="btn-ghost">Call (310) 306-3191</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
