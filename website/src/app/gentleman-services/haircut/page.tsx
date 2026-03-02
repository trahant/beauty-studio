import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { PricingSection } from "@/components/PricingSection";
import { getServicePricing } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Men's Haircuts in Los Angeles | Beauty Secrets Studio",
  description:
    "Professional men's haircuts in West LA — tapers, fades, textured crops & classic cuts. Walk-ins welcome. Call (310) 306-3191.",
};

export default function MensHaircutPage() {
  return (
    <PageLayout
      title="Men's Haircuts"
      description="Professional men's haircuts in West LA — tapers, fades, textured crops, and classic cuts. Walk-ins welcome."
      heroPrice={getServicePricing("gentleman-services", "haircut")[0]?.price}
      breadcrumb={[
        { label: "Gentleman Services", href: "/gentleman-services" },
        { label: "Haircut", href: "/gentleman-services/haircut" },
      ]}
      heroImage="/gentleman-services.png"
    >
      <section className="page-section">
        <div className="page-content-block">
          <p className="section-eyebrow">Barber Services</p>
          <h2 className="section-title">Professional Cuts for Men</h2>
          <div className="divider" />
          <p className="section-sub">
            Our barbers offer professional men&apos;s haircuts including tapers,
            fades, textured crops, and classic cuts. We take the time to
            understand what you want and deliver a clean, precise result.
          </p>
          <p>
            No appointment needed for most haircuts. Walk in during our business
            hours and we&apos;ll get you in as soon as possible. For peak times,
            we recommend calling ahead.
          </p>
        </div>

        <div className="page-content-block">
          <PricingSection
            items={[]}
            priceInHero
            eyebrow="Services"
            benefitsTitle="What We Offer"
            benefits={[
              "Tapers and fades",
              "Textured crops",
              "Classic cuts",
              "Beard trims",
            ]}
          />
          <Link href="/gentleman-services" className="btn-primary" style={{ marginTop: "1.5rem", display: "inline-block" }}>
            View All Gentleman Services
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
