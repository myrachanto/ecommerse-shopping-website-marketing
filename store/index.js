export const state = () => ({
  token: null,
  admin: false
})

export const mutations = {
  setToken (state, data) {
    console.log(data)
    state.token = data.token
    state.admin = data.admin
    localStorage.setItem('token', data.token)
    localStorage.setItem('admin', data.admin)
  },
  logout (state) {
    state.token = null
    state.admin = false
    localStorage.removeItem('token')
    localStorage.removeItem('admin')
  }
}
export const getters = {
  isLoggedin (state) {
    return state.token !== null
  },
  isAdmin (state) {
    return state.admin !== false
  }
}
export const actions = {
  initAuth (vuexContext) {
    const token = localStorage.getItem('token')
    const admin = localStorage.getItem('admin')
    const data = { token, admin }
    vuexContext.commit('setToken', data)
  },
  logout (vuexContext) {
    vuexContext.commit('logout')
  }
}
