<template>
  <div class="border rounded-xl shadow-md">
    <div
      class="text-sm mr-[37px] flex justify-between"
      :class="mobile ? 'my-[17px] ml-[32px]' : 'my-[13px] ml-[16px]'"
    >
      <div class="flex items-center">
        <img
          v-if="bullet === 'dot'"
          :class="mobile ? 'h-[22px] mr-[9px] ' : 'mr-[6px]'"
          src="/icons/pink_dot.svg"
        />
        <img
          v-if="bullet === 'sharp'"
          :class="mobile ? 'h-[24px] mr-[13px]' : 'mr-[6px]'"
          src="/icons/sharp.svg"
        />
        <div class="font-bold" :class="mobile ? 'text-[31px]' : ''">
          {{ label }}
        </div>
      </div>
      <div v-show="!mobile" class="flex">
        <div>さらに見る</div>
        <div>></div>
      </div>
    </div>
    <div
      v-if="withInfo"
      class="pb-[17px] relative"
      :class="mobile ? 'pl-[4px]' : 'pl-[17px]'"
    >
      <div class="swiper">
        <div class="swiper-wrapper">
          <div
            v-for="(item, index) of list"
            :key="item.name + index"
            class="swiper-slide"
            :class="mobile ? '!w-[305px]' : '!w-[166px]'"
          >
            <image-frame-with-info
              :class="mobile ? 'w-[285px]' : 'w-[156px]'"
              :mobile="mobile"
              :info="item"
            />
          </div>
        </div>
        <div class="swiper-button-prev after:!content-[''] !w-[40px]">
          <!-- <img src="/icons/next_button.svg" /> -->
        </div>
        <div
          v-show="!mobile"
          class="swiper-button-next after:!content-[''] !w-[40px]"
        >
          <img src="/icons/next_button.svg" />
        </div>
      </div>
      <div class="flex justify-center mt-[14px]">
        <button
          v-show="mobile"
          class="text-[25px] text-white bg-[#ff9292] rounded-full h-[55px] w-[221px]"
        >
          もっと見る
        </button>
      </div>
    </div>
    <div v-if="!withInfo" class="pb-[17px]" :class="mobile ? '' : 'pl-[17px]'">
      <div class="swiper">
        <div class="swiper-wrapper">
          <div
            v-for="(item, index) of list"
            :key="item + index"
            class="swiper-slide"
            :class="mobile ? '!w-[166px]' : '!w-[110px]'"
          >
            <base-image-frame
              type="thumbnail"
              :classes="mobile ? 'small-thumbnail-mobile' : 'small-thumbnail'"
            />
          </div>
        </div>
        <div class="swiper-button-prev after:!content-[''] !w-[40px]">
          <!-- <img src="/icons/next_button.svg" /> -->
        </div>
        <div
          v-show="!mobile"
          class="swiper-button-next after:!content-[''] !w-[40px]"
        >
          <img src="/icons/next_button.svg" />
        </div>
      </div>
      <div class="flex justify-center mt-[16px]">
        <button
          v-show="mobile"
          class="text-[25px] text-white bg-[#ff9292] rounded-full h-[55px] w-[221px]"
        >
          もっと見る
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Navigation } from 'swiper'
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    bullet: {
      type: String,
      default: '',
    },
    list: {
      type: Array,
      required: true,
    },
    withInfo: {
      type: Boolean,
      default: false,
    },
    mobile: {
      type: Boolean,
      default: false,
    },
  },
  data: () => {
    return {}
  },
  mounted() {
    // configure Swiper to use modules. The modules were tested with SwiperJS v6.8.4 with NuxtJS v2.15.7
    // previously it was before export default. Moved here for performance issues. Move back in case of problems.
    // add or remove unused modules
    Swiper.use([Navigation])

    // init Swiper:
    /* eslint-disable no-unused-vars */
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      // @see https://swiperjs.com/swiper-api#parameters
      direction: 'horizontal',
      slidesPerView: 'auto',
      loop: true,
      // remove unused modules if needed
      modules: [Navigation],
      // Navigation arrows if needed
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // Configure other options. Not tested
    })
  },
}
</script>
