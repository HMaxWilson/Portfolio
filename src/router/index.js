import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: () => import("../views/HomeView.vue"), name: "Home" },
    { path: "/projects", component: () => import("../views/ProjectsView.vue"), name: "Projects" },
    { path: "/projects/:category/", component: () => import("../views/CategoryView.vue"), name: "Category" },
    { path: "/projects/:category/:id", component: () => import("../views/ProjectView.vue"), name: "Project" },
  ],
});

export default router;
