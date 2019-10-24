<template lang="pug">
  .hero
    .hero-body
      .container
        h1.title Grupos sugeridos
        group-card(v-for="x in 8" :key="x")
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>
