import { addFontLinkHeaders } from "lib/fonts/fonts";
import { SEOIdentity } from "lib/seo/meta/identity";
import { SEOPlace } from "lib/seo/meta/place";
import { getSocialMetaTags } from "lib/seo/meta/social";
import { SEOWebSite } from "lib/seo/meta/webSite";
import { NoJavascriptSsrTag } from "lib/theme/noJs";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { Fragment } from "react";
import { ServerStyleSheet } from "styled-components";

class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    if (ctx.res) {
      addFontLinkHeaders(ctx.res);
    }

    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <Fragment key="1">
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Fragment>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }

  public renderFavicons(): React.ReactNode {
    return (
      <>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`/static/meta/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`/static/meta/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`/static/meta/android-chrome-96x96.png`}
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/png"
          href={`/static/meta/favicon-16x16.png`}
          sizes="16x16"
        />
        <link href={`/static/meta/site.webmanifest.json`} rel="manifest" />
        <link
          rel="mask-icon"
          href={`/static/meta/safari-pinned-tab.svg`}
          color="#333333"
        />
        <link
          href={`/static/meta/favicon.ico`}
          rel="shortcut icon"
          type="image/x-icon"
        />
        <meta name="msapplication-TileColor" content="#1F4776" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          content={`/static/meta/msconfig.xml`}
          name="msapplication-config"
          key="msapplication-config"
        />
      </>
    );
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="format-detection" content="telephone=no" />
          {this.renderFavicons()}
          {<SEOIdentity />}
          {<SEOPlace />}
          {<SEOWebSite />}
          {getSocialMetaTags()}
        </Head>
        <body>
          <Main />
          <NextScript />
          <NoJavascriptSsrTag />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
