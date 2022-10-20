<template>
  <div class="w-3/4 max-sm:w-full mx-auto">
    <form @submit.prevent="signup">
      <div class="border-b border-black"></div>
      <div class="my-10 max-sm:my-5 flex justify-around max-sm:flex-col">
        <base-label
          class="w-[45%] max-sm:w-full max-sm:justify-center"
          main="ユーザーID"
        />
        <h3
          class="text-[20px] max-sm:text-sm font-bold w-[45%] max-sm:w-full text-left max-sm:text-center"
        >
          {{ email }}
        </h3>
      </div>
      <div class="border-b border-black"></div>
      <form-field
        name="display_name"
        :required="true"
        label="ニックネーム"
        :errors="v$.display_name.$errors"
        @input="v$.display_name.$model = $event.value"
      />
      <div class="border-b border-black"></div>
      <form-field
        name="password"
        hide_content="true"
        :required="true"
        type="password"
        label="パスワード"
        :errors="v$.password.$errors"
        @input="v$.password.$model = $event.value"
      />
      <div class="border-b border-black"></div>
      <form-field
        name="confirm_password"
        hide_content="true"
        :required="true"
        type="password"
        label="パスワード"
        sub="(確認用)"
        :errors="v$.confirm_password.$errors"
        @input="v$.confirm_password.$model = $event.value"
      />

      <div class="border-b border-black"></div>
      <form-field
        name="tel"
        :required="true"
        label="電話番号"
        :errors="v$.tel.$errors"
        @input="v$.tel.$model = $event.value"
      />
      <div class="border-b border-black"></div>
      <div
        class="my-7 max-sm:my-4 flex justify-around max-sm:flex-col max-sm:items-center"
      >
        <base-label
          class="w-[45%] max-sm:w-full max-sm:justify-center"
          main="生年月日"
          :required="true"
        />
        <div class="w-[45%] max-sm:w-fit">
          <select-birthday @change="handleChangeBirthday" />
        </div>
      </div>
      <div class="border-b border-black"></div>
      <div
        class="my-7 max-sm:my-4 flex justify-around max-sm:flex-col max-sm:items-center"
      >
        <base-label
          class="w-[45%] max-sm:w-full max-sm:justify-center"
          main="PRコメント"
        />
        <textarea
          v-model="user.meta.comment"
          class="px-1 w-[45%] max-sm:w-5/6 h-52 border-2 rounded-md"
        ></textarea>
      </div>
      <div class="border-b border-black"></div>
      <div class="flex items-center justify-around my-7 max-sm:flex-col">
        <base-label
          class="w-[45%] max-sm:w-full max-sm:justify-center"
          main="プロフィール"
        />
        <div class="w-[45%] max-sm:w-full"></div>
      </div>
      <form-field
        label="よく遊ぶエリア"
        :is-bold="false"
        name="area"
        @input="user.meta.frequent_city = $event.value"
      />
      <form-field
        label="風俗に行く頻度"
        :is-bold="false"
        name="frequency"
        @input="user.meta.frequent_use = $event.value"
      />
      <form-field
        label="好きなプレイ"
        :is-bold="false"
        name="favorite"
        @input="user.meta.preferred_play = $event.value"
      />
      <form-field
        label="好みのタイプ"
        :is-bold="false"
        name="favoriteType"
        @input="user.meta.preferred_type = $event.value"
      />
      <div class="border-b border-black"></div>
      <div class="flex flex-col justify-center items-center mt-[45px]">
        <base-button
          text="送信"
          type="submit"
          :disabled="loading"
          classes="dark-blue-gradient"
        />
      </div>
      <p v-if="error" class="text-center text-red-500 mt-3">
        {{ error.response.data.description }}
      </p>
    </form>
  </div>
</template>

<script>
import { defineComponent, reactive, useStore } from '@nuxtjs/composition-api'
import { useFetcher } from '~/compositions'
import { formRegister } from '~/helper/validate'

export default defineComponent({
  setup(props, { emit }) {
    const store = useStore()

    const user = reactive({
      display_name: '',
      password: '',
      confirm_password: '',
      tel: '',
      birthday: '1990-01-01',
      meta: {
        frequent_city: '',
        preferred_type: '',
        comment: '',
        preferred_play: '',
        frequent_use: '',
      },
    })
    const email = store.state.auth.verifyRes.mailaddress

    const { loading, getData, error } = useFetcher((data) =>
      store.dispatch('auth/signup', data)
    )

    const v$ = formRegister(user)

    function handleChangeBirthday(event) {
      user.birthday = event.value
    }
    async function signup() {
      const valid = await v$.value.$validate()
      if (!valid) {
        return null
      }
      await getData(user)
      if (error.value) {
        return null
      }
      await store.dispatch('auth/login', {
        username: email,
        password: user.password,
      })
      emit('signup')
    }

    return {
      user,
      email,
      signup,
      v$,
      loading,
      error,
      handleChangeBirthday,
    }
  },
})
</script>
