import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./views/HomePage.vue";
import AuthPage from "./views/account/AuthPage.vue";

const routes = [
  { path: "/", name: "/", component: HomePage },
  { path: "/index", name: "Index", component: HomePage },
  { path: "/home", name: "Home", component: HomePage },
  { path: "/account/auth", name: "Login", component: AuthPage },
  // { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
