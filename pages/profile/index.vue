<template>
  <div class="w-[45rem] mx-auto max-sm:w-full">
    <div class="h-80 bg-[#E0FFFF] flex flex-col justify-evenly items-center">
      <div class="w-full flex items-center justify-evenly">
        <div class="w-1/2 flex justify-center">
          <img
            class="rounded-full w-[138px] h-[138px] object-cover"
            :src="user.avatar || '/icons/avatar.svg'"
            alt="avatar"
          />
        </div>
        <div class="w-1/2 h-full flex flex-col items-center justify-evenly">
          <div>
            <h2
              class="inline-block text-3xl max-sm:text-xl font-semibold break-all"
            >
              {{ user.display_name }}
            </h2>
            <span>さん</span>
          </div>
          <div
            class="bg-white px-6 max-sm:px-2 max-sm:py-1 max-sm:rounded-md py-2 rounded-[10px] flex justify-center items-center"
          >
            <img class="mr-3" src="/icons/setting.svg" />
            <nuxt-link to="/profile/account"> プロフィール編集 </nuxt-link>
          </div>
        </div>
      </div>
      <div class="w-full flex items-center justify-evenly">
        <div class="w-1/2 flex flex-col items-center border-right">
          <span class="inline-block mb-1 text-[2rem] text-[#FF7C7C] font-bold"
            >16</span
          >
          <span class="text-sm text-[#282828]">フォロー</span>
        </div>
        <div class="w-1/2 flex flex-col items-center">
          <span class="inline-block mb-1 text-[2rem] text-[#FF7C7C] font-bold"
            >10,001</span
          >
          <span class="text-sm text-[#282828]">プレゼント</span>
        </div>
      </div>
    </div>

    <div class="bg-[#B9DCFF] h-[4.5rem] flex justify-evenly items-center">
      <div
        class="w-72 h-10 bg-white rounded-md flex justify-around items-center text-[#383838] text-sm"
      >
        <span>保有P</span>
        <span class="text-xl font-bold">1,123,456</span>
        <span
          class="inline-block text-sm h-5 w-5 leading-5 text-center rounded-full bg-[#7DBDFF] text-white"
          >P</span
        >
      </div>
      <div
        class="w-72 h-10 bg-[#FF9D9D] rounded-md flex justify-center items-center"
      >
        <img class="mr-3" src="/icons/card.svg" />
        <span class="text-white text-sm">ポイント購入</span>
      </div>
    </div>

    <div class="mt-4 mb-10 h-[116px] text-white flex justify-between">
      <div class="flex justify-evenly items-center bg-[#C0A5FB] rounded-[10px]">
        <div
          class="w-[4.125rem] h-[4.125rem] ml-4 mr-3 relative bg-white rounded-full"
        >
          <img
            class="absolute top-1/2 -translate-y-1/2"
            src="/icons/1500107.svg"
            alt=""
          />
        </div>
        <div>
          <p class="text-xl font-bold">マッチング通知</p>
          <p>貴方にアタックした女の子が◯◯人います！</p>
          <p>アタック受諾をしてマッチングを完了させましょう！</p>
        </div>
      </div>
      <div
        class="w-56 bg-[#bbe8ff] flex justify-center items-center rounded-[10px] cursor-pointer"
        @click="openModal"
      >
        <p class="text-center font-bold text-lg text-[#777777]">
          マッチングを<br />
          終了する
        </p>
      </div>
    </div>
    <hr />
    <div class="h-36 flex justify-between items-center">
      <div
        v-for="link of links"
        :key="link.icon"
        class="flex justify-center items-center w-1/4 border-right"
      >
        <profile-link :link="link" :plus="link.plus" />
      </div>
    </div>
    <hr />

    <div>
      <h2 class="my-4">
        <img src="/icons/dot.svg" class="inline-block" />
        フォロー中の女の子の新着動画
      </h2>

      <video-slider id="profile" />

      <button
        class="bg-[#B9DCFF] hover:bg-[#92beeb] mx-auto w-32 h-8 mt-6 my-10 text-white px-2 rounded flex justify-center items-center"
      >
        もっと見る
      </button>
      <hr />
    </div>

    <div class="flex my-10">
      <div
        v-for="(link, index) of linksFooter"
        :key="link.icon"
        :class="[
          'flex justify-center items-center w-1/2 ',
          index === 0 && 'border-right',
        ]"
      >
        <profile-link :link="link" />
        <div class="h-[5.25rem]"></div>
      </div>
    </div>

    <footer
      class="bg-[#E0FFFF] h-20 flex justify-around items-center text-[#212121]"
    >
      <button class="px-2 py-1 hover:bg-[#cdf8f8] border-b border-b-[#1b1b1b]">
        利用規約
      </button>
      <button
        class="px-2 py-1 hover:bg-[#cdf8f8] border-b border-b-[#1b1b1b]"
        @click="logout"
      >
        ログアウト
      </button>
    </footer>

    <v-modal name="profile_match" classes="w-[390px] max-sm:w-[90%]">
      <div class="text-center mt-16 mb-24">
        <h1 class="mb-[50px] text-lg text-[#252525]">
          マッチングを終了しますか？
        </h1>
        <div class="flex flex-col items-center text-white">
          <button
            class="w-40 h-14 rounded-[10px] bg-[#bbe8ff] mb-[18px]"
            @click="closeModal"
          >
            はい
          </button>
          <button
            class="w-40 h-14 rounded-[10px] bg-[#bbe8ff]"
            @click="closeModal"
          >
            いいえ
          </button>
        </div>
      </div>
    </v-modal>
  </div>
</template>
<script>
import { computed, useRouter, useStore } from '@nuxtjs/composition-api'
// eslint-disable-next-line import/no-named-as-default
import { useFetcher } from '~/compositions'
export default {
  name: 'ProfilePage',
  middleware: 'auth',
  setup() {
    const store = useStore()
    const router = useRouter()
    const user = computed(() => store.getters['user/user'])

    const { loading, error, getData } = useFetcher(() =>
      store.dispatch('auth/logout')
    )

    function openModal() {
      this.$modal.open({ name: 'profile_match' })
    }

    function closeModal() {
      this.$modal.close({ name: 'profile_match' })
    }

    async function logout() {
      await getData()
      if (error.value) {
        alert(`logout error. ${error.value.response.data.description}`)
      } else {
        router.push('/')
      }
    }
    const links = [
      {
        icon: '/icons/message.svg',
        text: 'メッセージ',
        href: '/profile/message',
      },
      {
        icon: '/icons/女性の人物アイコン.svg',
        text: 'フォロー管理',
        href: '/profile/following',
        plus: true,
      },
      {
        icon: '/icons/qua.svg',
        text: 'プレゼント履歴',
        href: '/profile/present',
      },
      {
        icon: '/icons/icon_103160.svg',
        text: 'ポイント履歴',
        href: '/profile/point',
      },
    ]

    const linksFooter = [
      {
        icon: '/icons/tool_setting_9102-300x300.svg',
        text: 'アカウント設定',
        href: '/profile/setting',
      },
      {
        icon: '/icons/QA.svg',
        text: 'ヘルプ',
        href: '#',
      },
    ]
    return {
      user,
      logout,
      loading,
      error,
      links,
      linksFooter,
      openModal,
      closeModal,
    }
  },
}
</script>

<style scoped>
.border-right {
  @apply border-r border-r-[#b0b0b0];
}
</style>
