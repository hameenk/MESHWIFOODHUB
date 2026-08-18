/**
 * MESHWI FOOD HUB — BUSINESS CONFIGURATION
 * -----------------------------------------
 * Edit ONLY this file to update contact details, hours, ratings, and links
 * across the entire website. Nothing else needs to change.
 *
 * Values marked "CONFIRM WITH OWNER" must be verified before publishing.
 */
const MESHWI_CONFIG = {
  name: "Meshwi Food Hub",
  legalYear: new Date().getFullYear(),

  tagline: "Authentic Arabian Flavours, Unforgettable Ambience.",
  taglineShort: "Where Flavour Meets Peace.",

  address: {
    line1: "KE Road, Pettaward Road",
    line2: "Near Reliance Trends",
    locality: "Kokkappally, Kanjirappally",
    region: "Kerala 686507, India",
    full: "KE Road, Pettaward Road, Near Reliance Trends, Kokkappally, Kanjirappally, Kerala 686507, India"
  },

  phone: {
    display: "+91 80863 78686",
    link: "tel:+918086378686"
  },

  whatsapp: {
    number: "918086378686",
    // Base link — order/reservation messages are appended dynamically in main.js
    baseLink: "https://wa.me/918086378686"
  },

  social: {
    instagram: "https://www.instagram.com/meshwifoodhub/",
    instagramHandle: "@meshwifoodhub",
    facebook: "https://www.facebook.com/meshwifood/"
  },

  website: "https://www.meshwifoodhub.com/",

  // CONFIRM WITH OWNER before publishing — used for open/closed indicator (Asia/Kolkata)
  hours: {
    displayText: "Daily, 12:00 PM – 11:00 PM",
    open24: "12:00", // 24hr HH:MM
    close24: "23:00", // 24hr HH:MM
    timezone: "Asia/Kolkata",
    days: "everyday"
  },

  // Google Maps — CONFIRM verified place link/ID with owner before publishing
  maps: {
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Meshwi+Food+Hub+Kanjirappally",
    embedUrl: "https://www.google.com/maps?q=Meshwi+Food+Hub+Kanjirappally&output=embed"
  },

  // CONFIRM WITH OWNER — ratings & review counts change; keep this the single source of truth
  reviews: {
    rating: 4.1,
    countLabel: "300+ Google Reviews",
    priceRange: "₹200–₹400 per person",
    googleReviewUrl: "https://www.google.com/maps/search/?api=1&query=Meshwi+Food+Hub+Kanjirappally"
  },

  ordering: {
    swiggyUrl: "https://www.swiggy.com/city/kottayam/meshwi-food-hub-kokkappally-kanjirapally-rest654832",
    // Zomato intentionally omitted — CONFIRM correct Kanjirappally branch listing with owner before adding
    whatsappOrderMessage: "Hello Meshwi Food Hub, I would like to place an order. Please share today's menu and availability."
  },

  reservation: {
    whatsappMessageTemplate: (data) =>
      `Hello Meshwi Food Hub, I'd like to reserve a table.%0A%0AName: ${data.name}%0AMobile: ${data.mobile}%0ADate: ${data.date}%0ATime: ${data.time}%0AGuests: ${data.guests}%0ASeating: ${data.seating || "No preference"}%0ASpecial request: ${data.request || "None"}`
  },

  seo: {
    title: "Meshwi Food Hub Kanjirappally | Mandi, Shawarma & Arabian Cuisine",
    description:
      "Experience authentic Mandi, Shawarma, Alfaham and Arabian grills at Meshwi Food Hub near Reliance Trends, Kanjirappally. View the menu, order online, get directions or reserve a table."
  }
};
