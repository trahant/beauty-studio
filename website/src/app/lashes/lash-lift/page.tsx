import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { PricingSection } from "@/components/PricingSection";
import { BOOK_URL } from "@/lib/sitemap";
import { getServicePricing } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Lash Lift in Los Angeles | Beauty Secrets Studio",
  description:
    "Lash lift services in West LA to curl and lift your natural lashes. No extensions needed. Low-maintenance. Call (310) 306-3191.",
};

export default function LashLiftPage() {
  return (
    <PageLayout
      title="Lash Lift"
      description="Lash lift services in West LA to curl and lift your natural lashes. No extensions needed. Low-maintenance."
      heroPrice={getServicePricing("lashes", "lash-lift")[0]?.price}
      breadcrumb={[
        { label: "Lashes", href: "/lashes" },
        { label: "Lash Lift", href: "/lashes/lash-lift" },
      ]}
    >
      <section className="page-section">
        <div className="page-content-block">
          <p className="section-eyebrow">No Extensions</p>
          <h2 className="section-title">Lift Your Natural Lashes</h2>
          <div className="divider" />
          <p className="section-sub">
            A lash lift curls and lifts your natural lashes from the root. No
            extensions are applied — we work with what you have to create a more
            open, lifted look. Results last 6–8 weeks.
          </p>
          <p>
            Ideal for those who want the look of curled lashes without the
            maintenance of extensions. Can be combined with lash tint for extra
            definition.
          </p>
        </div>

        <div className="page-content-block">
          <PricingSection
            items={[]}
            priceInHero
            eyebrow="Benefits"
            benefitsTitle="Why Lash Lift"
            benefits={[
              "No extensions — works with your natural lashes",
              "Low maintenance — no fills needed",
              "Lasts 6–8 weeks",
              "Can be combined with lash tint for extra definition",
            ]}
          />

          <div className="page-highlight-box">
            <h3>6–8 weeks &middot; No fills</h3>
            <p>Perfect if you want lifted, curled lashes without extensions. Pair with a lash tint for a mascara-free look.</p>
          </div>

          <div className="page-cta-strip">
            <p>Book your lash lift or add a tint for extra definition. We&apos;ll match the look to your eye shape.</p>
            <div className="btns">
              <a href={BOOK_URL} className="btn-primary">Book Now</a>
              <a href="tel:3103063191" className="btn-ghost">Call (310) 306-3191</a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
