<template>
  <section class="hero">
    <div class="hero-body">
      <h1 v-if="$store.state.isAuthenticated">{{ $store.state.username }}</h1>

      <h1 v-else>User Anonymous</h1>

      <button
        v-if="$store.state.isAuthenticated"
        class="button is-danger"
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
    }
}
</script>
