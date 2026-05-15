import { renderToString } from "react-dom/server";
import { MotionConfig } from "motion/react";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import { setLocale } from "./i18n";
import { getLocaleFromPath } from "./seo/site";

export async function render(url: string) {
  const locale = getLocaleFromPath(url);
  await setLocale(locale);

  const appHtml = renderToString(
    <MotionConfig reducedMotion="user">
      <StaticRouter
        location={url}
        future={{
          v7_relativeSplatPath: true,
            v7_startTransition: true,
        }}
      >
        <App />
      </StaticRouter>
    </MotionConfig>,
  );

  return {
    appHtml,
    locale,
  };
}
