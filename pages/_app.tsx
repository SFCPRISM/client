import App, { AppContext, AppProps } from "next/app";
import "../styles/globals.css";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import { ThemeVariableDefinitions } from "lib/theme/themeVariableDefinitions";
import { getTheme } from "lib/theme/getTheme";
import { load, trackPageview } from "fathom-client";
import { useRouter } from "next/router";
import absoluteUrl from "next-absolute-url";
import { LocalizationContext } from "lib/i18n/localizationContext";
import {
  getCountryCodeByHost,
  getLocaleByLocalizationId,
  getLocalizationIdByLocale,
} from "lib/i18n/useLocalizationId";
import { translations } from "lib/i18n/translations";
import { NextPage } from "next";
import { DefaultLayout } from "components/layout/Layout";
import ErrorBoundary from "components/errorBoundary/errorBoundary";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

interface ICustomAppProps {
  host: string;
}

const CustomApp = ({
  Component,
  pageProps,
  host,
}: AppPropsWithLayout & ICustomAppProps) => {
  const [queryClient] = useState(() => new QueryClient());
  const router = useRouter();
  const countryCode = getCountryCodeByHost(host);
  const localizationId = getLocalizationIdByLocale(
    `${router.locale}-${countryCode}`
  );
  // We use a more specific locale than next router is providing, by adding the countrycode
  const locale = getLocaleByLocalizationId(localizationId);

  useEffect(() => {
    if (host === "localhost:3000") {
      return;
    }
    const lichtensteinFathomId = "JCCCGIXV";
    const switzerlandFathomId = "FIYEIFQP";
    const chDomains = ["test.stellenwerk.ch", "www.stellenwerk.ch"];
    const liDomains = ["test.stellenwerk.li", "www.stellenwerk.li"];
    const isLichtenstein = countryCode === "li";

    // Initialize Fathom when the app loads
    // Example: yourdomain.com
    //  - Do not include https://
    //  - This must be an exact match of your domain.
    //  - If you're using www. for your domain, make sure you include that here.
    load(isLichtenstein ? lichtensteinFathomId : switzerlandFathomId, {
      includedDomains: isLichtenstein ? liDomains : chDomains,
    });

    function onRouteChangeComplete() {
      trackPageview();
    }
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, [host, countryCode]);

  const getLayout =
    Component.getLayout ||
    ((page) => <DefaultLayout host={host}>{page}</DefaultLayout>);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps?.dehydratedState}>
        <ThemeProvider theme={() => getTheme("light")}>
          <LocalizationContext.Provider
            value={{ localizationId, locale, translations }}
          >
            <ThemeVariableDefinitions />
            {getLayout(
              <ErrorBoundary resetKey={router.asPath}>
                <Component {...pageProps} />
              </ErrorBoundary>
            )}
          </LocalizationContext.Provider>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

CustomApp.getInitialProps = async (context: AppContext) => {
  const { host } = absoluteUrl(context.ctx.req);
  const appInitialProps = await App.getInitialProps(context);
  return { ...appInitialProps, host };
};

export default CustomApp;
