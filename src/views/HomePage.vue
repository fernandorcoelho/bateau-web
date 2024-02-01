<template>
<v-container class="d-flex flex-column align-center justify-center">
  <h1>Home</h1>

  <div class="d-flex flex-row flex-wrap">
    <v-col cols="12" sm="6" md="4" lg="3" class="pa-2" v-for="n in 4" :key="n">
      <v-card>
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
