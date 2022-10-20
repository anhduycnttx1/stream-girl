<template>
  <base-link :key="link.icon" :href="link.href" classes="link--icon relative">
    <img :src="link.icon" :alt="link.text" />
    <span
      v-if="plus"
      class="text-2xl text-[#bbe8ff] font-bold absolute -top-4 right-2"
      >+</span
    >
    <span class="mt-2 text-sm text-[#212121]">{{ link.text }}</span>
  </base-link>
</template>
<script>
export default {
  props: {
    link: {
      type: Object,
      required: true,
    },
    plus: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
