import { defineConfig } from "vite";
import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        // Root switcher shell + one entry per design.
        main: resolve(__dirname, "index.html"),
        bold: resolve(__dirname, "bold.html"),
        clean: resolve(__dirname, "clean.html"),
        warm: resolve(__dirname, "warm.html"),
      },
    },
  },
});
