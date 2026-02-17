<script setup lang="ts">
import { useHead } from "@vueuse/head";

// ==========================================
// 1. GLOBAL CONFIGURATION
// ==========================================

// The exact URL where the site will live. NO trailing slash.
// REQUIRED: If this changes (e.g., to .org), update it here.
const siteUrl = "https://focusexpo.com"; 

// The name displayed in search results and browser tabs.
const siteName = "FOCUS Expo";

// The primary contact for the event organizers.
const contactEmail = "focussocialmedia0@gmail.com";

// ==========================================
// 2. EVENT DETAILS (Dynamic Data)
// ==========================================

// Start Date: Format is YYYY-MM-DDTHH:mm:ss-Timezone
// Currently set to: April 4, 2026, at 8:00 AM Central Standard Time
const eventDateStart = "2026-04-04T08:00:00-05:00"; 

// End Date: Estimated end time (5:00 PM CST).
const eventDateEnd = "2026-04-04T17:00:00-05:00";

// Venue Details: These are critical for Google Maps and "Events near me" searches.
const eventLocationName = "Plano Event Center";
const eventStreet = "2000 E Spring Creek Pkwy";
const eventCity = "Plano";
const eventZip = "75074";
const eventRegion = "TX"; // State abbreviation

// ==========================================
// 3. SEO CONTENT DEFAULTS
// ==========================================

// The "Blue Link" text in Google. Keep it under 60 characters if possible.
const defaultTitle = "Focus Expo 2026 | Faith. Opportunity. Career. Unity. Strength.";

// The grey text under the link in Google. Keep under 160 characters.
// NOTICE: We included the date and city here to increase clicks from locals.
const defaultDescription =
  "Join Focus Expo 2026 in Plano, TX on April 4, 2026. A transformative event for Muslim professionals blending career ambition with spiritual grounding, mental wellness, and networking. Discover expert-led workshops, industry leaders, and a community dedicated to growth.";

// Keywords: Comma-separated list. Less important for Google now, but good for other engines.
const defaultKeywords =
  "Focus Expo, Focus Expo 2026, Get Focused 2026, Focus Conference, Muslim Professional Network, Islamic Career Development, Muslim Mental Wellness, Plano Muslim Events, Dallas Muslim Networking, Faith and Career, Muslim Leadership Conference, Islamic Business Expo, Halal Professional Events, Muslim Entrepreneurs, Spiritual Growth, Career Ambition, Unity and Strength, Muslim Youth Professionals, DFW Muslim Events";

// ==========================================
// 4. ASSETS (Images & Colors)
// ==========================================

// Browser toolbar color on mobile devices (matches your teal branding).
const themeColor = "#1c3d42"; 

// SOCIAL SHARE IMAGE (Open Graph).
// CRITICAL: This MUST be a JPG or PNG. 
// Do not use SVG here; LinkedIn/Facebook will show a blank box if you do.
// ACTION REQUIRED: You need to create this file and put it in /public/assets/
const ogImage = `${siteUrl}/assets/og-share-image.jpg`; 

// Logo for Google's Knowledge Graph. SVGs are okay here.
const logoUrl = `${siteUrl}/assets/Focus_Logo_Main_Color.png`; 

// ==========================================
// 5. STRUCTURED DATA (The "Code" for Google Bots)
// ==========================================

// This specific block tells Google this is an EVENT, not just a blog post.
const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  "@id": `${siteUrl}/#event`, // Unique ID for the event
  name: "FOCUS Expo 2026", // Specific name including year
  description: defaultDescription,
  startDate: eventDateStart,
  endDate: eventDateEnd,
  eventStatus: "https://schema.org/EventScheduled", // Status: Scheduled, Cancelled, or Moved
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode", // In-person event
  location: {
    "@type": "Place",
    name: "Plano Event Center", // "Plano Event Center"
    address: {
      "@type": "PostalAddress",
      streetAddress: "2000 E Spring Creek Pkwy",
      addressLocality: "Plano",
      postalCode: "75074",
      addressRegion: "TX",
      addressCountry: "US"
    }
  },
  image: [ogImage], // Google uses this image for the event card
  organizer: {
    "@type": "Organization",
    name: siteName,
    email: contactEmail,
    url: siteUrl
  },
  // List of speakers. Helps rank for people searching for these specific names.
  performer: [
    { "@type": "Person", name: "Adham Aljahmi" },
    { "@type": "Person", name: "Dr. Shahla Ali" },
    { "@type": "Person", name: "Madiha Ashraf" },
    { "@type": "Person", name: "Riaz Surti" },
    { "@type": "Person", name: "Shaikh Omar Hussain" },
    { "@type": "Person", name: "Zohaib Rattu" }
  ],
  offers: {
    "@type": "Offer", // Ticket information
    url: `${siteUrl}/#register`, 
    availability: "https://schema.org/InStock",
    validFrom: "2025-01-01" 
  }
};

// This block tells Google about the WEBSITE itself.
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteName,
  url: siteUrl,
  inLanguage: "en",
};

// ==========================================
// 6. HEAD TAG INJECTION (VueUse)
// ==========================================
useHead({
  // Sets <title> tag
  title: defaultTitle, 
  // Sets <html lang="en">
  htmlAttrs: { lang: "en" }, 
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "theme-color", content: themeColor },

    // Standard SEO tags
    { name: "description", content: defaultDescription },
    { name: "keywords", content: defaultKeywords },

    // Robots: "index" = show in Google. "follow" = follow links on the page.
    { name: "robots", content: "index,follow" },
    
    // --- OPEN GRAPH (Facebook, LinkedIn, Discord previews) ---
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: siteName },
    { property: "og:url", content: siteUrl },
    { property: "og:title", content: defaultTitle },
    { property: "og:description", content: defaultDescription },
    { property: "og:locale", content: "en_US" },
    
    // The Image Preview
    { property: "og:image", content: ogImage },
    { property: "og:image:width", content: "1200" }, // Helps platforms render faster
    { property: "og:image:height", content: "630" }, 

    // --- TWITTER CARD (X) ---
    { name: "twitter:card", content: "summary_large_image" }, // Large image card style
    { name: "twitter:title", content: defaultTitle },
    { name: "twitter:description", content: defaultDescription },
    { name: "twitter:image", content: ogImage },
  ],
  link: [
    // Canonical: Prevents "duplicate content" issues if url has parameters
    { rel: "canonical", href: siteUrl },
    // Browser Tab Icon (Favicon)
    { rel: "icon", type: "image/svg+xml", href: "/assets/Focus_Logo_Wmark_Teal_Wide.svg" },
  ],
  // Injects the JSON-LD blocks we created above into the <head>
  script: [
    {
      type: "application/ld+json",
      id: "jsonld-structured-data",
      children: JSON.stringify([eventJsonLd, websiteJsonLd]),
    },
  ],
});
</script>