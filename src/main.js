import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import pinia from "./store";

createApp(App)
  .use(pinia) // Use the router
  .mount("#app");
