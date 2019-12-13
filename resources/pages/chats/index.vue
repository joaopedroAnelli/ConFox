<template lang="pug">
  .hero
    .hero-body
      .container
        h1.title Chats

        user-card(v-for="x in 8" :key="x" :user="{name: ''}")
</template>

<script>
    export default {
        name: "grupos"
    }
</script>

<style scoped>

</style>
