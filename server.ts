import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import express from "express";
import { createServer as createViteServer } from "vite";
import {
  getRouteKeyForBasePath,
  isKnownBasePath,
} from "./src/seo/routes";
import { renderHeadHtml } from "./src/seo/renderHead";
import {
  type Locale,
  getLocaleFromPath,
  stripLocalePrefix,
} from "./src/seo/site";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === "production";

async function createServer() {
  const app = express();

  let vite: Awaited<ReturnType<typeof createViteServer>> | undefined;

  if (!isProduction) {
    vite = await createViteServer({
      appType: "custom",
      server: { middlewareMode: true },
    });
    app.use(vite.middlewares);
  } else {
    app.use(
      "/assets",
      express.static(path.resolve(__dirname, "dist/client/assets"), {
        immutable: true,
        maxAge: "1y",
      }),
    );
    app.use(
      express.static(path.resolve(__dirname, "dist/client"), {
        index: false,
      }),
    );
  }

  app.use((_, response, next) => {
    response.setHeader("X-Content-Type-Options", "nosniff");
    response.setHeader("X-Frame-Options", "SAMEORIGIN");
    response.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");

    if (isProduction) {
      response.setHeader(
        "Strict-Transport-Security",
        "max-age=31536000; includeSubDomains",
      );
    }

    next();
  });

  app.use("*all", async (request, response, next) => {
    try {
      const url = request.originalUrl;
      const locale = getLocaleFromPath(url);
      const normalizedPath = stripLocalePrefix(new URL(url, "http://localhost").pathname);
      const statusCode = isKnownBasePath(normalizedPath) ? 200 : 404;
      const routeKey = getRouteKeyForBasePath(normalizedPath);

      const templatePath = isProduction
        ? path.resolve(__dirname, "dist/client/index.html")
        : path.resolve(__dirname, "index.html");

      let template = await fs.readFile(templatePath, "utf8");
      let render: (url: string) => Promise<{
        appHtml: string;
        helmet: {
          title: { toString: () => string };
          meta: { toString: () => string };
          link: { toString: () => string };
          script: { toString: () => string };
        };
        locale: Locale;
      }>;

      if (!isProduction && vite) {
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule("/src/entry-server.tsx")).render;
      } else {
        render = (
          await import(pathToFileURL(path.resolve(__dirname, "dist/server/entry-server.js")).href)
        ).render;
      }

      const { appHtml } = await render(url);
      const headHtml = renderHeadHtml(routeKey, locale);

      const html = template
        .replace("%LANG%", locale)
        .replace("%DIR%", locale === "ar" ? "rtl" : "ltr")
        .replace("<!--app-head-->", headHtml)
        .replace("<!--ssr-outlet-->", appHtml);

      response.status(statusCode).set({ "Content-Type": "text/html" }).end(html);
    } catch (error) {
      vite?.ssrFixStacktrace(error as Error);
      next(error);
    }
  });

  const port = Number(process.env.PORT) || 3000;
  app.listen(port, "0.0.0.0", () => {
    console.log(`SSR server listening on http://0.0.0.0:${port}`);
  });
}

void createServer();
