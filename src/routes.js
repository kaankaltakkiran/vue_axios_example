import { createWebHistory, createRouter } from "vue-router";

import ListBlogs from "./components/ListBlogs.vue";
import ListUsers from "./components/ListUsers.vue";

const router= createRouter({
  history: createWebHistory(),
  routes: [
      { path: "/", component: ListBlogs },
      { path: "/users", component: ListUsers },
  ]
});

export default router;

