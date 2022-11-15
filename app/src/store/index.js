import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  // state são os dados de fato
  state: {
    users: [],
    newEmail: '',
    token: '',
    isAuthenticated: false,
    username: '',
  },
  // mutations altera o state dos dados
  mutations: {
    storeUsers(state, payload) {
      state.users = payload
    },
    storeUser(state, payload) {
      state.users.push(payload)
    },
    storeEmail(state, payload) {
      state.newEmail = payload
    },
    initializeStore(state) {
      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token')
        state.isAuthenticated = true
      } else {
        state.token = ''
        state.isAuthenticated = false
      }
    },
    setToken(state, token) {
        state.token = token
        state.isAuthenticated = true
    },
    removeToken(state) {
        state.token = ''
        state.isAuthenticated = false
    },
    setUser(state, username) {
        // Não necessário, usado apenas para simulação por não ter um autenticador (backend) de verdade.
        state.username = username
    }
  },
  // digamos que ele é mais completo do que o mutations, indicado para operações assíncronas.
  actions: {
    getUsers({ commit }) {
      return axios.get('http://localhost:3000/users')
        .then((response) => {
          commit('storeUsers', response.data)  // commit é o que executa a ação de verdade.
        })
    },
    addUser({ commit }, data) {
      return axios.post('http://localhost:3000/users', data)
        .then((response) => {
          commit('storeUser', response.data)
          commit('storeEmail', response.data.email)  // este não está sendo persistido no banco
        })
    },
  },
  getters: {
  },
  modules: {
  }
})
