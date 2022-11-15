<template>
  <section class="hero">
    <div class="hero-body">
      <h1 v-if="$store.state.isAuthenticated">{{ $store.state.username }}</h1>

      <h1 v-else>User Anonymous</h1>

      <button
        v-if="$store.state.isAuthenticated"
        class="button is-danger"
        @click="logout"
      >Logout</button>

      <button
        v-else
        class="button is-primary"
        @click="$router.push('/login')"
      >Login</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
    name: 'ProfileView',
    methods: {
      async logout() {
      //   await axios.post('/api/v1/token/logout/')
      //     .then(response => {
      //       console.log('Você saiu do sistema.')
      //     })
      //     .catch(error => {
      //       console.log(error)

        axios.defaults.headers.common['Authorization'] = ''
        localStorage.removeItem('token')
        this.$store.commit('removeToken')
      }
    }
}
</script>
