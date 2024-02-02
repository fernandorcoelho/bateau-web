import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import SignIn from '@/views/SignIn.vue'
import SignUp from '@/views/SignUp.vue'
import authMiddleware from '@/middleware/authMiddleware';

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      meta: { requiresAuth: true }
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn,
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp,
    },
    // ... outras rotas
  ]
});

router.beforeEach(authMiddleware);

export default router
