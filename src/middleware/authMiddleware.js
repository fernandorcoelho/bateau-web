import authApi from '@/api/auth';
import store from '@/store';

const authMiddleware = async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = localStorage.getItem('accessToken');

    if (!token) {
      return next('/sign-in');
    }

    try {
      await authApi.checkToken(token);
      next();
    } catch (error) {
      console.error('Erro na verificação do token:', error);
      store.dispatch('logout')
      return next('/sign-in');
    }
  } else {
    next();
  }
};

export default authMiddleware;
