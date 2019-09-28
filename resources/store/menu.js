export const state = () => ({
  asideMenuIsOpen: false
});


export const mutations = {
  toggleAsideMenu(state) {
    state.asideMenuIsOpen = !state.asideMenuIsOpen
  }
};
