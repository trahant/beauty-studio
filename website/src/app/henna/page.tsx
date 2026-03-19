import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { PricingSection } from "@/components/PricingSection";
import { BOOK_URL } from "@/lib/sitemap";
import { getCategoryPricing } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Henna Tattoos & Bridal Mehndi in Los Angeles | Beauty Secrets Studio",
  description:
    "Custom henna tattoo designs, bridal mehndi packages, and event henna art in West LA. 100% natural henna. Call (310) 306-3191.",
};

export default function HennaPage() {
  return (
    <PageLayout
      title="Henna Tattoos & Bridal Mehndi"
      description="Custom henna tattoo designs, bridal mehndi packages, and event henna art in West LA. 100% natural henna. Hand-applied by experienced artists."
      breadcrumb={[{ label: "Henna", href: "/henna" }]}
      heroImage="/hennadesign.jpg"
    >
      <section className="page-section">
        <div className="page-content-block">
          <p className="section-eyebrow">100% Natural</p>
          <h2 className="section-title">Hand-Applied Henna Art</h2>
          <div className="divider" />
          <p className="section-sub">
            We offer 100% natural henna tattoos for every occasion — from
            delicate wrist pieces to full bridal mehndi. Our artists create
            custom designs using organic paste.
          </p>
          <p>
            We never use black henna or harmful additives. Only safe, traditional
            ingredients that produce rich, long-lasting color. Henna tattoos
            typically last 1 to 2 weeks depending on placement and aftercare.
          </p>
          <p>
            Our artists are experienced in both traditional and modern styles.
            Whether you want a subtle accent or full bridal coverage, we work
            with you to bring your vision to life.
          </p>

          <div className="page-stats" aria-hidden="true">
            <div className="page-stat-item">
              <span className="page-stat-num">100%</span>
              <span className="page-stat-label">Natural Henna</span>
            </div>
            <div className="page-stat-item">
              <span className="page-stat-num">1–2</span>
              <span className="page-stat-label">Weeks Lasting</span>
            </div>
            <div className="page-stat-item">
              <span className="page-stat-num">4</span>
              <span className="page-stat-label">Service Options</span>
            </div>
          </div>

          <div className="page-feature-grid">
            <div className="page-feature-item">
              <div className="page-feature-icon">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h4>No Black Henna</h4>
              <p>Only safe, traditional ingredients. No harmful additives.</p>
            </div>
            <div className="page-feature-item">
              <div className="page-feature-icon">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </div>
              <h4>Custom Designs</h4>
              <p>From delicate wrist pieces to full bridal mehndi. Your vision, our art.</p>
            </div>
            <div className="page-feature-item">
              <div className="page-feature-icon">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <h4>Experienced Artists</h4>
              <p>Traditional and modern styles. Events and bridal packages available.</p>
            </div>
          </div>

          <div className="page-quote-block">
            <blockquote>
              &ldquo;Had my bridal henna done here — full hands and feet. The detail was incredible and the color was perfect.&rdquo;
            </blockquote>
            <cite>— Bride, West LA</cite>
          </div>
        </div>

        <PricingSection items={getCategoryPricing("henna")} title="Henna Prices" />

        <div className="page-content-block">
          <p className="section-eyebrow">Our Services</p>
          <h2 className="section-title">Henna Services</h2>
          <div className="divider" />
          <div className="sub-pages-grid">
            <Link href="/henna/henna-tattoos" className="sub-page-link fade-up">
              <h3>Henna Tattoos</h3>
              <p>100% natural henna. Hand-applied designs, organic paste, no black henna.</p>
            </Link>
            <Link href="/henna/custom-designs" className="sub-page-link fade-up">
              <h3>Custom Designs</h3>
              <p>From delicate wrist pieces to full sleeves. Traditional & modern styles.</p>
            </Link>
            <Link href="/henna/special-occasion" className="sub-page-link fade-up">
              <h3>Event & Party Henna</h3>
              <p>Birthdays, festivals, baby showers, bachelorette parties. On-site or in-studio.</p>
            </Link>
            <Link href="/henna/bridal-packages" className="sub-page-link fade-up">
              <h3>Bridal Packages</h3>
              <p>Full hands & feet mehndi, wedding party henna. Book 2–4 weeks ahead.</p>
            </Link>
          </div>
        </div>

        <div className="page-cta-strip">
          <p>Book a consultation or your event henna. Bridal mehndi: book 2–4 weeks in advance.</p>
          <div className="btns">
            <a href={BOOK_URL} className="btn-primary">Book Now</a>
            <a href="tel:3103063191" className="btn-ghost">Call (310) 306-3191</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
