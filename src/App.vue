<template>
  <div id="app">


    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.paginate-links.gifs {
  margin: 30px auto !important;

}

.paginate-links.gifs a {
   cursor: pointer;
   padding: 10px;
   border: 1px solid #ccc;
 }

.paginate-links.gifs li.active a {
  background-color: rgba(74, 118, 255, 0.3);
}
</style>
