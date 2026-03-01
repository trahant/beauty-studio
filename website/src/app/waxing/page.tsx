import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { PricingSection } from "@/components/PricingSection";
import { BOOK_URL } from "@/lib/sitemap";
import { getCategoryPricing } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Waxing Services in Los Angeles | Chocolate & Body Waxing | Beauty Secrets Studio",
  description:
    "Premium chocolate waxing and full body waxing in West LA. Sensitive-skin friendly, smooth results. Walk-ins welcome. Call (310) 306-3191.",
};

export default function WaxingPage() {
  return (
    <PageLayout
      title="Waxing Services"
      description="Premium chocolate waxing and full body waxing in West LA. Sensitive-skin friendly wax for smooth, lasting results. Walk-ins welcome."
      breadcrumb={[{ label: "Waxing", href: "/waxing" }]}
    >
      <section className="page-section">
        <div className="page-content-block">
          <p className="section-eyebrow">Premium Wax</p>
          <h2 className="section-title">Sensitive-Skin Friendly Waxing</h2>
          <div className="divider" />
          <p className="section-sub">
            We offer full body waxing using high-quality wax designed for
            sensitive skin. Our chocolate wax is enriched with cocoa and almond
            oil for a gentler experience.
          </p>
          <p>
            Our wax adheres to hair rather than skin, which minimizes discomfort
            and reduces irritation. The result is smooth skin that lasts for
            weeks. We use professional-grade products and work efficiently to
            make your experience as comfortable as possible.
          </p>
          <p>
            Whether you&apos;re a first-time waxer or a regular client, we tailor
            our approach to your needs. Walk-ins are welcome for most waxing
            services.
          </p>

          <div className="page-stats" aria-hidden="true">
            <div className="page-stat-item">
              <span className="page-stat-num">2</span>
              <span className="page-stat-label">Wax Types</span>
            </div>
            <div className="page-stat-item">
              <span className="page-stat-num">3–6</span>
              <span className="page-stat-label">Weeks Smooth</span>
            </div>
            <div className="page-stat-item">
              <span className="page-stat-num">100%</span>
              <span className="page-stat-label">Pro Grade</span>
            </div>
          </div>

          <div className="page-feature-grid">
            <div className="page-feature-item">
              <div className="page-feature-icon">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                </svg>
              </div>
              <h4>Chocolate Wax</h4>
              <p>Cocoa & almond oil for sensitive skin. Less pain, smoother results.</p>
            </div>
            <div className="page-feature-item">
              <div className="page-feature-icon">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h4>Hair, Not Skin</h4>
              <p>Wax adheres to hair to minimize discomfort and irritation.</p>
            </div>
            <div className="page-feature-item">
              <div className="page-feature-icon">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h4>Efficient Service</h4>
              <p>Experienced specialists work quickly so you&apos;re in and out.</p>
            </div>
          </div>

          <div className="page-quote-block">
            <blockquote>
              &ldquo;First time getting waxed here and it was so much gentler than I expected. The chocolate wax made a real difference.&rdquo;
            </blockquote>
            <cite>— Client review, West LA</cite>
          </div>
        </div>

        <PricingSection items={getCategoryPricing("waxing")} title="Waxing Prices" />

        <div className="page-content-block">
          <p className="section-eyebrow">Explore Our Services</p>
          <h2 className="section-title">Waxing Services</h2>
          <div className="divider" />
          <div className="sub-pages-grid">
            <Link href="/waxing/chocolate-waxing" className="sub-page-link fade-up">
              <h3>Chocolate Waxing</h3>
              <p>Premium wax with cocoa & almond oil. Designed for sensitive skin — less pain, smoother results.</p>
            </Link>
            <Link href="/waxing/body-waxing" className="sub-page-link fade-up">
              <h3>Body Waxing</h3>
              <p>Legs, arms, bikini, Brazilian, back & chest. Professional-grade wax for smooth, lasting results.</p>
            </Link>
          </div>
        </div>

        <div className="page-cta-strip">
          <p>Book your wax or walk in. We recommend hair at least 1/4 inch for best results.</p>
          <div className="btns">
            <a href={BOOK_URL} className="btn-primary">Book Now</a>
            <a href="tel:3103063191" className="btn-ghost">Call (310) 306-3191</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
