<template>
  <div class="items">
    <p class="items_lines"><span>Veja como será apresentado ao cliente</span></p>
    <div v-if="itersableConsumable" class="items_card">
      <div v-for="(food, index) in itersableConsumable" v-bind:key="index" class="items_card_wrapper">
        <div class="items_card_block">
          <div class="items_card_header">
            <p>"{{food.title | capitalize}}"</p>
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
        itersableConsumable: state => state[state.consumable.toLowerCase()],
        drinks: state => state. drink,
        consumable: state => state.consumable
      }),
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    }
  }
</script>

<style scoped>
.items {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background:linear-gradient(to right, transparent, #FFFFFF, transparent);
  padding: 1rem 0;
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
  width: calc(100% + 7.6rem);
}
.items_lines span::before {
  right: 100%;
  margin-right: 5rem;
}
.items_lines span::after {
  left: 100%;
  margin-left: 5rem;
}
.items_card {
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  max-width: 1180px;
  padding: 3rem 0;
}
.items_card_wrapper {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 100%;
  padding-bottom: 2rem;
}
.items_card_wrapper img {
  position: relative;
  height: 170px;
  width: 170px;
  object-fit: cover;
  margin-right: -100px;
}
.items_card_block{
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0px 0px 30px #740B0B45;
  border-radius: 1rem;
}
.items_card_header {
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  background-color: #E43636;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  color: #FFCA00;
  padding: 1rem 2rem 1rem 10rem;
  font-size: 30px;
  font-weight: bold;
}
.items_card_header::first-letter {
  text-transform: capitalize;
}
.items_card_header p {
  line-height: 3rem;
  margin: 0;
}
.items_card_header--money {
  color: #FFFFFF;
  font-style: oblique;
  font-size: 26px;
}
.items_card_body {
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  padding: 1rem 10rem;
  font-size: 24px;
  color: #A03400;
  padding-bottom: 1rem;
}
.items_card_body p {
  line-height: 3rem;
  margin: 0;
}
.items_card_body p span {
  font-weight: bold;
}

</style>