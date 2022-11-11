<template>
    <form
        class="container"
        @submit.prevent="addUser"
    >
        <input
            class="input"
            type="email"
            placeholder="Digite seu e-mail"
            v-model="email"
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
export default {
    name: 'RegisterView',
    data() {
        return {
            email: ''
        }
    },
    methods: {
        addUser() {
            if (!this.email) {
                return
            }
            // dispatch é o que chama a actions no store do vuex.
            this.$store.dispatch('addUser', {
                email: this.email
            }).finally(() => {
              // redireciona para outra página.
              this.$router.push({name: 'email'})
            })
        }
    }
}
</script>
