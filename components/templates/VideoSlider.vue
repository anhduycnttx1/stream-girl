<template>
  <div class="relative">
    <div :id="id" class="swiper">
      <div v-if="list.length" class="swiper-wrapper">
        <div
          v-for="video in list"
          :key="video.id"
          class="swiper-slide"
          :class="classesContainer"
        >
          <video-follow v-if="withInfo" :classes="classes" :video="video" />
          <div
            v-if="!withInfo"
            :class="['relative text-[0.75rem] text-white rounded-lg', classes]"
          >
            <nuxt-link :to="`/videos/${video.id}`">
              <img
                class="rounded-[5px] w-full h-full object-cover"
                :src="video.thumbnail"
              />
            </nuxt-link>
          </div>
        </div>
      </div>
      <div v-else class="swiper-wrapper">
        <div
          v-for="video in 10"
          :key="video"
          class="swiper-slide"
          :class="classesContainer"
        >
          <video-follow v-if="withInfo" :classes="classes" />
        </div>
      </div>
    </div>
    <div
      :id="'swiper-button-prev-' + id"
      class="swiper-button-prev after:!content-[''] !w-10 !-left-6 max-sm:!-left-2 max-md:!hidden"
    >
      <img src="/icons/pre_button.svg" />
    </div>
    <div
      :id="'swiper-button-next-' + id"
      class="swiper-button-next after:!content-[''] !w-10 !-right-2 max-md:!hidden"
    >
      <img src="/icons/next_button.svg" />
    </div>
  </div>
</template>

<script>
import Swiper, { Navigation } from 'swiper'

export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    classes: {
      type: String,
    },
    classesContainer: {
      type: String,
      default: '!w-36',
    },
    list: {
      type: Array,
      default: () => [],
    },
    id: {
      type: String,
      required: true,
    },
    withInfo: {
      type: Boolean,
      default: true,
    },
  },
  data: () => {
    return {
      swiper: null,
    }
  },
  mounted() {
    Swiper.use([Navigation])

    // eslint-disable-next-line no-new
    this.swiper = new Swiper(`#${this.id}`, {
      direction: 'horizontal',
      slidesPerView: 'auto',
      loop: false,
      // remove unused modules if needed
      modules: [Navigation],
      // Navigation arrows if needed
      navigation: {
        nextEl: `#swiper-button-next-${this.id}`,
        prevEl: `#swiper-button-prev-${this.id}`,
      },
    })
    if (this.list.length < 6) {
      this.swiper.loopDestroy()
    }
  },
}
</script>
