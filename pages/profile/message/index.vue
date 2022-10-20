<template>
  <div class="w-[45rem] m-auto max-sm:w-full">
    <profile-menu title="メッセージ一覧" />

    <div class="mt-10 px-3">
      <input
        type="text"
        placeholder="キャスト名で絞り込む"
        class="w-full bg-[#f8f8f8] border border-gray-800 px-5 py-2 rounded-md text-[0.75rem]"
      />
    </div>
    <div v-for="(item, index) in listRooms" :key="index">
      <nuxt-link :to="`/profile/message/${item.room_id}`">
        <div
          class="flex justify-between items-center py-6 border-b border-[#b2b2b2]"
        >
          <div class="w-1/6">
            <img
              class="w-[5.4rem] h-[7.3rem] rounded-md object-cover object-center"
              :src="item.icon_url"
              alt=""
            />
          </div>
          <div class="w-5/6">
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <h3 class="font-bold">{{ item.title }}</h3>
                <span class="text-sm ml-3 mr-5">{{ item.topic }}</span>
                <span
                  v-if="item.attack"
                  class="bg-red-300 text-white px-3 py-1 rounded-full text-sm"
                  >アタック受信 !</span
                >
              </div>
              <span class="text-[0.75rem] text-[#8e8e8e]">{{
                formatTime(item.latest_message.created_at)
              }}</span>
            </div>
            <p class="text-[0.75rem] text-[#373737] mt-2">
              {{ item.latest_message.message }}
            </p>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { ref, useStore, useFetch } from '@nuxtjs/composition-api'
import { formatTime } from '~/helper/formatTime'
export default {
  name: 'MessagePage',
  middleware: 'auth',
  setup() {
    const store = useStore()
    const listRooms = ref([])

    useFetch(async () => {
      await store.dispatch('rooms/getActionRooms')
      listRooms.value = store.state.rooms.rooms
    })
    return { listRooms, formatTime }
  },
}
</script>
