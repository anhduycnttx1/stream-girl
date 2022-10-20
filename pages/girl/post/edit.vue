<template>
  <div class="max-sm:text-base text-2xl text-[#262626] mb-12">
    <girl-navbar />
    <girl-header title="投稿を削除・編集する" />

    <main v-if="posts" class="mt-16">
      <section
        v-for="post of posts.content"
        :key="post.id"
        class="flex items-center pb-6 border-b border-b[#a7a7a7] mt-8"
      >
        <div class="w-[7%]">
          <input
            type="checkbox"
            class="scale-150 max-sm:scale-120 block mx-auto"
            @change="checkPost({ id: post.id, type: post.type })"
          />
        </div>
        <div class="w-[92%] grid grid-cols-3 relative">
          <img
            v-if="post.type === 'video'"
            class="max-w-[200px] max-h-[200px] w-full max-sm:w-[90%] max-sm:max-h-28 object-cover rounded-[10px] border"
            :src="post.meta.thumbnail ? post.meta.thumbnail.meta_value : ''"
          />
          <img
            v-else-if="post.type === 'photo'"
            class="max-w-[200px] max-h-[200px] w-full max-sm:w-[90%] max-sm:max-h-28 object-cover rounded-[10px]"
            :src="post.meta.src ? post.meta.src.meta_value : ''"
          />
          <div class="col-span-2">
            <h2 class="text-[28px] max-sm:text-xl font-bold">
              {{ post.title }}
            </h2>
            <p>{{ post.content }}</p>
          </div>
          <p
            class="absolute bottom-0 right-0 text-[20px] max-sm:text-sm text-[#a0a0a0]"
          >
            {{ formatTime(post.publish_at) }}
          </p>
        </div>
      </section>
    </main>

    <three-dot class="mt-12" />

    <div class="text-right mt-20 mr-2">
      <button
        class="bg-[#ff7591] text-white py-3 px-7 max-sm:px-4 max-sm:py-2 rounded-[10px]"
        @click="deletePosts"
      >
        チェックした投稿を削除
      </button>
    </div>
  </div>
</template>

<script>
import { reactive, ref, useFetch, useStore } from '@nuxtjs/composition-api'
import { formatTime } from '~/helper/formatTime'
export default {
  name: 'EditGirlsPage',
  middleware: 'auth-girl',
  setup() {
    const store = useStore()
    const user = store.getters['user/user']
    const posts = ref(null)
    const checkedPosts = reactive([])
    useFetch(async () => {
      posts.value = await store.dispatch('media/getPostsByUser', {
        id: user.id,
        params: { page: 1, size: 6 },
      })
    })

    function checkPost(checkedPost) {
      const index = checkedPosts.findIndex((post) => post.id === checkedPost.id)
      if (index !== -1) {
        checkedPosts.splice(index, 1)
      } else {
        checkedPosts.push(checkedPost)
      }
    }

    async function deletePosts() {
      const arrayPromise = checkedPosts.map((post) => {
        if (post.type === 'video') {
          return store.dispatch('video/deleteVideo', post.id)
        } else if (post.type === 'photo') {
          return store.dispatch('media/deleteImagePost', post.id)
        }
        return null
      })

      await Promise.all(arrayPromise)

      posts.value.content = posts.value.content.filter(
        (post) => !checkedPosts.some((e) => e.id === post.id)
      )
      checkedPosts.length = 0
    }
    return { posts, checkPost, deletePosts, formatTime }
  },
}
</script>

<style scoped>
.text-header {
  background-image: linear-gradient(0deg, #ff748dfe 0%, #ff7daf 100%);
}
</style>
