<template>
  <div class="flex flex-col justify-center items-center mb-10">
    <h1 class="text-3xl font-bold mt-6">ランキング</h1>
    <div
      class="md:hidden bg-[#ffeef0] h-16 w-full flex items-center justify-center mt-4"
    >
      <p class="text-xl bg-white px-[5%] py-1">ジャンル一覧</p>
    </div>
    <div class="w-[100%] justify-between mt-5 flex max-md:hidden">
      <a class="w-[19%]" href="#plays"
        ><div
          class="text-sm h-[3.15rem] flex items-center justify-center"
          :class="{
            'bg-gradient-to-t from-[#ff9fac] text-white': choosing == 'plays',
          }"
          @click="jumpSection('plays')"
        >
          <p>総再生数</p>
        </div></a
      >
      <a class="w-[19%]" href="#genre">
        <div
          class="text-sm h-[3.15rem] flex items-center justify-center"
          :class="{
            'bg-gradient-to-t from-[#ff9fac] text-white': choosing == 'genre',
          }"
          @click="jumpSection('genre')"
        >
          <p>ジャンル別再生数</p>
        </div></a
      >
      <a class="w-[19%]" href="#likes">
        <div
          class="text-sm h-[3.15rem] flex items-center justify-center"
          :class="{
            'bg-gradient-to-t from-[#ff9fac] text-white': choosing == 'likes',
          }"
          @click="jumpSection('likes')"
        >
          <p>総いいね数</p>
        </div></a
      >
      <a class="w-[19%]" href="#girls">
        <div
          class="text-sm h-[3.15rem] flex items-center justify-center"
          :class="{
            'bg-gradient-to-t from-[#ff9fac] text-white': choosing == 'girls',
          }"
          @click="jumpSection('girls')"
        >
          <p>女の子</p>
        </div></a
      >
      <a class="w-[19%]" href="#stores">
        <div
          class="text-sm h-[3.15rem] flex items-center justify-center"
          :class="{
            'bg-gradient-to-t from-[#ff9fac] text-white': choosing == 'stores',
          }"
          @click="jumpSection('stores')"
        >
          <p>お店</p>
        </div></a
      >
    </div>
    <div class="md:hidden flex flex-col justify-center items-center">
      <h2 class="text-2xl flex font-bold my-3">
        <p class="text-[#f44bcb]">総再生数</p>
        ｜ランキング
      </h2>
      <card-slider
        v-if="viewRanking.length"
        id="plays-slider3"
        class="w-full"
        classes-container="!w-[40%]"
        :list="viewRanking"
      />
    </div>
    <div
      id="plays"
      class="flex flex-col justify-center items-center max-md:hidden"
    >
      <h2 class="text-2xl flex font-bold mt-10">
        <p class="text-[#f44bcb]">総再生数</p>
        ｜ランキング
      </h2>
      <div class="flex w-[100%] justify-center mt-6">
        <ranking-card
          v-for="(item, index) in viewRanking"
          :key="index"
          class="w-[24%] ml-[1%]"
          :info="item"
        />
      </div>
    </div>
    <div class="border-b border-[#929292] w-full md:mt-14"></div>
    <div class="md:hidden flex flex-col justify-center items-center">
      <h2 class="text-2xl flex font-bold my-3">
        <p class="text-[#f44bcb]">ジャンル別再生数</p>
        ｜ランキング
      </h2>
      <div v-for="(item, index) in genreRanking" :key="index">
        <h3 class="text-sm text-center font-bold">{{ item.genre }}</h3>
        <card-slider
          :id="'genre-slider' + index"
          class="w-full"
          classes-container="!w-[30%]"
          :list="item.list"
          type="sm"
        />
      </div>
    </div>
    <div
      id="genre"
      class="flex flex-col justify-center items-center max-md:hidden"
    >
      <h2 class="text-2xl flex font-bold mt-7">
        <p class="text-[#f44bcb]">ジャンル別再生数</p>
        ｜ランキング
      </h2>
      <div
        v-for="(item, index) in genreRanking"
        class="w-full mt-4"
        :key="index"
      >
        <h3 class="text-lg text-center font-bold">{{ item.genre }}</h3>
        <div class="flex justify-between mt-6">
          <ranking-card
            v-for="(girl, gIndex) in item.list"
            :key="gIndex"
            class="w-[24%]"
            :info="girl"
          />
        </div>
      </div>
    </div>
    <div class="border-b border-[#929292] w-full mt-3 md:hidden"></div>
    <div class="md:hidden flex flex-col justify-center items-center">
      <h2 class="text-2xl flex font-bold my-3">
        <p class="text-[#f44bcb]">総いいね数</p>
        ｜ランキング
      </h2>
      <card-slider
        v-if="likeRanking.length"
        id="plays-slider"
        class="w-full"
        classes-container="!w-[30%]"
        :list="likeRanking"
        type="sm"
      />
    </div>
    <div
      id="likes"
      class="flex flex-col justify-center items-center max-md:hidden"
    >
      <h2 class="text-2xl flex font-bold mt-14">
        <p class="text-[#f44bcb]">総いいね数</p>
        ｜ランキング
      </h2>
      <div class="flex w-full justify-between mt-6">
        <ranking-card
          v-for="(item, index) in likeRanking"
          :key="index"
          class="w-[24%]"
          :info="item"
        />
      </div>
    </div>
    <div class="border-b border-[#929292] w-full mt-14 max-md:mt-3"></div>
    <div class="md:hidden flex flex-col justify-center items-center">
      <h2 class="text-2xl flex font-bold my-3">
        <p class="text-[#f44bcb]">女の子</p>
        ｜ランキング
      </h2>
      <card-slider
        v-if="girlRanking.length"
        id="plays-slider1"
        class="w-full"
        classes-container="!w-[30%]"
        :list="girlRanking"
        type="sm"
      />
    </div>
    <div
      id="girls"
      class="flex flex-col justify-center items-center max-md:hidden"
    >
      <h2 class="text-2xl flex font-bold mt-10">
        <p class="text-[#f44bcb]">女の子</p>
        ｜ランキング
      </h2>
      <div class="flex w-full justify-between mt-6">
        <ranking-card
          v-for="(item, index) in girlRanking"
          class="w-[24%]"
          :info="item"
          :key="index"
        />
      </div>
    </div>
    <div class="border-b border-[#929292] w-full mt-14 max-md:mt-3"></div>
    <div class="md:hidden flex flex-col justify-center items-center">
      <h2 class="text-2xl flex font-bold my-3">
        <p class="text-[#f44bcb]">お店</p>
        ｜ランキング
      </h2>
      <card-slider
        v-if="shopRanking.length"
        id="plays-slider2"
        class="w-full"
        classes-container="!w-[30%]"
        :list="shopRanking"
        type="sm"
      />
    </div>
    <div
      id="stores"
      class="flex flex-col justify-center items-center max-md:hidden"
    >
      <h2 class="text-2xl flex font-bold mt-10">
        <p class="text-[#f44bcb]">お店</p>
        ｜ランキング
      </h2>
      <div class="flex w-full justify-between mt-6">
        <ranking-card
          v-for="(item, index) in shopRanking"
          class="w-[24%]"
          :info="item"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { ref, useStore, useFetch } from '@nuxtjs/composition-api'
export default {
  name: 'RankingPage',
  setup() {
    const store = useStore()

    const genreRanking = ref([])
    const girlRanking = ref([])
    const likeRanking = ref([])
    const viewRanking = ref([])
    const shopRanking = ref([])

    useFetch(async () => {
      const genres = await store.dispatch('ranking/getGenre')
      for (var genre of genres) {
        const getRank = await store.dispatch('ranking/getByGenre', genre.slug)
        genreRanking.value.push({
          genre: genre.label,
          list: getRank.content,
        })
      }
      const girls = await store.dispatch('ranking/getByGirl')
      girlRanking.value.push(...girls.content)
      const likes = await store.dispatch('ranking/getByLike')
      likeRanking.value.push(...likes.content)
      const views = await store.dispatch('ranking/getByView')
      viewRanking.value.push(...views.content)
      const shops = await store.dispatch('ranking/getByShop')
      shopRanking.value.push(...shops.content)
    })
    const choosing = ''
    return {
      girlRanking,
      likeRanking,
      genreRanking,
      viewRanking,
      shopRanking,
      choosing,
    }
  },
  methods: {
    jumpSection(section) {
      this.choosing = section
    },
  },
}
</script>
