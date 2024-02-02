<template>
<v-app style="background-color: #202529;">
  <AppHeader />

  <v-main style="overflow: hidden;">
    <router-view></router-view>
  </v-main>

  <SnackBar />
</v-app>
</template>

<script>
import AppHeader from './components/AppHeader';
import SnackBar from './components/SnackBar.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    SnackBar
  },
  data: () => ({
    //
  }),
};
</script>
