<template lang="pug">
  .default-root
    confox-navbar.navbar
    main
      nuxt


</template>

<script>
export default {
  data () {
    return {
      middleware: 'auth'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .default-root
    min-height calc(100vh - 3.25rem)
    background-color #e5e5e5
    display flex
    justify-content center
    align-items center
</style>

<style lang="scss" scoped>
  .default-root {
    main {
      background-color: $white;
      min-height: calc(100vh - 3.25em);
      box-shadow: 0px 0px 20px #bdbdbd;
      width: 100vw;
      overflow-y: scroll;

      @media (min-width: $tablet) and (max-width: $desktop){
        width: 80vw;
        min-height: calc(100vh - 5em);
        border-radius: 5px;
      }

      @media (min-width: $desktop) {
        width: 80vw;
        min-height: calc(100vh - 10em);
        border-radius: 5px;
      }
    }
  }
</style>
