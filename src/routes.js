import { createWebHistory, createRouter } from "vue-router";

import ListBlogs from "./components/ListBlogs.vue";
import ListUsers from "./components/ListUsers.vue";
import SingleUser from './components/SingleUser.vue';
import SingleBlog from "./components/SingleBlog.vue";

const router= createRouter({
  history: createWebHistory(),
  routes: [
      { path: "/", component: ListBlogs },
      { path: "/users", component: ListUsers },
      { path: "/users/:id", component: SingleUser },
      { path: "/blog/:id", component: SingleBlog }
  ]
});

export default router;

