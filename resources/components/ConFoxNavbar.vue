<template lang="pug">

  b-navbar.is-primary(fixed-top spaced)
    template(slot="brand")
      b-navbar-item(tag="nuxt-link" to="/")
        img(src="/icons/fox.png")
        h1 ConFox

    template(slot="start")
      b-navbar-item(tag="nuxt-link" to="/") Grupos
      b-navbar-item(tag="nuxt-link" to="/") Chats
      b-navbar-item(tag="nuxt-link" to="/") Agendamentos

    template(slot="start")
      b-navbar-item(tag="item")

    template(slot="end")
      b-navbar-item(tag="item")
        .buttons
          a.button.is-light Sair

</template>

<script>
    export default {
        name: "ConFoxNavbar"
    }
</script>

<style lang="stylus">

</style>
