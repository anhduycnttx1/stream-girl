<template>
  <div class="max-sm:text-base text-2xl text-[#2c2c2c] mb-12">
    <girl-navbar />
    <girl-header title="ボイスを登録する" />
    <main class="w-[82%] mx-auto max-sm:w-[90%]">
      <form action="" class="w-full" @submit.prevent="uploadAudioPost">
        <div
          class="mt-5 max-sm:mt-2 flex justify-between items-end w-[90%] mx-auto"
        >
          <div class="flex justify-center w-[20%] mr-8">
            <label for="video">
              <img src="/icons/post_voice_button.svg" alt="" />
            </label>
            <input
              id="video"
              class="hidden"
              type="file"
              accept=".mp4,.mov"
              @change="handleUploadAudio"
            />
          </div>

          <div class="form-group w-[80%]">
            <label
              class="font-bold block pb-3 mb-3 border-b border-b[#c5c5c5]"
              for="title"
            >
              タイトル
            </label>
            <input
              id="title"
              v-model="formData.title"
              class="w-full px-2"
              type="text"
            />
          </div>
        </div>
        <h2 class="text-center">{{ formData.filename }}</h2>

        <h1 class="my-16 max-sm:my-8 max-sm:text-[15px] text-center">
          ※動画を選択した場合は音声のみに変換されます。
        </h1>
        <button
          :disabled="!audio"
          class="mt-7 w-full py-5 max-sm:py-3 max-sm:mt-3 border border-[#ff25ba] rounded-[10px] bg-[#fff6f6]"
        >
          確認画面へ進む
        </button>
      </form>
    </main>
  </div>
</template>

<script>
import { reactive, ref, useStore } from '@nuxtjs/composition-api'
import { getMetaVideo } from '~/helper/getMetaVideo'
export default {
  name: 'VoiceGirlsPage',
  middleware: 'auth-girl',
  setup() {
    const store = useStore()
    const formData = reactive({
      title: '',
      filename: '',
      duration_in_ms: 0,
    })
    const audio = ref(null)

    async function handleUploadAudio(event) {
      const file = event.target.files[0]
      if (file) {
        if (file.size > 20 * 1000 * 1000) {
          return alert('Video size must be less than 20MB.')
        }
        const loadVideo = await getMetaVideo(file)
        if (loadVideo.duration > 10) {
          return alert('Video length must be less than 10s.')
        }
        audio.value = file
        formData.filename = audio.value.name
        formData.duration_in_ms = loadVideo.duration
      }
    }

    async function uploadAudioPost() {
      const res = await store.dispatch('media/uploadAudioPost', { ...formData })
      const file = new File([audio.value], formData.filename, {
        type: audio.value.type,
      })
      await fetch(res.upload_url, {
        method: 'PUT',
        headers: {
          'Content-Type': file.type,
        },
        body: file,
      })
      formData.title = ''
      formData.filename = ''
      alert(`投稿しました。
変換が完了したらサイトに公開されます。`)
    }
    return { audio, formData, handleUploadAudio, uploadAudioPost }
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
