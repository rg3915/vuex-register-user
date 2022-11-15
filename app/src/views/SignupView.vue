<template>
    <h1 class="title">Cadastre-se</h1>
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
            v-model="password1"
        >
        <input
            class="input"
            type="password"
            placeholder="Digite sua senha novamente"
            v-model="password2"
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
    name: 'SignupView',
    data() {
        return {
            username: '',
            password1: '',
            password2: '',
        }
    },
    methods: {
        submitForm() {
          const formData = {
            username: this.username,
            password: this.password1,
          }

          if (this.username === '') {
            console.log('Favor preencher o e-mail.')
            return
          }

          if (this.password1 === '') {
            console.log('Favor preencher a senha.')
            return
          }

          if (this.password1 !== this.password2) {
            console.log('As senhas estão diferentes.')
            return
          }

          axios.post('/users', formData)
            .then(response => {
              this.$router.push('/login')
              console.log(response)
            })
            .catch(error => {
              console.log(error)
            })
        }
    }
}
</script>
