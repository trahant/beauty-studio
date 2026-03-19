import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Hair & Make Up in Los Angeles | Parties & Events | Beauty Secrets Studio",
  description:
    "Makeup, hair styling, and blowouts for parties and special events in West LA. Walk-ins welcome when available. Call (310) 306-3191.",
};

export default function HairAndMakeupPage() {
  return (
    <PageLayout
      title="Hair &amp; Make Up"
      description="Makeup, hair styling, and blowouts for parties and special events in West LA. We'll help you look camera-ready."
      breadcrumb={[{ label: "Hair & Make Up", href: "/hair-and-makeup" }]}
      heroImage="/white_flowers.png"
    >
      <section className="page-section">
        <div className="page-content-block">
          <p className="section-eyebrow">For Parties &amp; Events</p>
          <h2 className="section-title">Makeup, Hair, and Blowouts</h2>
          <div className="divider" />
          <p className="section-sub">
            We offer party-ready beauty services, including professional makeup,
            blowouts, and hair styling for events.
          </p>
          <p>
            Whether you&apos;re getting ready for a wedding, birthday, or
            celebration, we&apos;ll tailor the look to your outfit and the vibe
            you want.
          </p>
        </div>

        <div className="page-content-block">
          <div className="page-feature-grid">
            <div className="page-feature-item">
              <div className="page-feature-icon">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
                  <path d="M8 12h8" />
                  <path d="M12 8v8" />
                </svg>
              </div>
              <h4>Event Makeup</h4>
              <p>Flawless, photo-friendly finishes designed to last through the night.</p>
            </div>

            <div className="page-feature-item">
              <div className="page-feature-icon">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none">
                  <path d="M4 4h16v16H4z" />
                  <path d="M8 8h8v8H8z" />
                </svg>
              </div>
              <h4>Hair Styling</h4>
              <p>Blowouts and event styles for volume, shine, and movement.</p>
            </div>

            <div className="page-feature-item">
              <div className="page-feature-icon">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none">
                  <path d="M20 7l-8 10-4-4" />
                </svg>
              </div>
              <h4>Blowouts</h4>
              <p>Fresh, polished hair for parties, photos, and special moments.</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

