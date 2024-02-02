<template>
<v-container class="justify-center d-flex flex-column align-center">
  <h1 class="white--text">Home</h1>

  <div class="flex-row flex-wrap d-flex">
    <v-col cols="12" sm="6" md="4" lg="3" class="pa-2" v-for="n in 4" :key="n">
      <v-card dark class="glass">
        <v-card-title>Título {{ n }}</v-card-title>
        <v-card-subtitle>Subtítulo</v-card-subtitle>
        <v-card-text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id voluptates maiores dolore repellendus itaque accusantium hic praesentium molestias corrupti explicabo, voluptate neque adipisci? Illo esse dignissimos reprehenderit, laudantium aperiam vitae!</v-card-text>
      </v-card>
    </v-col>
  </div>
</v-container>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>
