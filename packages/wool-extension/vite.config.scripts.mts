import { defineConfig } from "vite";
import { sharedConfig } from "./vite.config.mjs";
import { isDev, r } from "./scripts/utils";

// bundling the content script using Vite
export default defineConfig({
  ...sharedConfig,
  build: {
    watch: isDev ? {} : undefined,
    outDir: r("extension/dist/scripts"),
    cssCodeSplit: false,
    emptyOutDir: false,
    sourcemap: isDev ? "inline" : false,
    chunkSizeWarningLimit: 2048,
    rollupOptions: {
      input: {
        initWallet: r("src/scripts/init-wallet.ts"),
      },
      output: {
        entryFileNames: "init-wallet.js",
        format: "iife",
        extend: true,
      },
    },
  },
});
