<template>
  <div id="app">
    <Home/>
    <items-list/>
  </div>
</template>

<script>
import Home from './components/Home.vue';
import ItemsList from './components/ItemsList'

export default {
  name: 'app',
  components: {
    Home,
    ItemsList
  }
}
</script>

<style lang="css">
/*NPM*/
@import "../node_modules/normalize.css/normalize.css";

/*PROJECT*/

#app {
  background-image: url('./assets/pattern.png');
  background-repeat: repeat;
  min-height: 100vh;
}

</style>
