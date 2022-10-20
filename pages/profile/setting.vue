<template>
  <div class="m-auto w-full md:w-[720px] pb-[30px]">
    <profile-menu title="アカウント設定" class="mt-[31px]" />
    <div>
      <div class="pb-[36px] pt-[29px]">
        <base-span
          text="メールアドレス"
          classes="span__edit-email"
          class="text-center mb-[29px]"
        />
        <div class="flex flex-row">
          <base-label
            main="現在のメールアドレス"
            classes="label__edit-account"
            :is-label="true"
            class=""
          />
          <div class="text-center">
            {{ user.mailaddress }}
          </div>
        </div>
        <form @submit.prevent="updateEmail">
          <div class="mt-[30px] flex flex-row items-center justify-center">
            <base-label
              main="新しいメールアドレス"
              :is-label="true"
              classes="label__edit-account"
              class=" "
            />
            <base-text-field
              classes="input__edit-email"
              name="email"
              type="text"
              :errors="vE$.email.$errors"
              @input="vE$.email.$model = $event.value"
            />
          </div>
          <div class="text-center">
            <base-button
              type="submit"
              text="変更する"
              class="mt-[27px]"
              classes="btn__edit-email"
            />
          </div>
        </form>
      </div>
      <hr />
    </div>
    <div>
      <div class="pt-[41px] pb-[32px]">
        <base-span
          text="パスワード"
          classes="span__edit-email"
          class="text-center"
        />
        <div class="grid grid-cols-2">
          <base-label
            :is-label="true"
            classes="label__edit-account"
            main="現在のパスワード"
            class=""
          />
          <base-span
            text="*********"
            classes="span-normal"
            class="text-center"
          />
        </div>
        <form @submit.prevent="updatePassword">
          <div class="grid grid-cols-2">
            <base-label
              :is-label="true"
              classes="label__edit-account"
              main="新しいパスワード"
              class=" "
            />
            <base-text-field
              classes="input__edit-password"
              name="password"
              type="password"
              :errors="vP$.password.$errors"
              @input="vP$.password.$model = $event.value"
            />
          </div>
          <div class="grid grid-cols-2">
            <base-label
              :is-label="true"
              classes="label__edit-account"
              main="確認用"
              class=""
            />
            <base-text-field
              classes="input__edit-password"
              name="confirm_password"
              type="password"
              :errors="vP$.confirm_password.$errors"
              @input="vP$.confirm_password.$model = $event.value"
            />
          </div>
          <div class="text-center mt-[40px]">
            <base-button
              type="submit"
              text="変更する"
              classes="btn__edit-password"
            />
          </div>
        </form>
      </div>
      <hr />
    </div>
    <div class="pt-[74px]">
      <base-span
        text="退会する"
        classes="span__modify-account"
        class="text-center"
      />
      <p class="mt-[30px] text-#373737">
        退会をご希望の方は以下の確認事項をお読みいただいた上で手続きを進めて下さい。
      </p>
      <ul class="mt-[39px] text-#373737">
        <li class="">・確認事項確認事項確認事項確認事項</li>
        <li class="">・確認事項確認事項確認事項確認事項</li>
        <li class="">・確認事項確認事項確認事項確認事項</li>
      </ul>
      <div class="flex justify-center items-center mt-[43px]">
        <input id="agree-delete" v-model="agreeDelete" type="checkbox" />
        <label for="agree-delete" class="">退会前の確認事項を承諾した</label>
      </div>
      <div class="text-center">
        <base-button
          text="退会する"
          class="mt-[41px]"
          classes="btn__delete-account"
          :disabled="!agreeDelete || loadingDelete"
          @clicked="deleteAccount"
        />
        <p v-if="errorDelete" class="text-center text-red-500 mt-3">
          {{ errorDelete.response.data.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, useStore } from '@nuxtjs/composition-api'
import { formChangeEmail, formChangePassword } from '~/helper/validate'
import { useFetcher } from '~/compositions'
export default {
  name: 'SettingProfilePage',
  setup() {
    const store = useStore()
    const userGet = store.getters['user/user']

    const user = reactive({
      meta: {
        frequent_city: '',
        preferred_type: '',
        comment: '',
        preferred_play: '',
        frequent_use: '',
        ...userGet.meta,
      },
    })

    const {
      getData: deleteMe,
      error: errorDelete,
      loading: loadingDelete,
    } = useFetcher((id) => store.dispatch('user/deleteMe', id))

    const agreeDelete = ref(false)
    const email = ref('')
    const formPassword = reactive({
      password: '',
      confirm_password: '',
    })
    const vE$ = formChangeEmail({ email })
    const vP$ = formChangePassword(formPassword)

    async function updateEmail() {
      const valid = await vE$.value.$validate()
      if (valid) {
        store.dispatch('user/updateMe', { email: email.value })
      }
    }

    async function updatePassword() {
      const valid = await vP$.value.$validate()
      if (valid) {
        await store.dispatch('user/updateMe', {
          user: { ...user, ...formPassword },
          id: userGet.id,
        })
        vP$.password.$model = ''
        vP$.confirm_password.$model = ''
      }
    }

    async function deleteAccount() {
      if (confirm('本当に退会しますか？')) {
        await deleteMe(userGet.id)
      }
    }

    return {
      user,
      vE$,
      vP$,
      agreeDelete,
      loadingDelete,
      errorDelete,
      updateEmail,
      updatePassword,
      deleteAccount,
    }
  },
}
</script>

<style scoped>
hr {
  @apply mt-[2] border-t border-[#989898];
}
</style>
