import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import { setLocale } from "./i18n";
import { getLocaleFromPath } from "./seo/site";

export async function render(url: string) {
  const locale = getLocaleFromPath(url);
  await setLocale(locale);

  const appHtml = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  );

  return {
    appHtml,
    locale,
  };
}
