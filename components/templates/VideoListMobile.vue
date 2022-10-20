<template>
  <!-- <carousel-3d
          :autoplay="false"
          :clickable="false"
          :disable3d="true"
          :width="228"
          :height="291"
          :display="3"
          :space="250"
        >
          <slide
            v-for="(i, index) of 7"
            :key="i"
            :index="index"
            class="!rounded-[10px] drop-shadow-[0_0_3px_rgba(43,43,43,0.98)]"
          >
            {{ index }}
          </slide>
        </carousel-3d> -->
  <div>
    <h1 class="text-lg font-bold ml-2">
      <img
        class="inline-block mr-1 mb-1 w-4"
        src="/icons/icon_li_sp.svg"
        alt=""
      />
      {{ title }}
    </h1>
    <div class="grid grid-cols-3 gap-3 mt-3" :class="styles">
      <div
        v-for="i of 3"
        :key="i"
        class="bg-slate-400 w-full h-auto rounded-[10px] cursor-pointer"
      >
        <img class="rounded-[10px]" src="@/assets/images/test_images-1.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '新着動画',
    },
    styles: {
      type: String,
      default: '',
    },
  },
}
</script>
