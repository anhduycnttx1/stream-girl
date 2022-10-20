<template>
  <div
    :class="[
      'shadow-[0_0_8.5px_rgba(0,0,0,0.15)] rounded-lg relative max-md:pb-[0.05rem]',
      { 'mb-7': type == 'md', 'mb-3 shadow-lg': type == 'sm' },
    ]"
  >
    <div
      :class="[
        'absolute top-2 left-[15%] ',
        {
          'w-8': type == 'base',
          'top-[0.15rem] left-[10%] w-4': type == 'md',
          'top-[0.1rem] left-[15%] w-3': type == 'sm',
        },
      ]"
    >
      <img v-if="info.rank == 1" class="w-full" src="/icons/top1.svg" alt="" />
      <img
        v-else-if="info.rank == 2"
        class="w-full"
        src="/icons/top2.svg"
        alt=""
      />
      <img
        v-else-if="info.rank == 3"
        class="w-full"
        src="/icons/top3.svg"
        alt=""
      />
      <img
        v-else-if="info.rank == 4"
        class="w-full"
        src="/icons/top4.svg"
        alt=""
      />
    </div>
    <p
      :class="[
        'font-bold text-center ',
        {
          'my-[0.3rem] text-sm': type == 'md',
          'text-xl my-2': type == 'base',
          'my-[0.3rem] text-[0.5rem]': type == 'sm',
        },
      ]"
    >
      {{ info.display_name }}
    </p>
    <div
      :class="[
        'bg-gradient-to-b from-[#f9d9dd] to-[#fdebed] pt-3 pb-1',
        {
          'pt-[0.4rem] pb-[0.1rem]': type == 'md',
          'pt-[0.3rem] pb-[0.1rem]': type == 'sm',
        },
      ]"
    >
      <img
        class="aspect-[199/112] object-cover w-[85%] mx-auto"
        :src="randomImage()"
        alt=""
      />
      <div
        :class="[
          'flex w-[85%] mx-auto font-bold text-sm',
          {
            'leading-3 mt-[0.1rem] text-[0.5rem]': type == 'md',
            'leading-[0.5rem] mt-[0.1rem] text-[0.4rem]': type == 'sm',
          },
        ]"
      >
        <div class="flex w-1/2">
          <img
            :class="[
              'w-2',
              { 'w-[0.4rem]': type == 'md', 'w-[0.3rem]': type == 'sm' },
            ]"
            src="/icons/human.svg"
            alt=""
          />
          <p class="ml-1">フォロワー</p>
        </div>
        <p>{{ process(info.follower_count) }}</p>
      </div>
      <div
        :class="[
          'flex w-[85%] mx-auto font-bold text-sm',
          {
            'leading-3 mt-[0.1rem] text-[0.5rem]': type == 'md',
            'leading-[0.5rem] mt-[0.1rem] text-[0.4rem]': type == 'sm',
          },
        ]"
      >
        <div class="flex w-1/2">
          <img
            :class="[
              'w-2',
              { 'w-[0.4rem]': type == 'md', 'w-[0.3rem]': type == 'sm' },
            ]"
            src="/icons/like_black.svg"
            alt=""
          />
          <p class="ml-1">いいね</p>
        </div>
        <p>{{ process(info.like_count) }}</p>
      </div>
      <p
        :class="[
          'text-xs text-right mr-2',
          {
            'leading-3 text-[0.5rem]': type == 'md',
            'leading-[0.5rem] text-[0.3rem]': type == 'sm',
          },
        ]"
      >
        {{ info.shop_name }}
      </p>
    </div>
    <p
      :class="[
        'text-xs text-center mt-2',
        {
          'mt-[0.1rem] text-[0.5rem]': type == 'md',
          'mt-[0.1rem] text-[0.4rem]': type == 'sm',
        },
      ]"
    >
      総再生数
    </p>
    <p
      :class="[
        'text-2xl font-bold text-center mb-2',
        {
          'leading-4 text-base': type == 'md',
          'leading-[0.5rem] text-xs': type == 'sm',
        },
      ]"
    >
      {{ process(info.total_views) }}
    </p>
  </div>
</template>
<script>
import { processNumber } from '../../helper/processNumber.js'
export default {
  props: {
    info: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      default: 'base',
    },
  },
  methods: {
    randomImage() {
      const img = [
        'https://s3.cloud.cmctelecom.vn/tinhte1/2018/09/4416085_TONG_HOP_HINH_ANH_GIRL_XINH-itcntt.com-1.jpg',
        'https://s3.cloud.cmctelecom.vn/tinhte1/2018/09/4416086_TONG_HOP_HINH_ANH_GIRL_XINH-itcntt.com-2.png',
        'https://s3.cloud.cmctelecom.vn/tinhte1/2018/09/4416087_TONG_HOP_HINH_ANH_GIRL_XINH-itcntt.com-3.jpg',
        'https://s3.cloud.cmctelecom.vn/tinhte1/2018/09/4416088_TONG_HOP_HINH_ANH_GIRL_XINH-itcntt.com-4.jpg',
        'https://s3.cloud.cmctelecom.vn/tinhte1/2018/09/4416089_TONG_HOP_HINH_ANH_GIRL_XINH-itcntt.com-5.jpg',
        'https://s3.cloud.cmctelecom.vn/tinhte1/2018/09/4416090_TONG_HOP_HINH_ANH_GIRL_XINH-itcntt.com-6.png',
        'https://s3.cloud.cmctelecom.vn/tinhte1/2018/09/4416091_TONG_HOP_HINH_ANH_GIRL_XINH-itcntt.com-7.jpg',
        'https://s3.cloud.cmctelecom.vn/tinhte1/2018/09/4416092_TONG_HOP_HINH_ANH_GIRL_XINH-itcntt.com-8.png',
        'https://s3.cloud.cmctelecom.vn/tinhte1/2018/09/4416093_TONG_HOP_HINH_ANH_GIRL_XINH-itcntt.com-9.jpg',
      ]
      return img[Math.floor(Math.random() * 100) % img.length]
    },
    process(number) {
      return processNumber(number)
    },
  },
}
</script>
