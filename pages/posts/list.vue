<template>
  <div
    class="w-full mt-5 flex justify-between items-start max-md:justify-center text-[#1b1b1b]"
  >
    <!-- video  -->
    <div class="max-md:w-[98%] w-[72%] posts">
      <post-list
        action="media/getPost"
        type="post"
        :params="{
          size: 10,
          sort: 'desc',
        }"
      />
    </div>

    <div class="max-md:hidden w-[25%] rounded-[10px] shadow-[0_0_5px_rgba(0,0,0,0.2)] right">
      <div
        class="text-white font-bold h-[60px] bg-[#ff9d9d] rounded-t-[5px] flex justify-center items-center"
      >
        <h1 class="">ピックアップユーザー</h1>
      </div>
      <ul>
        <li
          v-for="(item, index) in listUser.content"
          :key="'listUser' + index"
          class="h-[100px] pl-3 flex items-center border-b-[1px] border-[#d1d1d1] cursor-pointer"
          @click="moveToGirlProfile"
        >
        <div class="bg-gradient-to-b from-sky-400 to-pink-300 p-[3px] w-fit rounded-full">
          <img
            class="w-[55px] h-[55px] rounded-full object-cover"
            :src="item.avatar"
            alt=""
          />
          </div>
          <div class="flex justify-center flex-col ml-3">
            <h2 class="text-2xl font-bold">{{ item.display_name }}</h2>
            <span class="text-sm">{{ item.meta.shop_name }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { ref, useFetch, useRouter, useStore } from '@nuxtjs/composition-api'
export default {
  name: 'VideoListPage',
  setup() {
    const store = useStore()
    const router = useRouter()
    const listUser = ref([])

    useFetch(async () => {
      listUser.value = await store.dispatch('trend/getTrendUser', {
        page: 0,
        size: 7,
      })
      const listPost = await store.dispatch('media/getPost', {
        page: 0,
        size: 7,
      })
    })

    function moveToGirlProfile(id) {
      router.push('/girlprofile')
    }

    return {
      listUser,
      moveToGirlProfile,
    }
  },
}
</script>
