import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("../views/ProjectsView.vue"),
    },
    {
      path: "/projects/:category/",
      name: "category",
      component: () => import("../views/CategoryView.vue"),
    },
    {
      path: "/projects/:category/:id",
      name: "project",
      component: () => import("../views/ProjectView.vue"),
    },
  ],
});

export default router;
