import { createApp } from "vue";
import Vue from 'vue'
import Component from 'vue-class-component'
import App from "./App.vue";
import router from "./router";
import "./styles/global.css";

createApp(App)
  .use(router)
  .mount("#app");
