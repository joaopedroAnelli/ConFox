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
                  validation-observer(v-slot="{ invalid }" slim)
                    validation-provider(rules="required" name="name" v-slot="{ errors }" slim)
                      b-field(label="Nome" :type="{'is-danger': errors.length}" :message="errors[0]")
                        b-input(v-model="user.name")
                    validation-provider(rules="required|email" name="email" v-slot="{ errors }" slim)
                      b-field(label="E-mail" :type="{'is-danger': errors.length}" :message="errors[0]")
                        b-input(v-model="user.email")
                    validation-provider(rules="required|password:confirmation" name="password" v-slot="{ errors }" slim)
                      b-field(label="Senha" :type="{'is-danger': errors.length}" :message="errors[0]")
                        b-input(type="password" v-model="user.password")
                    validation-provider(rules="required" name="confirmation" v-slot="{ errors }" slim)
                      b-field(label="Confirme a senha" :type="{'is-danger': errors.length}" :message="errors[0]")
                        b-input(type="password" v-model="user.passwordConfirmation")

                    .columns
                      .column
                        b-button.is-medium.is-pulled-left(type="is-default" @click="$router.push('/user/login')") Voltar
                      .column
                          b-button.is-medium.is-pulled-right(type="is-success" @click="register" :disabled="invalid") Registar-se

</template>

<script>
  export default {
    auth: false,
    name: "register",
    layout: 'blank',

    data() {
      return {
        user: {
          name: '',
          email: '',
          password: ''
        }
      }
    },

    methods: {
      register() {
        this.$nuxt.$loading.start();
        this.$axios.post('/api/user', this.user)
          .then(r => {
            this.$nuxt.$loading.finish();
            this.$buefy.dialog.alert({
              title: 'Muito bem!',
              message: 'Usuário cadastrado com sucesso!',
              type: 'is-success',
              confirmText: 'Continuar',
              onConfirm: () => {
                this.$nuxt.$loading.start();
                this.$auth.loginWith('local', {
                  data: this.user
                }).then(r => {
                  this.$nuxt.$loading.finish();
                  this.$router.push('/interests')
                })
              }
            })
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
