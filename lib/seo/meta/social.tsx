const DefaultTitle = "Stellenwerk - Nahe dran. Lösungsverliebt. Authentisch.";
const DefaultDescription =
  "Wir unterstützen Sie auf der Suche nach Ihrem neuen Job. Auch rekrutieren und verleihen wir qualifizierte Fach- und Führungskräfte.";
/** Facebook Open Graph */
export const getSocialMetaTags = (
  title = DefaultTitle,
  description = DefaultDescription
) => {
  return (
    <>
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="de_DE" />
      <meta property="og:url" content="https://www.stellenwerk.ch" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://www.stellenwerk.ch/static/images/seo/stellenwerk_og.jpg"
      />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Stellenwerk" />
      <meta
        property="og:see_also"
        content="https://www.facebook.com/Stellenwerk"
      />
      <meta
        property="og:see_also"
        content="https://www.linkedin.com/company/stellenwerk-ag"
      />
    </>
  );
};
