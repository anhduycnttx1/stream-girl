<template>
  <div
    class="text-[12px] px-[15px] py-[2px] bg-[#e7e7e7] rounded-full mr-[7px] font-bold"
  >
    #{{ name }}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
}
</script>
