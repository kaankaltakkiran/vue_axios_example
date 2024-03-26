<template>
  <app-header></app-header>
 <router-view></router-view>
</template>

<script>
/* Component import */
import ListBlogs from './components/ListBlogs.vue'
import Header from './components/Header.vue'
import ListUsers from './components/ListUsers.vue'
import SingleUser from './components/SingleUser.vue'
import SingleBlog from "./components/SingleBlog.vue";

export default{
  components:{
    "list-blogs":ListBlogs,
    "app-header":Header,
    "list-users":ListUsers,
    "single-user":SingleUser,
    "single-blog":SingleBlog
  }
}
</script>


<style scoped>

</style>
