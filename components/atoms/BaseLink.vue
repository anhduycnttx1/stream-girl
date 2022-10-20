<template>
  <nuxt-link :to="href" :class="classes"><slot></slot></nuxt-link>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
      default: '#',
    },
    classes: {
      type: String,
      default: 'link--pc',
    },
  },
}
</script>

<style scoped>
.link--pc {
  @apply text-white rounded-md  font-semibold;
}

.link--sp {
  @apply text-gray-300 hover:bg-gray-700 hover:text-white block  rounded-md  font-medium;
}

.link--icon {
  @apply flex flex-col items-center;
}
</style>
