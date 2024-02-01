<template>
<v-app-bar dark app class="glass" color="transparent">
  <v-app-bar-title>
    <v-btn text @click="navigateTo('/')" class="cursor-pointer text-no-wrap text-h5 font-weight-bold">
      Bateau
    </v-btn>
  </v-app-bar-title>

  <v-spacer></v-spacer>

  <v-btn @click="navigateTo('/sign-in')" outlined prepend-icon="mdi-login">
    <span class="font-weight-black">Entrar</span>
  </v-btn>
</v-app-bar>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default {
  name: 'AppHeader',
  methods: {
    navigateTo(path) {
      this.$router.push(path);
    }
  }
}
</script>

<style>
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 4px -3px 20px 0px rgba(255,255,255,0.1), -10px 8px 14px 0px rgba(255,255,255,0.1) inset !important;
}
</style>
