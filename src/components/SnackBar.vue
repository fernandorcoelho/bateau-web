<template>
  <v-snackbar
    :color="snack.color"
    v-model="snack.visible"
    timeout="3000"
    shaped
    fixed
    right
    top
    elevation="24"
    rounded="xl"
  >
    <div class="d-flex align-center justify-space-between">
      <span class="text-body-1">
        {{ snack.message }}
      </span>
      <v-btn dark icon @click="close">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
  </v-snackbar>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      snack: state => state.snackbar.snack
    })
  },
  methods: {
    ...mapActions(['showSnack']),
    close() {
      this.showSnack({ message: '', color: '', visible: false });
    }
  }
}
</script>
