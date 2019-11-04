import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    food: [],
    drink: []
  },
  mutations: {
    addFood(state, food) {
      state.food.push(food)
    },
    addDrink(state, drink) {
      state.drink.push(drink)
    }
  },
  getters: {
    food: state => state.food,
    drink: state => state.drink
  }
})