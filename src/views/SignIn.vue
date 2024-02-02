<template>
<v-container class="fill-height">
  <BackgroundCircles />

  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" md="8" lg="6" xl="4">
      <v-card text rounded="xl" width="75px" height="75px" color="#ffffff0d" class="sm-card-1"></v-card>
      <v-card dark class="px-4 py-6 rounded-xl glass-card" color="#ffffff0d">
        <v-card-title class="justify-center w-full d-flex">
          <span class="title text-h4 font-weight-black">Login</span>
        </v-card-title>
        <v-card-text class="py-8">
          <v-form class="d-flex flex-column" ref="form" v-model="valid">
            <div class="d-flex flex-column">
              <v-text-field
                v-model="loginForm.email"
                :rules="emailRules"
                label="E-mail"
                prepend-icon="mdi-account"
                required
                rounded
                dense
                filled></v-text-field>
              <v-text-field
                v-model="loginForm.password"
                :rules="passwordRules"
                label="Senha"
                prepend-icon="mdi-lock"
                type="password"
                required
                rounded
                dense
                filled></v-text-field>
            </div>

            <div class="mt-5 d-flex flex-column">
              <v-spacer></v-spacer>
              <v-btn large depressed class="btn-primary" rounded @click="performLogin">
                Entrar
              </v-btn>

              <v-btn large text @click="resetForm" rounded class="mt-3">
                Limpar campos
              </v-btn>
            </div>

          </v-form>
        </v-card-text>
        <v-card-actions class="justify-center d-flex">
          <v-btn text @click="navigateTo('/forgot-password')">
            Esqueceu a senha?
          </v-btn>
          <v-btn text @click="navigateTo('/sign-up')">
            Registrar
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card text rounded="xl" width="75px" height="75px" color="#ffffff0d" class="sm-card-2"></v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import Vue from 'vue';
import { mapActions } from 'vuex';
import VueRouter from 'vue-router';

import BackgroundCircles from '@/components/BackgroundCircles.vue';

Vue.use(VueRouter);

export default {
  name: 'SignIn',
  components: {
    BackgroundCircles
  },
  data() {
    return {
      form: null,
      valid: false,
      loginForm: {
        email: '',
        password: ''
      },
      emailRules: [
        v => !!v || 'E-mail é obrigatório',
      ],
      passwordRules: [
        v => !!v || 'Senha é obrigatória',
      ],
      snackbar: false,
      snackbarMessage: '',
      snackbarColor: ''
    };
  },
  methods: {
    ...mapActions(['login']),
    async performLogin() {
      if (this.valid) {
        try {
          await this.login(this.loginForm);
          this.$store.dispatch('showSnack', { message: 'Bem-vindo(a) à Bateau!', color: 'rgba(102, 187, 106, 0.4)' });
          this.navigateTo('/')
        } catch (error) {
          this.$store.dispatch('showSnack', { message: error.response.data.message, color: 'rgba(239, 83, 80, 0.4)' });
        }
      } else {
        this.$store.dispatch('showSnack', { message: 'Formulário inválido.', color: 'rgba(239, 83, 80, 0.4)' });
      }
    },
    resetForm() {
      this.$refs.form.reset();
      this.valid = false;
    },
    navigateTo(route) {
      this.$router.push(route);
    }
  }
}
</script>

<style>
.sm-card-1 {
  position: absolute;
  bottom: -37.5px;
  left: -37.5px;
  backdrop-filter: blur(16px);
  z-index: 1;
}

.sm-card-2 {
  position: absolute;
  margin-left: 100%;
  top: -37.5px;
  left: -37.5px;
  backdrop-filter: blur(16px);
  z-index: 1;
}

.title {
  text-shadow: rgba(255, 255, 255, 0.43) 0px 0px 27px;
  text-transform: uppercase;
}
</style>
