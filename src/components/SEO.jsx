import { Helmet } from 'react-helmet-async';

// ==========================================
// 1. GLOBAL CONFIGURATION
// ==========================================

const siteUrl = "https://focusexpo.com";
const siteName = "FOCUS Expo";
const contactEmail = "focussocialmedia0@gmail.com";

// ==========================================
// 2. EVENT DETAILS (Dynamic Data)
// ==========================================

const eventDateStart = "2026-04-04T08:00:00-05:00";
const eventDateEnd = "2026-04-04T17:00:00-05:00";
const eventLocationName = "Plano Event Center";
const eventStreet = "2000 E Spring Creek Pkwy";
const eventCity = "Plano";
const eventZip = "75074";
const eventRegion = "TX";

// ==========================================
// 3. SEO CONTENT DEFAULTS
// ==========================================

const defaultTitle = "FOCUS Expo | Faith. Opportunity. Career. Unity. Strength.";
const defaultDescription = "Join FOCUS Expo in Plano, TX on April 4, 2026. A transformative event for professionals blending career ambition with spiritual grounding, mental wellness, and networking.";
const defaultKeywords = "FOCUS Expo, Muslim professionals, career development, Islamic values, mental wellness, Plano events, Dallas networking";

// ==========================================
// 4. ASSETS (Images & Colors)
// ==========================================

const themeColor = "#1c3d42";
const ogImage = `${siteUrl}/assets/og-share-image.jpg`;
const logoUrl = `${siteUrl}/assets/Focus_Logo_Main_Color.png`;

// ==========================================
// 5. STRUCTURED DATA (JSON-LD)
// ==========================================

const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": `${siteUrl}/#event`,
    name: "FOCUS Expo 2026",
    description: defaultDescription,
    startDate: eventDateStart,
    endDate: eventDateEnd,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
        "@type": "Place",
        name: eventLocationName,
        address: {
            "@type": "PostalAddress",
            streetAddress: eventStreet,
            addressLocality: eventCity,
            postalCode: eventZip,
            addressRegion: eventRegion,
            addressCountry: "US"
        }
    },
    image: [ogImage],
    organizer: {
        "@type": "Organization",
        name: siteName,
        email: contactEmail,
        url: siteUrl
    },
    performer: [
        { "@type": "Person", name: "Adham Aljahmi" },
        { "@type": "Person", name: "Dr. Shahla Ali" },
        { "@type": "Person", name: "Madiha Ashraf" },
        { "@type": "Person", name: "Riaz Surti" },
        { "@type": "Person", name: "Shaikh Omar Hussain" },
        { "@type": "Person", name: "Zohaib Rattu" }
    ],
    offers: {
        "@type": "Offer",
        url: `${siteUrl}/#register`,
        availability: "https://schema.org/InStock",
        validFrom: "2025-01-01"
    }
};

const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    url: siteUrl,
    inLanguage: "en",
};

export default function SEO({ title, description, keywords, image, type = 'website' }) {
    const pageTitle = title ? `${title} | ${siteName}` : defaultTitle;
    const pageDescription = description || defaultDescription;
    const pageKeywords = keywords || defaultKeywords;
    const pageImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : ogImage;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            <meta name="keywords" content={pageKeywords} />
            <meta name="robots" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content={themeColor} />
            <html lang="en" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:url" content={window.location.href} />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:image" content={pageImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:locale" content="en_US" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={pageDescription} />
            <meta name="twitter:image" content={pageImage} />

            {/* Favicons & Manifest */}
            <link rel="canonical" href={window.location.href.split('?')[0]} />
            <link rel="icon" type="image/svg+xml" href="/assets/Focus_Logo_Wmark_Teal_Wide.svg" />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(type === 'website' ? [eventJsonLd, websiteJsonLd] : websiteJsonLd)}
            </script>
        </Helmet>
    );
}
