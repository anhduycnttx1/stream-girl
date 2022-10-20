<template>
  <div class="border-[1px] rounded-lg">
    <div class="font-bold text-[18px] text-center my-[10px]">出勤</div>
    <div class="flex flex-wrap justify-center">
      <image-frame-with-info
        v-for="(item, index) in list"
        :key="index"
        :type="2"
        :info="item"
        class="m-[3px] w-[15.5%]"
      />
    </div>
    <div class="flex justify-center">
      <button
        class="w-[123px] h-[33px] bg-[#ff9d9d] text-white rounded-lg my-[16px]"
      >
        もっと見る
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
}
</script>
