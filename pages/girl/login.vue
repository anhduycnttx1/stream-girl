<template>
  <div class="text-[32px] max-sm:text-2xl">
    <header class="flex justify-start items-end mt-2">
      <img class="w-[45%]" src="/icons/logo_transparent.png" alt="logo" />
      <h1
        class="text-[28px] max-sm:text-xl text-[#f44bcb] font-bold -mb-1 ml-2"
      >
        女の子マイページ
      </h1>
    </header>
    <div class="flex flex-col justify-center items-center">
      <label class="mt-[90px] font-bold" for="email">メールアドレス</label>
      <input
        id="email"
        class="w-[85%] h-[55px] border-[1px] block mt-[17px] px-[2%]"
        type="email"
        v-model="loginForm.username"
      />
      <label class="mt-[37px] font-bold" for="password">パスワード</label>
      <input
        id="password"
        class="w-[85%] h-[55px] border-[1px] block mt-[18px] px-[2%]"
        type="password"
        v-model="loginForm.password"
      />
      <span v-show="hasError" class="text-sm text-red-500 text-xl">{{
        errorMessage
      }}</span>
      <button
        class="w-[44%] py-3 bg-[#f44bcb] rounded-full text-white mt-[78px] font-bold"
        @click="submit"
      >
        ログイン
      </button>
      <p class="text-2xl max-sm:text-xl mt-[189px] font-bold">
        パスワードを忘れた場合は<nuxt-link to="#" class="text-[#0018ff]"
          >コチラ</nuxt-link
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, useStore, useRouter } from '@nuxtjs/composition-api'

const store = useStore()
const router = useRouter()

const hasError = ref(false)
const errorMessage = ref('')

const loginForm = reactive({
  username: '',
  password: '',
})

const submit = async () => {
  try {
    await store.dispatch('auth/girlLogin', {
      username: loginForm.username,
      password: loginForm.password,
    })
    router.push('/girl')
  } catch (error) {
    hasError.value = true
    errorMessage.value = 'INVALID_CREDENTIAL'
  }
}
</script>
