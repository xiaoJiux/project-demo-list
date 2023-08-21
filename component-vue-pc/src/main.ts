import { createApp } from "vue";
import { createPinia } from "pinia";
import "../mock/index.js";
import App from "./App.vue";
import router from "./router";
import "amfe-flexible";
import "tailwindcss/tailwind.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");