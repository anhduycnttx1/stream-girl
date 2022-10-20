<template>
  <div>
    <div class="text-[#262626] border border-black rounded-[5px] p-5 pb-10">
      <h2 class="text-lg font-bold tracking-wider">
        さがさnightからのお知らせ
      </h2>
      <ul class="text-sm mt-3">
        <li>
          <div class="flex items-center">
            <img class="mr-[5px]" src="/icons/icon_li.svg" alt="" />
            <h4>2021.09.10</h4>
          </div>
          <p>
            カスタマー夏期休業のお知らせ
            <span
              class="ml-10 inline-block border-b border-b-black cursor-pointer"
              @click="openDetailModal"
              >詳細を見る</span
            >
          </p>
        </li>
        <li class="mt-5">
          <div class="flex items-center">
            <img class="mr-[5px]" src="/icons/icon_li.svg" alt="" />
            <h4>2021.09.10</h4>
          </div>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキスト
            <span
              class="ml-10 inline-block border-b border-b-black cursor-pointer"
              @click="openDetailModal"
              >詳細を見る</span
            >
          </p>
        </li>
        <li class="mt-5">
          <div class="flex items-center">
            <img class="mr-[5px]" src="/icons/icon_li.svg" alt="" />
            <h4>2021.09.10</h4>
          </div>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキスト
            <span
              class="ml-10 inline-block border-b border-b-black cursor-pointer"
              @click="openDetailModal"
              >詳細を見る</span
            >
          </p>
        </li>
        <li class="mt-5">
          <div class="flex items-center">
            <img class="mr-[5px]" src="/icons/icon_li.svg" alt="" />
            <h4>2021.09.10</h4>
          </div>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキスト
            <span
              class="ml-10 inline-block border-b border-b-black cursor-pointer"
              @click="openDetailModal"
              >詳細を見る</span
            >
          </p>
        </li>
        <li class="mt-5">
          <div class="flex items-center">
            <img class="mr-[5px]" src="/icons/icon_li.svg" alt="" />
            <h4>2021.09.10</h4>
          </div>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキスト
            <span
              class="ml-10 inline-block border-b border-b-black cursor-pointer"
              @click="openDetailModal"
              >詳細を見る</span
            >
          </p>
        </li>
      </ul>
    </div>

    <!-- block 2 -->
    <div
      class="text-[#262626] border border-black rounded-[5px] p-5 pb-10 my-4"
    >
      <h2 class="text-lg font-bold tracking-wider">必ずお読み下さい</h2>
      <p class="text-sm mt-4">
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテ
        キストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキテキスト
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテ
        キストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキ
        ストテキテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテ
        キストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキ
        ストテキストテキストテキテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテ
        キストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキ
        ストテキストテキストテキストテキストテキテキストテキストテキスト。
      </p>
    </div>
    <v-modal name="detail-notify" :style-button="2" classes="w-[90%]">
      <div class="w-full px-20 mt-24 h-[500px]">
        <h2 class="text-2xl text-left">カスタマー夏期休業のお知らせ</h2>
        <p class="mt-24px">
          平素よりさがさnightをご愛顧いただきまことにありがとうございます。
        </p>
        <p class="mt-6">
          誠に勝手ながら、以下の期間についてカスタマーサポートの営業を休ませていただきます。
          ご迷惑をおかけしますが、ご容赦くださいますようお願いいたします。
        </p>
        <p class="text-[#ff6f6f] my-7">
          夏期休業期間 ： 2021年8月7日(土) - 2021年8月15日(日)
        </p>
        <p>
          ※期間内はメール受付、およびチャットボット対応のみとなります。
          いただきましたメールは16日(月)から順次ご対応させていただきます。
          チャットボットは下記FAQページ右下からご利用いただけます。
        </p>
      </div>
    </v-modal>
  </div>
</template>

<script>
export default {
  name: 'AdminPage',
  layout: 'admin',
  setup() {
    function openDetailModal() {
      this.$modal.open({ name: 'detail-notify' })
    }
    return { openDetailModal }
  },
}
</script>
