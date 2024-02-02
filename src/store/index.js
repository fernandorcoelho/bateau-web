// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth'; // Importa o módulo de autenticação

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth // Registra o módulo de autenticação
  }
});
