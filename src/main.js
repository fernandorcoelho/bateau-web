import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import 'vuetify/dist/vuetify.min.css'
import '../public/css/global.css'

// Vue.config.productionTip = false

Vue.use(vuetify)

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
