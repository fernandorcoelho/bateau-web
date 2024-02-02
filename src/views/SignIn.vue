<template>
<v-container class="fill-height">
  <BackgroundCircles />

  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" md="8" lg="6" xl="4">
      <v-card flat rounded="xl" width="75px" height="75px" color="#ffffff0d" class="sm-card-1"></v-card>
      <v-card dark class="px-4 py-6 rounded-xl card" color="#ffffff0d">
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
              <v-btn large depressed class="btn" rounded @click="performLogin">
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
          <v-btn text @click="navigateTo('/register')">
            Registrar
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card flat rounded="xl" width="75px" height="75px" color="#ffffff0d" class="sm-card-2"></v-card>
    </v-col>
  </v-row>

  <v-snackbar
    :color="snackbarColor"
    v-model="snackbar"
    timeout="3000"
    shaped
    absolute
    right
    top
    elevation="24"
    rounded="xl"
  >
    <div class="d-flex align-center justify-space-between">
      <span class="text-body-1">
        {{ snackbarMessage }}
      </span>
      <v-btn dark icon @click="snackbar = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
  </v-snackbar>
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
      if (this.valid) { // Verifica se o formulário é válido
        try {
          await this.login(this.loginForm); // Chama a ação do Vuex
          this.snackbarMessage = 'Login feito com sucesso!';
          this.snackbarColor = 'rgba(102, 187, 106, 0.2)';
          this.snackbar = true;
          // Aqui você pode redirecionar o usuário para outra página, se necessário
          this.navigateTo('/')
        } catch (error) {
          this.snackbarMessage = error.response.data.message;
          this.snackbarColor = 'rgba(239, 83, 80, 0.2)';
          this.snackbar = true;
        }
      } else {
        this.snackbarMessage = 'Formulário inválido';
        this.snackbarColor = 'rgba(239, 83, 80, 0.2)';
        this.snackbar = true;
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
.btn {
  background-image: linear-gradient(to right, #d500f0, #ae14d6, #8a19ba, #69189e, #4a1481);
}

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

.card {
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: rgba(255, 255, 255, 0.0) 0px -23px 25px 0px inset, rgba(255, 255, 255, 0.08) 0px -36px 30px 0px inset, rgba(255, 255, 255, 0) 0px -79px 40px 0px inset, rgba(255, 255, 255, 0.06) 0px 2px 1px, rgba(255, 255, 255, 0.0) 0px 4px 2px, rgba(255, 255, 255, 0.0) 0px 8px 4px, rgba(255, 255, 255, 0.04) 0px 16px 8px, rgba(255, 255, 255, 0.04) 0px 32px 16px !important;
}
</style>
