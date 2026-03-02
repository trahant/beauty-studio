import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageEffects } from "@/components/PageEffects";

export const metadata: Metadata = {
  title: "FAQ | Beauty Secrets Studio | Facials, Threading, Waxing & Henna",
  description:
    "Common questions about facials, threading, waxing, henna, and visits. Walk-ins welcome. Beauty Secrets Studio, West Los Angeles. Call (310) 306-3191.",
};

const faqs = [
  {
    q: "Do I need an appointment?",
    a: "Walk-ins are welcome for most services including threading, waxing, and henna. For facials, we recommend booking in advance to guarantee your preferred time slot. You can book online or call (310) 306-3191.",
  },
  {
    q: "How long do henna tattoos last?",
    a: "Henna tattoos typically last 1 to 3 weeks depending on placement and aftercare. To extend the life of your design, avoid soaking the area in water, apply coconut oil lightly, and keep the skin moisturized. Hands and feet tend to produce the darkest, longest-lasting results.",
  },
  {
    q: "How often should I get a facial?",
    a: "For most clients, every 4 to 6 weeks is the right cadence. This aligns with the skin's natural renewal cycle. If you have active acne, hyperpigmentation, or accelerated aging concerns, your esthetician may recommend more frequent visits.",
  },
  {
    q: "Does threading hurt?",
    a: "Threading causes minimal discomfort, most clients describe it as a brief pinch. Our threaders work quickly to minimize any sensation. If it is your first time, let your specialist know and they will walk you through what to expect.",
  },
  {
    q: "Do you offer services for men?",
    a: "Yes. We offer a full range of gentleman services including facials, eyebrow threading, and back waxing. Walk-ins are welcome and our team is experienced working with male clients across all skin types.",
  },
  {
    q: "Where are you located?",
    a: "We are on Washington Blvd in West Los Angeles. Our address is 12833 1/2 W Washington Blvd, Los Angeles, CA 90066. We have street parking and are easy to find.",
  },
  {
    q: "What are your hours?",
    a: "We are open daily. Monday–Tuesday 10am–6pm, Wednesday–Friday 10am–7pm, Saturday 10am–6pm, Sunday 10am–5pm. Walk-ins are welcome during business hours.",
  },
  {
    q: "Do you use natural or organic products?",
    a: "We use professional-grade products from trusted brands including Dermalogica. Our henna is 100% natural with no black henna or harmful additives. For product preferences or allergies, tell your specialist before your service.",
  },
  {
    q: "How long does a typical facial take?",
    a: "Our Signature Facial is 60 minutes. We also offer a 30-minute chair facial and other treatments that vary in length. Your confirmation or booking will show the duration for your chosen service.",
  },
  {
    q: "Can I get a facial if I have acne?",
    a: "Yes. We offer acne facials and customized treatments for breakout-prone skin. Your esthetician will assess your skin and may include extractions and clarifying products. Avoid picking before your visit.",
  },
  {
    q: "What is chocolate wax and is it better for sensitive skin?",
    a: "Our chocolate wax is enriched with cocoa and almond oil and is designed for sensitive skin. It adheres to hair rather than skin, which can mean less discomfort and less irritation. We use it for face and body.",
  },
  {
    q: "How long should my hair be for waxing?",
    a: "Hair should be at least 1/4 inch (about the length of a grain of rice) for best results. If it is too short, the wax may not grip well. If you are unsure, we can advise when you call or come in.",
  },
  {
    q: "Do you do Brazilian waxing?",
    a: "Yes. We offer Brazilian waxing with our sensitive-skin friendly chocolate wax. Walk-ins are welcome when we have availability; booking ahead is recommended for popular times.",
  },
  {
    q: "What is a lash lift and how is it different from extensions?",
    a: "A lash lift curls and lifts your natural lashes from the root—no extensions are applied. It lasts 6–8 weeks and needs no fills. Extensions add length and fullness by attaching individual lashes to your natural ones.",
  },
  {
    q: "How long do lash extensions last?",
    a: "Full sets typically last 2–4 weeks before a fill is needed, depending on your lash cycle and aftercare. We recommend fills every 2–3 weeks to keep your look full. We also offer gentle removal when you are ready.",
  },
  {
    q: "Do you do bridal henna or mehndi?",
    a: "Yes. We offer bridal mehndi packages with full hands and feet coverage and custom designs. We recommend booking 2–4 weeks ahead. We can work in-studio or travel to your venue—contact us for a quote.",
  },
  {
    q: "Is your henna safe? Do you use black henna?",
    a: "We use only 100% natural henna with no black henna and no harmful additives. Our paste is safe for skin and produces rich, long-lasting color. We never use chemicals or PPD.",
  },
  {
    q: "Can I bring my child for henna or threading?",
    a: "Yes. We do henna and threading for younger clients; parent or guardian consent is required. For age or service suitability, call us and we can advise.",
  },
  {
    q: "Do you offer gift cards or packages?",
    a: "We can accommodate gift purchases and multi-service packages. Call (310) 306-3191 or ask in the studio and we will help you put together a gift or package.",
  },
  {
    q: "What is your cancellation policy?",
    a: "We ask that you cancel or reschedule at least 24 hours in advance when possible so we can offer the time to others. For late cancellations or no-shows, we may apply a fee—details are provided at booking.",
  },
  {
    q: "Do you do eyebrow waxing or only threading?",
    a: "We offer both threading and waxing for brows. Threading is chemical-free and precise; waxing is quick. We also offer brow wax as part of our waxing menu. You can choose based on your preference and skin sensitivity.",
  },
  {
    q: "Can I get a facial and waxing on the same day?",
    a: "Yes. We recommend doing waxing first, then your facial, so the facial can soothe the skin. For best results, avoid sun and heavy sweating for 24 hours after waxing. We can schedule back-to-back if you book both.",
  },
  {
    q: "Do you treat sensitive skin?",
    a: "Yes. Many of our treatments are suited to sensitive skin, including our chocolate wax, gentle threading, and customizable facials. Always tell your specialist about sensitivities or allergies so we can tailor the service.",
  },
  {
    q: "How do I prepare for my first facial?",
    a: "Arrive with a clean face (no need to remove makeup if you prefer—we will cleanse). Avoid strong exfoliants or retinoids 24–48 hours before if possible. Bring any questions; we will do a quick skin analysis and consultation.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept major credit and debit cards, and cash. Tips are appreciated for our team but never required. Payment is due at the time of service.",
  },
  {
    q: "Do you have a waiting area? Can I bring someone with me?",
    a: "We have a small waiting area. You are welcome to bring a friend or family member; they can wait in the reception area. For bridal or group henna, we can accommodate parties—call to arrange.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Nav />
      <div className="page-wrapper">
        <header className="page-hero page-hero-split">
          <div className="page-hero-left">
            <div className="page-hero-inner">
              <p className="page-hero-eyebrow">Common Questions</p>
              <h1 className="page-hero-title">FAQ</h1>
              <div className="divider" />
              <p className="page-hero-desc">
                Answers to common questions about our services, visits, and what to
                expect. Walk-ins welcome for most services.
              </p>
              <div className="page-hero-actions">
                <a href="/contact" className="btn-primary">
                  Book Now
                </a>
                <a href="tel:3103063191" className="btn-ghost">
                  Call (310) 306-3191
                </a>
              </div>
            </div>
          </div>
          <div className="page-hero-right">
            <div className="page-hero-img-wrap">
              <Image
                src="/white_flowers.png"
                alt=""
                fill
                sizes="(max-width: 900px) 0vw, 50vw"
                className="page-hero-img"
              />
            </div>
          </div>
        </header>

        <div className="page-marquee" aria-hidden="true">
          <div className="marquee-track">
            <span>Signature Facials</span>
            <span className="dot">&middot;</span>
            <span>Threading</span>
            <span className="dot">&middot;</span>
            <span>Waxing</span>
            <span className="dot">&middot;</span>
            <span>Henna</span>
            <span className="dot">&middot;</span>
            <span>Lashes</span>
            <span className="dot">&middot;</span>
            <span>West Los Angeles</span>
            <span className="dot">&middot;</span>
            <span>Signature Facials</span>
            <span className="dot">&middot;</span>
            <span>Threading</span>
            <span className="dot">&middot;</span>
            <span>Waxing</span>
            <span className="dot">&middot;</span>
            <span>Henna</span>
            <span className="dot">&middot;</span>
            <span>Lashes</span>
            <span className="dot">&middot;</span>
            <span>West Los Angeles</span>
            <span className="dot">&middot;</span>
          </div>
        </div>

        <section className="page-section">
          <div className="page-content-block" style={{ maxWidth: "720px" }}>
            <div className="faq-list">
              {faqs.map((faq) => (
                <div key={faq.q} className="faq-item">
                  <button type="button" className="faq-q">
                    {faq.q} <span className="icon">+</span>
                  </button>
                  <div className="faq-a">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <PageEffects />
    </>
  );
}
