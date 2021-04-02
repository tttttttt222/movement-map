const state = {selfLocation: true, centerPos: [121.469959, 31.187304]}
const mutations = {
  SLEF_LOCATION(state) {
    state.selfLocation = !state.selfLocation;
    console.log("setLocationvuex",state.selfLocation);
  },
  POS_CENTER(state, pos) {
    state.centerPos = pos;
    console.log("setvuex：" + state.centerPos);
  }
}
const actions = {}
const getters = {
  getterCenterPos(state) {
    console.log("getter" + state.centerPos);
    return (state.centerPos);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
