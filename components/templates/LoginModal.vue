<template>
  <div class="w-[80.89%]">
    <h3
      class="w-fit px-3 mt-10 mx-auto text-lg text-[#FF25BA] font-bold border-b border-[#FF25BA]"
    >
      さがさnight会員ログイン
    </h3>
    <form class="form mt-8 w-full" method="POST" @submit.prevent="login">
      <div class="form-group-auth">
        <input
          v-model="vL$.email.$model"
          type="text"
          :class="['form_input-auth', vL$.email.$error && 'error']"
          name="email"
          placeholder="メールアドレス"
        />
        <div v-for="err of vL$.email.$errors" :key="err.$uid">
          <span class="text-sm text-red-500 max-sm:text-[12px]">
            {{ err.$message }}
          </span>
        </div>
      </div>
      <div class="form-group-auth mt-[0.875rem] max-sm:mt-1">
        <input
          v-model="vL$.password.$model"
          type="password"
          :class="['form_input-auth', vL$.password.$error && 'error']"
          name="password"
          placeholder="パスワード"
        />
        <div v-for="err of vL$.password.$errors" :key="err.$uid">
          <span class="text-sm text-red-500 max-sm:text-[12px]">
            {{ err.$message }}
          </span>
        </div>
      </div>
      <div class="form-group-auth mt-[0.875rem]">
        <div class="mx-auto flex items-center w-full">
          <input id="remember" class="w-4" type="checkbox" />
          <label class="text-[0.75rem] text-[#979797] ml-2" for="remember"
            >ログインしたままにする</label
          >
        </div>
      </div>

      <div class="flex flex-col justify-center items-center">
        <button
          class="form__button-auth"
          type="submit"
          :disabled="isLoginLoading"
        >
          ログイン
        </button>
        <span
          v-if="hasLoginError"
          class="text-sm text-red-500 max-sm:text-[12px]"
        >
          {{ hasLoginError.response.data.description }}
        </span>
        <div class="mt-[6px]">
          <p
            class="inline-block border-b border-b-[#979797] text-[12px] text-[#979797] cursor-pointer"
            @click="redirectForgotPassword"
          >
            パスワードを忘れた場合
          </p>
        </div>
      </div>
    </form>
    <form
      class="mx-auto w-full border-[#ff25ba] border mt-[53px] mb-[34px] max-sm:mt-6 max-sm:mb-4 rounded-lg px-2 pt-4"
      @submit.prevent="sendEmail"
    >
      <div class="text-sm text-[#ff25ba]">
        <h2 class="text-lg font-bold ml-3 my-1">新規会員登録</h2>
        <div class="text-[0.625rem] text-[#ff69d0] leading-[18px]">
          <p>
            さがさnightは会員登録なしでも動画を視聴することが出来ますが、会員登録をすることで女の子とメッセージでのやりとりが出来たりマッチング機能により貴方好みの女の子を簡単に探すことが可能です。
          </p>
          <p>
            まださがさnight会員になっていない方は会員登録を強くおすすめいたします！
          </p>
        </div>
      </div>
      <div class="form mt-6 max-sm:mt-3">
        <div class="form-group-auth !w-[87.6%] mx-auto">
          <input
            v-model="vEmail$.email.$model"
            type="text"
            :class="['form_input-auth', vEmail$.email.$error && 'error']"
            name="email"
            placeholder="メールアドレス"
          />
          <div v-for="err of vEmail$.email.$errors" :key="err.$uid">
            <span class="text-sm text-red-500">
              {{ err.$message }}
            </span>
          </div>
          <span v-if="error && error.response" class="text-sm text-red-500">
            {{ error.response.data.description }}
          </span>
        </div>
        <div class="w-full text-center mb-6">
          <button class="form__button-auth" type="submit" :disabled="loading">
            新規会員登録
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, useRouter, useStore } from '@nuxtjs/composition-api'
import { useFetcher } from '~/compositions'
import { formLogin, formSendEmail } from '~/helper/validate'

const store = useStore()
const router = useRouter()

// reset email form
const formEmail = reactive({ email: '' })
const vEmail$ = formSendEmail(formEmail)

const { loading, error, getData } = useFetcher((email) =>
  store.dispatch('auth/sendEmail', email)
)

async function sendEmail() {
  vL$.value.$reset()

  const valid = await vEmail$.value.$validate()
  if (!valid) {
    return
  }
  await getData(formEmail.email)
  if (error.value) return

  this.$modal.close({ name: 'login' })
  router.push('/register/notify')
}

// Login form
// tạo 2 reactive để nhận email và password người dùng nhập vào
const formData = reactive({ email: '', password: '' })

// sử dụng biên vL$ để nhận validate
const vL$ = formLogin(formData)

const {
  loading: isLoginLoading,
  error: hasLoginError, // nhận Error Login thông qua hasLoginError
  getData: loginApi, // call API login thông qua loginApi
} = useFetcher((data) => store.dispatch('auth/login', data))

async function login() {
  vEmail$.value.$reset()
  const valid = await vL$.value.$validate()
  if (!valid) {
    return null
  }
  await loginApi({
    username: formData.email,
    password: formData.password,
  })
  if (!hasLoginError.value) {
    router.push('/profile')
  }
}

function redirectForgotPassword() {
  this.$modal.close({ name: 'login' })
  router.push('/passwordRecovery')
}
</script>

<style>
.form-group-auth {
  @apply w-full flex justify-start flex-col;
}

.form_input-auth {
  @apply border border-[#9B9B9B]  h-8 max-md:h-10 max-sm:h-9 w-full text-sm py-1 px-4;
}

.form__button-auth {
  @apply text-sm font-bold max-sm:mt-3 mt-6 w-[10.375rem]  py-2  bg-[#ff25ba] rounded-[0.625rem] text-white;
}
</style>
