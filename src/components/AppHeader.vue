<template>
<v-app-bar dark app class="glass" color="transparent">
  <v-app-bar-title>
    <v-btn text @click="navigateTo('/')" class="cursor-pointer text-no-wrap text-h5 font-weight-bold">
      Bateau
    </v-btn>
  </v-app-bar-title>

  <v-spacer></v-spacer>

  <div v-if="!isAuthenticated">
    <v-btn @click="navigateTo('/sign-up')" plain class="mr-3 glass">
      <span class="font-weight-black lime--text text--accent-2">Cadastrar</span>
    </v-btn>

    <v-btn @click="navigateTo('/sign-in')" outlined>
      <span class="font-weight-black">Entrar</span>
    </v-btn>
  </div>
  

  <v-menu v-else offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn flat text v-bind="attrs" v-on="on" class="transparent">
        <span class="font-weight-black userNameText">{{ userName }}!</span>
      </v-btn>
    </template>

    <v-list dark class="glass">
      <v-list-item @click="navigateTo('/profile')">
        <v-list-item-title>Perfil</v-list-item-title>
      </v-list-item>
      <v-list-item @click="performLogout">
        <v-list-item-title>Sair</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</v-app-bar>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';
import { mapGetters } from 'vuex';

Vue.use(VueRouter);

export default {
  name: 'AppHeader',
  computed: {
    ...mapGetters(['isAuthenticated', 'user']),
    userName() {
      return this.user ? this.user.name : '';
    }
  },
  methods: {
    navigateTo(path) {
      this.$router.push(path);
    },
    performLogout() {
      this.$store.dispatch('logout')
      this.$router.push('sign-in')
    },
  }
}
</script>

<style>
.userNameText {
  max-width: 130px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 4px -3px 20px 0px rgba(255,255,255,0.1), -10px 8px 14px 0px rgba(255,255,255,0.1) inset !important;
}
</style>
