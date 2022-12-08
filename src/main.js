import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.scss";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Vue3Mq } from "vue3-mq";

library.add(faTwitter, faGithub, faCopyright);
createApp(App)
  .use(router)
  .use(Vue3Mq, {
    breakpoints: {
      xs: 0,
      sm: 625,
      md: 832,
      lg: 1704,
      // xl: 1705,
      // xxl: Infinity
    },
  })
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
