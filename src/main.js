import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./main.scss";
import YmapPlugin from "vue-yandex-maps";

createApp(App)
  .use(router)
  .use(YmapPlugin, {
    apiKey: "",
    lang: "ru_RU",
    coordorder: "latlong",
    version: "2.1",
  })
  .mount("#app");
