<template>
  <section class="hero">
    <div class="hero-body">
      <ul>
        <li
          v-for="user in $store.state.users"
          :key="user.id"
        >{{ user.email }}</li>
      </ul>

      <h1 class="title">Novo e-mail</h1>

      <p>{{ $store.state.newEmail }}</p>
    </div>
  </section>
</template>


<script>
export default {
    name: 'EmailView',
    created() {
      // dispatch é o que chama a actions no store do vuex.
      this.$store.dispatch('getUsers')
    }
}
</script>
