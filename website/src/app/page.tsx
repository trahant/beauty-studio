import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageEffects } from "@/components/PageEffects";

const BOOK_URL = "/contact";

export default function Home() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <header className="hero">
        <div className="hero-left">
          <p className="hero-eyebrow">
            West Los Angeles, CA &middot; Walk-Ins Welcome
          </p>
          <h1 className="hero-title">
            Facials, Threading
            <br />
            &amp; <em>Beauty Rituals</em>
            <br />
            for Los Angeles
          </h1>
          <p className="hero-sub">
            Expert skincare, precise threading, body waxing, and henna tattoos.
            All services offered in a calm, unhurried studio on Washington Blvd.
          </p>
          <div className="hero-actions">
            <a href={BOOK_URL} className="btn-primary">
              Book Your Appointment
            </a>
            <a href="tel:3103063191" className="btn-ghost">
              Call (310) 306-3191
            </a>
          </div>
          <div className="hero-trust">
            <div className="trust-item">
              <span className="trust-num">6</span>
              <span className="trust-label">Service Categories</span>
            </div>
            <div className="trust-item">
              <span className="trust-num">10+</span>
              <span className="trust-label">Years Experience</span>
            </div>
            <div className="trust-item">
              <span className="trust-stars" aria-label="5 star Google reviews">★★★★★</span>
              <span className="trust-label">Google Reviews</span>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-img-wrap">
            <Image
              src="/hero.jpg"
              alt="Beauty Secrets Studio - facials, threading, waxing in West Los Angeles"
              fill
              priority
              sizes="(max-width: 900px) 0vw, 50vw"
              className="hero-img"
            />
          </div>
          <div className="hero-right-inner">
            <div className="hero-badge">
              <span className="hero-badge-label">Our Philosophy</span>
              <span className="hero-badge-text">
                Beauty that begins with stillness
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* MARQUEE */}
      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee-track">
          <span>Signature Facials</span>
          <span className="dot">&middot;</span>
          <span>Eyebrow Threading</span>
          <span className="dot">&middot;</span>
          <span>Body Waxing</span>
          <span className="dot">&middot;</span>
          <span>Bridal Henna</span>
          <span className="dot">&middot;</span>
          <span>Lashes</span>
          <span className="dot">&middot;</span>
          <span>Gentleman Services</span>
          <span className="dot">&middot;</span>
          <span>Anti-Aging Treatments</span>
          <span className="dot">&middot;</span>
          <span>West Los Angeles</span>
          <span className="dot">&middot;</span>
          <span>Signature Facials</span>
          <span className="dot">&middot;</span>
          <span>Eyebrow Threading</span>
          <span className="dot">&middot;</span>
          <span>Body Waxing</span>
          <span className="dot">&middot;</span>
          <span>Bridal Henna</span>
          <span className="dot">&middot;</span>
          <span>Lashes</span>
          <span className="dot">&middot;</span>
          <span>Gentleman Services</span>
          <span className="dot">&middot;</span>
          <span>Anti-Aging Treatments</span>
          <span className="dot">&middot;</span>
          <span>West Los Angeles</span>
          <span className="dot">&middot;</span>
        </div>
      </div>

      {/* SERVICES */}
      <section id="services">
        <div className="services-header">
          <div>
            <p className="section-eyebrow">What We Offer</p>
            <h2 className="section-title">Our Services</h2>
            <div className="divider" />
            <p className="section-sub">
              Every treatment is performed by trained specialists. No rushing. No
              cutting corners.
            </p>
          </div>
          <a href={BOOK_URL} className="btn-primary">
            Book Any Service
          </a>
        </div>

        <div className="services-grid">
          <Link href="/facials" className="service-card fade-up">
            <div className="service-num">01</div>
            <h3 className="service-name">Facials &amp; Skincare</h3>
            <p className="service-desc">
              Signature facials, hydrating treatments, and anti-aging solutions
              customized to your skin type. Includes a guided meditation for full
              relaxation.
            </p>
            <div className="service-tags">
              <span className="tag">Signature Facials</span>
              <span className="tag">Hydrating</span>
              <span className="tag">Anti-Aging</span>
            </div>
            <span className="service-link">Learn More &rarr;</span>
          </Link>

          <Link href="/threading" className="service-card fade-up">
            <div className="service-num">02</div>
            <h3 className="service-name">Threading</h3>
            <p className="service-desc">
              Precise eyebrow shaping and facial threading for clean, defined
              results. No chemicals. No irritation. Walk-ins welcome for most
              threading services.
            </p>
            <div className="service-tags">
              <span className="tag">Eyebrow Threading</span>
              <span className="tag">Facial Threading</span>
              <span className="tag">Upper Lip</span>
            </div>
            <span className="service-link">Learn More &rarr;</span>
          </Link>

          <Link href="/waxing" className="service-card fade-up">
            <div className="service-num">03</div>
            <h3 className="service-name">Waxing</h3>
            <p className="service-desc">
              Full body waxing services from brows to legs. We use high-quality
              wax suited for sensitive skin to minimize discomfort and deliver
              smooth, lasting results.
            </p>
            <div className="service-tags">
              <span className="tag">Body Waxing</span>
              <span className="tag">Brazilian</span>
              <span className="tag">Brow Wax</span>
            </div>
            <span className="service-link">Learn More &rarr;</span>
          </Link>

          <Link href="/henna" className="service-card fade-up">
            <div className="service-num">04</div>
            <h3 className="service-name">Henna Tattoos</h3>
            <p className="service-desc">
              Custom henna designs for weddings, festivals, and everyday
              expression. Bridal henna packages available for full bridal
              parties. Lasts 1 to 3 weeks.
            </p>
            <div className="service-tags">
              <span className="tag">Bridal Henna</span>
              <span className="tag">Custom Designs</span>
              <span className="tag">Events</span>
            </div>
            <span className="service-link">Learn More &rarr;</span>
          </Link>

          <Link href="/lashes" className="service-card fade-up">
            <div className="service-num">05</div>
            <h3 className="service-name">Lashes</h3>
            <p className="service-desc">
              Lash tinting, lifts, classic extensions, and 2D volume. Enhance
              your natural lashes or add fullness. Gentle removal available.
            </p>
            <div className="service-tags">
              <span className="tag">Lash Tint</span>
              <span className="tag">Lash Lift</span>
              <span className="tag">Extensions</span>
            </div>
            <span className="service-link">Learn More &rarr;</span>
          </Link>

          <Link href="/gentleman-services" className="service-card fade-up">
            <div className="service-num">06</div>
            <h3 className="service-name">Gentleman Services</h3>
            <p className="service-desc">
              Facials, threading, and grooming treatments designed for men.
              Clean skin and sharp brows are not optional. Walk-ins welcome.
            </p>
            <div className="service-tags">
              <span className="tag">Men&apos;s Facials</span>
              <span className="tag">Brow Grooming</span>
              <span className="tag">Threading</span>
            </div>
            <span className="service-link">Learn More &rarr;</span>
          </Link>
        </div>
      </section>

      {/* WHY US */}
      <section id="why">
        <div className="why-left">
          <p className="section-eyebrow">Why Clients Return</p>
          <h2 className="section-title">
            A Studio Built
            <br /> on <em>Attention</em>
          </h2>
          <div className="divider" />
          <p className="section-sub">
            We are a small studio with a focused menu. Every service is
            performed by specialists, not generalists. That is how we maintain
            consistency across thousands of visits.
          </p>
          <div className="why-grid" style={{ marginTop: "2.5rem" }}>
            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" strokeWidth={1.5}>
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h4>Walk-Ins Welcome</h4>
              <p>
                No appointment needed for most services. We keep availability
                open every day.
              </p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="3.5" />
                  <path d="M22 21v-2a4 4 0 0 0-3.5-3.97M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h4>Specialist-Only Staff</h4>
              <p>
                Each provider focuses on their specific service area. No
                generalists on the floor.
              </p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path d="M12 4c-2 4-3 8-3 11 0 2.5 1.5 4 3 4s3-1.5 3-4c0-3-1-7-3-11z" />
                </svg>
              </div>
              <h4>Meditation in Facials</h4>
              <p>
                Guided meditation is integrated into facials for full
                relaxation.
              </p>
            </div>
            <div className="why-item">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path d="M12 21.35c-4-3.2-6-6.1-6-9.35a6 6 0 1 1 12 0c0 3.25-2 6.15-6 9.35z" />
                  <path d="M12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                </svg>
              </div>
              <h4>West LA Location</h4>
              <p>
                Convenient on Washington Blvd with easy parking. Open 7 days a
                week.
              </p>
            </div>
          </div>
        </div>
        <div className="why-right">
          <div className="why-right-content">
            <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="review-text">
              &quot;Love the service here. They always do a great job with my
              brows and listen to how I&apos;d like them shaped. Even better for
              facials. They walk you through the entire process and include
              meditation. Highly recommend.&quot;
            </p>
            <p className="review-author">
              McKenzie Callahan &mdash; Google Review
            </p>
          </div>
          <div className="why-decorative-img">
            <Image
              src="/orchids.jpg"
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="why-img"
            />
          </div>
          <div
            style={{
              marginTop: "1.5rem",
              padding: "2rem",
              border: "1px solid var(--border)",
              background: "var(--warm-white)",
            }}
          >
            <p
              className="section-eyebrow"
              style={{ marginBottom: "0.5rem" }}
            >
              Serving Los Angeles
            </p>
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--muted)",
                fontWeight: 300,
                lineHeight: 1.7,
              }}
            >
              We serve clients from Culver City, Mar Vista, Marina del Rey,
              Playa Vista, Playa del Rey, Venice, and across the Westside.
              Located at 12833 1/2 W Washington Blvd, Los Angeles, CA.
            </p>
          </div>
        </div>
      </section>

      {/* GENTLEMEN */}
      <section id="gentlemen">
        <p className="section-eyebrow">For Men</p>
        <h2 className="section-title">Gentleman Services</h2>
        <div className="divider" />
        <p className="section-sub">
          We offer a dedicated set of treatments for men who want clean skin,
          groomed brows, and a no-nonsense experience. Walk-ins welcome.
        </p>
        <div className="gentlemen-grid">
          <div className="gentlemen-row gentlemen-row-top">
            <div className="gentleman-item">
              <h4>Men&apos;s Signature Facial</h4>
              <p>
                Deep cleanse, exfoliation, and hydration for all skin types
                including oily, combination, and sensitive skin.
              </p>
            </div>
            <div className="gentleman-item">
              <h4>Eyebrow Threading &amp; Grooming</h4>
              <p>
                Precise shaping for a clean, natural look. One of the
                most-requested services for men at our studio.
              </p>
            </div>
            <div className="gentleman-item">
              <h4>Anti-Aging Facial</h4>
              <p>
                Targeted treatment to reduce fine lines, improve texture, and
                support collagen production over time.
              </p>
            </div>
          </div>
          <div className="gentlemen-row gentlemen-row-bottom">
            <div className="gentleman-item">
              <h4>Back Waxing</h4>
              <p>
                Full back and shoulder waxing with low-sensitivity wax. Clean,
                efficient, no unnecessary small talk.
              </p>
            </div>
            <div className="gentleman-item">
              <h4>Threading + Facial Combo</h4>
              <p>
                Brow threading and a custom facial in one session. Popular with
                clients who want to maximize their visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking">
        <div>
          <p className="section-eyebrow">Visit Us</p>
          <h2 className="section-title">
            Hours &amp; <em>Location</em>
          </h2>
          <div className="divider" />
          <div className="walkin-badge">Walk-Ins Accepted Daily</div>
          <table className="hours-table">
            <tbody>
              <tr>
                <td>Monday</td>
                <td>10:00 AM &ndash; 6:00 PM</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>10:00 AM &ndash; 6:00 PM</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>10:00 AM &ndash; 7:00 PM</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>10:00 AM &ndash; 7:00 PM</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>10:00 AM &ndash; 7:00 PM</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>10:00 AM &ndash; 6:00 PM</td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td>10:00 AM &ndash; 5:00 PM</td>
              </tr>
            </tbody>
          </table>
          <div style={{ marginTop: "2.5rem" }}>
            <a href={BOOK_URL} className="btn-primary">
              Book Online
            </a>
          </div>
        </div>
        <div>
          <div className="booking-decorative-img">
            <Image
              src="/white_flowers.png"
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="booking-img"
            />
          </div>
          <div
            style={{
              background: "var(--cream)",
              border: "1px solid var(--border)",
              padding: "2.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <p
              className="section-eyebrow"
              style={{ marginBottom: "0.8rem" }}
            >
              Our Address
            </p>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.4rem",
                color: "var(--espresso)",
                marginBottom: "0.8rem",
              }}
            >
              12833 1/2 W Washington Blvd
              <br />
              Los Angeles, CA 90066
            </p>
            <p className="footer-address">
              <a href="tel:3103063191">(310) 306-3191</a>
              <br />
              <a
                href="https://maps.google.com/?q=12833+W+Washington+Blvd+Los+Angeles+CA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions &rarr;
              </a>
            </p>
          </div>
          <div
            style={{
              background: "var(--espresso)",
              padding: "2rem 2.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "0.8rem",
              }}
            >
              Nearby Areas We Serve
            </p>
            <p
              style={{
                fontSize: "0.85rem",
                color: "rgba(247,242,235,0.55)",
                lineHeight: 1.8,
                fontWeight: 300,
              }}
            >
              Culver City &middot; Mar Vista &middot; Marina del Rey &middot;
              Playa Vista &middot; Playa del Rey &middot; Venice &middot; Santa
              Monica &middot; Inglewood &middot; Baldwin Hills
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ maxWidth: "none" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p
            className="section-eyebrow"
            style={{ textAlign: "center" }}
          >
            Common Questions
          </p>
          <h2
            className="section-title"
            style={{ textAlign: "center" }}
          >
            FAQ
          </h2>
          <div
            className="divider"
            style={{ margin: "1.2rem auto 0" }}
          />
          <div className="faq-list">
            <div className="faq-item">
              <button type="button" className="faq-q">
                Do I need an appointment? <span className="icon">+</span>
              </button>
              <div className="faq-a">
                Walk-ins are welcome for most services including threading,
                waxing, and henna. For facials, we recommend booking in advance
                to guarantee your preferred time slot. You can book online or
                call (310) 306-3191.
              </div>
            </div>
            <div className="faq-item">
              <button type="button" className="faq-q">
                How long do henna tattoos last? <span className="icon">+</span>
              </button>
              <div className="faq-a">
                Henna tattoos typically last 1 to 3 weeks depending on
                placement and aftercare. To extend the life of your design,
                avoid soaking the area in water, apply coconut oil lightly, and
                keep the skin moisturized. Hands and feet tend to produce the
                darkest, longest-lasting results.
              </div>
            </div>
            <div className="faq-item">
              <button type="button" className="faq-q">
                How often should I get a facial? <span className="icon">+</span>
              </button>
              <div className="faq-a">
                For most clients, every 4 to 6 weeks is the right cadence.
                This aligns with the skin&apos;s natural renewal cycle. If you
                have active acne, hyperpigmentation, or accelerated aging
                concerns, your esthetician may recommend more frequent visits.
              </div>
            </div>
            <div className="faq-item">
              <button type="button" className="faq-q">
                Does threading hurt? <span className="icon">+</span>
              </button>
              <div className="faq-a">
                Threading causes minimal discomfort, most clients describe it as
                a brief pinch. Our threaders work quickly to minimize any
                sensation. If it is your first time, let your specialist know
                and they will walk you through what to expect.
              </div>
            </div>
            <div className="faq-item">
              <button type="button" className="faq-q">
                Do you offer services for men? <span className="icon">+</span>
              </button>
              <div className="faq-a">
                Yes. We offer a full range of gentleman services including
                facials, eyebrow threading, and back waxing. Walk-ins are
                welcome and our team is experienced working with male clients
                across all skin types.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <PageEffects />
    </>
  );
}
