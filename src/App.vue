<template>
  <app-header></app-header>
 <router-view></router-view>
</template>

<script>
import ListBlogs from './components/ListBlogs.vue'
import Header from './components/Header.vue'
import ListUsers from './components/ListUsers.vue'
import SingleUser from './components/SingleUser.vue'

export default{
  components:{
    "list-blogs":ListBlogs,
    "app-header":Header,
    "list-users":ListUsers,
    "single-user":SingleUser
  }
}
</script>


<style scoped>

</style>
