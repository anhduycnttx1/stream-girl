<template>
  <div>
    <div class="w-[627px] mx-auto">
      <div
        class="w-[627px] bg-[#4ed8f5] pb-8 mx-auto rounded-3xl outline outline-offset-4 outline-[#4ed8f5] mt-[115px]"
      >
        <h1 class="text-[28px] text-white font-bold pt-[23px] ml-[31px]">
          店舗様ログイン
        </h1>
        <div class="flex flex-col justify-center items-center mt-[53px]">
          <div class="">
            <label
              class="text-[18px] text-white font-bold w-[144px] inline-block"
              for="email"
              >メールアドレス</label
            >
            <input
              id="email"
              type="email"
              class="w-[283px] h-[33px] px-[2%]"
              v-model="loginForm.username"
            />
          </div>
          <div class="mt-[8px]">
            <label
              class="text-[18px] text-white font-bold w-[144px] inline-block"
              for="password"
              >パスワード</label
            >
            <input
              id="password"
              type="password"
              class="w-[283px] h-[33px] px-[2%]"
              v-model="loginForm.password"
            />
          </div>
          <div class="ml-[172px] mt-[15px]">
            <input id="save" type="checkbox" /><label
              class="text-[18px] text-white font-bold w-[14px] border-0 ml-[10px]"
              for="save"
              >ログイン情報をブラウザに記憶する</label
            >
          </div>
          <span v-show="hasError" class="text-sm text-red-500 text-xl">{{
            errorMessage
          }}</span>
          <button
            class="w-[181px] h-[56px] bg-[#f44bcb] rounded-full text-[18px] text-white font-bold mt-[38px]"
            @click="submit"
          >
            ログイン
          </button>
        </div>
      </div>
      <h5 class="text-right text-[12px] mt-[9px] mr-[30px]">
        パスワードを忘れた場合は
        <nuxt-link class="text-[#0018ff]" to="./recovery">コチラ</nuxt-link>
      </h5>
    </div>
  </div>
</template>

<script>
import { ref, reactive, useStore } from '@nuxtjs/composition-api'
export default {
  name: 'LoginPage',
  layout: 'plain',
  setup() {
    const store = useStore()

    const hasError = ref(false)
    const errorMessage = ref('')

    const loginForm = reactive({
      username: '',
      password: '',
    })

    const submit = async () => {
      try {
        await store.dispatch('auth/ownerLogin', {
          username: loginForm.username,
          password: loginForm.password,
        })
      } catch (error) {
        hasError.value = true
        errorMessage.value = 'INVALID_CREDENTIAL'
      }
    }
    return {
      submit,
      loginForm,
      hasError,
      errorMessage,
    }
  },
}
</script>
