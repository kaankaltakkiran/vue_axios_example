//!Router import
import { createWebHistory, createRouter } from "vue-router";
//!Component import
import ListBlogs from "./components/ListBlogs.vue";
import ListUsers from "./components/ListUsers.vue";
import SingleUser from './components/SingleUser.vue';
import SingleBlog from "./components/SingleBlog.vue";

//!Router tanımlama
const router= createRouter({
  history: createWebHistory(),
  routes: [
      { path: "/", component: ListBlogs },
      { path: "/users", component: ListUsers },
      { path: "/user/:id", component: SingleUser },
      { path: "/blog/:id", component: SingleBlog }
  ]
});
//!Router export
export default router;

