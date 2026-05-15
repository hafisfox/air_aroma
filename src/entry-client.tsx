import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { setLocale } from "./i18n";
import { getLocaleFromPath } from "./seo/site";

async function start() {
  const locale = getLocaleFromPath(window.location.pathname);
  await setLocale(locale);

  const rootElement = document.getElementById("root")!;
  const app = (
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );

  const hasServerRenderedMarkup =
    rootElement.childElementCount > 0 ||
    (rootElement.textContent?.trim().length ?? 0) > 0;

  if (hasServerRenderedMarkup) {
    hydrateRoot(rootElement, app);
    return;
  }

  createRoot(rootElement).render(app);
}

void start();
