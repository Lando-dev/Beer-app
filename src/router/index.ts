import { Options } from 'vue-class-component';
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/categories",
    name: "Categories",
    component: () =>
      import("../views/Categories.vue")
  },
  {
    path: "/random",
    name: "Random",
    component: () =>
      import("../views/Random.vue")
  },
  {
    path: "/prod-details/:id",
    name: "ProdDetails",
    component: () =>
      import("../views/ProdDetails.vue")
  },
  {
    path: "/category/:category",
    name: "ProdItem",
    component: () =>
      import("../components/ProdItem.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router ;
