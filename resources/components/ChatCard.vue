<template lang="pug">
  .card
    .card-content
      article.media
        figure.media-left
          p.image.is-64x64
            img.is-rounded(src="https://bulma.io/images/placeholders/64x64.png")
        .media-content
          .content
            p
              strong(style="margin-right: 8px") Fernando Souza
              br
              span.message Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        .media-right
          p
            small 08:07 da noite
</template>

<script>
    export default {
        name: "GroupCard"
    }
</script>

<style lang="scss" scoped>
  p {
    overflow: hidden;
  }
  .message {
    white-space: nowrap;
  }
</style>
