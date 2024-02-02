<template>
  <v-container class="full-height">
  <BackgroundCirclesAlt />

  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" md="8" lg="6" xl="4">
      <v-card text rounded="xl" width="75px" height="75px" color="#ffffff0d" class="sm-card-1"></v-card>
      <v-card dark class="px-4 py-6 rounded-xl glass-card" color="#ffffff0d">
        <v-card-title class="justify-center w-full d-flex">
          <span class="title text-h4 font-weight-black">Cadastro</span>
        </v-card-title>
        <v-card-text class="py-8">
          <v-form class="d-flex flex-column" ref="form" v-model="valid">
            <div class="d-flex flex-column">
              <v-text-field
                v-model="registerForm.email"
                :rules="emailRules"
                label="E-mail"
                prepend-icon="mdi-account"
                required
                rounded
                dense
                filled></v-text-field>
              <v-text-field
                v-model="registerForm.password"
                :rules="passwordRules"
                label="Senha"
                prepend-icon="mdi-lock"
                type="password"
                required
                rounded
                dense
                filled></v-text-field>
              <v-text-field
                v-model="registerForm.confirmPassword"
                :rules="confirmPasswordRules"
                label="Confirmar senha"
                prepend-icon="mdi-lock-alert"
                type="password"
                required
                rounded
                dense
                filled></v-text-field>
              <v-text-field
                v-model="registerForm.name"
                :rules="nameRules"
                label="Nome"
                prepend-icon="mdi-draw"
                required
                rounded
                dense
                filled></v-text-field>
              <v-text-field
                v-model="registerForm.nickname"
                :rules="nicknameRules"
                label="Apelido"
                prepend-icon="mdi-album"
                required
                rounded
                dense
                filled></v-text-field>
              <v-text-field
                v-model="registerForm.age"
                v-mask="['##']"
                :rules="ageRules"
                label="Idade"
                prepend-icon="mdi-baby-face"
                required
                rounded
                dense
                filled></v-text-field>
              <v-text-field
                v-model="registerForm.cpf"
                v-mask="['###.###.###-##']"
                :rules="cpfRules"
                label="CPF"
                prepend-icon="mdi-file-document"
                required
                rounded
                dense
                filled></v-text-field>
            </div>

            <div class="mt-5 d-flex flex-column">
              <v-spacer></v-spacer>
              <v-btn large depressed class="btn-primary" rounded @click="performRegister">
                Cadastrar
              </v-btn>

              <v-btn large text @click="resetForm" rounded class="mt-3">
                Limpar campos
              </v-btn>
            </div>

          </v-form>
        </v-card-text>
      </v-card>
      <v-card flat rounded="xl" width="75px" height="75px" color="#ffffff0d" class="sm-card-2"></v-card>
    </v-col>
  </v-row>

  <SnackBar />
</v-container>
</template>

<script>
import Vue from 'vue';
import { mapActions } from 'vuex';
import VueRouter from 'vue-router';
import { cleanCpf, validateCpf } from '@/utils/helpers'
import SnackBar from '@/components/SnackBar'

import BackgroundCirclesAlt from '@/components/BackgroundCirclesAlt.vue';

Vue.use(VueRouter);

export default {
  name: 'SignIn',
  components: {
    BackgroundCirclesAlt,
    SnackBar
  },
  data() {
    return {
      form: null,
      valid: false,
      registerForm: {
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        nickname: '',
        age: '',
        cpf: ''
      },
      nameRules: [
        v => !!v || 'Nome é obrigatório',
      ],
      nicknameRules: [
        v => !!v || 'Apelido é obrigatório',
      ],
      ageRules: [
        v => !!v || 'Idade é obrigatória',
        v => v >= 18 || 'Idade é inválida',
      ],
      cpfRules: [
        v => !!v || 'CPF é obrigatório ',
        v => v != null && validateCpf(v) || 'CPF inválido',
      ],
      emailRules: [
        v => !!v || 'E-mail é obrigatório',
        v => /.+@.+\..+/.test(v) || 'E-mail deve ser válido',
      ],
      passwordRules: [
        v => !!v || 'Senha é obrigatória',
        v => v != null && v.length >= 6 || 'Senha deve ter pelo menos 6 caracteres',
      ],
      confirmPasswordRules: [
        v => !!v || 'Confirmar senha é obrigatória',
        v => v === this.registerForm.password || 'Senhas não coincidem',
      ],
      snackbar: false,
      snackbarMessage: '',
      snackbarColor: ''
    };
  },
  methods: {
    ...mapActions(['login', 'register']),
    async performRegister() {
      if (this.valid) { // Verifica se o formulário é válido
        const { email, password, name, nickname, age, cpf } = this.registerForm

        try {
          const payload = {
            email,
            password,
            profile: {
              name,
              nickname,
              age: Number(age),
              cpf: cleanCpf(cpf)
            }
          }

          await this.register(payload)
          
          this.$store.dispatch('showSnack', { message: 'Cadastro feito com sucesso!', color: 'rgba(102, 187, 106, 0.4)' });
          
          // Se for registrado com sucesso, faz login
          try {
            const payload = {
              email,
              password
            }

            await this.login(payload);
            this.$store.dispatch('showSnack', { message: 'Bem-vindo(a) à Bateau!', color: 'rgba(102, 187, 106, 0.4)' });
            this.navigateTo('/')
          } catch (error) {
            this.$store.dispatch('showSnack', { message: error.response.data.message, color: 'rgba(239, 83, 80, 0.4)' });
          }
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
