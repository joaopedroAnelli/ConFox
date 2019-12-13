<template lang="pug">

  b-navbar.is-primary(fixed-top spaced)
    template(slot="brand")
      b-navbar-item(tag="nuxt-link" to="/")
        img(src="/icons/fox.png")
        h1 ConFox

    template(slot="start")
      b-navbar-item(tag="nuxt-link" :to="'/groups'") Grupos
      //b-navbar-item(tag="nuxt-link" :to="'/chats'") Chats
      b-navbar-item(tag="nuxt-link" :to="'/schedules'") Agendamentos
      b-navbar-item(tag="nuxt-link" :to="'/interests'") Interesses

    template(slot="end")
      b-navbar-item
        .buttons
          b-button(type="is-light" @click="$auth.logout()") Sair

</template>

<script>
    export default {
        name: "ConFoxNavbar"
    }
</script>

<style lang="stylus">

</style>
