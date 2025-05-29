import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: "ayush-gupta-hw",
      project: "javascript-react"
    })
  ],
  base: './',  // fix asset loading on Vercel
  build: {
    sourcemap: true
  }
});
