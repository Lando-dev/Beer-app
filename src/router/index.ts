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
      import(/* webpackChunkName: "about" */ "../views/Categories.vue")
  },
  {
    path: "/random",
    name: "Random",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Random.vue")
  },
  {
    path: "/prod-details",
    name: "ProdDetails",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProdDetails.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // scrollBehavior (to, from, savedPosition) {
  //   return { x: 0, y: 0 }
  // }
});

export default router;
