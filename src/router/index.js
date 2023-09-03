import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/Home.vue"; // Import your components
import ProductsPage from "../views/Products.vue"; // Import your components

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/products",
    component: ProductsPage,
  },
  // Add more routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
