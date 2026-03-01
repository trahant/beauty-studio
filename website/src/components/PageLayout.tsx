import Link from "next/link";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { PageEffects } from "./PageEffects";
import { BOOK_URL } from "@/lib/sitemap";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface PageLayoutProps {
  title: React.ReactNode;
  description: string;
  breadcrumb?: BreadcrumbItem[];
  /** Optional: single price shown in hero (e.g. "$40") for service pages with one price */
  heroPrice?: string;
  children: React.ReactNode;
}

export function PageLayout({
  title,
  description,
  breadcrumb,
  heroPrice,
  children,
}: PageLayoutProps) {
  return (
    <>
      <Nav />
      <div className="page-wrapper">
        <header className="page-hero">
          <div className="page-hero-inner">
            {breadcrumb && breadcrumb.length > 0 && (
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                {breadcrumb.map((item) => (
                  <span key={item.href}>
                    {" / "}
                    <Link href={item.href}>{item.label}</Link>
                  </span>
                ))}
              </nav>
            )}
            <p className="page-hero-eyebrow">West Los Angeles, CA &middot; Walk-Ins Welcome</p>
            <h1 className="page-hero-title">{title}</h1>
            {heroPrice && <p className="page-hero-price">{heroPrice}</p>}
            <div className="divider" />
            <p className="page-hero-desc">{description}</p>
            <div className="page-hero-actions">
              <a href={BOOK_URL} className="btn-primary">
                Book Now
              </a>
              <a href="tel:3103063191" className="btn-ghost">
                Call (310) 306-3191
              </a>
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

        <main className="page-content">{children}</main>
      </div>
      <Footer />
      <PageEffects />
    </>
  );
}
