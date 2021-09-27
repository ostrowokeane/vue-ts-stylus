import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import i18n from "./i18n";

import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
import Button from "primevue/button";

import "normalize.css/normalize.css";
import "./assets/styles/main.styl";
// import 'primevue/resources/primevue.min.css';
// import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(PrimeVue);
app.use(router);
app.use(i18n);

app.component("InputText", InputText);
app.component("Button", Button);

app.mount("#app");
