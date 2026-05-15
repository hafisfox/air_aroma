import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { setLocale } from "./i18n";
import { getLocaleFromPath } from "./seo/site";

async function start() {
  const locale = getLocaleFromPath(window.location.pathname);
  await setLocale(locale);

  hydrateRoot(
    document.getElementById("root")!,
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
  );
}

void start();
