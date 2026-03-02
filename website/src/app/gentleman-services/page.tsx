import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { PricingSection } from "@/components/PricingSection";
import { BOOK_URL } from "@/lib/sitemap";
import { getCategoryPricing } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Gentleman Services: Haircuts & Men's Facials in Los Angeles | Beauty Secrets Studio",
  description:
    "Men's haircuts, facials, eyebrow threading, and grooming treatments in West LA. Walk-ins welcome. Call (310) 306-3191.",
};

export default function GentlemanServicesPage() {
  return (
    <PageLayout
      title="Gentleman Services"
      description="Men's haircuts, facials, eyebrow threading, and grooming treatments in West LA. Walk-ins welcome. No-nonsense service."
      breadcrumb={[{ label: "Gentleman Services", href: "/gentleman-services" }]}
      heroImage="/gentleman-services.png"
    >
      <section className="page-section">
        <div className="page-content-block">
          <p className="section-eyebrow">For Men</p>
          <h2 className="section-title">Dedicated Grooming for Men</h2>
          <div className="divider" />
          <p className="section-sub">
            We offer a dedicated set of treatments for men who want clean skin,
            groomed brows, and a no-nonsense experience. Our team is experienced
            working with male clients across all skin types.
          </p>
          <p>
            From haircuts and facials to eyebrow threading and back waxing, we
            provide efficient, professional service without the fluff. Walk-ins
            are welcome and we keep our availability open every day.
          </p>

          <div className="page-stats" aria-hidden="true">
            <div className="page-stat-item">
              <span className="page-stat-num">4</span>
              <span className="page-stat-label">Service Options</span>
            </div>
            <div className="page-stat-item">
              <span className="page-stat-num">Daily</span>
              <span className="page-stat-label">Walk-Ins OK</span>
            </div>
            <div className="page-stat-item">
              <span className="page-stat-num">No</span>
              <span className="page-stat-label">Fluff</span>
            </div>
          </div>

          <div className="page-feature-grid">
            <div className="page-feature-item">
              <div className="page-feature-icon">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </div>
              <h4>Men&apos;s Facials</h4>
              <p>Deep cleansing, extractions, hydrating mask. Designed for male skin.</p>
            </div>
            <div className="page-feature-item">
              <div className="page-feature-icon">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h4>Haircuts</h4>
              <p>Tapers, fades, textured crops & classic cuts. Walk-ins welcome.</p>
            </div>
            <div className="page-feature-item">
              <div className="page-feature-icon">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <h4>Brow & Wax</h4>
              <p>Eyebrow threading and back waxing. Clean, efficient, no-nonsense.</p>
            </div>
          </div>

          <div className="page-quote-block">
            <blockquote>
              &ldquo;Finally a place that doesn&apos;t overbook. In, out, looking sharp. The threading is legit.&rdquo;
            </blockquote>
            <cite>— Client, West LA</cite>
          </div>
        </div>

        <PricingSection items={getCategoryPricing("gentleman-services")} title="Gentleman Services Prices" />

        <div className="page-content-block">
          <p className="section-eyebrow">Our Services</p>
          <h2 className="section-title">Gentleman Services</h2>
          <div className="divider" />
          <div className="sub-pages-grid">
            <Link href="/gentleman-services/haircut" className="sub-page-link fade-up">
              <h3>Men&apos;s Haircuts</h3>
              <p>Tapers, fades, textured crops & classic cuts. Walk-ins welcome.</p>
            </Link>
            <Link href="/gentleman-services/mens-facial" className="sub-page-link fade-up">
              <h3>Men&apos;s Facials</h3>
              <p>Deep cleansing, extractions, hydrating mask. Designed for male skin.</p>
            </Link>
            <Link href="/threading/eyebrow-threading" className="sub-page-link fade-up">
              <h3>Eyebrow Threading</h3>
              <p>Precise shaping for a clean, natural look. One of our most-requested services.</p>
            </Link>
            <Link href="/waxing/body-waxing" className="sub-page-link fade-up">
              <h3>Back Waxing</h3>
              <p>Full back and shoulder waxing. Clean, efficient service.</p>
            </Link>
          </div>
        </div>

        <div className="page-cta-strip">
          <p>Walk in or book ahead. Haircuts, facials, threading, waxing — we&apos;re here for you.</p>
          <div className="btns">
            <a href={BOOK_URL} className="btn-primary">Book Now</a>
            <a href="tel:3103063191" className="btn-ghost">Call (310) 306-3191</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
