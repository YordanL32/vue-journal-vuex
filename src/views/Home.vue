<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">  
    <h1>hola mundo</h1> 
    <button @click="getToDaybook" class="btn btn-primary">primary</button>
    <button @click="getToDaybook" class="btn btn-success">success</button>
    <button @click="getToDaybook" class="btn btn-secondary">secondary</button>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
methods:{
  getToDaybook(){
    this.$router.push({name:'no-entry'})
  }
}
}
</script>
