import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        // Root switcher shell + one entry per design.
        // Paths are resolved relative to the project root.
        main: "index.html",
        bold: "bold.html",
        clean: "clean.html",
        warm: "warm.html",
      },
    },
  },
});
