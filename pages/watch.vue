<template>
  <div class="max-w-[85.375rem]">
    <div
      class="absolute bottom-0 top-0 max-md:left-0 max-md:right-0 md:top-28 md:w-full max-w-[85.375rem] flex"
    >
      <!-- Left menu -->
      <div class="w-[30%] max-md:hidden pr-[0.875rem]">
        <basic-info class="mt-[1.125rem]" />
        <contact-info-card class="mt-[1.375rem]" />
        <attendance-info class="mt-5" />
        <present-won class="mt-5" />
      </div>
      <!-- Video center -->
      <div class="w-[40%] max-md:w-full relative bg-orange-400">
        <div class="absolute bg-black left-0 right-0 bottom-0 top-0 grid">
          <video
            class="absolute w-full h-full object-cover"
            loop
            controls
            :src="videoSrc"
          ></video>
          <div class="absolute mt-4 ml-4 max-md:hidden">
            <base-span class="text-white font-bold" text="動画コメント" />
            <div class="flex mt-3">
              <div
                class="px-3 mr-2 rounded-[0.6875rem] bg-[rgba(183,183,183,0)] border border-solid border-white"
              >
                <base-span
                  text="# ハッシュタグ"
                  class="text-white text-[0.875rem]"
                />
              </div>
              <div
                class="px-3 mr-2 rounded-[0.6875rem] bg-[rgba(183,183,183,0)] border border-solid border-white"
              >
                <base-span
                  text="# ハッシュタグ"
                  class="text-white text-[0.875rem]"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="absolute h-full w-[75%] top-3 left-3 md:hidden flex">
          <div class="h-[10%] w-[4.125rem] bg-slate-400 mr-1">
            <img class="w-full h-full block" src="" alt="" />
          </div>
          <div>
            <base-span
              text="動画コメントおはようございますおっぱ い( ੭´꒳`ᑦ )ﾑﾆﾑﾆ♡"
              class="text-white text-xs"
            />
          </div>
        </div>
        <nuxt-link to="./" class="absolute top-3 right-3 md:hidden">
          <button
            class="w-10 h-10 rounded-full bg-[rgba(0,0,0,0.4)] grid items-center"
          >
            <img class="mx-auto" src="/icons/close.svg" alt="" />
          </button>
        </nuxt-link>
        <div class="absolute bottom-3 left-3 md:hidden">
          <div class="flex">
            <img class="w-3 mr-1" src="/icons/eye.svg" alt="" />
            <base-span text="601" class="text-white text-xs" />
          </div>
          <base-button text="+フォローする" classes="btn__follow-phone" />
        </div>
        <div class="absolute bottom-3 right-4">
          <div class="grid justify-end">
            <button
              class="w-9 h-9 md:w-[3.8125rem] md:h-[3.8125rem] mr-2 rounded-full bg-pink-400 grid items-center"
            >
              <img
                class="mx-auto max-md:w-[1.5rem] max-md:h-[1.25rem]"
                src="/icons/heart.svg"
                alt=""
              />
            </button>
          </div>
          <div class="flex items-baseline">
            <button
              class="w-9 h-9 md:w-[3.3125rem] md:h-[3.3125rem] rounded-full bg-[rgba(0,0,0,0.4)] grid items-center"
              @click="openCommentModal"
            >
              <img
                class="mx-auto max-md:w-[1.375rem] max-md:h-[1.1875rem]"
                src="/icons/chat.svg"
                alt=""
              />
            </button>
            <button
              class="max-md:hidden w-[4.6875rem] h-[4.6875rem] max-md:w-[3rem] max-md:h-[3rem] rounded-full bg-white grid items-center ml-4 mt-6"
              @click="openPresentModal"
            >
              <img
                class="mx-auto max-md:w-[2rem] max-md:h-[2.25rem]"
                src="/icons/present.svg"
                alt=""
              />
            </button>
            <button
              class="md:hidden w-[3rem] h-[3rem] rounded-full bg-white grid items-center ml-4 mt-6"
              @click="openPresentMobileModal"
            >
              <img
                class="mx-auto w-[2rem] h-[2.25rem]"
                src="/icons/present.svg"
                alt=""
              />
            </button>
          </div>
        </div>
        <v-modal
          name="comment"
          classes="w-full md:w-[38.625rem] max-md:bottom-0"
        >
          <comment-modal />
        </v-modal>
        <v-modal
          name="present"
          classes="w-full md:w-[34.3125rem] max-md:bottom-0"
        >
          <present-modal />
        </v-modal>
        <v-modal
          name="present-phone"
          classes="w-full md:w-[34.3125rem] max-md:bottom-0 modal-body--transparent"
        >
          <present-modal />
        </v-modal>
      </div>
      <!-- Right menu -->
      <div class="w-[30%] max-md:hidden pl-[0.875rem] pt-[1.125rem] pb-3">
        <div
          class="py-5 px-9 rounded-[0.625rem] drop-shadow-[0_0_4.5px_rgba(0,0,0,21%)] bg-white h-full"
        >
          <div class="flex justify-between mb-[1.125rem]">
            <base-span
              text="なつみさんの他の動画"
              class="text-[1.125rem] text-[#313131] font-bold"
            />
            <nuxt-link class="text-[1.125rem] text-[#ff9d9d] font-bold" to=""
              >一覧へ ></nuxt-link
            >
          </div>
          <div class="grid grid-cols-2 grid-rows-3 h-[95%] gap-3">
            <button @click="openVideo">
              <img
                class="w-full h-full object-cover rounded-[0.3125rem]"
                src="https://media.istockphoto.com/photos/carefree-and-serene-young-asian-woman-relaxing-in-the-park-enjoying-picture-id1263084913?s=612x612"
                alt=""
              />
            </button>
            <div class="bg-[#272727] rounded-[0.3125rem]"></div>
            <div class="bg-[#272727] rounded-[0.3125rem]"></div>
            <div class="bg-[#272727] rounded-[0.3125rem]"></div>
            <div class="bg-[#272727] rounded-[0.3125rem]"></div>
            <div class="bg-[#272727] rounded-[0.3125rem]"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '~/components/atoms/BaseButton.vue'
import BaseSpan from '~/components/atoms/BaseSpan.vue'
export default {
  name: 'WatchVideo',
  components: { BaseSpan, BaseButton },
  data() {
    return {
      videoSrc:
        'https://assets.mixkit.co/videos/preview/mixkit-two-girls-walking-down-a-market-street-3566-large.mp4',
    }
  },
  methods: {
    openVideo() {
      this.videoSrc =
        'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4'
    },
    openCommentModal() {
      this.$modal.open({ name: 'comment' })
    },
    openPresentModal() {
      this.$modal.open({ name: 'present' })
    },
    openPresentMobileModal() {
      this.$modal.open({ name: 'present-phone' })
    },
  },
}
</script>
