import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",          // важно для Cloudflare Pages
  plugins: [react()],
});
