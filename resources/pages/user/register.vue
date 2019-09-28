<template lang="pug">
  .hero.is-primary.is-fullheight
    .hero-body.is-danger
      .container
        .columns.is-centered
          .column.is-half
            .columns.is-centered
              .column.is-half.logo-container
                img.logo(src="/icons/fox.png")
                h1 ConFox
            .card
              .card-header
                p.card-header-title Registro de Usuário
              .card-content
                .content
                  b-field(label="Nome")
                    b-input(v-model="user.name")
                  b-field(label="E-mail")
                    b-input(v-model="user.email")
                  b-field(label="Senha")
                    b-input(type="password" v-model="user.password")
                  b-field(label="Confirme a senha")
                    b-input(v-model="user.passwordConfirmation")

                  .columns
                    .column
                    .column
                    .column.level
                      .level-right
                        b-button.is-medium.register(type="is-success" @click="$router.push('/user/register')") Registar-se
                        b-button.is-medium(type="is-success" @click="$store.dispatch('user/login', user)") Login

</template>

<script>
    export default {
        name: "register",
        layout: 'blank',

        data() {
            return {
                user: {
                    email: '',
                    password: ''
                }
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
