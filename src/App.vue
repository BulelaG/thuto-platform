<template>
  <div id="app">
    <div id="nav">
      <Navigation/>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
export default {
  components:{
    Navigation
  }
  
}
</script>

<style>
html{
   background:rgb(230, 230, 230);
 
}

#app {
  background:rgb(230, 230, 230);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}

#nav {
  padding: 30px;
}

#nav .router-link {
  font-weight: bold;
  color: #2c3e50;
}

#nav .router-link-exact-active {
  color: #42b983;
}
#mylinks{
      cursor: pointer;
}
</style>
