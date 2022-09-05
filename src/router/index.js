import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CatalogView from "../views/CatalogView.vue";
import SelectionView from "../views/SelectionView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/catalog",
    name: "catalog",
    component: CatalogView,
  },
  {
    path: "/selection",
    name: "selection",
    component: SelectionView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
