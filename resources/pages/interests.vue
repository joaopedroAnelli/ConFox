<template lang="pug">
  .interests-root
    .columns.is-centered
      .column.is-two-thirds-tablet.is-half-desktop
        .hero
          .hero-body
            .container
              h1(class="title") Quais são seus interesses?

        .hero
          .hero-body
            .container
              vue-multiselect(
                v-model="interest",
                :options="interests",
                :multiple="true",
                :close-on-select="false",
                :clear-on-select="false",
                :preserve-search="true",
                placeholder="Escolha seus intereses"
                label="name",
                track-by="name",
                :preselect-first="false"
              )
          .hero
            .hero-body
              .container.has-text-right
                b-button.is-medium(type="is-success") Próximo


</template>

<script>
    export default {
        name: "interests",
        layout: 'blank',
        mounted() {
            document
                .getElementsByTagName('body').item(0)
                .classList
                .remove('has-navbar-fixed-top')
        },

        data() {
            return {
                interest: null,
                interests: [
                    {
                        'id': 1,
                        'name': 'Futebol',
                    },
                    {
                        'id': 2,
                        'name': 'Java',
                    },
                    {
                        'id': 3,
                        'name': 'Namorada',
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

  .interests-root {
    background-color: $primary;
    width: 100vw;
    height: 100vh;
  }

  .hero {
    h1 {
      &.title {
        font-size: 3rem;

        @media (min-width: $desktop) {
          font-size: 5rem;
        }
      }
    }
  }

</style>
