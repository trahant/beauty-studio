import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <p className="footer-brand-name">
            <Image
              src="/logo-light.png"
              alt=""
              width={28}
              height={28}
              className="footer-logo-img"
            />
            Beauty Secrets Studio
          </p>
          <p className="footer-tagline">
            Skincare, threading, waxing, henna &amp; lashes in West Los
            Angeles.
          </p>
        </div>
        <div className="footer-col">
          <h5>Services</h5>
          <ul>
            <li>
              <Link href="/facials">Facials &amp; Skincare</Link>
            </li>
            <li>
              <Link href="/threading">Threading</Link>
            </li>
            <li>
              <Link href="/waxing">Waxing</Link>
            </li>
            <li>
              <Link href="/henna">Henna Tattoos</Link>
            </li>
            <li>
              <Link href="/lashes">Lashes</Link>
            </li>
            <li>
              <Link href="/gentleman-services">Gentleman Services</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Visit</h5>
          <p className="footer-address">
            12833 1/2 W Washington Blvd
            <br />
            Los Angeles, CA 90066
            <br />
            <br />
            <a href="tel:3103063191">(310) 306-3191</a>
            <br />
            <a
              href="https://maps.google.com/?q=12833+W+Washington+Blvd+Los+Angeles+CA"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
            </a>
          </p>
        </div>
        <div className="footer-col">
          <h5>Hours</h5>
          <ul
            style={{
              color: "rgba(247,242,235,0.45)",
              fontSize: "0.82rem",
              lineHeight: 1.9,
              listStyle: "none",
            }}
          >
            <li>Mon &ndash; Tue: 10am &ndash; 6pm</li>
            <li>Wed &ndash; Fri: 10am &ndash; 7pm</li>
            <li>Saturday: 10am &ndash; 6pm</li>
            <li>Sunday: 10am &ndash; 5pm</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          &copy; 2025 Beauty Secrets Skincare &amp; Threading Studio. Los
          Angeles, CA.
        </span>
        <span>
          Threading &middot; Facials &middot; Waxing &middot; Henna &middot;
          Lashes &middot; West LA
        </span>
      </div>
    </footer>
  );
}
