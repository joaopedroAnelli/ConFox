<template lang="pug">
  b-navbar
    template(slot="brand")
      b-navbar-item
        h1 ConFox


    template(slot="start")
      b-navbar-item Feed
      b-navbar-item Grupos
      b-navbar-item Chats
      b-navbar-item Agendamentos

    template(slot="end")
      b-navbar-item(tag="item")
        .buttons
          a.button.is-light Sair


</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>
