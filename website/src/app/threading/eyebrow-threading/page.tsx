import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { PricingSection } from "@/components/PricingSection";
import { BOOK_URL } from "@/lib/sitemap";
import { getServicePricing } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Eyebrow Threading in Los Angeles | Beauty Secrets Studio",
  description:
    "Professional eyebrow threading in West LA. Sharp, defined brows with traditional thread technique. Walk-ins welcome. Call (310) 306-3191.",
};

export default function EyebrowThreadingPage() {
  return (
    <PageLayout
      title="Eyebrow Threading"
      description="Professional eyebrow threading in West LA. Sharp, defined brows with the traditional thread technique. Walk-ins welcome."
      breadcrumb={[
        { label: "Threading", href: "/threading" },
        { label: "Eyebrow Threading", href: "/threading/eyebrow-threading" },
      ]}
      heroImage="/eyebrow-threading.png"
    >
      <section className="page-section">
        <div className="page-content-block">
          <p className="section-eyebrow">Most Requested</p>
          <h2 className="section-title">Clean, Defined Brows</h2>
          <div className="divider" />
          <p className="section-sub">
            Eyebrow threading is one of our most requested services. Our
            threaders are specialists who create clean, natural-looking brows
            that frame your face beautifully.
          </p>
          <p>
            The traditional thread technique allows for precise hair removal
            that wax simply can&apos;t achieve. We can create sharp arches,
            soft natural shapes, or anything in between. No chemicals, no
            irritation — just clean lines.
          </p>
        </div>

        <div className="page-content-block">
          <h2>What to Expect</h2>
          <p>
            Your specialist will consult with you on the shape you want before
            beginning. The threading process is quick; most sessions take
            10–15 minutes. There may be a brief pinch, but discomfort is
            minimal. Our threaders work efficiently to minimize any sensation.
          </p>
        </div>

        <div className="page-content-block">
          <PricingSection
            items={getServicePricing("threading", "eyebrow-threading")}
            title="Eyebrow Threading Prices"
            benefits={[
              "Precise hair removal for sharp, clean lines",
              "No wax or chemicals — ideal for sensitive skin",
              "Hair often grows back finer over time",
              "Walk-ins welcome; no appointment needed",
            ]}
          />

          <div className="page-highlight-box">
            <h3>~10–15 min &middot; Walk-ins welcome</h3>
            <p>No appointment needed. Our threaders work quickly so you can get in and out. Most clients describe only a brief pinch.</p>
          </div>

          <div className="page-cta-strip">
            <p>Drop in for eyebrow threading or book ahead. We&apos;re here daily.</p>
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
