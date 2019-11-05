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
  min-height: 830px;
  width: 100%;
  background:linear-gradient(to right, transparent, #FFFFFF, transparent);
  overflow: hidden;
}
.container {
  display: flex;
  background-image: url('../assets/wave.svg');
  background-repeat: no-repeat;
  background-size: cover;
  flex-direction: column;
  align-items: center;
  width: calc(100% + 2px);
  height: 541px;
  margin-left: -1px;
  margin-right: -1px;
}
.container_pasteis {
  width: 392.53px;
  height: 316.47px;
  justify-self:last baseline;
}
  
.container_logo {
  position: relative;
  margin-top: 3rem;
  margin-bottom: 1rem;
  width: 736px;
  height: 263px;
  right: 38px;
}

img {
  width: 694px;
  height: auto;
}
</style>
