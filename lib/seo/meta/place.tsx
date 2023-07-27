/** @returns application/ld+json */
export const SEOPlace = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Place",
          name: "Stellenwerk AG",
          alternateName: "Nahe dran. Lösungsverliebt. Authentisch.",
          description:
            "Stellenwerk steht seit mehr als 15 Jahren für massgeschneiderte Lösungen in der Personaldienstleistung. Nahe dran. Lösungsverliebt. Authentisch. An unseren Standorten in Zürich, Chur und Schaan werden Sie von qualifizierten Berater:innen betreut. Wir rekrutieren und verleihen qualifizierte Fach- und Führungskräfte auf Mandats- und Erfolgsbasis für die gesamte Deutschschweiz. Zusätzlich bieten wir als Outsourcing-Partner (BPO) weitere HR-Dienstleistungen wie z.B. Outplacement, Direktansprachen und Saläradministration an.",
          telephone: "+41 44 365 77 44",
          url: "https://www.stellenwerk.ch",
          sameAs: [
            "https://www.facebook.com/Stellenwerk",
            "https://www.linkedin.com/company/stellenwerk-ag",
          ],
          geo: {
            "@type": "GeoCoordinates",
            latitude: "47.3803632",
            longitude: "8.542519",
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "Stampfenbachstrasse 48",
            addressLocality: "Zürich",
            postalCode: "8006",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              closes: "17:45:00",
              dayOfWeek: ["Monday"],
              opens: "08:00:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              closes: "17:45:00",
              dayOfWeek: ["Tuesday"],
              opens: "08:00:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              closes: "17:45:00",
              dayOfWeek: ["Wednesday"],
              opens: "08:00:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              closes: "17:45:00",
              dayOfWeek: ["Thursday"],
              opens: "08:00:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              closes: "17:15:00",
              dayOfWeek: ["Friday"],
              opens: "08:00:00",
            },
          ],
        }),
      }}
    />
  );
};
