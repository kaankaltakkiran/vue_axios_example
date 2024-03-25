<template>
  <div class="container">
    <div class="row justify-content-center mt-4">
   <div class="col-6">
  <h1 class="alert alert-primary  text-center">List Blogs</h1>
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
    <tr v-for="blog in blogs" :key="blog.id">
      <td>{{blog.id}}</td>
      <td>{{blog.title}}</td>
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
      blogs:[]
    }
  },
  created(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
      console.log(response);
      this.blogs=response.data;
      console.log(this.blogs);
    })
    .catch(error=>{
      console.log(error);
    })
    .finally(()=>{
      console.log('Request completed');
    })
  }
}
</script>

<style scoped>
</style>
