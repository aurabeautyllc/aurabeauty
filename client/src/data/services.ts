// Aura Beauty LLC — Service menu data
// Quiet Atelier theme: editorial luxury, warm neutrals, clay-rose accent.
// All prices and durations sourced from the live Square Appointments menu.

export const BOOKING_URL =
  "https://book.squareup.com/appointments/6bqoexhg99i4mc/location/LMFQB9H9VH0H1?buttonTextColor=000000&color=c29a8e&locale=en&referrer=so";

export const SQUARE_SITE = "https://aura-beauty-llc.square.site";

export interface Service {
  name: string;
  price: string;
  duration: string;
  description?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  blurb: string;
  image: string;
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "facials",
    title: "Facials & Skin",
    blurb:
      "Custom facials designed around your skin's needs — from barrier repair to deep clarity and a lit-from-within glow.",
    image: "/manus-storage/facial_b737ffb6.jpeg",
    services: [
      {
        name: "Aura Beauty Barrier Restore Facial",
        price: "$85",
        duration: "1 hr",
        description:
          "My signature facial — fully customized to your skin's needs, using repairing and nourishing products to strengthen and restore the skin's barrier. Includes a relaxing facial and head massage.",
      },
      {
        name: "Anti-Aging Facial",
        price: "$145",
        duration: "1 hr 30 min",
        description:
          "A firming protocol where fine lines, wrinkles and sagging skin don't stand a chance — a knockout combination of Circadia Enzyme Mask to brighten and rejuvenate.",
      },
      {
        name: "Radiant Glow Facial",
        price: "$110",
        duration: "1 hr 15 min",
        description:
          "Skin analysis, double cleanse, gentle exfoliation, extractions and microdermabrasion to reveal healthy new cells. Ice globes, scalp and shoulder massage included.",
      },
      {
        name: "Clarity Acne Facial",
        price: "$100",
        duration: "1 hr 30 min",
        description:
          "Ready to conquer your acne? Double cleanse, enzyme treatment, extractions, a curated mask and high frequency to help calm breakouts and bacteria.",
      },
      {
        name: "HydraFacial",
        price: "$90",
        duration: "1 hr",
        description:
          "Clears congestion, promotes collagen production and boosts hydration with a double cleanse and hydro-exfoliation focused on congested areas.",
      },
      {
        name: "HydraFacial + Dermaplane",
        price: "$115",
        duration: "1 hr 30 min",
        description:
          "Two powerful treatments for optimal renewal — dermaplaning gently exfoliates while the HydraFacial deeply cleanses, extracts and infuses.",
      },
      {
        name: "Dermaplane & Decompress",
        price: "$95",
        duration: "1 hr 30 min",
        description:
          "Double cleanse, dermaplaning, facial and shoulder massage, masque, serums, moisturizer and SPF to finish.",
      },
      {
        name: "Express Dermaplane",
        price: "$50",
        duration: "30 min",
        description: "A little pick-me-up — double cleanse, dermaplane and finishing products.",
      },
      {
        name: "Back Facial",
        price: "$75",
        duration: "45 min",
        description:
          "Perfect for targeting back breakouts or simply for a relaxing, thorough cleanse on the back.",
      },
      {
        name: "Chemical Peel",
        price: "$130",
        duration: "1 hr",
        description:
          "A controlled exfoliating solution that removes the top layer of damaged skin, stimulating natural regeneration for a smoother, more youthful appearance.",
      },
    ],
  },
  {
    id: "microchanneling",
    title: "Microchanneling",
    blurb:
      "ProCell Microchanneling stimulates collagen and elastin to transform skin texture, scarring, tone and more.",
    image: "/manus-storage/products_2aeb0540.jpeg",
    services: [
      {
        name: "Microchanneling PRO",
        price: "$350",
        duration: "1 hr 30 min",
        description:
          "Advanced treatment that stimulates collagen and elastin — highly effective for texture, fine lines, acne scarring, hyperpigmentation, uneven tone, sun damage and more.",
      },
      {
        name: "Microchanneling MD",
        price: "$400",
        duration: "1 hr 30 min",
        description:
          "The most advanced ProCell protocol for comprehensive skin renewal, tightening and correction.",
      },
      {
        name: "ProCell Microchanneling Hair Treatment",
        price: "$190",
        duration: "45 min",
        description:
          "A revolutionary solution for thinning or balding hair from stress, hormonal changes, weight loss, chemo or alopecia — designed to reactivate dormant follicles.",
      },
    ],
  },
  {
    id: "lashes",
    title: "Lashes",
    blurb:
      "Custom UV-cured and classic lash artistry, lifts and tints — mapped to your eye shape and lash health.",
    image: "/manus-storage/lashes_75acb036.jpeg",
    services: [
      {
        name: "UV Custom Full Set",
        price: "$150",
        duration: "3 hr",
        description:
          "Custom UV-cured lash extensions created to your facial mapping, eye shape, lash health and style — ideal for retention issues or adhesive sensitivity.",
      },
      {
        name: "UV Custom Touch-Up",
        price: "$65",
        duration: "1 hr",
        description: "Must have 70–80% of your lashes left. Best within seven days of your last appointment.",
      },
      {
        name: "UV Custom Standard Fill",
        price: "$80",
        duration: "2 hr",
        description: "Must have 40–50% of your lashes remaining on both eyes.",
      },
      {
        name: "UV Custom Extended Fill",
        price: "$95",
        duration: "2 hr 15 min",
        description: "Must have 30–40% of your lashes remaining.",
      },
      {
        name: "Opal Free Full Set",
        price: "$200",
        duration: "3 hr",
        description:
          "Stunning, long-lasting extensions with a breakthrough 100% acrylate-free formula designed for sensitive eyes. Powered by advanced LED technology, it creates an instantly cured, waterproof, hypoallergenic bond that eliminates harsh chemical fumes and irritation for unmatched comfort and lasting wear.",
      },
      {
        name: "Opal Free Standard Fill",
        price: "$100",
        duration: "2 hr",
        description: "Must have 40–50% of your lashes remaining on both eyes.",
      },
      {
        name: "Opal Free Extended Fill",
        price: "$110",
        duration: "2 hr 15 min",
        description: "Must have 30–40% of your lashes remaining.",
      },
      {
        name: "Lash Lift",
        price: "$75",
        duration: "45 min",
        description:
          "A natural enhancement giving your lashes an upward curl for a longer, lifted appearance lasting 6–8 weeks.",
      },
      {
        name: "Lash Lift + Tint",
        price: "$85",
        duration: "1 hr",
        description: "A lifted curl plus a tint for that mascara effect — without the mascara.",
      },
      {
        name: "Transfer Fee",
        price: "$25",
        duration: "30 min",
        description: "Coming from a previous lash artist? Please add this to your fill.",
      },
      {
        name: "Lash Removal",
        price: "$25",
        duration: "30 min",
      },
      {
        name: "Lash Wash & Aftercare Products",
        price: "$30",
        duration: "10 min",
      },
    ],
  },
  {
    id: "brows",
    title: "Brows",
    blurb: "Shaping, lamination and tints to frame your face with fuller, polished brows.",
    image: "/manus-storage/brows_c1723038.jpeg",
    services: [
      {
        name: "Brow Lamination Deluxe Package",
        price: "$90",
        duration: "1 hr",
        description:
          "Perms brow hairs in place for a fuller look lasting 6–8 weeks. Includes wax, tint and lamination.",
      },
      {
        name: "Brow Lamination",
        price: "$80",
        duration: "45 min",
        description:
          "Manipulate brow hairs into place — no more morning brow gel. Includes a brow lamination and a wax.",
      },
      {
        name: "Eyebrow Wax",
        price: "$25",
        duration: "30 min",
      },
      {
        name: "Tint / Stain",
        price: "$25",
        duration: "30 min",
      },
    ],
  },
  {
    id: "waxing",
    title: "Waxing",
    blurb: "Smooth, careful waxing for face and body.",
    image: "/manus-storage/studio_cd44c2e7.jpeg",
    services: [
      { name: "Underarm Wax", price: "$25", duration: "15 min" },
      { name: "Sideburn Wax", price: "$15", duration: "15 min" },
      { name: "Chin Wax", price: "$15", duration: "30 min" },
    ],
  },
  {
    id: "addons",
    title: "Add-Ons & Enhancements",
    blurb: "Little extras to elevate any treatment.",
    image: "/manus-storage/products_2aeb0540.jpeg",
    services: [
      {
        name: "Lip Plumping Treatment",
        price: "$20",
        duration: "Add-on",
        description:
          "Microdermabrasion exfoliation, a lip-enhancing cream for visible plumping, then a hydrating balm — results last up to 24 hrs.",
      },
      {
        name: "Hydro Jelly Mask",
        price: "$10",
        duration: "15 min",
        description:
          "A client favorite — a jelly-like mask compressed with ingredients that penetrate deeper than a regular mask.",
      },
      {
        name: "Add Color",
        price: "$10",
        duration: "Add-on",
        description:
          "Add any color from the rainbow palette to your lash set — brown, red, or any shade you like.",
      },
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Tatiana is the best! I go to her for extensions, lash lifts, waxing, facials, and just the works. She's very professional and I absolutely love her vibes.",
    name: "Aj R.",
  },
  {
    quote:
      "Tatiana is the best lash artist and esthetician I have EVER gone to! She always makes my lashes and brows look so pretty and her work is very high quality.",
    name: "Kylie M.",
  },
  {
    quote:
      "I'm a mature woman of 77 and have had Microchanneling done several times. The results have been amazing — smoother skin and I look years younger. It really works.",
    name: "Peggy C.",
  },
];

export const businessInfo = {
  name: "Aura Beauty LLC",
  owner: "Tatiana Kucera",
  address: "323 11th Ave S, Nampa, Idaho 83651",
  phone: "(208 ) 717-5330",
  phoneHref: "tel:+12087175330",
  email: "tatianakucera65@gmail.com",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=323+11th+Ave+S+Nampa+ID+83651-4230",
  hours: [
    { day: "Monday", time: "12:00 pm – 6:00 pm" },
    { day: "Tuesday", time: "10:00 am – 6:00 pm" },
    { day: "Wednesday", time: "Closed" },
    { day: "Thursday", time: "10:00 am – 6:00 pm" },
    { day: "Friday", time: "10:00 am – 6:00 pm" },
    { day: "Saturday", time: "10:00 am – 6:00 pm" },
    { day: "Sunday", time: "Closed" },
  ],
};
