<template lang="pug">
  .interests-root
    h1 {{userInterests}}
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
                v-model="userInterests",
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
                b-button.is-medium(type="is-success" @click="attachInterests") Próximo


</template>

<script>
  export default {
    name: "interests",
    layout: 'blank',

    async asyncData({$axios}) {
      return {
        interests: await $axios.$get('/api/interests'),
        userInterests: await $axios.$get('/api/user/interests')
      }

    },
    mounted() {
      document
        .getElementsByTagName('body').item(0)
        .classList
        .remove('has-navbar-fixed-top')
    },


    methods: {
      attachInterests() {
        this.$nuxt.$loading.start()
        this.$axios.post('/api/interests', {
          interests: this.userInterests
        })
          .then(r => {
            this.$router.push('/groups');
            this.$nuxt.$loading.finish();
          }, err => {
            console.log(err)
          })
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
