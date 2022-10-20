<template>
  <div>
    <section
      v-for="item of items"
      :key="item.id"
      class="rounded-[10px] pb-3 shadow-[0_0_5px_rgba(0,0,0,0.2)] max-md:bg-[#f7f7f7] mb-6"
    >
      <!-- avatar -->
      <div
        class="h-[80px] sm-range:h-[120px] max-sm:h-[80px] flex items-center p"
        :class="{ 'md:hidden': type === 'videos' }"
      >
      <div class="bg-gradient-to-b from-sky-400 to-pink-300 p-0.5 w-fit ml-5 rounded-lg ">
        <img
          class="w-[40px] h-[54px] object-cover object-center rounded-lg"
          :src="item.author.avatar"
        />
        </div>
        <div class="ml-[14px]">
          <h1 class="max-sm:text-lg sm-range:text-4xl text-2xl font-bold">
            {{ type === 'diaries' ? item.title : item.author.display_name }}
          </h1>
          <h2
            class="text-sm mt-1 sm-range:text-[28px]"
            :class="{ 'md:hidden': type === 'diaries' }"
          >
            GossipGirl柏店
          </h2>
        </div>
      </div>

      <div class="relative text-center text-white font-bold h-fit">
        <nuxt-link
          v-if="item.audience === 'public' && type !== 'diaries'"
          :to="`/videos/${item.id}`"
        >
          <img class="w-full object-cover" :src="item.thumbnail" />
        </nuxt-link>
        <img
          v-else-if="type === 'diaries' && item.meta.src"
          class="w-full object-cover cursor-pointer"
          :src="item.meta.src.meta_value"
          @click="like(item.id)"
        />
        <img
          v-else-if="type === 'post' && item.meta.thumbnail"
          class="w-full object-cover cursor-pointer"
          :src="item.meta.thumbnail.meta_value"
          @click="like(item.id)"
        />
        <div v-else>
          <div
            class="w-full h-full absolute top-0 left-0 flex justify-center items-center flex-col backdrop-blur-2xl"
          >
            <h1 class="text-[40px]">限定動画</h1>
            <p class="text-[30px] mt-[20%]">
              この動画はフォロワーのみ <br />再生できます
            </p>
          </div>
          <img class="w-full object-cover" :src="item.thumbnail" />
        </div>
      </div>

      <div>
        <div class="flex items-center ml-3 my-3">
          <div class="mr-4">
            <button :disabled="loadingLike" @click="like(item.id)">
              <img
                class="inline-block cursor-pointer"
                :src="
                  item.liked !== undefined
                    ? item.liked
                      ? '/icons/heartn1_red.svg'
                      : '/icons/heartn1.svg'
                    : item.isLiked
                    ? '/icons/heartn1_red.svg'
                    : '/icons/heartn1.svg'
                "
                alt="heart"
              />
            </button>
            <span class="text-[#ababab] text-sm font-bold">{{
              item.like_count
            }}</span>
          </div>
          <img class="cursor-pointer" src="/icons/comment.svg" alt="comment" />
        </div>
        <div class="px-3">
          <p
            v-if="item.type === 'photo' && type !== 'diaries'"
            class="text-sm sm-range:text-[28px]"
          >
            {{ item.title }}
          </p>
          <p class="text-sm sm-range:text-[28px]">
            {{ item.content }}
          </p>
          <div class="max-md:hidden text-[0.75rem] leading-5 text-right pt-3">
            <span>{{ formatTime(item.publish_at) }}</span>
            <span>{{ item.author.display_name }}</span>
          </div>
        </div>
      </div>
    </section>
    <infinite-loading
      spinner="bubbles"
      @infinite="infiniteScroll"
    ></infinite-loading>
  </div>
</template>

<script>
import { formatTime } from '~/helper/formatTime'
import { useInfiniteScroll, useLike } from '~/compositions'
export default {
  name: 'PostList',
  props: {
    action: {
      type: String,
      required: true,
    },
    queryData: {
      type: Object,
    },
    params: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  setup({ action, queryData, params, type }) {
    const { infiniteScroll, items } = useInfiniteScroll(
      action,
      queryData,
      params
    )

    const { loadingLike, errorLike, likeMedia } = useLike(
      type === 'diaries' ? 'media/likePhoto' : 'media/likeVideo'
    )

    // like
    async function like(id) {
      const res = await likeMedia(id)
      if (res) {
        const media = items.value.find((media) => media.id === id)
        media.like_count +=
          media.isLiked !== undefined
            ? media.isLiked
              ? -1
              : 1
            : media.liked
            ? -1
            : 1
        if (media.isLiked !== undefined) {
          media.isLiked = !media.isLiked
        } else {
          media.liked = !media.liked
        }
      }
    }

    return {
      loadingLike,
      errorLike,
      items,
      formatTime,
      like,
      infiniteScroll,
    }
  },
}
</script>
