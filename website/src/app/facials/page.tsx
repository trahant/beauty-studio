import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { PricingSection } from "@/components/PricingSection";
import { BOOK_URL } from "@/lib/sitemap";
import { getCategoryPricing } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Facials & Skincare Treatments in Los Angeles | Beauty Secrets Studio",
  description:
    "Signature facials, hydrating treatments, and anti-aging skincare solutions in West Los Angeles. Customized for your skin type. Walk-ins welcome. Call (310) 306-3191.",
};

export default function FacialsPage() {
  return (
    <PageLayout
      title="Facials & Skincare"
      description="Signature facials, hydrating treatments, and anti-aging solutions customized to your skin type. Every facial includes guided meditation for full relaxation. Walk-ins welcome."
      breadcrumb={[{ label: "Facials", href: "/facials" }]}
    >
      <section className="page-section">
        <div className="page-content-block">
          <p className="section-eyebrow">What We Offer</p>
          <h2 className="section-title">Expert Skincare in West LA</h2>
          <div className="divider" />
          <p className="section-sub">
            Our facials are performed by trained estheticians who specialize in
            skincare. We use professional-grade products and techniques to
            address your specific concerns.
          </p>
          <p>
            Whether you&apos;re dealing with dehydration, acne, hyperpigmentation,
            or signs of aging, we tailor every treatment to your skin type and
            goals. Each facial begins with a thorough skin analysis and
            consultation so your esthetician can customize the experience.
          </p>
          <p>
            All facials include deep cleansing, exfoliation, extractions when
            needed, a custom mask, and facial massage. We also integrate guided
            meditation to help you fully relax and get the most from your
            treatment.
          </p>

          <div className="page-stats" aria-hidden="true">
            <div className="page-stat-item">
              <span className="page-stat-num">4</span>
              <span className="page-stat-label">Facial Types</span>
            </div>
            <div className="page-stat-item">
              <span className="page-stat-num">60+</span>
              <span className="page-stat-label">Min Sessions</span>
            </div>
            <div className="page-stat-item">
              <span className="page-stat-num">5★</span>
              <span className="page-stat-label">Client Rated</span>
            </div>
          </div>

          <div className="page-feature-grid">
            <div className="page-feature-item">
              <div className="page-feature-icon">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h4>No Rushing</h4>
              <p>Full 60-minute sessions. We never cut your time short.</p>
            </div>
            <div className="page-feature-item">
              <div className="page-feature-icon">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </div>
              <h4>Customized to You</h4>
              <p>Skin analysis and consultation before every treatment.</p>
            </div>
            <div className="page-feature-item">
              <div className="page-feature-icon">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none">
                  <path d="M3 12a9 9 0 1018 0 9 9 0 00-18 0z" />
                  <path d="M12 3v9l4 4" />
                </svg>
              </div>
              <h4>Guided Meditation</h4>
              <p>Relax fully with meditation woven into every facial.</p>
            </div>
          </div>

          <div className="page-quote-block">
            <blockquote>
              &ldquo;The most relaxing facial I&apos;ve had in LA. My skin glowed for days and the meditation actually made me fall asleep.&rdquo;
            </blockquote>
            <cite>— Client review, West LA</cite>
          </div>
        </div>

        <div className="page-content-block">
          <h2>What to Expect</h2>
          <ul>
            <li>Skin analysis and consultation before every treatment</li>
            <li>Deep cleansing to remove impurities and prepare the skin</li>
            <li>Gentle exfoliation suited to your skin type</li>
            <li>Extractions when needed for congested pores</li>
            <li>Custom serums and masks targeting your concerns</li>
            <li>Facial massage to promote circulation and relaxation</li>
            <li>Guided meditation throughout the treatment</li>
          </ul>
        </div>

        <PricingSection items={getCategoryPricing("facials")} title="Facial & Add-On Prices" />

        <div className="page-content-block">
          <p className="section-eyebrow">Explore Our Treatments</p>
          <h2 className="section-title">Facial Services</h2>
          <div className="divider" />
          <div className="sub-pages-grid">
            <Link href="/facials/skincare-treatments" className="sub-page-link fade-up">
              <h3>Skincare Treatments</h3>
              <p>Comprehensive treatments with deep cleansing, serums & professional masks.</p>
            </Link>
            <Link href="/facials/signature-facials" className="sub-page-link fade-up">
              <h3>Signature Facials</h3>
              <p>Our 60-minute signature experience with facial massage & guided meditation.</p>
            </Link>
            <Link href="/facials/hydrating-treatments" className="sub-page-link fade-up">
              <h3>Hydrating Treatments</h3>
              <p>Intense moisture for dehydrated skin. Dermalogica and professional serums.</p>
            </Link>
            <Link href="/facials/anti-aging-solutions" className="sub-page-link fade-up">
              <h3>Anti-Aging Solutions</h3>
              <p>Retinol, peptides & LED therapy for fine lines and elasticity.</p>
            </Link>
          </div>
        </div>

        <div className="page-cta-strip">
          <p>Ready for glowing skin? Book your facial or call to ask about availability. Walk-ins welcome.</p>
          <div className="btns">
            <a href={BOOK_URL} className="btn-primary">Book Now</a>
            <a href="tel:3103063191" className="btn-ghost">Call (310) 306-3191</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
