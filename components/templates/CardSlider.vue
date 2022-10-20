<template>
  <div :id="id" class="swiper">
    <div class="swiper-wrapper">
      <div
        v-for="item in list"
        :key="id + item.id"
        class="swiper-slide"
        :class="classesContainer"
      >
        <div class="relative text-[0.75rem] rounded-lg w-[95%]">
          <ranking-card
            class="rounded-[5px] w-full"
            :info="item"
            :type="type"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper, { Navigation } from 'swiper'

export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop

    classesContainer: {
      type: String,
      default: '!w-36',
    },
    list: {
      type: Array,
      default: () => [''],
    },
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'md',
    },
  },
  mounted() {
    Swiper.use([Navigation])

    // eslint-disable-next-line no-new
    new Swiper(`#${this.id}`, {
      direction: 'horizontal',
      slidesPerView: 'auto',
      loop: true,
      // remove unused modules if needed
      modules: [Navigation],
      // Navigation arrows if needed
      navigation: {
        nextEl: `#swiper-button-next-${this.id}`,
        prevEl: `#swiper-button-prev-${this.id}`,
      },
    })
  },
}
</script>
