<template lang="pug">
  .hero
    .hero-body
      .container
        h1.title Agendamentos

        b-button.is-pulled-right(
          type="is-success"
          size="is-medium"
          icon-left="plus"
          @click="openScheduleModal = true"
        ) Novo Agendamento
        b-table(:data="data" :columns="columns")

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
                p.modal-card-title Novo Agendamento {{schedule}}
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
</template>

<script>
  export default {
    name: "index",

    data() {
      return {
        data: [
          { 'id': 1, 'title': 'Correr com o grupo de corrida', 'datetime': this.$formatDatetime('2019-12-15 09:00:00', 'DD/MM/YYYY [às] HH[h]mm'), 'gender': 'Male' },
          { 'id': 2, 'title': 'Academia', 'datetime': this.$formatDatetime('2019-12-16 06:00:53', 'DD/MM/YYYY [às] HH[h]mm'), 'gender': 'Male' },
          { 'id': 3, 'title': 'Grupo de ex fumantes', 'datetime': this.$formatDatetime('2019-12-17 06:00', 'DD/MM/YYYY [às] HH[h]mm'), 'gender': 'Female' },
          { 'id': 4, 'title': 'Aula de violão', 'datetime': this.$formatDatetime('2019-12-18 10:30:46', 'DD/MM/YYYY [às] HH[h]mm'), 'gender': 'Male' },
          { 'id': 5, 'title': 'Grupo de estudos JAVA', 'datetime': this.$formatDatetime('2019-12-19 14:30:38', 'DD/MM/YYYY [às] HH[h]mm'), 'gender': 'Female' }
        ],
        columns: [
          {
            field: 'title',
            label: 'Título',
          },
          {
            field: 'datetime',
            label: 'Horário',
          }
        ],


        openScheduleModal: false,
        schedule: {
          title: '',
          date: new Date(),
          time: new Date()
        }
      }
    },


    methods: {
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
        // this.$axios
        //   .post('/api/schedules', {
        //     ...this.schedule,
        //     datetime: `${this.$formatDatetime(this.schedule.date, 'YYYY-MM-DD')} ${this.$formatDatetime(this.schedule.time, 'HH:mm')}`
        //   })
        //   .then(r => {
        //     this.$buefy.dialog.alert({
        //       title: 'Muito bem!',
        //       message: 'Agendamento feito com sucesso!',
        //       type: 'is-success',
        //     })
        //       .then(r1 => {
        //         this.openScheduleModal = false
        //       })
        //   }, err => {
        //     this.$buefy.dialog.alert({
        //       title: 'Oloco bicho!',
        //       message: 'Agendamento não realizado :(',
        //       type: 'is-danger',
        //     })
        //
        //     console.log(err)
        //   })
      }
    }
  }
</script>

<style scoped>

</style>
