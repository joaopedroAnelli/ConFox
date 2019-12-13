<template lang="pug">
  .root
    .hero.group-header.is-medium
      .hero-body
        .container
          h1.title {{group.name}}
          h2.subtitle {{group.description}}

          hr
          h1.title Usuários
          ul
            li: user-card(v-for="user in group.users" :key="user.id.low" :user="user")
</template>

<script>
  export default {
    async asyncData({$axios, params}) {
      return {

        // group: {
        //   id: 1,
        //   name: 'Amantes de piano',
        //   users: [
        //     {
        //       id: {
        //         low: 1
        //       },
        //       name: 'João Fernando',
        //       email: 'fernando@gmail.com'
        //     },
        //     {
        //       id: {
        //         low: 2
        //       },
        //       name: 'Roberto',
        //       email: 'fernando@gmail.com'
        //     },
        //   ]
        // }
      }
    },

    data() {
      return {
        group: {}
      }
    },

    async mounted() {
      this.group = await this.$axios.$get('/api/groups/' + this.$route.params.id) || {}
    }
  }
</script>

<style lang="scss" scoped>
  .user-card {
    cursor: pointer;
  }
</style>
