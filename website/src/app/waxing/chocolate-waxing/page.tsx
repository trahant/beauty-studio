import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { PricingSection } from "@/components/PricingSection";
import { BOOK_URL } from "@/lib/sitemap";
import { getServicePricing } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Chocolate Waxing in Los Angeles | Sensitive Skin Waxing | Beauty Secrets Studio",
  description:
    "Premium chocolate waxing enriched with cocoa & almond oil. Designed for sensitive skin. Less pain, smoother results. West LA. Call (310) 306-3191.",
};

export default function ChocolateWaxingPage() {
  return (
    <PageLayout
      title="Chocolate Waxing"
      description="Premium chocolate wax enriched with cocoa and almond oil. Designed for sensitive skin — less pain, smoother results."
      breadcrumb={[
        { label: "Waxing", href: "/waxing" },
        { label: "Chocolate Waxing", href: "/waxing/chocolate-waxing" },
      ]}
      heroImage="/chocolate-waxing.png"
    >
      <section className="page-section">
        <div className="page-content-block">
          <p className="section-eyebrow">Sensitive Skin Formula</p>
          <h2 className="section-title">Gentler Waxing</h2>
          <div className="divider" />
          <p className="section-sub">
            Our chocolate wax is a premium formula enriched with cocoa and
            almond oil. It&apos;s designed specifically for sensitive skin and
            delivers a gentler waxing experience with less discomfort.
          </p>
          <p>
            The wax adheres to hair rather than skin, which reduces pulling and
            irritation. Cocoa and almond oil also nourish the skin during the
            process, leaving it smooth and moisturized rather than stripped.
          </p>
        </div>

        <div className="page-content-block">
          <h2>Ideal For</h2>
          <p>
            Chocolate wax is perfect for anyone with sensitive skin, first-time
            waxers, or those who have had uncomfortable experiences with
            traditional wax. We use it for facial and body waxing throughout our
            studio.
          </p>
          <PricingSection
            items={getServicePricing("waxing", "chocolate-waxing")}
            title="Chocolate Waxing Prices"
            benefits={[
              "Lower temperature — less irritation",
              "Cocoa and almond oil nourish the skin",
              "Adheres to hair, not skin — reduces pain",
              "Leaves skin smooth and moisturized",
            ]}
          />
          <div className="page-highlight-box">
            <h3>Used studio-wide</h3>
            <p>We use our chocolate wax for face and body. Lower temp, nourishing ingredients, less discomfort.</p>
          </div>
          <div className="page-cta-strip">
            <p>Book your wax — we use chocolate wax on all our services. Walk-ins welcome.</p>
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
