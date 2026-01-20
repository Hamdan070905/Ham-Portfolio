import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Final config for GitHub Pages:
// - Repo name: Ham-Portfolio
// - Public URL: https://hamdan070905.github.io/Ham-Portfolio
export default defineConfig({
  plugins: [react()],
  base: "/Ham-Portfolio/", // REQUIRED for GitHub Pages assets
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
