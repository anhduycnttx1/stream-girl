<template>
  <header :class="{ 'flex justify-between items-center': hasLogo }">
    <nuxt-link to="/girl">
      <img
        class="w-auto max-w-[130px]"
        :class="{ hidden: !hasLogo }"
        src="/icons/logo.jpg"
        alt="logo"
      />
    </nuxt-link>
    <div class="flex flex-row justify-end">
      <div class="flex justify-end items-center my-3">
        <img src="/icons/girls_icon_3.svg" />
        <h1>自分のページを見る</h1>
      </div>
      <div
        class="flex justify-end items-center my-3 ml-5 cursor-pointer z-50"
        @click="logoutHandle"
      >
        <img class="h-[27px] w-[32px] objec-contain" src="/icons/logout.png" />
        <h1>ログアウト</h1>
      </div>
    </div>
  </header>
</template>

<script>
import { useStore } from '@nuxtjs/composition-api'
export default {
  name: 'NavbarGirlPage',
  setup() {
    const store = useStore()
    const logoutHandle = () => {
      store.dispatch('auth/logout')
    }
    return {
      logoutHandle,
    }
  },
  props: {
    hasLogo: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
