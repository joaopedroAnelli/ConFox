<!--suppress HtmlUnknownTarget -->
<template lang="pug">
  .hero.is-primary.is-fullheight
    .hero-body.is-danger
      .container
        .columns.is-mobile.is-centered
          .column.is-half
            .columns.is-centered
              .column.is-half
                img.logo(src="/icons/fox.png")
            .card
              .card-header
                p.card-header-title Login
              .card-content
                .content
                  b-field(label="E-mail")
                    b-input
                  b-field(label="Senha")
                    b-input

                  .columns
                    .column
                    .column
                    .column.level
                      .level-right
                        b-button.is-medium(type="is-success") Login



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
    border-radius 10px
  .logo
    width 100px
  p
    font-size 1.5em

</style>
