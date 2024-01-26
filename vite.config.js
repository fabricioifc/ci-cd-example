import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  test: {
    globals: true,
    testMatch: ["**/__tests__/**/*.spec.js"],
    environment: "jsdom",
  },
  base: process.env.NODE_ENV === "production" ? "/ci-cd-example/" : "/",
})
