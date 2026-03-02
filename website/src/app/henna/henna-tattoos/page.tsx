import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { PricingSection } from "@/components/PricingSection";
import { BOOK_URL } from "@/lib/sitemap";
import { getServicePricing } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Henna Tattoos in Los Angeles | Natural & Organic | Beauty Secrets Studio",
  description:
    "100% natural henna tattoos in West LA. Hand-applied designs, organic paste, no black henna. Walk-ins welcome. Call (310) 306-3191.",
};

export default function HennaTattoosPage() {
  return (
    <PageLayout
      title="Henna Tattoos"
      description="100% natural henna tattoos in West LA. Hand-applied designs, organic paste, no black henna. Walk-ins welcome."
      breadcrumb={[
        { label: "Henna", href: "/henna" },
        { label: "Henna Tattoos", href: "/henna/henna-tattoos" },
      ]}
      heroImage="/hennadesign.jpg"
    >
      <section className="page-section">
        <div className="page-content-block">
          <p className="section-eyebrow">100% Natural</p>
          <h2 className="section-title">Safe, Traditional Henna</h2>
          <div className="divider" />
          <p className="section-sub">
            Our henna tattoos use 100% natural, organic henna paste. We never use
            black henna or chemical additives — only safe, traditional
            ingredients that produce rich, long-lasting color.
          </p>
          <p>
            The design darkens over 24–48 hours as the henna oxidizes. Hands
            and feet produce the darkest, longest-lasting results. With proper
            aftercare, your design can last 1 to 3 weeks.
          </p>
        </div>

        <div className="page-content-block">
          <PricingSection
            items={getServicePricing("henna", "henna-tattoos")}
            title="Henna Tattoo Prices"
            benefitsTitle="Aftercare"
            benefits={[
              "Keep the paste on for 4–6 hours for best color",
              "Avoid soaking in water for the first 24 hours",
              "Apply coconut oil lightly to extend the life of your design",
              "Keep skin moisturized",
            ]}
          />

          <div className="page-highlight-box">
            <h3>1–3 weeks lasting &middot; Hands & feet darkest</h3>
            <p>Design darkens over 24–48 hours. We use only natural paste — no black henna, no harmful additives.</p>
          </div>

          <div className="page-cta-strip">
            <p>Book your henna tattoo or walk in when we have availability. Custom designs welcome.</p>
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
