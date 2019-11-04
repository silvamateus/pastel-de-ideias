import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    food: [],
    drink: [],
    consumable: 'Food'
  },
  mutations: {
    addFood(state, food) {
      state.food.push(food)
    },
    addDrink(state, drink) {
      state.drink.push(drink)
    },
    whichConsumable(state, consumable) {
      state.consumable = consumable
    }
  },
  getters: {
    food: state => state.food,
    drink: state => state.drink,
    consumable: state => state.consumable
  }
})