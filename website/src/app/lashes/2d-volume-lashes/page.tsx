import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { PricingSection } from "@/components/PricingSection";
import { getServicePricing } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "2D Volume Lashes in Los Angeles | Beauty Secrets Studio",
  description:
    "2D volume lash extensions in West LA for soft, fluttery fullness. Natural and everyday wearable. Call (310) 306-3191.",
};

export default function TwoDVolumeLashesPage() {
  return (
    <PageLayout
      title="2D Volume Lashes"
      description="2D volume lash extensions in West LA for soft, fluttery fullness. Natural and everyday wearable."
      heroPrice={getServicePricing("lashes", "2d-volume-lashes")[0]?.price}
      breadcrumb={[
        { label: "Lashes", href: "/lashes" },
        { label: "2D Volume Lashes", href: "/lashes/2d-volume-lashes" },
      ]}
    >
      <section className="page-section">
        <div className="page-content-block">
          <p className="section-eyebrow">Soft Fullness</p>
          <h2 className="section-title">Fluttery Volume</h2>
          <div className="divider" />
          <p className="section-sub">
            2D volume lashes use multiple fine extensions per natural lash to
            create soft, fluttery fullness. The result is more dramatic than
            classic extensions but still natural and wearable for everyday.
          </p>
          <p>
            Perfect for those who want fuller lashes without the heavy look of
            traditional volume. The fine extensions create a soft, feathered
            effect.
          </p>
        </div>

        <div className="page-content-block">
          <PricingSection
            items={[]}
            priceInHero
            eyebrow="2D vs Classic"
            benefitsTitle="The Difference"
            benefits={[
              "Classic: one extension per natural lash — natural look",
              "2D Volume: two fine extensions per natural lash — fuller, softer",
            ]}
          />
          <Link href="/lashes" className="btn-primary" style={{ marginTop: "1.5rem", display: "inline-block" }}>
            View All Lashes
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
