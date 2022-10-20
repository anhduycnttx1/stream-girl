<template>
  <div class="w-full">
    <carousel-3d
      :loop="false"
      :disable3d="true"
      :controls-visible="true"
      :perspective="0"
      :space="216"
      :width="200"
      controls-next-html="<div class='w-[1.5625rem] h-[1.5625rem] rounded-full bg-slate-400 mt-3 relative'><span class='absolute text-base left-[0.5625rem] text-white'>&#10095;</span></div>"
      controls-prev-html="<div class='w-[1.5625rem] h-[1.5625rem] rounded-full bg-slate-400 mt-3 relative'><span class='absolute text-base right-[0.5625rem] text-white'>&#10094;</span></div>"
    >
      <slide class="main-slide" :index="0"> </slide>
      <slide :index="1"> </slide>
      <slide :index="2"> </slide>
      <slide :index="3"> </slide>
      <slide :index="4"> </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'
export default {
  components: { Carousel3d, Slide },
}
</script>
