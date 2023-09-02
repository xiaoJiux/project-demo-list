import { createApp } from "vue";
import { createPinia } from "pinia";
import "../mock/index.js";
import App from "./App.vue";
import router from "./router";
import "tailwindcss/tailwind.css";
import "vant/lib/index.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
