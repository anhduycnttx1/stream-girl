<template>
  <div>
    <img
      v-if="type === 'avatar'"
      id="avatar_preview"
      :class="classes || type"
      :src="imageSrc || require('@/assets/images/default_avatar.png')"
      :alt="type"
    />
    <img
      v-if="type === 'thumbnail' || type === 'thumbnail-mobile'"
      id="thumbnail"
      :class="classes || type"
      :src="imageSrc || require('@/assets/images/default_image.jpg')"
      :alt="type"
    />
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      required: true,
    },
    classes: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.avatar {
  @apply w-[208px] h-[208px] object-cover rounded-full mx-auto;
}

.small-avatar {
  @apply w-[29px] h-[38px] object-cover rounded-lg mx-auto;
}

.small-avatar-mobile {
  @apply w-[45px] h-[60px] object-cover rounded-lg mx-auto;
}

.grid-avatar {
  @apply w-[73px] h-[98px] object-cover rounded-lg mx-auto;
}

.work-avatar {
  @apply w-full aspect-[160/205] object-cover rounded-lg mx-auto;
}

.thumbnail-mobile {
  @apply h-[504px] object-cover rounded-2xl;
}

.thumbnail {
  @apply h-[277px] object-cover rounded-lg;
}

.small-thumbnail-mobile {
  @apply w-[156px] h-[276px] object-cover rounded-lg;
}

.small-thumbnail {
  @apply w-[102px] h-[179px] object-cover rounded-lg;
}
</style>
