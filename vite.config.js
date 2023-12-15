import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3003,
    origin: "http://127.0.0.1:3003",
  },
  preview: {
    port: 5005,
    origin: "http://127.0.0.1:5005",
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
    sourcemap: true,
  },
});
