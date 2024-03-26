<template>
  <div class="container">
    <div class="row justify-content-center mt-4">
   <div class="col-6">
  <h1 class="alert alert-primary  text-center">List Blogs</h1>
  <input type="text" v-model="keyword" placeholder="Search Blog" />
  <p v-if="loading">Loading...</p>
<div class="alert alert-danger " v-else-if="errored">An error occurred</div>
</div>

  <table class="table table-striped">
  <thead>
    <tr>
      <th>id</th>
      <th>title</th>
      <th>content</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="blog in filtredBlogs" :key="blog.id">
      <td>{{blog.id}}</td>
      <td><router-link v-bind:to="'/blog/'+blog.id">{{blog.title}}</router-link></td>
      <td>{{blog.body}}</td>
    </tr>
  </tbody>
</table>
</div>
  </div>
</template>

<script>
import axios from 'axios'
export default{

  data(){
    return{
      blogs:[],
      keyword: '',
      loading: true,
      errored: false 
    }
  },
  computed:{
    filtredBlogs(){
      /*  tüm blogları bul ve bu keyword ile filtrele */
      return this.blogs.filter(blog=>{
        return blog.title.toLowerCase().includes(this.keyword.toLowerCase());
      })
     }
  },
  created(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
      console.log(response);
      this.blogs=response.data;
    })
    .catch(error=>{
      console.log(error);
      this.errored = true;
    })
    .finally(()=>{
      console.log('Request completed');
      this.loading = false;
    })
  }
}
</script>

<style scoped>
</style>
