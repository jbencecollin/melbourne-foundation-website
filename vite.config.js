import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" makes built asset paths relative, so the site works both on a
// normal host and when opened straight from the file system (file://).
export default defineConfig({
  base: "./",
  plugins: [react()],
});
