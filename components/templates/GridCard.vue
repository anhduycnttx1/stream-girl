<template>
  <div class="border-[1px] rounded-lg">
    <div class="font-bold text-[18px] text-center my-[10px]">女の子一覧</div>
    <div class="flex flex-wrap justify-center">
      <base-image-frame
        v-for="(item, index) in list"
        :key="index"
        type="avatar"
        classes="grid-avatar"
        class="m-[2px]"
      />
    </div>
    <div class="flex justify-center">
      <button
        class="w-[123px] h-[33px] bg-[#ff9d9d] text-white rounded-lg my-[5px]"
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
