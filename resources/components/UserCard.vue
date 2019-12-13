<template lang="pug">
  .card.user-card(@click="$router.push(`/chats/${user.id.low}`)")
    .card-content
      article.media
        //figure.media-left
          p.image.is-64x64
            img.is-rounded(src="https://bulma.io/images/placeholders/128x128.png")
        .media-content
          .content
            p
              strong(style="margin-right: 8px") {{ user['u.name'] }}
              br
              span {{user['u.email']}}
        .media-right
</template>

<script>
  export default {
    name: "UserCard",

    props: {
      user: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped lang="scss">

  .user-card {
    cursor: pointer;
  }

</style>
