<template>
  <div>
    <carousel-3d
      :autoplay="false"
      :clickable="true"
      :width="721"
      :height="406"
      :perspective="0"
      :space="250"
      :controls-visible="true"
      controls-prev-html="<img src='/icons/prev_home.svg' class='control-button-prev'/>"
      controls-next-html="<img src='/icons/next_home.svg' class='control-button-next'/>"
    >
      <slide
        v-for="(i, index) of 7"
        :key="i"
        :index="index"
        class="!rounded-[10px] drop-shadow-[0_0_3px_rgba(43,43,43,0.98)] opacity-60"
      >
        <div class="w-full h-full bg-black rounded-[10px] relative">
          <div class="w-[228px] h-full bg-green-300">{{ index }}</div>
          <article v-if="type === 1" class="absolute top-4 left-4 hidden">
            <div class="flex">
              <img
                class="max-w-[82px] mr-4 border-2 border-[#afafaf]"
                src="@/assets/images/avatar_home.png"
              />
              <div>
                <h2 class="text-white">みくる(20)</h2>
                <button
                  class="text-white text-[12px] rounded-[5px] bg-[#ff25b9] px-[6px] block my-2"
                >
                  デリヘル
                </button>
                <button class="text-[12px] rounded-[10px] bg-white px-2">
                  + フォローする
                </button>
              </div>
            </div>
            <div
              class="ml-5 mt-5 text-[12px] text-white rounded-[5px] w-44 px-4 py-1 bg-[#272727]"
            >
              <div class="flex justify-between">
                <p class="flex items-center">
                  <img
                    class="!w-[10px] mr-1"
                    src="/icons/icon_follow_home.svg"
                    alt=""
                  />
                  フォロワー
                </p>
                <span>1.2K</span>
              </div>
              <p class="mt-5">
                コメントコメントコメント<br />
                コメントコメント。
              </p>
            </div>
          </article>
          <p
            v-if="type === 2"
            class="absolute top-2 left-5 text-[12px] text-white z-50 hidden"
          >
            コメントコメントコメントコメントコメント。
          </p>
          <ul
            v-if="type === 2"
            class="absolute bottom-3 right-1 text-sm text-[#fefefe] w-44 flex-wrap justify-end hidden"
          >
            <li>
              <span>#おっぱい </span>
            </li>
            <li>
              <span>#乳首 </span>
            </li>
            <li>
              <span>#巨乳 </span>
            </li>
            <li>
              <span>#SMプレイ</span>
            </li>
            <li>
              <span>#ムチ</span>
            </li>
          </ul>
        </div>
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
  components: {
    Carousel3d,
    Slide,
  },
  props: {
    type: {
      type: Number,
      default: 1,
    },
  },
}
</script>

<style scoped>
.current > div {
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
}

.current > div > article {
  display: block;
}

.current > div > ul {
  display: flex;
}

.current > div > p {
  display: inline-block;
}

div[class*='right'] > div {
  display: flex;
  justify-content: flex-end;
}

.right-2 {
  transform: translateX(380px) translateZ(-500px) rotateY(0deg) !important;
}

.left-2 {
  transform: translateX(-380px) translateZ(-500px) rotateY(0deg) !important;
}

.items-container > div:last-child {
  border-bottom: none !important;
}

ul > li {
  @apply mr-2;
}
</style>

<style>
.control-button-prev {
  @apply absolute left-[238%];
}

.control-button-next {
  @apply absolute right-[238%];
}
</style>
