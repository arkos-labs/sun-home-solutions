import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const prerender = require("vite-plugin-prerender");

const regions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "src/data/geo/regions.json"), "utf-8")
);
const departements = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "src/data/geo/departements.json"), "utf-8")
);

const routes = [
  "/",
  "/france",
  "/zones",
  "/panneaux-solaires",
  "/autoconsommation",
  "/aides-subventions",
  "/comment-ca-marche",
  "/realisations",
  "/faq",
  "/mentions-legales",
  "/politique-confidentialite",
  "/contact",
  ...regions.map((r: any) => `/regions/${r.slug}`),
  ...departements.map((d: any) => `/departements/${d.slug}`),
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" && !process.env.VERCEL && prerender({
      staticDir: path.resolve(__dirname, "dist"),
      routes,
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
