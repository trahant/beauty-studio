import type { Metadata } from "next";
import Link from "next/link";
import { PageLayout } from "@/components/PageLayout";
import { PricingSection } from "@/components/PricingSection";
import { getServicePricing } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Event & Party Henna Art in Los Angeles | Beauty Secrets Studio",
  description:
    "Henna art for birthdays, festivals, baby showers, bachelorette parties & celebrations. On-site or in-studio. West LA. Call (310) 306-3191.",
};

export default function SpecialOccasionPage() {
  return (
    <PageLayout
      title="Event & Party Henna"
      description="Henna art for birthdays, festivals, baby showers, bachelorette parties, and celebrations. On-site or in-studio."
      breadcrumb={[
        { label: "Henna", href: "/henna" },
        { label: "Special Occasion", href: "/henna/special-occasion" },
      ]}
    >
      <section className="page-section">
        <div className="page-content-block">
          <p className="section-eyebrow">Celebrations</p>
          <h2 className="section-title">Henna for Every Occasion</h2>
          <div className="divider" />
          <p className="section-sub">
            Henna adds a special touch to any celebration. We offer henna for
            birthdays, festivals, baby showers, bachelorette parties, and more —
            either in our West LA studio or at your venue.
          </p>
          <p>
            For events, we recommend booking in advance. We can come to your
            location or host your group in our studio. Contact us to discuss
            your event and get a quote.
          </p>
        </div>

        <div className="page-content-block">
          <PricingSection
            items={getServicePricing("henna", "special-occasion")}
            title="Event Henna Prices"
            benefitsTitle="Event Types"
            benefits={[
              "Birthday parties",
              "Festivals and cultural events",
              "Baby showers",
              "Bachelorette parties",
              "Corporate events",
              "Graduation celebrations",
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
