<template>
    <h1 class="title">Login</h1>
    <form
        class="container"
        @submit.prevent="submitForm"
    >
        <input
            class="input"
            type="email"
            placeholder="Digite seu e-mail"
            v-model="username"
        >
        <input
            class="input"
            type="password"
            placeholder="Digite sua senha"
            v-model="password"
        >
        <button
            class="button"
            type="submit"
        >
            Salvar
        </button>
    </form>
</template>

<script>
import axios from 'axios'

export default {
    name: 'LoginView',
    data() {
        return {
            username: '',
            password: '',
            auth_token: 'b704c9fc3655635646356ac2950269f352ea1139',  // token simulated
        }
    },
    methods: {
        submitForm() {
          const formData = {
            username: this.username,
            password: this.password,
            auth_token: this.auth_token  // token simulated
          }

          axios.post('/login', formData)
            .then(response => {

              // Get token
              const token = response.data.auth_token

              // Set token
              this.$store.commit('setToken', token)

              // Get username
              const username = response.data.username

              // Set username (test only)
              this.$store.commit('setUser', username)

              // Define token authorizion
              axios.defaults.headers.common['Authorization'] = 'Token ' + token

              // Define token on localStorage
              localStorage.setItem('token', token)

              console.log(this.$store.state.token)
              console.log(this.$store.state.isAuthenticated)

              // redirect
              this.$router.push('/profile')
            })
            .catch(error => {
              console.log(error)
            })
        }
    }
}
</script>
