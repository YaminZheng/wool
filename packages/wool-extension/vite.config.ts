import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import VueMacros from "unplugin-vue-macros/vite";
import SvgLoader from "vite-svg-loader";
import Icons from "unplugin-icons/vite";
import { FileSystemIconLoader } from "unplugin-icons/loaders";
import IconsResolver from "unplugin-icons/resolver";
import AuthComponents from "unplugin-vue-components/vite";
import AuthImports from "unplugin-auto-import/vite";
import UnoCSS from "unocss/vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  base: "/",
  resolve: {
    alias: {
      "~": "/src",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "~/assets/styles/global.scss" as *;',
      },
    },
  },
  plugins: [
    vueJsx(),
    SvgLoader(),
    nodePolyfills({
      globals: { Buffer: true, process: true, global: true },
    }),
    UnoCSS(),
    VueMacros({
      plugins: {
        vue: Vue(),
      },
    }),
    AuthImports({
      imports: ["vue", "vue-router"],
      dirs: ["src/hooks"],
    }),
    AuthComponents({
      directoryAsNamespace: true,
      resolvers: [
        IconsResolver({
          prefix: false,
          customCollections: ["icons"],
        }),
      ],
    }),
    Icons({
      scale: 1,
      customCollections: {
        icons: FileSystemIconLoader("./src/assets/icons"),
      },
    }),
  ],
});
