import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Actions supplies the actual GitHub Pages base path; portable local builds use relative assets.
export default defineConfig({
  plugins: [react()],
  base: process.env.PAGES_BASE_PATH
    ? `${process.env.PAGES_BASE_PATH.replace(/\/$/, "")}/`
    : "./",
});
