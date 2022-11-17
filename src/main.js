import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";


// import "./assets/main.css";

NProgress.configure({ color: '#3B3486' });

const app = createApp(App);

app.use(router);

app.mount("#app");
