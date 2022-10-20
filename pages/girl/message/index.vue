<template>
  <div
    class="mt-5 text-[20px] text-[#373737] mb-12 px-5 max-sm:px-2 max-sm:text-sm"
  >
    <profile-menu
      title="メッセージ一覧"
      style-title="!text-[#ff25ba]"
      to="/girl"
    />
    <main>
      <div class="mt-10 px-3 mx-auto w-[70%] max-sm:w-[90%]">
        <input
          type="text"
          placeholder="名前で絞り込む"
          class="w-full bg-[#f8f8f8] border border-gray-800 px-5 py-[6px] rounded-md"
        />
      </div>
      <div>
        <div v-for="(item, index) in listRooms" :key="index">
          <nuxt-link
            :to="`/girl/message/${item.room_id}`"
            class="flex justify-center items-start py-6 border-b border-[#b2b2b2]"
          >
            <img
              class="w-[155px] h-[205px] max-sm:w-[25%] object-cover object-center max-w-[155px] max-h-[205px]"
              :src="item.icon_url"
            />
            <div class="ml-5 max-sm:ml-3">
              <div
                class="flex justify-between items-center mb-2 max-sm:mb-1 w-[95%]"
              >
                <h3 class="font-medium text-2xl max-sm:text-xl">
                  {{ item.title }}
                </h3>
                <span class="text-[#8e8e8e] text-sm flex-none mx-3">{{
                  formatTime(item.latest_message.created_at)
                }}</span>
              </div>
              <p class="leading-5 text-base">
                {{ item.latest_message.message }}
              </p>
            </div>
          </nuxt-link>
        </div>
        <div v-if="$fetchState.pending">
          <div class="my-10 flex w-full justify-center">
            <img
              class="animate-spin w-10 h-10 mx-5"
              src="@/assets/icons/loading.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref, useStore, useFetch } from '@nuxtjs/composition-api'
import { formatTime } from '~/helper/formatTime'
export default {
  name: 'MessageGirlPage',
  middleware: 'auth-girl',
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
