<template>
  <section class="relative">
    <nuxt-link :to="to">
      <img class="absolute top-1/2 -translate-y-1/2" src="/icons/back.png" />
    </nuxt-link>

    <div class="flex justify-center items-center">
      <slot></slot>
      <h2 class="text-[#399bff] text-xl font-bold" :class="styleTitle">
        {{ title }}
      </h2>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    to: {
      type: String,
      default: '/profile',
    },
    styleTitle: {
      type: String,
      default: '',
    },
  },
}
</script>
