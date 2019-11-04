<template>
  <div class="items">
    <p class="items_lines"><span>Veja como será apresentado ao cliente</span></p>
    <div v-if="foods" class="items_card">
      <div v-for="(food, index) in foods" v-bind:key="index" class="items_card_wrapper">
        <div class="items_card_block">
          <div class="items_card_header">
            <p>"{{food.title}}"</p>
            <p class="items_card_header--money">R${{food.value}}</p>
          </div>
          <div class="items_card_body">
            <p><span>Sabor:</span> {{food.flavor}}</p>
            <p><span>Descrição:</span> {{food.description}}</p>
          </div>
        </div>
        <img :src="food.image" alt="foto de alimento">
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'itemsList',
    computed: mapState({
        foods: state => state.food
      })
  }
</script>

<style scoped>
.items {
  position: relative;
  width: 100%;
}
.items_lines {
  position: relative;
  line-height: 0.5;
  text-align: center;
  color: #A03400;
  font-weight: bold;
  font-style: italic;
  font-size: 29px;
}
.items_lines span {
  display: inline-block;
  position: relative;
}
.items_lines span::before, .items_lines span::after {
  content: "";
  position: absolute;
  height: 5px;
  border-bottom: 1px solid #E43636;
  top: 0;
  width:calc(100vw/3 - 1.8rem);
}
.items_lines span::before {
  right: 100%;
  margin-right: 5rem;
}
.items_lines span::after {
  left: 100%;
  margin-left: 5rem;
}

</style>