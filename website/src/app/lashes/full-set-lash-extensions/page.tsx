import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { PricingSection } from "@/components/PricingSection";
import { getServicePricing } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Full Set Lash Extensions in Los Angeles | Beauty Secrets Studio",
  description:
    "Full set lash extensions in West LA. Custom length and curl. Wake up with a polished look. Call (310) 306-3191.",
};

export default function FullSetLashExtensionsPage() {
  return (
    <PageLayout
      title="Full Set Lash Extensions"
      description="Full set lash extensions in West LA. Custom length and curl. Wake up with a polished look."
      heroPrice={getServicePricing("lashes", "full-set-lash-extensions")[0]?.price}
      breadcrumb={[
        { label: "Lashes", href: "/lashes" },
        { label: "Full Set Lash Extensions", href: "/lashes/full-set-lash-extensions" },
      ]}
    >
      <section className="page-section">
        <div className="page-content-block">
          <p className="section-eyebrow">Classic Extensions</p>
          <h2 className="section-title">Full, Natural Look</h2>
          <div className="divider" />
          <p className="section-sub">
            Full set lash extensions add length and fullness to your natural
            lashes. We customize the length and curl to suit your eye shape and
            desired look — from natural to dramatic.
          </p>
          <p>
            Individual extensions are applied to each natural lash. The session
            typically takes 1.5–2 hours. Fills are recommended every 2–3 weeks
            to maintain your look.
          </p>
        </div>

        <div className="page-content-block">
          <PricingSection
            items={[]}
            priceInHero
            eyebrow="What to Expect"
            benefitsTitle="Your Session"
            benefits={[
              "Consultation to choose length, curl, and style",
              "Individual extensions applied to each natural lash",
              "Session typically 1.5–2 hours",
              "Fills recommended every 2–3 weeks",
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
