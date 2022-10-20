<template>
  <div>
    <div class="md:hidden mt-2">
      <div
        class="relative flex items-center justify-center h-[74px] rounded-sm shadow-md"
      >
        <h1 class="text-[27px] text-[#909090] max-sm:text-xl">
          表示条件を変更する
        </h1>
        <button @click="openCriteriaModal">
          <img
            class="absolute right-[4.5%] top-1/2 -translate-y-1/2 max-sm:w-10"
            src="/icons/setting_pink.svg"
          />
        </button>
      </div>
    </div>
    <div class="flex justify-between mt-2">
      <div class="w-1/4 max-md:hidden">
        <filter-card @clicked="search" />
      </div>
      <div :class="showResult ? 'hidden' : ''" class="w-[73%] max-md:w-full">
        <div class="border rounded-xl shadow-md max-md:mt-5">
          <div
            class="text-sm mr-[37px] flex justify-between my-[13px] ml-[16px]"
          >
            <div class="flex items-center">
              <img class="mr-[6px]" src="/icons/pink_dot.svg" />
              <h1 class="font-bold">人気の動画</h1>
            </div>
            <div class="flex font-bold">
              <p>さらに見る</p>
              <span class="ml-1">＞</span>
            </div>
          </div>
          <div class="pb-[17px] relative md:pl-[17px]">
            <video-slider
              id="人気の動画"
              class="w-full"
              classes-container="!w-[23%] max-md:!w-[40%]"
              classes="w-[95%]"
            />
            <div class="flex justify-center mt-[14px]">
              <button
                class="text-[25px] text-white bg-[#ff9292] rounded-full h-[55px] w-[221px] md:hidden"
              >
                もっと見る
              </button>
            </div>
          </div>
        </div>
        <div
          v-for="item in videos"
          :key="item.tag.id"
          class="border rounded-xl shadow-md mt-6 max-md:mt-3"
        >
          <div class="text-sm mr-[37px] flex justify-between my-3 ml-[16px]">
            <div class="font-bold flex items-center">
              <h2 class="text-[#fc85df]">#</h2>
              <h2 class="ml-2">{{ item.tag.label }}</h2>
            </div>
            <button
              class="flex max-md:hidden font-bold"
              @click="search({ tags: `${item.tag.label}` })"
            >
              <p>さらに見る</p>
              <p class="ml-1">＞</p>
            </button>
          </div>
          <div v-if="item" class="relative md:pl-4 md:pb-4">
            <video-slider
              :id="item.tag.label + item.tag.id"
              :list="item.list.content"
              class="w-full"
              classes-container="!w-[15%] max-md:!w-[23%]"
              classes="w-[95%]  h-[180px]"
              :with-info="false"
            />
          </div>
          <div class="flex justify-center my-2">
            <button
              class="text-md text-white bg-[#ff9292] rounded-full h-8 w-32 md:hidden"
              @click="search({ tags: `${item.tag.label}` })"
            >
              もっと見る
            </button>
          </div>
        </div>
      </div>
      <div
        class="w-[75%] max-md:w-full md:ml-5 px-5"
        :class="showResult ? '' : 'hidden'"
      >
        <h1 class="md:hidden mt-2 mb-5 ml-[1%] text-md font-bold">
          {{ result.query_for_display }}の検索結果
        </h1>
        <div class="grid grid-cols-3 gap-5 max-md:grid-cols-2">
          <div v-show="result.empty">No result</div>
          <div v-for="(item, index) in result.content" :key="index">
            <video-follow
              classes="w-full h-[400px] max-sm:h-[300px] sm-range:h-[580px] sm-range:w-[95%]"
              :video="item"
            />
          </div>
          <infinite-loading
            spinner="bubbles"
            @infinite="infiniteScroll"
            ref="InfiniteLoading"
          />
        </div>
      </div>
    </div>
    <v-modal
      name="criteria"
      classes="w-full h-[70%] bottom-0"
      style-hidden="translate"
      :close-button="false"
    >
      <criteria-modal @clicked="search" />
    </v-modal>
  </div>
</template>
<script>
import { ref, useFetch, useRouter, useStore } from '@nuxtjs/composition-api'
import { chunk } from '@/helper/chunk'
export default {
  name: 'SearchPage',
  setup() {
    const store = useStore()
    const router = useRouter()
    const query = ref({})
    const page = ref(0)

    const showResult = ref(false)
    const result = ref({})
    const videoTags = ref(null)
    const videos = ref([])
    window.onpopstate = function () {
      window.location.reload()
    }

    useFetch(async ({ $store, $route }) => {
      const urlParams = new URL(decodeURI(window.location.href)).searchParams
      const entries = urlParams.entries()
      query.value = {}
      for (const entry of entries) {
        query.value[entry[0]] = entry[1]
      }
      if (window.location.search !== '') {
        result.value = await $store.dispatch('video/getVideoByFilter', {
          page: page.value,
          size: 10,
          ...query.value,
        })
        showResult.value = true
      }

      videoTags.value = await $store.dispatch('video/getTag')
      const listChunk = chunk(videoTags.value, 3)

      for (const list of listChunk) {
        const res = (
          await Promise.all(
            list.map((tag) =>
              $store
                .dispatch('video/getVideoByTag', tag.label)
                .then((res) => ({ tag, list: res }))
            )
          )
        ).filter((e) => !e.list?.empty)
        videos.value.push(...res)
      }
    })

    async function search(Query) {
      page.value = 0
      window.scrollTo(0, 0)
      result.value = await store.dispatch('video/getVideoByFilter', {
        page: 0,
        size: 5,
        ...Query,
      })
      showResult.value = true
      query.value = Query
      if (Object.keys(Query).length === 0) {
        router.push({ path: '/videos/search', query: { all: 'true' } })
      } else {
        router.push({ query: Query })
      }
      this.$refs.InfiniteLoading.stateChanger.reset()
    }

    async function infiniteScroll($state) {
      page.value++
      const response = await store.dispatch('video/getVideoByFilter', {
        page: page.value,
        size: 10,
        ...query.value,
      })
      if (response.content.length !== 0) {
        result.value.content.push(...response.content)
        $state.loaded()
      } else {
        $state.complete()
      }
    }

    return {
      showResult,
      result,
      videoTags,
      videos,
      search,
      infiniteScroll,
      query,
    }
  },
  methods: {
    openCriteriaModal() {
      this.$modal.open({ name: 'criteria' })
    },
    closeCriteriaModal() {
      this.$modal.close({ name: 'criteria' })
    },
  },
}
</script>

<style scoped>
.border-right {
  @apply border-r border-r-[#b0b0b0];
}
</style>
