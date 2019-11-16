import Vue from 'vue'
import moment from 'moment'

Vue.mixin({
  methods:{

    $formatDatetime(datetime, format){
      return moment(datetime).format(format)
    },

    $formatPhone(phone, lang) {
      let masked
      switch (lang) {
        case 'pt-br':
          masked = phone.replace('($1) ')
      }
    },

    $formatMoney(money, lang) {
      if (typeof money === String) {
        money = parseFloat(money)
      }


      let masked;

      switch (lang) {
        case 'pt-br':
          let regex;
          let mask;
          if (money < 1000) {
            regex = /(\d+)(\d{2})/
            mask = "$1,$2"
          } else {
            regex = /(\d+)(\d{3})(\d{2})/
            mask = "$1.$2,$3"
          }


          masked = 'R$ ' + money
            .toFixed(2)
            .replace(/[^\d]+/g,'')
            .replace(regex, mask);
      }

      return masked
    }
  }
})
