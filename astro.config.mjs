import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://genka-camera.vercel.app",
  vite: {
    plugins: [tailwindcss()],
  },
});
