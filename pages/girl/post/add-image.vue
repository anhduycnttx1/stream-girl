<template>
  <div class="max-sm:text-base text-2xl text-[#2c2c2c] mb-12">
    <girl-navbar />
    <girl-header title="画像で投稿する" />

    <main class="w-[82%] max-sm:w-[90%] mx-auto">
      <form action="" @submit.prevent="uploadImage">
        <div class="form-group">
          <select v-model="formData.audience" class="w-full">
            <option value="public">全体公開</option>
            <option value="private">フォロワー限定</option>
          </select>
        </div>
        <div class="form-group">
          <label
            class="font-bold block pb-3 mb-3 border-b border-b[#c5c5c5]"
            for=""
          >
            タイトル
          </label>
          <input v-model="formData.title" class="w-full px-2" type="text" />
        </div>
        <div class="mt-5">
          <label class="w-full flex justify-center" for="image">
            <img
              class="w-[18%] object-cover"
              src="/icons/post_image_button.svg"
              alt=""
            />
          </label>
          <img class="my-4 w-full" :src="thumbnail" alt="" />
          <h2 class="text-center">
            {{ filename }}
          </h2>
          <input
            id="image"
            class="hidden"
            type="file"
            accept="image/*"
            @change="handleChangeImage"
            ref="imageUploader"
          />
        </div>

        <div class="mt-6">
          <textarea
            v-model="formData.content"
            rows="10"
            class="!border-[5px] mt-2 max-sm:h-40 px-2"
          >
          </textarea>
        </div>

        <button
          :disabled="!image"
          type="submit"
          class="mt-7 w-full py-5 max-sm:py-3 border border-[#ff25ba] rounded-[10px] bg-[#fff6f6]"
        >
          公開する
        </button>
      </form>
    </main>
  </div>
</template>

<script>
import { reactive, ref, useStore } from '@nuxtjs/composition-api'
export default {
  name: 'PostImageGirlsPage',
  middleware: 'auth-girl',
  setup() {
    const store = useStore()
    const formData = reactive({
      audience: 'public',
      title: '',
      status: 'publish',
      photo_id: '',
      content: '',
    })
    const image = ref(null)
    const filename = ref(null)
    const thumbnail = ref(null)

    function handleChangeImage(event) {
      thumbnail.value = URL.createObjectURL(event.target.files[0])
      const file = event.target.files[0]
      if (file) {
        image.value = file
        filename.value = file.name
      }
    }

    async function uploadImage() {
      const data = new FormData()
      data.append('file', image.value)
      const res = await store.dispatch('media/uploadMedia', data)
      formData.photo_id = res.id
      await store.dispatch('media/uploadImagePost', formData)
      formData.audience = 'public'
      formData.title = ''
      formData.content = ''
      formData.photo_id = ''
      filename.value = ''
      thumbnail.value = null
      image.value = null
      alert(`投稿しました。
変換が完了したらサイトに公開されます。`)
      this.$refs.imageUploader.value = ''
    }

    return {
      image,
      formData,
      filename,
      uploadImage,
      handleChangeImage,
      thumbnail,
    }
  },
}
</script>

<style scoped>
.form-group {
  @apply mt-10;
}

.form-group > select,
.form-group > input,
textarea {
  @apply rounded-[10px] w-full border border-[#cfcfcf];
}
</style>
