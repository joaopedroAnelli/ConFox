export const state = () => ({
  name: null,
  permissions: []
});

export const mutations = {

  set(state, name){
    state.name = name
  },

  setPermissions(state, permissions) {
    state.permissions = permissions
  }

};

export const actions = {

  login({ commit }, postData){
    this.$axios.post('/api/login', {email: 'joaopedroanelli99@gmail.com', password: '123mudar'});
    commit('set', postData.email);
    this.$router.push('/')
  },

  async logout({ commit }){
    // let swl = await this.$swal('Tem certeza que deseja sair do sistema?', {buttons: true});
    // if(!swl) return false;
    // await this.$axios.get('/api/v1/logout');
    commit('set', null);
    this.$router.push('/user/login')
  }

};
