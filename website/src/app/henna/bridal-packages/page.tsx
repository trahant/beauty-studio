import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { PricingSection } from "@/components/PricingSection";
import { getServicePricing } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Bridal Henna & Mehndi in Los Angeles | Beauty Secrets Studio",
  description:
    "Bridal mehndi packages — full hands & feet coverage, wedding party henna, in-studio or on-location. Book 2-4 weeks ahead. Call (310) 306-3191.",
};

export default function BridalPackagesPage() {
  return (
    <PageLayout
      title="Bridal Henna & Mehndi"
      description="Bridal mehndi packages — full hands and feet coverage, wedding party henna, in-studio or on-location. Book 2–4 weeks ahead."
      breadcrumb={[
        { label: "Henna", href: "/henna" },
        { label: "Bridal Packages", href: "/henna/bridal-packages" },
      ]}
      heroImage="/hennadesign.jpg"
    >
      <section className="page-section">
        <div className="page-content-block">
          <p className="section-eyebrow">For Your Wedding</p>
          <h2 className="section-title">Bridal Mehndi</h2>
          <div className="divider" />
          <p className="section-sub">
            Our bridal mehndi packages include full hands and feet coverage with
            intricate, traditional designs. We also offer wedding party henna
            for bridesmaids and family. Book 2–4 weeks ahead to secure your date.
          </p>
          <p>
            Brides can come to our West LA studio or we can travel to your
            venue. On-location services are available for weddings and
            pre-wedding events.
          </p>
        </div>

        <div className="page-content-block">
          <PricingSection
            items={getServicePricing("henna", "bridal-packages")}
            title="Bridal Henna Pricing"
            benefitsTitle="What's Included"
            benefits={[
              "Full hands and feet mehndi",
              "Custom design consultation",
              "100% natural henna paste",
              "Aftercare instructions",
              "Optional: wedding party packages",
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
