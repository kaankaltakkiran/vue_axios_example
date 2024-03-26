<template>
    <div class="container">
    <div class="row justify-content-center mt-4">
   <div class="col-6">
  <h1 class="alert alert-primary  text-center">List Users</h1>
  <input type="text" v-model="keyword" placeholder="Search user" />
  <p v-if="loading">Loading...</p>
<div class="alert alert-danger " v-else-if="errored">An error occurred</div>
</div>

  <table class="table table-striped">
  <thead>
    <tr>
      <th>id</th>
      <th>name</th>
      <th>email</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in filtredUsers" :key="user.id">
      <td>{{user.id}}</td>
      <td><router-link v-bind:to="'/user/'+user.id">{{user.name}}</router-link></td>
      <td>{{user.email}}</td>
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
      users: [],
      keyword: '',
      loading: true,
      errored: false, 
      
    }
  },
  computed:{
    filtredUsers(){
      /*  tüm userları bul ve bu keyword ile filtrele */
      return this.users.filter(user=>{
        return user.name.toLowerCase().includes(this.keyword.toLowerCase());
      })
     }
  },
  created(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
      console.log(response);
      this.users=response.data;
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