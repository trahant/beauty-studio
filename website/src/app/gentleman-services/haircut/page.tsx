import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { PricingSection } from "@/components/PricingSection";
import { getServicePricing } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Scalp Treatments in Los Angeles | Keratin & Hot Oil | Beauty Secrets Studio",
  description:
    "Keratin treatment, conditioning, scalp treatments, and hot oil head massage for men in West LA. Walk-ins welcome. Call (310) 306-3191.",
};

export default function MensHaircutPage() {
  return (
    <PageLayout
      title="Scalp Treatments"
      description="Keratin treatment, conditioning, scalp treatments, and hot oil head massage for men in West LA. Walk-ins welcome."
      heroPrice={getServicePricing("gentleman-services", "haircut")[0]?.price}
      breadcrumb={[
        { label: "Gentleman Services", href: "/gentleman-services" },
        { label: "Scalp Treatments", href: "/gentleman-services/haircut" },
      ]}
      heroImage="/gentleman-services.png"
    >
      <section className="page-section">
        <div className="page-content-block">
          <p className="section-eyebrow">Scalp &amp; Conditioning</p>
          <h2 className="section-title">Keratin, Conditioning &amp; Hot Oil</h2>
          <div className="divider" />
          <p className="section-sub">
            Our scalp and conditioning treatments help refresh hair and
            promote a healthy, clean feel. Choose keratin treatment,
            conditioning, scalp treatment, and finish with a hot oil head
            massage.
          </p>
          <p>
            No appointment needed for most services. Walk in during our
            business hours, and for peak times we recommend calling ahead.
          </p>
        </div>

        <div className="page-content-block">
          <PricingSection
            items={getServicePricing("gentleman-services", "haircut")}
            eyebrow="Services"
            title="Scalp Treatment Prices"
          />
          <Link href="/gentleman-services" className="btn-primary" style={{ marginTop: "1.5rem", display: "inline-block" }}>
            View All Gentleman Services
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
