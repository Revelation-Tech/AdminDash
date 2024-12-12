import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src/" },
      { find: "@config", replacement: "/src/config" },
      { find: "@hooks", replacement: "/src/hooks" },
      { find: "@components", replacement: "/src/components" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@utils", replacement: "/src/utils" },
      { find: "@store", replacement: "/src/store" },
      { find: "@data", replacement: "/src/data" },
    ],
  },
});
