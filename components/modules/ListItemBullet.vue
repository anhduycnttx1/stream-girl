<template>
  <div class="flex items-start">
    <div class="flex w-[130px] max-md:w-[50%] justify-between items-start">
      <div
        class="flex md:items-center max-md:w-[85%] max-md:items-start max-md:justify-between"
      >
        <div
          class="md:w-[16px] max-md:w-[15%] max-md:h-7 max-md:flex max-md:items-center"
        >
          <img
            class="w-full"
            :src="
              bullet == 'map' ? '/icons/map_icon.svg' : '/icons/pink_dot.svg'
            "
          />
        </div>
        <p
          class="max-md:w-[80%] md:ml-[12px] md:font-bold text-base max-md:text-lg max-md:font-Hiramaru"
        >
          {{ title }}
        </p>
      </div>
      <p class="max-md:text-lg text-base max-md:font-Hiramaru">:</p>
    </div>
    <p
      class="ml-[5px] text-base max-md:w-[65%] max-md:text-lg max-md:font-Hiramaru"
    >
      {{ info }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
    bullet: {
      type: String,
      required: true,
    },
  },
}
</script>
