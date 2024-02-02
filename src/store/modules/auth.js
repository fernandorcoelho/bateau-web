import authService from '@/api/auth'

const state = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  accessToken: localStorage.getItem('accessToken') || null,
  roles: JSON.parse(localStorage.getItem('roles')) || null,
}

const getters = {
  isAuthenticated: state => !!state.accessToken,
  user: state => state.user,
  accessToken: state => state.accessToken,
  roles: state => state.roles
}

const actions = {
  async login({ commit }, user) {
    const response = await authService.login(user)
    const responseData = response.data
    const { accessToken, roles, ...userData } = responseData;

    localStorage.setItem('user', JSON.stringify(userData))
    localStorage.setItem('accessToken', accessToken)
    localStorage.setItem('roles', JSON.stringify(roles))

    commit('SET_USER', userData)
    commit('SET_ACCESS_TOKEN', accessToken)
    commit('SET_ROLES', roles)
  },
  logout({ commit }) {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    localStorage.removeItem('roles');
    
    commit('SET_LOGOUT')
  },
  async register({ commit }, user) {
    const response = await authService.register(user)
    commit('SET_USER', response)
  }
}

const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
  SET_ACCESS_TOKEN(state, token) {
    state.accessToken = token
  },
  SET_ROLES(state, roles) {
    state.roles = roles
  },
  SET_LOGOUT(state) {
    state.user = null
    state.accessToken = null
    state.roles = null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
