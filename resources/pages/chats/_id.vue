<template lang="pug">
  .root
    .hero.user-header
      .hero-body
        .container
          .columns
            .column
              h1.title {{user.name}}
              p {{user.email}}
            .column
              button.button.is-success.is-pulled-right Agendar
    hr
    .section
      .container.chat
        .balloon-wrapper
          .balloon-left.has-background-primary.has-text-white
            p Olá
            p.is-pulled-right.is-size-7.has-text-light 20:00

        .balloon-wrapper
          .balloon-right.is-pulled-right.has-background-light.has-text-dark
            p Olá, tudo bem?
            p.is-pulled-right.is-size-7.has-text-dark 20:05
        .writter.has-background-light.has-text-dark.columns.is-marginless
          .column
          .column.is-four-fifths
            b-field
              b-input(placeholder="Digite sua mensagem aqui" rounded)
          .column
            .container
              b-button(type="is-success" icon-left="send")

</template>

<script>
  export default {
    name: "_id",
    async asyncData({$axios, params}) {
      return {
        // user: await $axios.$get('/api/user/' + params.id) || {}
        user: {
          id: 1,
          name: 'Carol',
          email: 'carol@gail.com'
        },

        chat: {
          messages: [
            {
              id: {
                low: 1
              },
              myself: true,
              text: 'Olá',
              created_at: '2019-12-07 20:00:00'
            },
            {
              id: {
                low: 1
              },
              myself: false,
              user: {
                id: {
                  low: 2
                }
              },
              text: 'Olá, tudo bem?',
              created_at: '2019-12-07 20:05:00'
            }
          ]
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

  .root {
    height: 100%;
  }
  .user-card {
    cursor: pointer;
  }

  .section {
    position: relative;
    height: 65%;
  }
  .chat {
    overflow-y: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    .balloon-wrapper {
      margin: 5px 0;
    }

    .balloon-left {
      min-width: 200px;
      max-width: 500px;
      display: inline-block;
      padding: 10px;
      margin-left: 10px;
      position: relative;
      border-radius: .4em;
    }

    .balloon-left:after {
      content: '';
      position: absolute;
      left: 0;
      top: 75%;
      width: 0;
      height: 0;
      border: 10px solid transparent;
      border-right-color: $primary;
      border-left: 0;
      border-top: 0;
      margin-top: -5px;
      margin-left: -10px;
    }

    .balloon-right {
      min-width: 200px;
      max-width: 500px;
      display: inline-block;
      padding: 10px;
      margin-right: 10px;
      position: relative;
      border-radius: .4em;
    }

    .balloon-right:after {
      content: '';
      position: absolute;
      right: 0;
      top: 50%;
      width: 0;
      height: 0;
      border: 10px solid transparent;
      border-left-color: $light-grey;
      border-right: 0;
      border-top: 0;
      margin-top: -5px;
      margin-right: -10px;
    }
  }
</style>
