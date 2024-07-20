/* eslint-disable no-console */
import { onMessage } from "webext-bridge/content-script";
import { createApp } from "vue";
import App from "./views/App.vue";
import { setupApp } from "~/logic/common-setup";

// Firefox `browser.tabs.executeScript()` requires scripts return a primitive value
(() => {
  const head = document.querySelector("head") || document.querySelector("body");
  const script = document.createElement("script");
  script.setAttribute("async", "true");
  script.setAttribute(
    "src",
    browser.runtime.getURL("dist/scripts/init-wallet.js")
  );
  // script.textContent = browser.runtime.getURL("./initWallet");
  head?.append(script);

  // communication example: send previous tab title from background page
  onMessage("tab-prev", ({ data }) => {
    console.log(`[vitesse-webext] Navigate from page "${data.title}"`);
  });

  // mount component to context window
  const container = document.createElement("div");
  container.id = __NAME__;
  const root = document.createElement("div");
  const styleEl = document.createElement("link");
  const shadowDOM =
    container.attachShadow?.({ mode: __DEV__ ? "open" : "closed" }) ||
    container;
  styleEl.setAttribute("rel", "stylesheet");
  styleEl.setAttribute(
    "href",
    browser.runtime.getURL("dist/contentScripts/style.css")
  );
  shadowDOM.appendChild(styleEl);
  shadowDOM.appendChild(root);
  document.body.appendChild(container);
  const app = createApp(App);
  setupApp(app);
  app.mount(root);
})();
