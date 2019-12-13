<template lang="pug">
  .root
    b-modal(
      :active.sync="openScheduleModal"
      has-modal-card
      trap-focus
      aria-role="dialog"
      aria-modal
    )
      form(@submit.prevent="saveSchedule")
        div.modal-card(style="width: auto")
          header.modal-card-head
            p.modal-card-title Novo Agendamento
          section.modal-card-body
            b-field(label="Título")
              b-input(
                v-model="schedule.title"
                placeholder="Título do agendamento"
                required
              )

            b-field(label="Quando?")
              b-datepicker(
                v-model="schedule.date"
                :show-week-number="false"
                placeholder="Clique para escolher..."
                inline
              )

            b-field(label="Que horas?")
              b-clockpicker(
                rounded
                v-model="schedule.time"
                placeholder="Clique para escolher..."
                hour-format="24"
                inline
              )

          footer.modal-card-foot
            button.button( type="button" @click="openScheduleModal = false") Fechar
            button.button.is-success Cadastrar
    .hero.user-header
      .hero-body
        .container
          .columns
            .column
              h1.title {{user.name}}
              p {{user.email}}
            .column
              button.button.is-success.is-pulled-right(@click="$router.push('/schedules')") Agendar
    hr
    .section
      .container.chat
        .balloon-wrapper
          //.balloon-left.has-background-primary.has-text-white
            p Olá
            p.is-pulled-right.is-size-7.has-text-light 20:00

        .balloon-wrapper(v-for="message in chat.messages")
          .balloon-right.is-pulled-right.has-background-light.has-text-dark
            p {{message.text}}
            p.is-pulled-right.is-size-7.has-text-dark {{message.created_at}}
        .writter.has-background-light.has-text-dark.columns.is-marginless
          .column
          .column.is-four-fifths
            b-field
              b-input(placeholder="Digite sua mensagem aqui" rounded v-model="writter.text")
          .column
            .container
              b-button(type="is-success" icon-left="send" @click="addMessage")

</template>

<script>
  import moment from 'moment';
  export default {
    name: "_id",
    async asyncData({$axios, params}) {
      return {
        openScheduleModal: false,
        schedule: {},
        writter: {
          text: ''
        },
        // user: await $axios.$get('/api/user/' + params.id) || {}
        user: await $axios.$get('/api/users/' + params.id),

        chat: {
          messages: [

          ]
        }
      }
    },

    methods: {
      addMessage() {
        this.chat.messages.push({
          text: this.writter.text,
          created_at: moment().format('HH:mm')
        })
        this.writter.text = ''
      },
      async saveSchedule() {
        this.data.push({
          ...this.schedule,
          datetime: `${this.$formatDatetime(this.schedule.date, 'DD/MM/YYYY')} às ${this.$formatDatetime(this.schedule.time, 'HH[h]mm')}`
        })

        this.openScheduleModal = false

        this.$buefy.dialog.alert({
          title: 'Muito bem!',
          message: 'Agendamento feito com sucesso!',
          type: 'is-success',
        })
      }
    }
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
