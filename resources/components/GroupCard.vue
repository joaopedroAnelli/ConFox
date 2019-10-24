<template lang="pug">
  .card.group-card(@click="$router.push(`/groups/3451345`)")
    .card-content
      article.media
        figure.media-left
          p.image.is-64x64
            img.is-rounded(src="https://bulma.io/images/placeholders/128x128.png")
        .media-content
          .content
            p
              strong(style="margin-right: 8px") Corredores em Taubaté
              small 898
              br
              Lorem ipsum dolor sit amet...
        .media-right
</template>

<script>
    export default {
        name: "GroupCard"
    }
</script>

<style scoped lang="scss">

  .group-card {
    cursor: pointer;
  }

</style>
