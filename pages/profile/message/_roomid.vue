<template>
  <div class="w-[45rem] m-auto max-sm:w-full">
    <section class="relative mt-2">
      <nuxt-link to="/profile/message">
        <img class="absolute top-1/2 -translate-y-1/2" src="/icons/back.png" />
      </nuxt-link>
      <div class="flex justify-end items-end">
        <div class="flex items-center">
          <img
            class="rounded-md w-45 h-59"
            src="https://via.placeholder.com/45x59"
          />
          <h2 class="text-base ml-3">
            <p class="font-bold">かなえ</p>
            <p>Gossip Girl 柏店</p>
          </h2>
        </div>
        <div class="flex ml-44 mr-2 items-end">
          <img class="w-3 pb-1" src="/icons/phone.svg" />
          <h2 class="text-base font-bold">
            お店に電話する
            <span class="text-2xl text-[#000cff]">01-2345-6789</span>
          </h2>
        </div>
      </div>
    </section>

    <div
      ref="scroll"
      class="bg-[#FFEEEE] pb-8 pt-6 px-4 mb-4 mt-2 h-[650px] overflow-y-auto"
    >
      <div class="bg-white rounded-full w-32 py-1 text-center pl-2 mx-auto">
        <p>10月10日（月）</p>
      </div>
      <infinite-loading
        direction="top"
        spinner="bubbles"
        @infinite="infiniteHandle"
      />
      <div v-for="(message, index) in listMessages" :key="index">
        <div
          v-if="message.user_id === ownerId"
          class="flex items-start justify-end mt-6"
        >
          <p
            class="px-4 py-3 max-w-sm bg-blue-200 rounded-lg mr-2 text-[0.75rem] leading-4 break-all"
          >
            {{ message.message }}
          </p>
          <img
            class="rounded-md w-[45px] h-[59px] object-cover object-center"
            :src="message.icon_url"
          />
        </div>

        <div v-else class="flex items-start justify-start mt-4">
          <img
            class="rounded-md w-[45px] h-[59px] object-cover object-center"
            :src="message.icon_url"
          />
          <p
            class="px-4 py-3 max-w-sm bg-white rounded-lg ml-2 text-[0.75rem] leading-4 break-all"
          >
            {{ message.message }}
          </p>
        </div>
      </div>

      <!-- note evnet -->
      <div v-if="room.attack">
        <div
          v-if="role !== 'girl'"
          class="bg-white rounded-full w-3/4 py-2 text-center mx-auto mt-6 shadow-[0_0_8.5px_rgba(0,0,0,0.15)] text-[0.75rem] leading-4"
        >
          <p>-システムメッセージ-</p>
          <p>女の子からアタックが来ました！マッチングが完了したら</p>
          <p>店舗に電話して予約を完了してください。</p>
        </div>
      </div>
    </div>

    <form
      class="bg-[#E0FFFF] h-20 flex justify-around items-center text-[#212121]"
      @submit.prevent="handleSendMessage"
    >
      <div class="w-4/5 mx-auto">
        <input
          v-model="newMessage"
          type="text"
          placeholder="メッセージを入力"
          class="w-full h-10 bg-white px-5 py-2 rounded-[10px] text-[0.75rem]"
        />
      </div>
      <button
        type="submit"
        class="bg-white hover:bg-blue-700 mx-auto w-24 h-8 px-2 rounded-[10px] text-[#FF7171]"
      >
        送信
      </button>
    </form>
  </div>
</template>
<script>
import {
  ref,
  useStore,
  useFetch,
  computed,
  useRoute,
} from '@nuxtjs/composition-api'
export default {
  name: 'DetailMessagePage',
  setup() {
    const ws = null
    const store = useStore()
    const route = useRoute()
    const newMessage = ref('')
    const page = ref(0)
    const room = ref({})
    const roomid = computed(() => route.value.params.roomid)
    function scrollToEnd() {
      const container = this.$refs.scroll
      if (container) {
        container.scrollTop = container.scrollHeight
      }
    }

    async function infiniteHandle($state) {
      const olderMessage = await store.dispatch('rooms/loadOlderMessage', {
        roomId: roomid.value,
        params: {
          page: page.value,
          size: 20,
        },
      })
      if (olderMessage.content.length !== 0) {
        store.dispatch('rooms/addOlderMessage', olderMessage)
        page.value++
        $state.loaded()
      } else {
        $state.complete()
      }
    }

    const listMessages = computed(() => store.state.rooms.messages.content)
    const currenUser = computed(() => store.state.user.user)
    const ownerId = currenUser.value.id
    const verifyToken = computed(() => store.state.rooms.verify)
    const role = computed(() => store.state.auth.role)
    useFetch(async () => {
      await store.dispatch('rooms/verify')
      infiniteHandle()
      if (store.state.rooms.rooms[0].room_id) {
        room.value = store.state.rooms.rooms.filter(
          // eslint-disable-next-line eqeqeq
          (room) => room.room_id == roomid.value
        )[0]
      } else {
        await store.dispatch('rooms/getActionRooms')
        room.value = store.state.rooms.rooms.filter(
          // eslint-disable-next-line eqeqeq
          (room) => room.room_id == roomid.value
        )[0]
      }
    })
    return {
      role,
      room,
      store,
      listMessages,
      ownerId,
      verifyToken,
      newMessage,
      roomid,
      ws,
      scrollToEnd,
      infiniteHandle,
      page,
      currenUser,
    }
  },

  updated() {
    if (this.page === 0) {
      this.scrollToEnd()
    }
  },
  created() {
    this.ws = new WebSocket(
      'wss://f2regrtjcg.execute-api.ap-northeast-1.amazonaws.com/production'
    )
    this.ws.onopen = (event) => {
      // eslint-disable-next-line no-console
      this.ws.send(
        JSON.stringify({
          action: 'verify',
          message: this.verifyToken.message,
        })
      )
    }
    this.ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)
        this.store.dispatch('rooms/sendMessage', data)
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log('Invalid JSON: ', e.data)
      }
    }
    this.ws.onclose = function (e) {
      // eslint-disable-next-line no-console
      console.log('close')
    }
    this.ws.onerror = function (e) {
      // eslint-disable-next-line no-console
      console.log('error')
    }
  },
  methods: {
    async handleSendMessage() {
      if (this.newMessage.length > 0) {
        const data = {
          create_user: null,
          created_at: Date.now(),
          delete_flag: null,
          display_name: this.currenUser.display_name,
          icon_url: this.currenUser.avatar,
          id: null,
          message: this.newMessage,
          room_id: this.roomId,
          stamp: null,
          update_user: null,
          updated_at: null,
          user_id: this.ownerId,
          user_type: null,
        }
        await this.store.dispatch('rooms/sendMessage', data)
        await this.ws.send(
          JSON.stringify({
            action: 'send',
            message: this.newMessage,
            room_id: this.roomid,
          })
        )
        await this.scrollToEnd()
      }

      this.newMessage = ''
    },
  },
}
</script>
