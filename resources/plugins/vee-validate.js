import Vue from 'vue';
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import ptbr from 'vee-validate/dist/locale/pt_BR.json'

// Add the required rule
extend('required', required);

// Add the email rule
extend('email', email);

extend('password', {
  validate: (value, { other }) => value === other,
  params: [{ name: 'other', isTarget: true }]
});


localize({
  'ptbr': {
    ...ptbr,
    names: {
      name: 'nome',
      email: 'e-mail',
      password: 'senha',
      confirmation: 'confirmação'
    },
    fields: {
      password: {
        password: 'A confirmação não é igual a senha.'
      }
    }
  }
});

localize('ptbr');
// Register it globally
Vue.component('validation-provider', ValidationProvider);
Vue.component('validation-observer', ValidationObserver);
