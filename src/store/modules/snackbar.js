const state = {
  snack: {
    message: '',
    color: '',
    visible: false,
  }
}

const actions = {
  showSnack({ commit }, payload) {
    commit('SET_SNACK', { ...payload, visible: true });
  },
}

const mutations = {
  SET_SNACK(state, { message, color, visible }) {
    state.snack.message = message;
    state.snack.color = color;
    state.snack.visible = visible;
  }
}

export default {
  state,
  actions,
  mutations
}
