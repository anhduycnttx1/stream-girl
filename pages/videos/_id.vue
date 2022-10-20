<template>
  <div class="max-w-[85.375rem]">
    <div
      id="video"
      ref="videoElement"
      class="absolute bottom-0 top-0 max-md:left-0 max-md:right-0 md:top-28 md:w-full max-w-[85.375rem] flex"
    >
      <!-- Left menu -->
      <div class="w-[30%] max-md:hidden pr-[0.875rem]">
        <div
          class="mt-[1.125rem] flex items-center w-full rounded-[0.625rem] drop-shadow-[0_0_4.5px_rgba(0,0,0,21%)] bg-white py-[0.625rem] pl-[0.625rem]"
        >
          <img
            class="w-[6.5625rem] h-[135px] object-cover rounded-[0.625rem]"
            :src="author.avatar || 'https://via.placeholder.com/105x135'"
          />
          <detail-user
            class="w-[72.75%] ml-4"
            :has-button-work="false"
            :name="author.display_name || ''"
          />
        </div>
        <div
          class="grid justify-items-center w-full rounded-[0.625rem] drop-shadow-[0_0_4.5px_rgba(0,0,0,21%)] bg-white pt-[0.75rem] mt-4"
        >
          <base-span text="Gossip Girl" class="text-[#313131] font-bold mb-3" />
          <img src="~assets/images/shop-head.png" alt="" />
          <div class="mt-4 mb-[1.125rem] grid grid-cols-5 gap-y-2 gap-x-8">
            <base-span text="業種" class="col-span-2 text-right font-bold" />
            <base-span text="デリバリーヘルス" class="col-span-3" />
            <base-span text="地域" class="col-span-2 text-right font-bold" />
            <base-span text="千葉県・柏" class="col-span-3" />
            <base-span
              text="電話番号"
              class="col-span-2 text-right font-bold"
            />
            <base-span text="04-7170-2298" class="col-span-3" />
            <base-span
              text="営業時間"
              class="col-span-2 text-right font-bold"
            />
            <base-span text="9:00〜17:00" class="col-span-3" />
          </div>
        </div>
        <attendance-info class="mt-5" />
        <present-won class="mt-5" />
      </div>
      <!-- Video center -->

      <div
        v-show="!fetchState.pending && !fetchState.error"
        class="w-[40%] max-md:w-full relative"
      >
        <div class="absolute left-4 top-4 z-50 max-md:hidden">
          <h1 class="text-white font-bold">動画コメント</h1>
          <ul
            v-if="video"
            class="flex justify-start items-center flex-wrap text-sm text-white mt-2"
          >
            <li
              v-for="tag of video.tags"
              :key="tag.id"
              class="px-3 mr-2 rounded-[0.6875rem] bg-[rgba(183,183,183,0)] border border-solid border-white mt-1"
            >
              #{{ tag.label }}
            </li>
          </ul>
        </div>
        <div v-if="video" class="relative max-md:h-full">
          <video-player
            v-if="video.audience === 'public'"
            ref="videoPlayer"
            class="w-full max-md:h-full md:aspect-[549/977] object-cover video-style"
            :options="videoOption"
          >
          </video-player>
          <div
            v-else
            class="w-full max-md:h-full md:aspect-[549/977] object-cover video-style text-center"
          >
            <div
              class="w-full h-full absolute top-0 left-0 flex justify-center items-center flex-col backdrop-blur-2xl z-20"
            >
              <h1 class="text-[40px]">限定動画</h1>
              <p class="text-[30px] mt-[20%]">
                この動画はフォロワーのみ <br />再生できます
              </p>
            </div>
            <img
              class="rounded-t-md w-full object-cover absolute top-1/2 -translate-y-1/2 z-18"
              :src="video.thumbnail"
            />
          </div>
          <div class="absolute bottom-10 right-4">
            <div class="grid justify-end">
              <button @click="likeVideo(videoId)">
                <img
                  class="w-9 h-9 md:w-[3.8125rem] md:h-[3.8125rem] mr-2"
                  src="/icons/heart_button.svg"
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
                class="w-[4.6875rem] h-[4.6875rem] max-md:w-[3rem] max-md:h-[3rem] rounded-full bg-white grid items-center ml-4 mt-6 hover:bg-slate-300 focus:bg-slate-300"
                @click="openPresentModal"
              >
                <img
                  class="mx-auto max-md:w-[2rem] max-md:h-[2.25rem]"
                  src="/icons/present.svg"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>

        <div class="absolute w-[75%] top-3 left-3 md:hidden flex">
          <div class="h-[10%] w-[4.125rem] bg-slate-400 mr-1">
            <img class="w-full h-full block" :src="author.avatar" />
          </div>
          <div>
            <base-span
              text="動画コメントおはようございますおっぱ い( ੭´꒳`ᑦ )ﾑﾆﾑﾆ♡"
              class="text-white text-xs"
            />
          </div>
        </div>
        <button
          class="absolute top-3 right-3 md:hidden w-10 h-10 rounded-full bg-[rgba(0,0,0,0.4)] flex justify-center items-center"
          @click="redirectBack"
        >
          <img class="mx-auto" src="/icons/close.svg" alt="" />
        </button>
        <div class="absolute bottom-10 left-3 md:hidden">
          <div class="flex">
            <img class="w-3 mr-1" src="/icons/eye.svg" alt="" />
            <base-span text="601" class="text-white text-xs" />
          </div>
          <base-button text="+フォローする" classes="btn__follow-phone" />
        </div>

        <v-modal
          name="comment"
          style-hidden="translate"
          classes="w-full md:w-[38.625rem] max-md:bottom-0"
        >
          <comment-modal
            :comments="commentList.content"
            @comment="submitComment"
          />
        </v-modal>
        <v-modal
          name="present"
          classes="w-full md:w-[34.3125rem] max-md:bottom-0 "
          style-body="max-md:!bg-transparent"
        >
          <present-modal />
        </v-modal>
      </div>
      <div
        v-show="fetchState.error"
        class="w-[40%] max-md:w-full relative flex justify-center items-center text-2xl font-bold"
      >
        Not found
      </div>
      <!-- Right menu -->
      <div class="w-[30%] max-md:hidden pl-[0.875rem] pt-[1.125rem] pb-3">
        <div
          class="py-5 px-9 rounded-[0.625rem] drop-shadow-[0_0_4.5px_rgba(0,0,0,21%)] bg-white h-fit"
        >
          <div class="flex justify-between mb-[1.125rem]">
            <base-span
              :text="(author.display_name || '') + 'さんの他の動画'"
              class="text-[1.125rem] text-[#313131] font-bold"
            />
            <nuxt-link
              v-if="!fetchState.error"
              class="text-[1.125rem] text-[#ff9d9d] font-bold"
              :to="`/users/${author.id}/videos`"
              >一覧へ ></nuxt-link
            >
          </div>
          <div v-if="videoList" class="grid grid-cols-2 gap-3">
            <nuxt-link
              v-for="item of videoList.content"
              :key="item.id"
              :to="`/videos/${item.id}`"
              class="relative hover:outline outline-offset-2 outline-1 outline-black rounded-[0.3125rem]"
            >
              <img
                v-if="item.audience === 'public'"
                class="w-full aspect-[159/282] object-cover rounded-[5px]"
                :src="item.thumbnail"
              />
              <div
                v-else
                class="w-full max-md:h-full md:aspect-[549/977] object-cover video-style text-center rounded-[5px]"
              >
                <div
                  class="w-full h-full absolute top-0 left-0 flex justify-center items-center flex-col backdrop-blur-2xl z-20"
                >
                  <h1 class="text-xl">限定動画</h1>
                  <p class="mt-[20%]">
                    この動画はフォロワーのみ <br />再生できます
                  </p>
                </div>
                <img
                  class="rounded-t-md w-full object-cover absolute z-18"
                  :src="item.thumbnail"
                />
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  useFetch,
  ref,
  computed,
  useStore,
  useRoute,
  useRouter,
} from '@nuxtjs/composition-api'
import { useLike } from '~/compositions'
export default {
  name: 'WatchVideo',
  setup() {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    const videoId = route.value.params.id
    const videoOption = {
      autoplay: false,
      controls: true,
    }

    const video = ref(null)
    const videoList = ref(null)
    const author = ref({})
    const commentList = ref({ content: [] })
    const { fetchState } = useFetch(async ({ $store }) => {
      video.value = await $store.dispatch('media/getVideo', videoId)
      author.value = video.value.author
      videoList.value = await $store.dispatch('media/getVideosByAuthor', {
        id: author.value.id,
        params: { page: 0, size: 6 },
      })
      if (video.value) {
        playVideo(video.value.src, video.value.thumbnail)
      }
      commentList.value = await $store.dispatch('media/getComments', {
        id: videoId,
        params: { size: 50 },
      })
    })

    const videoPlayer = ref(null)
    const player = computed(() => videoPlayer.value?.player)
    function playVideo(source, poster) {
      if (videoPlayer.value) {
        const video = {
          withCredentials: false,
          type: 'application/x-mpegurl',
          src: source,
          poster,
        }
        player.value.src(video)
        player.value.poster(poster)
      }
    }

    async function submitComment(content) {
      if (!store.getters['auth/isAuthenticated']) {
        return alert('Login')
      }
      await store.dispatch('media/postComment', {
        videoId,
        data: {
          content,
          comment_parent: 0,
        },
      })
      commentList.value = await store.dispatch('media/getComments', {
        id: videoId,
        params: { size: 50 },
      })
    }

    const { loadingLike, errorLike, likeVideo } = useLike('media/like')

    function redirectBack() {
      if (window.history.length > 2) {
        router.back()
      } else {
        router.push('/')
      }
    }

    return {
      video,
      fetchState,
      videoId,
      author,
      videoOption,
      videoPlayer,
      videoList,
      commentList,
      errorLike,
      loadingLike,
      submitComment,
      playVideo,
      likeVideo,
      redirectBack,
    }
  },
  data() {
    return {
      down: false,
      y: 0,
    }
  },
  mounted() {
    const element = document.querySelector('#video')
    const router = this.$router
    const videoId = this.videoId
    if (element) {
      element.addEventListener('touchstart', function (e) {
        this.y = e.changedTouches[0].pageY
        this.down = true
      })
      element.addEventListener('touchend', function (e) {
        this.down = false
        this.y = 0
      })

      element.addEventListener('touchmove', function (e) {
        if (this.down) {
          const y = e.changedTouches[0].pageY
          if (y - this.y > 120) {
            return router.push(`/videos/${+videoId + 1}`)
          }
          if (this.y - y > 120) {
            return router.push(`/videos/${+videoId - 1}`)
          }
        }
      })
    }
  },
  methods: {
    openCommentModal() {
      this.$modal.open({ name: 'comment' })
    },
    openPresentModal() {
      this.$modal.open({ name: 'present' })
    },
  },
}
</script>

<style>
.video-style > div {
  width: 100%;
  height: 100%;
}

.vjs-text-track-display {
  display: none;
}

.vjs-big-play-button {
  top: 50% !important;
  left: 50% !important;
  transform: translateX(-50%) translateY(-50%);
}

.vjs-modal-dialog-content {
  display: none;
}

/* .vjs-control-bar {
  display: none;
} */
</style>

<style scoped>
.nuxt-link-exact-active {
  @apply outline outline-offset-2;
}
</style>
