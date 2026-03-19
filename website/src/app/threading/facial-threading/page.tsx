import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { PricingSection } from "@/components/PricingSection";
import { BOOK_URL } from "@/lib/sitemap";
import { getServicePricing } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Full Face Threading in Los Angeles | Upper Lip, Chin, Cheeks & Neck | Beauty Secrets Studio",
  description:
    "Professional full face threading for upper lip, chin, cheeks, sideburns, and neck in West LA. Gentle, chemical-free. Call (310) 306-3191.",
};

export default function FacialThreadingPage() {
  return (
    <PageLayout
      title="Full Face Threading"
      description="Professional full face threading for upper lip, chin, cheeks, sideburns, and neck in West LA. Gentle, chemical-free hair removal. Full body threading is available on request."
      breadcrumb={[
        { label: "Threading", href: "/threading" },
        { label: "Full Face Threading", href: "/threading/facial-threading" },
      ]}
      heroImage="/facial-threading.png"
    >
      <section className="page-section">
        <div className="page-content-block">
          <p className="section-eyebrow">Beyond Brows</p>
          <h2 className="section-title">Full Face &amp; Neck Threading</h2>
          <div className="divider" />
          <p className="section-sub">
            Beyond eyebrows, we offer full face threading for the upper lip, chin,
            cheeks, sideburns, and neck. Threading is especially well-suited to
            these areas because it&apos;s gentle and doesn&apos;t involve harsh chemicals.
          </p>
          <p>
            Many clients who have had uncomfortable experiences with wax or
            depilatory creams find threading to be a gentler alternative. The
            thread removes hair at the root, and regular threading can lead to
            finer regrowth over time.
          </p>
        </div>

        <div className="page-content-block">
          <h2>Why Choose Threading</h2>
          <p>
            Threading is ideal for sensitive skin and for those who prefer to
            avoid wax or depilatory creams. The thread removes hair at the root,
            and many clients find that hair grows back finer with regular
            threading.
          </p>
          <PricingSection
            items={getServicePricing("threading", "facial-threading")}
            title="Full Face Threading Prices"
            benefitsTitle="Areas We Thread"
            benefits={[
              "Upper lip — clean, defined results",
              "Chin — removes fine and coarse hair",
              "Cheeks — for a smooth, hair-free complexion",
              "Sideburns — neat, natural-looking edges",
              "Neck — for a clean, finished look",
            ]}
          />
          <div className="page-highlight-box">
            <h3>Upper lip, chin, cheeks, sideburns, and neck</h3>
            <p>
              Chemical-free and gentle. Walk-ins welcome. For even more coverage,
              full body threading is available on request.
            </p>
          </div>
          <div className="page-cta-strip">
            <p>
              Book full face threading or walk in. We thread upper lip, chin, cheeks,
              sideburns, and neck with the same care as brows.
            </p>
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
