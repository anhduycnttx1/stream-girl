<template>
  <div>
    <step-navbar
      class="mt-8"
      :text="['ポイント選択', '支払い方法の選択', '確認画面', '完了']"
      :step="1"
    />
    <div class="flex justify-between mt-8">
      <div class="w-[49%]">
        <point-card
          v-for="i in 4"
          :key="i"
          point="1,000"
          price="1,000"
          class="mt-2"
        />
      </div>
      <div class="w-[49%]">
        <point-card
          v-for="i in 4"
          :key="i"
          point="3,000"
          price="2,000"
          class="mt-2"
        />
      </div>
    </div>
    <div class="flex justify-center mt-12">
      <button
        class="h-16 font-bold text-2xl rounded-lg text-white bg-gradient-to-t from-[#ff748d] to-[#ff7daf] w-1/4"
      >
        次へ
      </button>
    </div>
    <p class="text-xs w-[44%] mx-auto mt-16 leading-4">
      注意事項など注意事項など注意事項など注意事項など注意事項など注意事項など
      注意事項など注意事項など注意事項など注意事項など注意事項など注意事項など
      注意事項など注意事項など注意事項など注意事項など注意事項など注意事項など
      注意事項など注意事項など注意事項など注意事項など注意事項など注意事項など
    </p>
    <p class="text-xs w-[44%] mx-auto mt-12 leading-4">
      注意事項など注意事項など注意事項など注意事項など注意事項など注意事項など
      注意事項など注意事項など注意事項など注意事項など注意事項など注意事項など
      注意事項など注意事項など注意事項など注意事項など注意事項など注意事項など
      注意事項など注意事項など注意事項など注意事項など注意事項など注意事項など
    </p>
  </div>
</template>

<script>
export default {
  name: 'PurchasePage',
}
</script>
