import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { PricingSection } from "@/components/PricingSection";
import { getServicePricing } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Anti-Aging Facials in Los Angeles | Beauty Secrets Studio",
  description:
    "Professional anti-aging facial treatments targeting fine lines, wrinkles & elasticity loss. Retinol, peptides, LED therapy. Call (310) 306-3191.",
};

export default function AntiAgingSolutionsPage() {
  return (
    <PageLayout
      title="Anti-Aging Solutions"
      description="Professional anti-aging facial treatments targeting fine lines, wrinkles, and elasticity loss. Retinol, peptides, and LED therapy."
      breadcrumb={[
        { label: "Facials", href: "/facials" },
        { label: "Anti-Aging Solutions", href: "/facials/anti-aging-solutions" },
      ]}
    >
      <section className="page-section">
        <div className="page-content-block">
          <p className="section-eyebrow">Targeted Care</p>
          <h2 className="section-title">Professional Anti-Aging</h2>
          <div className="divider" />
          <p className="section-sub">
            Our anti-aging facials use proven ingredients and technologies to
            address fine lines, wrinkles, and loss of elasticity. We combine
            professional products with expert technique for visible results.
          </p>
          <p>
            With consistent treatments every 4–6 weeks, clients typically see
            improved texture, reduced appearance of fine lines, and a more
            radiant complexion. We also recommend a tailored at-home routine to
            extend results between visits.
          </p>
        </div>

        <div className="page-content-block">
          <h2>Results</h2>
          <p>
            Benefits vary by skin type and consistency of treatment. Most clients
            notice improved texture within the first few sessions. For best
            results, we recommend a series of treatments along with sun
            protection and a consistent skincare routine.
          </p>
          <PricingSection
            items={getServicePricing("facials", "anti-aging-solutions")}
            title="Anti-Aging Prices"
            benefitsTitle="Key Ingredients & Technologies"
            benefits={[
              "Retinol and retinoids to promote cell turnover",
              "Peptides to support collagen production",
              "LED light therapy for skin rejuvenation",
              "Antioxidants to protect against environmental damage",
              "Custom serums and masks for your skin's needs",
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
