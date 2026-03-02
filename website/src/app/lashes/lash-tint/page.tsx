import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { PricingSection } from "@/components/PricingSection";
import { getServicePricing } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Lash Tint in Los Angeles | Beauty Secrets Studio",
  description:
    "Professional lash tinting in West LA to darken and define your natural lashes. Call (310) 306-3191.",
};

export default function LashTintPage() {
  return (
    <PageLayout
      title="Lash Tint"
      description="Professional lash tinting in West LA to darken and define your natural lashes."
      heroPrice={getServicePricing("lashes", "lash-tint")[0]?.price}
      breadcrumb={[
        { label: "Lashes", href: "/lashes" },
        { label: "Lash Tint", href: "/lashes/lash-tint" },
      ]}
      heroImage="/lashes.jpg"
    >
      <section className="page-section">
        <div className="page-content-block">
          <p className="section-eyebrow">Low Maintenance</p>
          <h2 className="section-title">Define Your Natural Lashes</h2>
          <div className="divider" />
          <p className="section-sub">
            Lash tinting darkens and defines your natural lashes so they look
            fuller and more visible without mascara. It&apos;s a quick,
            low-maintenance treatment that lasts 4–6 weeks.
          </p>
          <p>
            Perfect for everyday wear, vacations, or anyone who wants to simplify
            their routine. The treatment typically takes 15–20 minutes.
          </p>
        </div>

        <div className="page-content-block">
          <PricingSection
            items={[]}
            priceInHero
            eyebrow="Benefits"
            benefitsTitle="Why Lash Tint"
            benefits={[
              "Darker, more defined lashes",
              "No mascara needed for everyday wear",
              "Quick treatment — typically 15–20 minutes",
              "Lasts 4–6 weeks",
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
