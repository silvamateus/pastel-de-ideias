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
      state.food + [...state.food, food]
    },
    addDrink(state, drink) {
      state.drink + [...state.drink, drink]
    }
  },
  getters: {
    food: state => state.food,
    drink: state => state.drink
  }
})