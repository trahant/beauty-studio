import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { PricingSection } from "@/components/PricingSection";
import { BOOK_URL } from "@/lib/sitemap";
import { getServicePricing } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Body Waxing in Los Angeles | Legs, Bikini, Brazilian | Beauty Secrets Studio",
  description:
    "Full body waxing in West LA — legs, arms, bikini, Brazilian, back & chest. Professional-grade wax. Call (310) 306-3191.",
};

export default function BodyWaxingPage() {
  return (
    <PageLayout
      title="Body Waxing"
      description="Full body waxing in West LA — legs, arms, bikini, Brazilian, back, and chest. Professional-grade wax for smooth, lasting results."
      breadcrumb={[
        { label: "Waxing", href: "/waxing" },
        { label: "Body Waxing", href: "/waxing/body-waxing" },
      ]}
      heroImage="/waxing.jpg"
    >
      <section className="page-section">
        <div className="page-content-block">
          <p className="section-eyebrow">Full Body</p>
          <h2 className="section-title">Comprehensive Waxing</h2>
          <div className="divider" />
          <p className="section-sub">
            We offer comprehensive body waxing services from legs and arms to
            bikini, Brazilian, back, and chest. All treatments use our
            sensitive-skin friendly chocolate wax.
          </p>
          <p>
            Your specialist will work efficiently to minimize discomfort. We
            recommend hair be at least 1/4 inch long for best results. Avoid
            sun exposure and heavy sweating for 24 hours after your appointment.
          </p>
        </div>

        <div className="page-content-block">
          <h2>What to Expect</h2>
          <p>
            Walk-ins are welcome for most body waxing services. Your specialist
            will ensure you&apos;re comfortable throughout the process. Results
            typically last 3–6 weeks depending on the area and your hair growth
            cycle.
          </p>

          <PricingSection
            items={getServicePricing("waxing", "body-waxing")}
            title="Body Waxing Prices"
            benefitsTitle="Areas We Wax"
            benefits={[
              "Legs (full, half, or lower)",
              "Arms and underarms",
              "Bikini and Brazilian",
              "Back and shoulders",
              "Chest and stomach",
            ]}
          />

          <div className="page-highlight-box">
            <h3>Pro tip</h3>
            <p>Hair should be at least 1/4 inch for best results. Avoid sun and heavy sweating for 24 hours after your appointment.</p>
          </div>

          <div className="page-cta-strip">
            <p>Book your body wax or walk in. We use sensitive-skin friendly chocolate wax on all areas.</p>
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
