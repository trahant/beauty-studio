import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const BASE_URL = "https://www.beautysecretsstudio.com";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Beauty Secrets Studio",
  image: `${BASE_URL}/logo-dark.png`,
  logo: `${BASE_URL}/logo-dark.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "12833 1/2 W Washington Blvd",
    addressLocality: "Los Angeles",
    addressRegion: "CA",
    postalCode: "90066",
    addressCountry: "US",
  },
  telephone: "+13103063191",
  url: "https://www.beautysecretsstudio.com",
  openingHours: [
    "Mo-Tu 10:00-18:00",
    "We-Fr 10:00-19:00",
    "Sa 10:00-18:00",
    "Su 10:00-17:00",
  ],
  priceRange: "$$",
  hasMap: "https://maps.google.com/?q=12833+W+Washington+Blvd+Los+Angeles+CA",
};

export const metadata: Metadata = {
  title: "Beauty Secrets Studio | Facials, Threading & Waxing in Los Angeles, CA",
  description:
    "Beauty Secrets Studio in West LA offers signature facials, eyebrow threading, waxing, henna tattoos, and gentleman services. Walk-ins welcome. Call (310) 306-3191.",
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/" },
  icons: { icon: "/logo-dark.png" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Beauty Secrets Studio",
    title: "Beauty Secrets Studio | Facials, Threading & Waxing in Los Angeles, CA",
    description:
      "Beauty Secrets Studio in West LA offers signature facials, eyebrow threading, waxing, henna tattoos, and gentleman services. Walk-ins welcome. Call (310) 306-3191.",
    images: [{ url: "/logo-dark.png", width: 512, height: 512, alt: "Beauty Secrets Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beauty Secrets Studio | Facials, Threading & Waxing in Los Angeles, CA",
    description:
      "Beauty Secrets Studio in West LA — signature facials, threading, waxing, henna, lashes. Walk-ins welcome. Call (310) 306-3191.",
    images: ["/logo-dark.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
