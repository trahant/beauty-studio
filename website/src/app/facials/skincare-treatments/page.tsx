import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { PricingSection } from "@/components/PricingSection";
import { BOOK_URL } from "@/lib/sitemap";
import { getServicePricing } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Skincare Treatments in Los Angeles | Beauty Secrets Studio",
  description:
    "Comprehensive skincare treatments customized to your skin type. Deep cleansing, exfoliation, serums & professional masks. Walk-ins welcome. Call (310) 306-3191.",
};

export default function SkincareTreatmentsPage() {
  return (
    <PageLayout
      title="Skincare Treatments"
      description="Comprehensive skincare treatments customized to your skin type. Deep cleansing, exfoliation, professional serums, and masks."
      breadcrumb={[
        { label: "Facials", href: "/facials" },
        { label: "Skincare Treatments", href: "/facials/skincare-treatments" },
      ]}
      heroImage="/facials.jpg"
    >
      <section className="page-section">
        <div className="page-content-block">
          <p className="section-eyebrow">Customized Care</p>
          <h2 className="section-title">Professional Skincare</h2>
          <div className="divider" />
          <p className="section-sub">
            Our skincare treatments are designed to address a wide range of
            concerns. We use professional-grade products from trusted brands and
            tailor every step to your skin&apos;s needs.
          </p>
          <p>
            Each treatment begins with a consultation. Your esthetician will
            assess your skin and recommend the best approach — whether that
            means a gentle enzyme peel for sensitive skin or a deeper
            exfoliation for congestion. We never use a one-size-fits-all
            approach.
          </p>
        </div>

        <div className="page-content-block">
          <h2>Skin Types We Treat</h2>
          <p>
            Whether you have oily, combination, dry, or sensitive skin, we have
            treatments that work. Your esthetician will assess your skin and
            recommend the best approach during your visit.
          </p>
          <PricingSection
            items={getServicePricing("facials", "skincare-treatments")}
            title="Skincare Treatment Prices"
            benefitsTitle="Treatment Components"
            benefits={[
              "Deep cleansing to remove impurities and prepare the skin",
              "Exfoliation (chemical or physical) to reveal fresh, radiant skin",
              "Custom serums targeting your specific concerns",
              "Professional masks for hydration, clarifying, or anti-aging",
              "Facial massage to promote circulation and relaxation",
            ]}
          />
          <div className="page-highlight-box">
            <h3>Consultation included</h3>
            <p>Every treatment starts with a skin analysis. We customize cleansing, exfoliation, serums, and masks to your skin type and goals.</p>
          </div>
          <div className="page-cta-strip">
            <p>Book your skincare treatment or walk in. We&apos;ll tailor the session to your skin.</p>
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
