import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { PricingSection } from "@/components/PricingSection";
import { getServicePricing } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Custom Henna Designs in Los Angeles | Beauty Secrets Studio",
  description:
    "Personalized henna tattoo designs — from delicate wrist pieces to full sleeves. Traditional & modern styles. Call (310) 306-3191.",
};

export default function CustomDesignsPage() {
  return (
    <PageLayout
      title="Custom Henna Designs"
      description="Personalized henna tattoo designs — from delicate wrist pieces to full sleeves. Traditional and modern styles."
      breadcrumb={[
        { label: "Henna", href: "/henna" },
        { label: "Custom Designs", href: "/henna/custom-designs" },
      ]}
      heroImage="/hennadesign.jpg"
    >
      <section className="page-section">
        <div className="page-content-block">
          <p className="section-eyebrow">Made for You</p>
          <h2 className="section-title">Personalized Designs</h2>
          <div className="divider" />
          <p className="section-sub">
            Every henna design we create is customized to you. Whether you want
            a delicate wrist piece, a full sleeve, or something in between, our
            artists work with you to bring your vision to life.
          </p>
          <p>
            We draw from traditional Indian and Arabic patterns, modern
            minimalist styles, floral motifs, and geometric designs. Your
            artist will recommend the best placement for your chosen design.
          </p>
        </div>

        <div className="page-content-block">
          <h2>Placement</h2>
          <p>
            Popular placements include hands, wrists, forearms, feet, and
            ankles. We can also create designs for shoulders, back, and other
            areas.
          </p>
          <PricingSection
            items={getServicePricing("henna", "custom-designs")}
            title="Custom Henna Prices"
            benefitsTitle="Design Styles"
            benefits={[
              "Traditional Indian and Arabic patterns",
              "Modern, minimalist designs",
              "Floral and botanical motifs",
              "Geometric and mandala-inspired work",
            ]}
          />
          <Link href="/henna" className="btn-primary" style={{ marginTop: "1.5rem", display: "inline-block" }}>
            View All Henna
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
