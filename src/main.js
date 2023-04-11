import { createApp } from "vue";
import { createPinia } from "pinia";
import VueHighlightJS from "vue3-highlightjs";
import "highlight.js/styles/github-dark-dimmed.css";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(VueHighlightJS);

app.mount("#app");
