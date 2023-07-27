import { ServerResponse } from "http";

const fonts = [
  "/static/fonts/sofia-regular-pro.woff2",
  "/static/fonts/sofia-semi-bold-pro.woff2",
];

export const addFontLinkHeaders = (res: ServerResponse) => {
  const fontHeaders = fonts.map(getFontHeader);
  res.setHeader("link", fontHeaders);
};

const getFontHeader = (fontUrl: string) => {
  return `<${fontUrl}>; rel="preload"; as="font"; crossorigin; type="font/woff2"`;
};
