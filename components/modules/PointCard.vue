<template>
  <div
    class="shadow-md flex justify-between h-20 items-center px-[8%] rounded-lg"
  >
    <p class="text-2xl text-[#ff7777] font-bold">{{ point + 'P' }}</p>
    <div class="flex items-end">
      <div class="h-8 border-r border-[#c3c3c3] w-1"></div>
      <p class="text-lg ml-6">{{ price + '円' }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    point: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
}
</script>
