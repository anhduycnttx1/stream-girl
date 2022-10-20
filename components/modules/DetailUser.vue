<template>
  <div class="text-[#313131] text-sm">
    <div class="flex items-center text-[#313131] mt-2 border-b pb-1">
      <img src="/icons/icon_star.svg" />
      <h2 class="text-lg font-bold">
        {{ name }}<span class="text-sm font-normal">(20)</span>
      </h2>
    </div>
    <h3 class="mt-2">T.160 B.80(A) W.50 H.80</h3>
    <ul>
      <li class="flex">
        <div class="w-[55%] flex items-center">
          <img class="mr-2" src="/icons/upper_body-2-p16.svg" />
          <span>フォロワー</span>
        </div>
        <span>1.2K</span>
      </li>
      <li class="flex">
        <div class="w-[55%] flex items-center">
          <img class="mr-2" src="/icons/icon_106210 のコピー 5.svg" />
          <span>いいね</span>
        </div>
        <span>888</span>
      </li>
      <li>
        <div>
          <button
            class="bg-[#ff638f] my-1 py-[0.375rem] px-[1.125rem] rounded-2xl text-white font-bold"
          >
            +フォロー
          </button>
          <button
            class="bg-[#577fff] my-1 py-[0.375rem] px-[1.125rem] rounded-2xl text-white font-bold"
          >
            Twitterでフォロー
          </button>
          <button
            v-if="hasButtonWork"
            class="button--gradient my-1 py-[0.375rem] px-[1.125rem] rounded-2xl text-white font-bold"
          >
            本日出勤中
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    hasButtonWork: {
      type: Boolean,
      default: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.button--gradient {
  background-image: linear-gradient(17deg, #fd5391fe 0%, #f76f64 100%);
}
</style>
