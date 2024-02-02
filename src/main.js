import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
import store from './store'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import 'vuetify/dist/vuetify.min.css'
import '../public/css/global.css'

// Vue.config.productionTip = false

Vue.use(vuetify)
Vue.use(Vuex)

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App),
}).$mount('#app')
