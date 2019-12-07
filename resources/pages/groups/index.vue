<template lang="pug">
  .hero
    .hero-body
      .container(v-if="recomendedGroups.length")
        h1.title Grupos sugeridos
        group-card(v-for="group in recomendedGroups" :key="group.id.low" :group="group")

      .container(style="margin-top: 30px" v-if="userGroups.length")
        h1.title Seus grupos
        group-card(v-for="group in userGroups" :key="group.id.low" :group="group")
</template>

<script>

  export default {
    name: "index",

    async asyncData({$axios}) {
      return {
        recomendedGroups: await $axios.$get('/api/recomended_groups'),
        userGroups: await $axios.$get('/api/groups'),
      }
    }
  }
</script>

<style scoped>

</style>
