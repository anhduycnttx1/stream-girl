<template>
  <div class="max-w-[1000px] h-9 mx-auto flex justify-end items-center">
    <img src="/icons/right_arrow_black.svg" alt="right-arrow" />
    <h3 class="mr-7 ml-1 text-[#454545]">マイページ/アカウントサービス</h3>
    <div class="flex justify-end items-center">
      <button class="button__register" @click="openRegisterModal">
        <img class="mr-1" src="/icons/right_arrow.svg" alt="right-arrow" />
        新規登録
      </button>
      <button class="button__login" @click="openLoginModal">
        <img class="mr-1" src="/icons/right_arrow.svg" alt="right-arrow" />
        サインイン
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openLoginModal() {
      this.$modal.open({ name: 'login' })
    },
    closeLoginModal() {
      this.$modal.close({ name: 'login' })
    },
    openRegisterModal() {
      this.$modal.open({ name: 'register' })
    },
    closeRegisterModal() {
      this.$modal.close({ name: 'register' })
    },
  },
}
</script>

<style scoped>
.button__login {
  @apply bg-[#FF9D9D] hover:bg-[#d88686] w-[7.75rem] text-white px-2 rounded-[5px] flex justify-center items-center;
}

.button__register {
  @apply bg-[#8D6BF5] hover:bg-[#7c5ed6] w-[7.125rem] mr-4 text-white px-2 rounded-[5px] flex justify-center items-center;
}
</style>
