<template>
  <div class="gradient">
    <section class='container'>
        <div class='container_logo'><img :src="logo"  /></div>
        <add-item />
    </section>
  </div>
</template>

<script>
import logo from '../assets/Logo.svg';
import pasteis from '../assets/pasteis-img.png';
import AddItem from './AddItem.vue'
export default {
  name: 'home',
  components: {
    AddItem
  },
  data() {
    return {
      logo,
      pasteis
    }
  }
}
</script>

<style scoped>
.gradient{
  position: relative;
  min-height: 85vh;
  width: 100vw;
  content: "";
  background:linear-gradient(to right, transparent, #FFFFFF, transparent);
}
.container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 60vh;
  background-image: url('../assets/wave.svg');
  background-repeat: no-repeat;
  background-size: cover;
}
.container_pasteis {
  width: 392.53px;
  height: 316.47px;
  justify-self:last baseline;
}
/* .container::before{
  position: absolute;
  width: 100%;
  height: 50vh;
  
  content: "";
  z-index: -1;
} */

.container_logo {
  padding: 4rem;
}
</style>
