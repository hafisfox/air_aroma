import { useLocation } from "react-router-dom";
import {
  type Locale,
  getLocaleFromPath,
  stripLocalePrefix,
  switchLocalePath,
  withLocale,
} from "../seo/site";

export function useLocaleRouting() {
  const location = useLocation();
  const locale = getLocaleFromPath(location.pathname);
  const basePath = stripLocalePrefix(location.pathname);

  return {
    locale,
    isArabic: locale === "ar",
    basePath,
    toLocalePath: (pathname: string) => withLocale(pathname, locale),
    switchPathToLocale: (targetLocale: Locale) =>
      switchLocalePath(location.pathname, targetLocale),
  };
}
