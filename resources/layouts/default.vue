<template lang="pug">
  .default-root
    confox-navbar.navbar
    main
      nuxt


</template>

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
      height: calc(100vh - #{$navbar});
      box-shadow: 0px 0px 20px #bdbdbd;
      width: 100vw;
      overflow-y: scroll;

      @media (min-width: $tablet) and (max-width: $desktop){
        width: 80vw;
        height: calc(100vh - (#{$navbar} + 1.75em));
        border-radius: 5px;
      }

      @media (min-width: $desktop) {
        width: 80vw;
        position: relative;
        top: 1em;
        height: calc(100vh - (#{$navbar} + 4em));
        border-radius: 5px;
      }
    }
  }
</style>
