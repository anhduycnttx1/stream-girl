<template>
  <div class="w-[89.2%]">
    <h3
      class="w-fit px-3 mt-10 mx-auto text-lg text-[#FF25BA] font-bold border-b border-[#FF25BA]"
    >
      新規会員登録
    </h3>
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
            v-model="v$.email.$model"
            type="text"
            :class="['form_input-auth', v$.email.$error && 'error']"
            name="email"
            placeholder="メールアドレス"
          />
          <div v-for="err of v$.email.$errors" :key="err.$uid">
            <span class="text-sm text-red-500">
              {{ err.$message }}
            </span>
          </div>
          <span v-if="error" class="text-sm text-red-500">
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
import { ref, useRouter, useStore } from '@nuxtjs/composition-api'
import { useFetcher } from '~/compositions'
import { formSendEmail } from '~/helper/validate'

const store = useStore()
const router = useRouter()

const email = ref('')
const v$ = formSendEmail({ email })

const { loading, error, getData } = useFetcher((email) =>
  store.dispatch('auth/sendEmail', email)
)

async function sendEmail() {
  const valid = await v$.value.$validate()
  if (!valid) {
    return
  }
  await getData(email.value)
  if (error.value) return

  this.$modal.close({ name: 'register' })
  router.push('/register/notify')
}
</script>
