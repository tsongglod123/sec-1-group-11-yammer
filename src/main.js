import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers";
import "./index.css";

const app = createApp(App);

app.use(router);
app.mount("#app");
