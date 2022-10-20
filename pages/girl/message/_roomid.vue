<template>
  <div
    class="mt-2 text-2xl text-[20px] text-[#373737] px-5 max-sm:px-0 max-sm:text-sm"
  >
    <profile-menu
      title="メッセージ一覧"
      style-title="!text-black"
      to="/girl/message"
    >
      <img
        class="max-w-[60px] mr-5 rounded-[5px]"
        src="@/assets/images/avatar_home.png"
        alt=""
    /></profile-menu>
    <main>
      <div
        ref="scroll"
        class="bg-[#FFEEEE] py-8 px-4 max-sm:px-2 mb-4 mt-3 relative h-[650px] overflow-y-auto"
      >
        <h3
          class="text-center text-[12px] leading-6 text-[#282828] bg-white rounded-full px-3 absolute top-5 left-1/2 -translate-x-1/2"
        >
          10月10日（月）
        </h3>
        <infinite-loading
          direction="top"
          spinner="bubbles"
          @infinite="infiniteHandle"
        />
        <div v-for="(message, index) in listMessages" :key="index">
          <!-- box chat "admin" -->
          <div
            v-if="message.begin_time"
            class="font-bold flex flex-row justify-center my-3"
          >
            {{ message.begin_time }}
          </div>
          <div
            v-else-if="message.user_id === ownerId"
            class="flex items-start justify-end mt-8"
          >
            <p
              class="px-4 py-2 max-w-sm bg-blue-200 rounded-lg mr-2 text-[0.75rem] break-all"
            >
              {{ message.message }}
            </p>
            <img
              class="w-[45px] h-[60px] object-cover object-center rounded-md"
              :src="message.icon_url"
              alt="avt"
            />
          </div>
          <!-- box chat "system" -->
          <div v-else class="flex items-start justify-start mt-4">
            <img
              class="w-[45px] h-[60px] object-cover object-center rounded-md"
              :src="message.icon_url"
              alt="avt"
            />
            <p
              class="px-4 py-2 max-w-sm bg-white rounded-lg ml-2 text-[0.75rem] leading-4 break-all"
            >
              {{ message.message }}
            </p>
          </div>
        </div>
      </div>
      <form
        class="bg-[#E0FFFF] h-20 flex justify-between items-center text-[#212121] px-[2%]"
        @submit.prevent="handleSendMessage"
      >
        <input
          v-model="newMessage"
          type="text"
          placeholder="メッセージを入力"
          class="w-[83%] h-10 bg-white px-5 py-2 rounded-[10px]"
        />
        <button
          type="submit"
          class="bg-white hover:bg-blue-700 w-[16%] max-sm:w-14 h-10 rounded-[10px] text-[#FF7171] font-bold"
        >
          送信
        </button>
      </form>
    </main>
  </div>
</template>

<script>
/* eslint-disable */
import {
  ref,
  useStore,
  useFetch,
  computed,
  useRoute,
} from '@nuxtjs/composition-api'

export default {
  name: 'DetailsMessageGirlPage',
  middleware: 'auth-girl',

  setup() {
    const ws = null
    const store = useStore()
    const route = useRoute()
    const newMessage = ref('')
    const page = ref(0)

    function scrollToEnd() {
      const container = this.$refs.scroll
      if (container) {
        container.scrollTop = container.scrollHeight
      }
    }

    const listMessages = computed(() => store.state.rooms.messages.content)
    const currenUser = computed(() => store.state.user.user)
    const ownerId = currenUser.value.id
    const verifyToken = computed(() => store.state.rooms.verify)
    const roomid = computed(() => route.value.params.roomid)

    useFetch(async () => {
      await store.dispatch('rooms/verify')
    })

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

    return {
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
      console.log('connet')
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
      console.log('close')
    }
    this.ws.onerror = function (e) {
      console.error(e)
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
