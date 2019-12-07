<template lang="pug">
  .hero
    .hero-body
      .container
        h1.title Chats

        chat-card(v-for="x in 8" :key="x")
</template>

<script>
    export default {
        name: "grupos"
    }
</script>

<style scoped>

</style>
