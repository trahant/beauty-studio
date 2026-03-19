import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { PricingSection } from "@/components/PricingSection";
import { getServicePricing } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Cluster Lash Extensions in Los Angeles | Beauty Secrets Studio",
  description:
    "Cluster lash extensions in West LA. Custom length and curl. Fluttery lashes with a polished look. Call (310) 306-3191.",
};

export default function FullSetLashExtensionsPage() {
  return (
    <PageLayout
      title="Cluster Lash Extensions"
      description="Cluster lash extensions in West LA. Custom length and curl. Fluttery lashes with a polished look."
      heroPrice={getServicePricing("lashes", "full-set-lash-extensions")[0]?.price}
      breadcrumb={[
        { label: "Lashes", href: "/lashes" },
        { label: "Cluster Lash Extensions", href: "/lashes/full-set-lash-extensions" },
      ]}
      heroImage="/lashes.jpg"
    >
      <section className="page-section">
        <div className="page-content-block">
          <p className="section-eyebrow">Cluster Extensions</p>
          <h2 className="section-title">Full, Natural Look</h2>
          <div className="divider" />
          <p className="section-sub">
            Cluster lash extensions add length and fullness in a fluttery, natural-looking
            way. We customize the length and curl to suit your eye shape and
            desired look — for everyday wear or parties.
          </p>
          <p>
            Clusters are applied in small groups for a fuller, blended effect.
            The session typically takes 1.5–2 hours. Fills are recommended
            every 2–3 weeks to maintain your look.
          </p>
        </div>

        <div className="page-content-block">
          <PricingSection
            items={[]}
            priceInHero
            eyebrow="What to Expect"
            benefitsTitle="Your Session"
            benefits={[
              "Consultation to choose cluster size, curl, and style",
              "Cluster groups applied in small sections",
              "Session typically 1.5–2 hours",
              "Fills recommended every 2–3 weeks",
              "Party strip lashes (strip lashes) available for events",
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
