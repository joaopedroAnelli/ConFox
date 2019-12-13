<template lang="pug">
  .card.group-card(@click="$router.push(`/groups/${group.id.low}`)")
    .card-content
      article.media
        //figure.media-left
          p.image.is-64x64
            img.is-rounded(src="https://bulma.io/images/placeholders/128x128.png")
        .media-content
          .content
            p
              strong(style="margin-right: 8px") {{ group.name }}
              //small(v-if="group.weight") {{group.weight.low}} amigos em comum
              br
              span {{group.description}}
        .media-right
</template>

<script>
  export default {
    name: "GroupCard",

    props: {
      group: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped lang="scss">

  .group-card {
    cursor: pointer;
  }

</style>
