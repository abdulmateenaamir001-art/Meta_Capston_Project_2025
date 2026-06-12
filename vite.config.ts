import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Uncomment the line below for GitHub Pages deployment
  // base: "https://leonardojacomussi.github.io/little-lemon"
  
  // For Vercel deployment, use root path (default behavior)
  base: "/",
});
