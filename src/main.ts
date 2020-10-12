import { createApp } from "vue";
import Vue from 'vue'
import Component from 'vue-class-component'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import App from "./App.vue";
import router from "./router";
import "./styles/global.css";

createApp(App)
  .use(router)
  .mount("#app");
