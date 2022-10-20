<template>
  <div>
    <!-- PC -->
    <section
      class="rounded-[5px] border border-[#989898fc] flex mb-3 hidden md:flex"
    >
      <img
        :src="info.list_view_img_src"
        class="w-[26%] h-full rounded-[5px] object-fill"
      />
      <div class="w-[43%] px-6 pt-3 py-2">
        <h1 class="text-2xl font-bold">{{ info.display_name }}</h1>
        <div class="text-sm">
          <p class="my-2">{{ info.industory }} / {{ info.area }}</p>
          <p>
            <span>最安値</span>
            <span class="inline-block ml-3">{{ info.business_hours }}〜</span>
          </p>
          <p class="mt-2">
            <span>営業時間</span>
            <span class="inline-block ml-3">{{ info.business_hours }}</span>
          </p>
          <p class="text-base mt-2">
            特典説明特典説明特典説明特典説明
            <br />特典説明特典説明特典説明特典説明
          </p>
        </div>
      </div>
      <div class="w-[31%] border-l border-dashed border-[#989898fc]">
        <div
          class="bg-[url('/icons/icon_store_1.svg')] bg-no-repeat bg-cover text-center py-[7px] -ml-[2px] mt-3"
        >
          <h2 class="text-xl text-white">おすすめコース</h2>
        </div>

        <div class="ml-3">
          <h3 class="py-2">さがさnight見たで</h3>
          <div class="text-[34px] leading-10 text-[#ff0000] font-bold">
            <p>60分</p>
            <p>15,000円</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Moblie -->
    <section
      class="border-t border-b border-black mt-3 md:hidden text-[28px] max-sm:text-lg"
    >
      <h1
        class="ml-3 mb-3 mt-2 max-sm:my-1 text-4xl max-sm:text-[26px] font-bold"
      >
        {{ info.display_name }}
      </h1>
      <div class="flex items-start text-2xl max-sm:text-base">
        <img
          :src="info.list_view_img_src"
          class="w-[26%] max-sm:w-[30%] rounded-[5px] object-cover mr-3 max-sm:mr-2"
        />
        <div>
          <div class="rounded-[5px] bg-[#ffe3e3] px-4 w-fit">
            {{ info.industory }} / {{ info.area }}
          </div>
          <p class="mt-3 w-full grid grid-cols-2 items-center">
            <span>最安値</span>
            <span class="-ml-5">50分12,000円〜</span>
          </p>
          <p class="-mt-2 w-full grid grid-cols-2 items-center">
            <span>営業時間</span>
            <span class="-ml-5">{{ info.business_hours }}</span>
          </p>
          <p class="text-2xl max-sm:text-base mt-2">
            {{ info.discount_description }}
          </p>
        </div>
      </div>
      <div
        class="bg-[url('/icons/icon_store_1_sp.svg')] bg-no-repeat bg-cover py-[2px] -ml-[1px] mt-3"
      >
        <h2 class="text-xl max-sm:text-sm text-white ml-8">おすすめコース</h2>
      </div>
      <div class="flex justify-center items-center max-sm:py-2">
        <p class="text-2xl max-sm:text-base mr-[6.5%]">● さがさnight見たで</p>
        <p class="text-[#ff0000] font-bold text-[42px] max-sm:text-[30px]">
          {{ info.lowest_course }}
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'StoreCard',
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
  setup({ info }) {
    return info
  },
}
</script>
