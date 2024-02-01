<template>
<v-app style="background-color: #202529;">
  <AppHeader />

  <v-main style="overflow: hidden;">
    <router-view></router-view>
  </v-main>
</v-app>
</template>

<script>
import AppHeader from './components/AppHeader';

export default {
  name: 'App',
  components: {
    AppHeader
  },
  data: () => ({
    //
  }),
};
</script>
