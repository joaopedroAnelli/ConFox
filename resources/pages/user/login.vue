'<template lang="pug">
  .hero.is-primary.is-fullheight
    .hero-body.is-danger
      .container
        .columns.is-mobile.is-centered
          .column.is-half-desktop
            .columns.is-centered
              .column.is-half.logo-container
                img.logo(src="/icons/fox.png")
                h1 ConFox
            .card
              .card-header
                p.card-header-title Login
              .card-content
                .content
                  b-field(label="E-mail")
                    b-input(v-model="user.email")
                  b-field(label="Senha")
                    b-input(type="password" v-model="user.password" password-review)

                  .columns
                    .column
                    .column
                    .column.level
                      .level-right
                        b-button.is-medium.register(type="is-success" @click="$router.push('/user/register')") Registrar-se
                        b-button.is-medium(type="is-success" @click="login") Login

</template>

<script>
  export default {
    name: "login",
    layout: 'blank',
    auth: 'guest',
    data() {
      return {
        user: {
          email: '',
          password: ''
        }
      }
    },

    methods: {
      login() {
        this.$nuxt.$loading.start();

        this.$auth.loginWith('local', {
          data: this.user
        }).then(r => {
          this.$nuxt.$loading.finish();
          this.$router.push('/groups')

        }, err => {
          this.$nuxt.$loading.finish();
          this.$buefy.dialog.alert({
            title: 'Ops!',
            message: 'Usuário inválido',
            type: 'is-danger',
            confirmText: 'Tentar novamente',
          })
        })
          .catch(err => {
            this.$nuxt.$loading.finish();
            console.log(err)
          })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .red
    background-color red!important

  .register
    color #0098dd
    background-color transparent

    &:hover
      text-decoration underline
      background-color transparent
      color #0098dd


  .card
    border-radius 10px


  .logo-container
    display flex
    h1
      font-size 3em
      font-weight bold
    .logo
      width 100px
  p
    font-size 1.5em

</style>
'
