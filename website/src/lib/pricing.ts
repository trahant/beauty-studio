/**
 * Pricing data from Beauty Secrets Studio — Services & Pricing.
 * Used for category and service page pricing sections.
 */

export interface PriceItem {
  name: string;
  price: string;
}

/** Get pricing for a category page (full list for that category). */
export function getCategoryPricing(
  category: "facials" | "threading" | "waxing" | "henna" | "lashes" | "gentleman-services"
): PriceItem[] {
  switch (category) {
    case "threading":
      return [
        { name: "Eyebrow", price: "$15" },
        { name: "Eyebrow Tint", price: "$20" },
        { name: "Eyebrow & Upper Lips", price: "$22" },
        { name: "Eyebrow & Lip & Chin", price: "$35" },
        { name: "Eyebrow / Lip / Sides", price: "$35" },
        { name: "Eyebrow / Lip / Chin with Half Neck", price: "$45" },
        { name: "Men's Eyebrow with Cheeks", price: "$20" },
        { name: "Men's Eyebrows with Sides", price: "$20" },
        { name: "Upper Lips", price: "$9" },
        { name: "Lip and Chin", price: "$25" },
        { name: "Chin", price: "$15" },
        { name: "Sides", price: "$15" },
        { name: "Full Cheeks", price: "$20" },
        { name: "Forehead", price: "$10" },
        { name: "Half Neck", price: "$12" },
        { name: "Full Neck", price: "$15" },
        { name: "Full Face", price: "$45" },
        { name: "Full Face with Half Neck", price: "$50" },
        { name: "Full Face with Neck", price: "$55" },
        { name: "Full Face Threading and Waxing", price: "$60" },
        { name: "Nose", price: "$10" },
        { name: "Ears", price: "$20" },
        { name: "Eyebrow Lamination", price: "$90" },
      ];
    case "waxing":
      return [
        { name: "Hand Knuckle", price: "$12" },
        { name: "Palms", price: "$12" },
        { name: "Toe Waxing", price: "$12" },
        { name: "Ladies Shoulder", price: "$20" },
        { name: "Nose", price: "$20" },
        { name: "Stomach Line", price: "$20" },
        { name: "Ear", price: "$20" },
        { name: "Back (Half)", price: "$35" },
        { name: "Full Butt Cheeks", price: "$35" },
        { name: "Stomach", price: "$35" },
        { name: "Half Arms", price: "$40" },
        { name: "Back For Ladies", price: "$45" },
        { name: "Full Front For Ladies", price: "$45" },
        { name: "Half Legs with Knee", price: "$45" },
        { name: "Half Legs", price: "$45" },
        { name: "Upper Thighs", price: "$45" },
        { name: "Full Arms", price: "$50" },
        { name: "Brazilian", price: "$55" },
        { name: "Full Legs", price: "$60" },
        { name: "Full Body", price: "$250" },
        { name: "Underarm (Chocolate)", price: "$18" },
        { name: "Neck (Chocolate)", price: "$20" },
        { name: "Back Neck (Chocolate)", price: "$20" },
        { name: "Back For Ladies (Chocolate)", price: "$50" },
        { name: "Full Front For Ladies (Chocolate)", price: "$50" },
        { name: "Bikini (Chocolate)", price: "$50" },
        { name: "Brazilian (Chocolate)", price: "$55" },
      ];
    case "facials":
      return [
        { name: "30 Min Chair Special", price: "$50" },
        { name: "Microzone Facial (30 min)", price: "$50" },
        { name: "Dermalogica Hydrating Facial", price: "$99" },
        { name: "Acne Facial", price: "$130" },
        { name: "Brightening Facial", price: "$165" },
        { name: "Anti-Aging Facial", price: "$165" },
        { name: "Dermalogica Body Treatment (60 min)", price: "$165" },
        { name: "Glow Facial", price: "$165" },
        { name: "Multi Vitamin Facial with Oxygen", price: "$180" },
        { name: "Signature Facial", price: "$300" },
        { name: "Add-On: Massage (10 min)", price: "$20" },
        { name: "Add-On: Decollete", price: "$30" },
        { name: "Add-On: Eye Treatment", price: "$30" },
        { name: "Add-On: Oxygen", price: "$40" },
      ];
    case "gentleman-services":
      return [
        { name: "Shoulder", price: "$20" },
        { name: "Ears", price: "$20" },
        { name: "Nose", price: "$20" },
        { name: "Arm Wax", price: "$55" },
        { name: "Back Waxing", price: "$55" },
        { name: "Chest Waxing", price: "$55" },
        { name: "Back Waxing (Chocolate)", price: "$60" },
        { name: "Full Legs", price: "$70" },
        { name: "30 Min Chair Special (Facial)", price: "$50" },
        { name: "Signature Facial", price: "$300" },
      ];
    case "henna":
      return [
        { name: "Henna Cone", price: "$20" },
        { name: "Henna Tattoo", price: "$20" },
        { name: "Hot Oil Treatment with Head & Shoulder Massage", price: "$30" },
        { name: "Henna Hair", price: "$65" },
      ];
    case "lashes":
      return [
        { name: "Lash Removal", price: "$30" },
        { name: "Lash Tint", price: "$40" },
        { name: "Cluster Extensions", price: "$110" },
        { name: "Lash Lift", price: "$110" },
        { name: "2D Lashes", price: "$150" },
      ];
    default:
      return [];
  }
}

/** Get pricing for a specific service sub-page. Returns empty if no match. */
export function getServicePricing(
  category: "facials" | "threading" | "waxing" | "henna" | "lashes" | "gentleman-services",
  serviceSlug: string
): PriceItem[] {
  switch (category) {
    case "threading":
      if (serviceSlug === "eyebrow-threading") {
        return [
          { name: "Eyebrow", price: "$15" },
          { name: "Eyebrow Tint", price: "$20" },
          { name: "Men's Eyebrow with Cheeks", price: "$20" },
          { name: "Men's Eyebrows with Sides", price: "$20" },
          { name: "Eyebrow Lamination", price: "$90" },
        ];
      }
      if (serviceSlug === "facial-threading") {
        return [
          { name: "Upper Lips", price: "$9" },
          { name: "Lip and Chin", price: "$25" },
          { name: "Chin", price: "$15" },
          { name: "Sides", price: "$15" },
          { name: "Full Cheeks", price: "$20" },
          { name: "Forehead", price: "$10" },
          { name: "Half Neck", price: "$12" },
          { name: "Full Neck", price: "$15" },
          { name: "Eyebrow & Upper Lips", price: "$22" },
          { name: "Eyebrow & Lip & Chin", price: "$35" },
          { name: "Full Face", price: "$45" },
          { name: "Full Face with Half Neck", price: "$50" },
          { name: "Full Face with Neck", price: "$55" },
          { name: "Nose", price: "$10" },
          { name: "Ears", price: "$20" },
        ];
      }
      return getCategoryPricing("threading");

    case "waxing":
      if (serviceSlug === "body-waxing") {
        return [
          { name: "Hand Knuckle", price: "$12" },
          { name: "Palms", price: "$12" },
          { name: "Toe Waxing", price: "$12" },
          { name: "Ladies Shoulder", price: "$20" },
          { name: "Back (Half)", price: "$35" },
          { name: "Full Butt Cheeks", price: "$35" },
          { name: "Stomach", price: "$35" },
          { name: "Half Arms", price: "$40" },
          { name: "Back For Ladies", price: "$45" },
          { name: "Full Front For Ladies", price: "$45" },
          { name: "Half Legs with Knee", price: "$45" },
          { name: "Half Legs", price: "$45" },
          { name: "Upper Thighs", price: "$45" },
          { name: "Full Arms", price: "$50" },
          { name: "Brazilian", price: "$55" },
          { name: "Full Legs", price: "$60" },
          { name: "Full Body", price: "$250" },
        ];
      }
      if (serviceSlug === "chocolate-waxing") {
        return [
          { name: "Underarm", price: "$18" },
          { name: "Neck", price: "$20" },
          { name: "Back Neck", price: "$20" },
          { name: "Back For Ladies", price: "$50" },
          { name: "Full Front For Ladies", price: "$50" },
          { name: "Bikini", price: "$50" },
          { name: "Brazilian", price: "$55" },
        ];
      }
      return getCategoryPricing("waxing");

    case "facials":
      if (serviceSlug === "signature-facials") {
        return [
          { name: "Signature Facial", price: "$300" },
          { name: "Add-On: Massage (10 min)", price: "$20" },
          { name: "Add-On: Decollete", price: "$30" },
          { name: "Add-On: Eye Treatment", price: "$30" },
          { name: "Add-On: Oxygen", price: "$40" },
        ];
      }
      if (serviceSlug === "skincare-treatments") {
        return [
          { name: "30 Min Chair Special", price: "$50" },
          { name: "Microzone Facial (30 min)", price: "$50" },
          { name: "Dermalogica Hydrating Facial", price: "$99" },
          { name: "Acne Facial", price: "$130" },
          { name: "Brightening Facial", price: "$165" },
          { name: "Anti-Aging Facial", price: "$165" },
          { name: "Glow Facial", price: "$165" },
          { name: "Add-On: Massage (10 min)", price: "$20" },
          { name: "Add-On: Decollete", price: "$30" },
          { name: "Add-On: Eye Treatment", price: "$30" },
          { name: "Add-On: Oxygen", price: "$40" },
        ];
      }
      if (serviceSlug === "hydrating-treatments") {
        return [
          { name: "Dermalogica Hydrating Facial", price: "$99" },
          { name: "Add-On: Massage (10 min)", price: "$20" },
          { name: "Add-On: Decollete", price: "$30" },
          { name: "Add-On: Eye Treatment", price: "$30" },
        ];
      }
      if (serviceSlug === "anti-aging-solutions") {
        return [
          { name: "Anti-Aging Facial", price: "$165" },
          { name: "Multi Vitamin Facial with Oxygen", price: "$180" },
          { name: "Add-On: Eye Treatment", price: "$30" },
          { name: "Add-On: Oxygen", price: "$40" },
        ];
      }
      return getCategoryPricing("facials");

    case "henna":
      if (serviceSlug === "henna-tattoos" || serviceSlug === "custom-designs" || serviceSlug === "special-occasion") {
        return [
          { name: "Henna Cone", price: "$20" },
          { name: "Henna Tattoo", price: "$20" },
          { name: "Hot Oil Treatment with Head & Shoulder Massage", price: "$30" },
        ];
      }
      if (serviceSlug === "bridal-packages") {
        return [
          { name: "Henna Tattoo", price: "$20" },
          { name: "Henna Hair", price: "$65" },
          { name: "Bridal packages", price: "Contact for quote" },
        ];
      }
      return getCategoryPricing("henna");

    case "lashes":
      if (serviceSlug === "lash-tint") return [{ name: "Lash Tint", price: "$40" }];
      if (serviceSlug === "lash-extension-removal") return [{ name: "Lash Removal", price: "$30" }];
      if (serviceSlug === "full-set-lash-extensions") return [{ name: "Cluster Extensions", price: "$110" }];
      if (serviceSlug === "lash-lift") return [{ name: "Lash Lift", price: "$110" }];
      if (serviceSlug === "2d-volume-lashes") return [{ name: "2D Lashes", price: "$150" }];
      return getCategoryPricing("lashes");

    case "gentleman-services":
      if (serviceSlug === "haircut") {
        return [
          { name: "Keratin Treatment", price: "Call for pricing" },
          { name: "Conditioning Treatment", price: "Call for pricing" },
          { name: "Scalp Treatment", price: "Call for pricing" },
          { name: "Hot Oil Head Massage", price: "Call for pricing" },
        ];
      }
      if (serviceSlug === "mens-facial") {
        return [
          { name: "30 Min Chair Special", price: "$50" },
          { name: "Signature Facial", price: "$300" },
          { name: "Add-On: Massage (10 min)", price: "$20" },
        ];
      }
      return getCategoryPricing("gentleman-services");
  }
  return [];
}
