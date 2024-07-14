import { createApp } from "vue";
import "@unocss/reset/normalize.css";
import App from "./App.vue";
import "virtual:uno.css";

const app = createApp(App);

app.mount("#app");
