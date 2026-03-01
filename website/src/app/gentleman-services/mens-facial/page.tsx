import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { PricingSection } from "@/components/PricingSection";
import { BOOK_URL } from "@/lib/sitemap";
import { getServicePricing } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Men's Facials in Los Angeles | Beauty Secrets Studio",
  description:
    "Men's facials designed for male skin — deep cleansing, extractions, hydrating mask & facial massage. West LA. Call (310) 306-3191.",
};

export default function MensFacialPage() {
  return (
    <PageLayout
      title="Men's Facials"
      description="Men's facials designed for male skin — deep cleansing, extractions, hydrating mask, and facial massage."
      breadcrumb={[
        { label: "Gentleman Services", href: "/gentleman-services" },
        { label: "Men's Facial", href: "/gentleman-services/mens-facial" },
      ]}
    >
      <section className="page-section">
        <div className="page-content-block">
          <p className="section-eyebrow">For Male Skin</p>
          <h2 className="section-title">Designed for Men</h2>
          <div className="divider" />
          <p className="section-sub">
            Men&apos;s skin is different — typically thicker and oilier. Our
            men&apos;s facials are designed for male skin with deep cleansing,
            extractions when needed, and a hydrating mask to balance and
            nourish.
          </p>
          <p>
            Many of our male clients come in for regular maintenance every 4–6
            weeks. The treatment addresses oiliness, congestion, and signs of
            aging without feeling overly indulgent.
          </p>
        </div>

        <div className="page-content-block">
          <h2>Skin Types</h2>
          <p>
            We treat oily, combination, and sensitive skin. Your esthetician
            will assess your skin and customize the treatment.
          </p>

          <PricingSection
            items={getServicePricing("gentleman-services", "mens-facial")}
            title="Men's Facial Prices"
            benefitsTitle="What's Included"
            benefits={[
              "Deep cleansing for oily and combination skin",
              "Extractions to clear congestion",
              "Hydrating mask",
              "Facial massage to promote circulation",
            ]}
          />

          <div className="page-highlight-box">
            <h3>For male skin</h3>
            <p>Deep cleansing, extractions, hydrating mask, and facial massage. Many of our male clients come every 4–6 weeks for maintenance.</p>
          </div>

          <div className="page-cta-strip">
            <p>Book a men&apos;s facial or walk in when we have availability. No fluff — just results.</p>
            <div className="btns">
              <a href={BOOK_URL} className="btn-primary">Book Now</a>
              <a href="tel:3103063191" className="btn-ghost">Call (310) 306-3191</a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
