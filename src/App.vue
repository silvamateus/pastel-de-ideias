<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './components/Home.vue';

export default {
  name: 'app',
  components: {
    Home,
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
  z-index: -2;
}
</style>
