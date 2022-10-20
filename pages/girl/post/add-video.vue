<template>
  <div class="max-sm:text-base text-2xl text-[#2c2c2c] mb-12">
    <girl-navbar />
    <girl-header title="動画で投稿する" />
    <main class="w-[82%] mx-auto max-sm:w-[90%]">
      <form action="" @submit.prevent="uploadVideo">
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
            動画タイトル
          </label>
          <input v-model="formData.title" class="w-full px-2" type="text" />
        </div>
        <div class="mt-5">
          <label class="w-full flex justify-center" for="video">
            <img
              class="w-[18%] object-cover"
              src="/icons/post_video_button.svg"
              alt=""
            />
          </label>
          <video
            v-show="videoSrc"
            :src="videoSrc"
            :autoplay="autoplay"
            class="my-4 w-full"
          ></video>
          <h2 class="text-center">
            {{ formData.filename }}
          </h2>
          <input
            id="video"
            accept=".mp4,.mov"
            class="hidden"
            type="file"
            @change="handleUploadVideo"
          />
        </div>

        <div class="mt-6">
          <label for=""
            ><span class="font-bold">ハッシュタグ</span>
            <span class="text-[20px] max-sm:text-sm"
              >（100文字以内）</span
            ></label
          >
          <textarea
            v-model="formData.content"
            name=""
            rows="9"
            class="!border-[5px] mt-2 px-2"
          >
          </textarea>
        </div>

        <div class="mt-5">
          <h3 class="font-bold">おすすめ・人気のハッシュタグ</h3>
          <ul
            class="flex items-center flex-wrap text-[20px] max-sm:text-sm mt-3"
          >
            <li class="px-2 bg-[#ebebeb] rounded-[13px] mr-2">#おっぱい</li>
            <li class="px-2 bg-[#ebebeb] rounded-[13px] mr-2">#乳首</li>
          </ul>
        </div>
        <button
          :disabled="!video"
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
import { onMounted, reactive, ref, useStore } from '@nuxtjs/composition-api'
import { getMetaVideo } from '~/helper/getMetaVideo'
export default {
  name: 'PostVideoGirlsPage',
  middleware: 'auth-girl',
  setup() {
    const store = useStore()
    const formData = reactive({
      audience: 'public',
      title: '',
      filename: '',
      status: 'publish',
      duration_in_ms: 0,
      content: '',
    })
    const video = ref(null)
    const videoSrc = ref(null)
    async function handleUploadVideo(event) {
      const file = event.target.files[0]
      if (file) {
        if (file.size > 20 * 1000 * 1000) {
          return alert('Video size must be less than 20MB.')
        }
        const loadVideo = await getMetaVideo(file)

        if (loadVideo.duration > 10) {
          return alert('Video length must be less than 10s.')
        }

        videoSrc.value = URL.createObjectURL(file)
        video.value = file
        formData.filename = video.value.name
        formData.duration_in_ms = loadVideo.duration
      }
    }

    async function uploadVideo() {
      const res = await store.dispatch('video/postVideo', { ...formData })
      const file = new File([video.value], formData.filename, {
        type: video.value.type,
      })

      await fetch(res.upload_url, {
        method: 'PUT',
        headers: {
          'Content-Type': file.type,
        },
        body: file,
      })

      formData.audience = 'public'
      formData.title = ''
      formData.content = ''
      formData.filename = ''
      videoSrc.value = null
      video.value = null
      alert(`投稿しました。
変換が完了したらサイトに公開されます。`)
    }

    const autoplay = ref(false)
    onMounted(() => {
      const userAgent = navigator.userAgent.toLowerCase()
      const isSafariOnIphone =
        userAgent.includes('safari') &&
        !userAgent.includes('chrome') &&
        userAgent.match(/iphone/i)
      if (isSafariOnIphone) {
        autoplay.value = true
      }
    })

    return {
      formData,
      video,
      videoSrc,
      autoplay,
      handleUploadVideo,
      uploadVideo,
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
