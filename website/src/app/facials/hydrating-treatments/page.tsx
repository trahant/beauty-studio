import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { PricingSection } from "@/components/PricingSection";
import { getServicePricing } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Hydrating Facials in Los Angeles | Beauty Secrets Studio",
  description:
    "Hydrating facial treatments for dehydrated skin. Dermalogica and professional serums. West LA. Call (310) 306-3191.",
};

export default function HydratingTreatmentsPage() {
  return (
    <PageLayout
      title="Hydrating Treatments"
      description="Hydrating facial treatments for dehydrated skin. We use Dermalogica and professional serums to restore moisture and radiance."
      breadcrumb={[
        { label: "Facials", href: "/facials" },
        { label: "Hydrating Treatments", href: "/facials/hydrating-treatments" },
      ]}
      heroImage="/hydrating-treatments.png"
    >
      <section className="page-section">
        <div className="page-content-block">
          <p className="section-eyebrow">For Dehydrated Skin</p>
          <h2 className="section-title">Intense Hydration</h2>
          <div className="divider" />
          <p className="section-sub">
            Dehydrated skin can feel tight, look dull, and show fine lines more
            prominently. Our hydrating treatments deliver intense moisture using
            professional-grade products that penetrate deep into the skin.
          </p>
          <p>
            We use Dermalogica and other professional hydrating serums rich in
            hyaluronic acid and humectants. The treatment includes a hydrating
            mask to lock in moisture and leave your skin plump and radiant.
          </p>
        </div>

        <div className="page-content-block">
          <h2>Who Benefits</h2>
          <p>
            Hydrating treatments are ideal for dry or dehydrated skin, or anyone
            experiencing tightness, flakiness, or dullness. They&apos;re also
            beneficial after sun exposure or in dry climates like Los Angeles.
          </p>
          <PricingSection
            items={getServicePricing("facials", "hydrating-treatments")}
            title="Hydrating Treatment Prices"
            benefitsTitle="Treatment Focus"
            benefits={[
              "Hyaluronic acid and humectants to attract and retain moisture",
              "Dermalogica and other professional hydrating serums",
              "Hydrating masks to lock in moisture",
              "Gentle techniques that don't strip the skin barrier",
            ]}
          />
          <Link href="/facials" className="btn-primary" style={{ marginTop: "1.5rem", display: "inline-block" }}>
            View All Facials
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
