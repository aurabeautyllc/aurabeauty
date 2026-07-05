import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

// =============================================================================
// Vercel build config for Aura Beauty LLC
// -----------------------------------------------------------------------------
// This config intentionally excludes the Manus-only dev plugins
// (vite-plugin-manus-runtime, jsx-loc, debug collector, storage proxy) which
// are not needed — and would fail — in a standalone Vercel build.
//
// Output goes to `dist` (Vercel's conventional static output directory).
// Images are served from `client/public/manus-storage/*` as plain static files,
// so the existing `/manus-storage/...` paths in the code resolve correctly.
// =============================================================================

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
});
