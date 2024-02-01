import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import SignIn from '@/views/SignIn.vue'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  mode: 'history', // Use 'hash' se não estiver usando um servidor configurado para SPA
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn,
    },
    // ... outras rotas
  ]
});