<template>
  <div class="px-[12%] pt-3 py-2 max-md:max-h-[91vh] max-md:overflow-y-scroll">
    <section>
      <h2 class="text-sm font-bold mb-2">
        <span>遊ぶエリアを選択</span
        ><span class="text-[#ff2828] inline-block ml-3">※必須</span>
      </h2>
      <div class="grid grid-cols-4 gap-[5px] md:w-[78%] mx-auto">
        <button
          v-for="item of list1"
          :key="item"
          class="bg-[#d8d8d8] py-[6px] rounded-[5px]"
        >
          {{ item }}
        </button>
      </div>
    </section>
    <section class="mt-5">
      <h2 class="text-sm font-bold mb-2">
        <span>ご利用予定の場所</span>
      </h2>
      <div class="md:w-[78%] mx-auto">
        <input
          type="text"
          class="px-4 py-[5px] w-full border border-[rgba(150,150,150,0.99)] rounded-[5px] text-[#a7a7a7] text-sm"
          placeholder="ホテル・自宅・店舗型など"
        />
      </div>
    </section>
    <section class="mt-5">
      <h2 class="text-sm font-bold mb-2">
        <span>ご利用日時</span>
      </h2>
      <div class="md:w-[78%] mx-auto">
        <select
          class="pl-2 py-[5px] w-20 border border-[rgba(150,150,150,0.99)] rounded-[5px] text-sm font-bold bg-white mr-7"
        >
          <option value="1">本日</option>
        </select>
        <select
          class="pl-2 py-[5px] w-20 border border-[rgba(150,150,150,0.99)] rounded-[5px] text-sm font-bold bg-white"
        >
          <option value="1">12:00</option>
        </select>
      </div>
    </section>

    <section class="mt-5">
      <h2 class="text-sm font-bold">
        <span>好みのタイプを選択（複数選択可）</span>
      </h2>
      <h3 class="text-sm mt-1 mb-2">その1</h3>
      <div class="grid grid-cols-5 max-md:grid-cols-4 gap-[5px]">
        <button
          v-for="item of list2"
          :key="item"
          class="bg-[#d8d8d8] py-[6px] rounded-[5px] max-sm:text-sm"
        >
          {{ item }}
        </button>
      </div>

      <h3 class="text-sm mt-3 mb-2">その2</h3>
      <div class="grid grid-cols-5 max-md:grid-cols-4 gap-[5px]">
        <button
          v-for="item of list2"
          :key="item"
          class="bg-[#d8d8d8] py-[6px] rounded-[5px] max-sm:text-sm"
        >
          {{ item }}
        </button>
      </div>
    </section>
    <div class="text-center">
      <button
        class="max-md:w-[90%] rounded-[5px] border-2 border-[#ff25ba] mt-1"
      >
        <div
          class="bg-[#ff25ba] rounded-[5px] h-[88px] max-sm:h-12 flex justify-center items-center m-1"
        >
          <span
            class="text-[32px] sm-range:text-2xl max-sm:text-base text-white font-bold"
            >マッチングを始める</span
          >
          <img
            class="ml-14 max-sm:ml-5 w-[14px]"
            src="/icons/next_home.svg"
            alt=""
          />
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const list1 = [
      '栄町',
      '幕張',
      '市川',
      '東金',
      '市原',
      '木更津',
      '柏',
      '松戸',
    ]
    const list2 = [
      'スレンダー',
      '小柄',
      '長身',
      '美乳',
      '美脚',
      '美尻',
      '巨乳',
      'グラマー',
      'ギャル系',
      'モデル系',
      '現役学生',
      'ロリ',
      'ニューハーフ',
      '人妻系',
      'お姉さん',
      'パイパン',
      'アイドル系',
      'カワイイ',
      'セクシー',
      '萌',
      'キレカワ',
      'キレイ',
      '美少女',
      '美肌',
      '黒髪',
    ]
    return { list1, list2 }
  },
}
</script>
