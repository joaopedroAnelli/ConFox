<template lang="pug">
  .root
    .hero.group-header.is-medium
      .hero-body
        .container
          h1.title {{group.name}}

          ul
            li: user-card(v-for="user in group.users" :key="user.id.low" :user="user")
</template>

<script>
  export default {
    name: "_id",
    async asyncData({$axios, params}) {
      return {
        // group: await $axios.$get('/api/group/' + params.id) || {}
        group: {
          id: 1,
          name: 'Amantes de piano',
          users: [
            {
              id: {
                low: 1
              },
              name: 'João Fernando',
              email: 'fernando@gmail.com'
            },
            {
              id: {
                low: 2
              },
              name: 'Roberto',
              email: 'fernando@gmail.com'
            },
          ]
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  .user-card {
    cursor: pointer;
  }
</style>
