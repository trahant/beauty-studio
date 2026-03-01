import type { PriceItem } from "@/lib/pricing";

interface PricingSectionProps {
  items: PriceItem[];
  /** Optional: custom eyebrow text (default "Pricing") */
  eyebrow?: string;
  /** Optional: custom title (default "Prices") */
  title?: string;
  /** Optional: list of benefits shown on the right (service pages) */
  benefits?: string[];
  /** Optional: title for benefits column (default "Benefits") */
  benefitsTitle?: string;
  /** When true, price is shown in hero; render only benefits card (no table). Use with items=[] */
  priceInHero?: boolean;
}

export function PricingSection({
  items,
  eyebrow = "Pricing",
  title = "Prices",
  benefits,
  benefitsTitle = "Benefits",
  priceInHero = false,
}: PricingSectionProps) {
  const hasBenefits = benefits && benefits.length > 0;
  const benefitsOnly = priceInHero && hasBenefits;
  if (!items.length && !benefitsOnly) return null;

  if (benefitsOnly) {
    return (
      <div className="page-content-block page-pricing-block">
        <p className="section-eyebrow">{eyebrow}</p>
        <h2 className="section-title">{benefitsTitle}</h2>
        <div className="divider" />
        <div className="page-pricing-benefits-card page-pricing-benefits-card-standalone">
          <ul className="page-pricing-benefits-list">
            {benefits!.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className={`page-content-block page-pricing-block ${hasBenefits ? "page-pricing-with-benefits" : ""}`}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      <div className="divider" />
      <div className={hasBenefits ? "page-pricing-benefits-grid" : "page-pricing-table-wrap"}>
        <div className="page-pricing-table-wrap">
          <table className="page-pricing-table" aria-label="Service prices">
            <tbody>
              {items.map((item) => (
                <tr key={item.name}>
                  <td className="page-pricing-name">{item.name}</td>
                  <td className="page-pricing-price">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {hasBenefits && (
          <div className="page-pricing-benefits-card">
            <h3 className="page-pricing-benefits-title">{benefitsTitle}</h3>
            <ul className="page-pricing-benefits-list">
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
