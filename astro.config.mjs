import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://kaitori-camera-lp.vercel.app",
  vite: {
    plugins: [tailwindcss()],
  },
});
