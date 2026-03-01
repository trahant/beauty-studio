import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { PricingSection } from "@/components/PricingSection";
import { getServicePricing } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Lash Extension Removal in Los Angeles | Beauty Secrets Studio",
  description:
    "Professional lash extension removal in West LA. We gently dissolve old extensions so your natural lashes stay healthy. Call (310) 306-3191.",
};

export default function LashExtensionRemovalPage() {
  return (
    <PageLayout
      title="Lash Extension Removal"
      description="Professional lash extension removal in West LA. We gently dissolve old extensions so your natural lashes stay healthy."
      heroPrice={getServicePricing("lashes", "lash-extension-removal")[0]?.price}
      breadcrumb={[
        { label: "Lashes", href: "/lashes" },
        { label: "Lash Extension Removal", href: "/lashes/lash-extension-removal" },
      ]}
    >
      <section className="page-section">
        <div className="page-content-block">
          <p className="section-eyebrow">Gentle Removal</p>
          <h2 className="section-title">Protect Your Natural Lashes</h2>
          <div className="divider" />
          <p className="section-sub">
            When it&apos;s time to remove your lash extensions, we do it
            gently. Our removal process dissolves the adhesive so extensions
            slide off without pulling or damaging your natural lashes.
          </p>
          <p>
            Professional removal prevents damage and removes all adhesive
            residue. Your lashes will be clean and ready for a new set or a
            well-deserved break.
          </p>
        </div>

        <div className="page-content-block">
          <PricingSection
            items={[]}
            priceInHero
            eyebrow="Benefits"
            benefitsTitle="Why Professional Removal?"
            benefits={[
              "Prevents damage to natural lashes",
              "Removes all adhesive residue",
              "Leaves lashes clean and ready for a new set or break",
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
