<template lang="pug">
  .hero.is-primary.is-fullheight
    .hero-body
      .container
        .card
          .header
            h1 Login
          .body
            b-field(label="E-mail")
              b-input


</template>

<script>
    export default {
        data () {
            return {

            }
        }
    }
</script>


<style lang="stylus" scoped>

  .card
    padding 2em
    border none
    border-radius 5px
    width 500px
    max-width 80vw

    .header
      border-bottom 1px solid gray
      margin-bottom 1em
      h1
        font-size 1.5em

</style>
