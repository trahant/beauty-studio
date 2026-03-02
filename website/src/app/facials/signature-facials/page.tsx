import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { PricingSection } from "@/components/PricingSection";
import { BOOK_URL } from "@/lib/sitemap";
import { getServicePricing } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Signature Facials in Los Angeles | Beauty Secrets Studio",
  description:
    "Our 60-minute Signature Facial combines deep cleansing, custom serums, facial massage & guided meditation. West LA's most relaxing facial. Call (310) 306-3191.",
};

export default function SignatureFacialsPage() {
  return (
    <PageLayout
      title="Signature Facials"
      description="Our 60-minute Signature Facial combines deep cleansing, custom serums, facial massage, and guided meditation. West LA's most relaxing facial experience."
      breadcrumb={[
        { label: "Facials", href: "/facials" },
        { label: "Signature Facials", href: "/facials/signature-facials" },
      ]}
      heroImage="/facials.jpg"
    >
      <section className="page-section">
        <div className="page-content-block">
          <p className="section-eyebrow">Most Popular</p>
          <h2 className="section-title">Our Signature Experience</h2>
          <div className="divider" />
          <p className="section-sub">
            The Signature Facial is our most popular treatment. It&apos;s a full
            60-minute experience that leaves your skin refreshed, balanced, and
            glowing — and your mind deeply relaxed.
          </p>
          <p>
            Every Signature Facial begins with a skin analysis. Your esthetician
            will customize each step to your skin type and goals, from the
            exfoliation method to the mask and serums used. We never rush — the
            full hour is yours to unwind.
          </p>
        </div>

        <div className="page-content-block">
          <h2>Ideal For</h2>
          <p>
            The Signature Facial works for all skin types. It&apos;s perfect for
            first-time clients, regular maintenance every 4–6 weeks, or anyone
            who wants a comprehensive facial with a calming, meditative element.
          </p>

          <PricingSection
            items={getServicePricing("facials", "signature-facials")}
            title="Signature Facial Pricing"
            benefitsTitle="What's Included"
            benefits={[
              "Double cleanse to remove makeup and impurities",
              "Gentle exfoliation suited to your skin type",
              "Custom serum application targeting your concerns",
              "Facial massage with pressure points for relaxation",
              "Professional mask (hydrating, clarifying, or anti-aging)",
              "Guided meditation throughout the treatment",
            ]}
          />

          <div className="page-highlight-box">
            <h3>60 minutes &middot; All skin types</h3>
            <p>Includes double cleanse, exfoliation, custom serum, facial massage, professional mask, and guided meditation. Your esthetician tailors every step to your skin.</p>
          </div>

          <div className="page-quote-block">
            <blockquote>
              &ldquo;I fall asleep every time. My skin has never looked better and I actually leave feeling rested.&rdquo;
            </blockquote>
            <cite>— Client review</cite>
          </div>

          <div className="page-cta-strip">
            <p>Book your Signature Facial or call to check same-day availability. Walk-ins welcome when we have space.</p>
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
