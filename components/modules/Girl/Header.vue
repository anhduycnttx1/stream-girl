<template>
  <div>
    <h1
      class="text-header font-bold text-center text-white py-2 border-t-[3px] border-[#ada1db]"
    >
      {{ title }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'HeaderGirlPage',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.text-header {
  background-image: linear-gradient(0deg, #ff748dfe 0%, #ff7daf 100%);
}
</style>
