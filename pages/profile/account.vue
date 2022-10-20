<template>
  <div class="w-[45rem] mx-auto max-sm:w-full font-bold">
    <profile-menu title="プロフィール編集" />

    <div
      class="border-b border-[#989898] h-full w-[305px] mx-auto mt-[14px]"
    ></div>

    <div class="w-5/6 mx-auto mt-14">
      <div class="flex justify-between items-center">
        <label for="display_name">ニックネーム</label>
        <input
          id="display_name"
          v-model="user.display_name"
          class="shadow-sm px-3 border rounded-[5px] w-[381px] h-[37px]"
          type="text"
        />
      </div>
      <div class="flex justify-between items-center my-6">
        <label for="age">生年月日</label>
        <select-birthday
          :birthday-default="birthday"
          @change="handleChangeBirthday"
        />
      </div>
      <div class="flex justify-between items-center">
        <label for="phone">電話番号</label>
        <input
          id="phone"
          v-model="user.tel"
          class="shadow-sm px-3 border rounded-[5px] w-[381px] h-[37px]"
          type="text"
        />
      </div>
    </div>
    <div
      class="mt-3 mb-8 flex justify-end items-start text-sm text-[#8c8c8c] font-normal"
    >
      <img class="inline-block mt-1 mr-1" src="/icons/dot_gray.svg" alt="" />
      <p class="w-[432px]">
        電話番号はマッチング申請をした際に店舗側に表示されます。 <br />
        プロフィールに表示されたり女の子に知られることはありません。
      </p>
    </div>
    <hr />

    <div class="text-center mt-[54px] mb-8">
      <h1 class="mb-5">プロフィール写真</h1>
      <base-image-frame
        type="avatar"
        :image-src="avatarPreview || user.avatar"
      />
      <div class="flex items-center justify-center my-5">
        <button
          class="bg-[#efefef] w-[188px] h-9 rounded-md border border-[#999999] mr-5"
          onclick="document.getElementById('selectedFile').click();"
        >
          ファイルを選択
        </button>
        <h2 class="">選択されていません</h2>
      </div>
      <button
        class="w-[350px] h-10 border-2 border-[#399bff] rounded-[20px] text-[#212121]"
      >
        アバターを選択
      </button>
      <input
        id="selectedFile"
        type="file"
        class="hidden"
        @change="onAvatarChange"
      />
    </div>

    <hr />
    <div class="text-center my-[52px]">
      <h1 class="mb-5">PRコメント</h1>
      <textarea
        v-model="user.meta.comment"
        class="shadow-sm px-3 h-[175px] w-[446px] border rounded-[5px]"
      ></textarea>
    </div>

    <hr />

    <div class="text-center mt-[52px] mb-7">
      <h1>プロフィール</h1>
      <div class="w-5/6 mx-auto mt-9">
        <div class="flex justify-between items-center">
          <label for="area">よく遊ぶエリア</label>
          <input
            id="area"
            v-model="user.meta.frequent_city"
            class="shadow-sm px-3 border rounded-[5px] w-[381px] h-[37px]"
            type="text"
          />
        </div>
        <div class="flex justify-between items-center my-6">
          <label for="frequency">風俗に行く頻度</label>
          <input
            id="frequency"
            v-model="user.meta.frequent_use"
            class="shadow-sm px-3 border rounded-[5px] w-[381px] h-[37px]"
            type="text"
          />
        </div>
        <div class="flex justify-between items-center my-6">
          <label for="favorite">好きなプレイ</label>
          <input
            id="favorite"
            v-model="user.meta.preferred_play"
            class="shadow-sm px-3 border rounded-[5px] w-[381px] h-[37px]"
            type="text"
          />
        </div>
        <div class="flex justify-between items-center">
          <label for="favoriteType">好みのタイプ</label>
          <input
            id="favoriteType"
            v-model="user.meta.preferred_type"
            class="shadow-sm px-3 border rounded-[5px] w-[381px] h-[37px]"
            type="text"
          />
        </div>
      </div>
      <button
        :disabled="loading"
        class="text-sm text-white w-[141px] h-9 bg-[#ffa1a1] rounded-[10px] mt-11"
        @click="handleSubmit"
      >
        保存する
      </button>

      <p v-if="error" class="text-center text-red-500 mt-3">
        {{ error.response.data.description }}
      </p>
    </div>
  </div>
</template>

<script>
import { reactive, ref, useStore } from '@nuxtjs/composition-api'
import { useFetcher } from '~/compositions'
export default {
  name: 'AccountPage',
  middleware: 'auth',
  setup() {
    const store = useStore()
    const userGet = store.getters['user/user']
    const birthday = ref([1990, 1, 1])
    if (userGet.birthday) {
      birthday.value = userGet.birthday.split('-').map(Number)
    }
    const avatarPreview = ref(null)
    const file = ref(null)
    const user = reactive({
      display_name: userGet.display_name,
      avatar: userGet.avatar,
      tel: userGet.tel,
      birthday: userGet.birthday,
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
      getData: updateMe,
      loading,
      error,
    } = useFetcher((user, id, file) =>
      store.dispatch('user/updateMe', { user, id, file })
    )

    function onAvatarChange(e) {
      file.value = e.target.files[0]
      avatarPreview.value = URL.createObjectURL(file.value)
    }

    function handleChangeBirthday(event) {
      user.birthday = event.value
    }

    async function handleSubmit() {
      await updateMe({ ...user }, userGet.id, file.value)
    }
    return {
      user,
      birthday,
      avatarPreview,
      loading,
      error,
      onAvatarChange,
      handleChangeBirthday,
      handleSubmit,
    }
  },
}
</script>
