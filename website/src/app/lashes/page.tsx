import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { PricingSection } from "@/components/PricingSection";
import { BOOK_URL } from "@/lib/sitemap";
import { getCategoryPricing } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Lash Tint, Lifts & Extensions in Los Angeles | Beauty Secrets Studio",
  description:
    "Lash tinting, lifts, cluster extensions, 2D volume, party strip lashes, and gentle lash extension removal in West LA. Call (310) 306-3191.",
};

export default function LashesPage() {
  return (
    <PageLayout
      title="Lash Tint, Lifts & Extensions"
      description="Lash tinting, lifts, cluster extensions, 2D volume, party strip lashes, and gentle lash extension removal in West LA."
      breadcrumb={[{ label: "Lashes", href: "/lashes" }]}
      heroImage="/lashes.jpg"
    >
      <section className="page-section">
        <div className="page-content-block">
          <p className="section-eyebrow">Full Lash Menu</p>
          <h2 className="section-title">Enhance Your Natural Lashes</h2>
          <div className="divider" />
          <p className="section-sub">
            We offer a full range of lash services — from tinting and lifts to
            cluster and volume extensions. Whether you want to enhance your
            natural lashes or add fullness for everyday wear or parties, we have you covered.
          </p>
          <p>
            Our lash specialists are trained in the latest techniques and use
            high-quality products. We take the time to understand your desired
            look and customize each service to suit your eye shape and lifestyle.
          </p>

          <div className="page-stats" aria-hidden="true">
            <div className="page-stat-item">
              <span className="page-stat-num">5</span>
              <span className="page-stat-label">Lash Services</span>
            </div>
            <div className="page-stat-item">
              <span className="page-stat-num">2–4</span>
              <span className="page-stat-label">Weeks Extensions</span>
            </div>
            <div className="page-stat-item">
              <span className="page-stat-num">Custom</span>
              <span className="page-stat-label">Length & Curl</span>
            </div>
          </div>

          <div className="page-feature-grid">
            <div className="page-feature-item">
              <div className="page-feature-icon">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h4>Your Look</h4>
              <p>We match length, curl, and density to your eye shape and preference.</p>
            </div>
            <div className="page-feature-item">
              <div className="page-feature-icon">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h4>Quality Products</h4>
              <p>Professional-grade lashes and adhesives. Gentle removal when you&apos;re done.</p>
            </div>
            <div className="page-feature-item">
              <div className="page-feature-icon">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                </svg>
              </div>
              <h4>Tint to Volume</h4>
              <p>From simple tint and lift to full extensions and 2D volume.</p>
            </div>
          </div>

          <div className="page-quote-block">
            <blockquote>
              &ldquo;My lash lift lasted forever and looked so natural. Way better than dealing with a curler every morning.&rdquo;
            </blockquote>
            <cite>— Client review</cite>
          </div>
        </div>

        <PricingSection items={getCategoryPricing("lashes")} title="Lash Prices" />

        <div className="page-content-block">
          <p className="section-eyebrow">Our Services</p>
          <h2 className="section-title">Lash Services</h2>
          <div className="divider" />
          <div className="sub-pages-grid">
            <Link href="/lashes/lash-tint" className="sub-page-link fade-up">
              <h3>Lash Tint</h3>
              <p>Darken and define your natural lashes. No mascara needed for everyday wear.</p>
            </Link>
            <Link href="/lashes/lash-lift" className="sub-page-link fade-up">
              <h3>Lash Lift</h3>
              <p>Curl and lift your natural lashes. No extensions needed. Low-maintenance.</p>
            </Link>
            <Link href="/lashes/full-set-lash-extensions" className="sub-page-link fade-up">
              <h3>Cluster Extensions</h3>
              <p>Fluttery clusters for length and fullness. Great for events too.</p>
            </Link>
            <Link href="/lashes/2d-volume-lashes" className="sub-page-link fade-up">
              <h3>2D Volume Lashes</h3>
              <p>Soft, fluttery fullness. Natural and everyday wearable.</p>
            </Link>
            <Link href="/lashes/lash-extension-removal" className="sub-page-link fade-up">
              <h3>Extension Removal</h3>
              <p>Gentle removal so your natural lashes stay healthy.</p>
            </Link>
          </div>
        </div>

        <div className="page-cta-strip">
          <p>Book your lash service — tint, lift, cluster extensions, or 2D volume. We&apos;ll help you choose the right option.</p>
          <div className="btns">
            <a href={BOOK_URL} className="btn-primary">Book Now</a>
            <a href="tel:3103063191" className="btn-ghost">Call (310) 306-3191</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
