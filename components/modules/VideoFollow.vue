<template>
  <nuxt-link :to="`/videos/${video.id}`">
    <div :class="['relative text-[0.75rem] text-white rounded-lg', classes]">
      <img
        class="rounded-[5px] !w-full object-cover"
        :class="classes"
        :src="video.thumbnail"
      />
      <div
        class="px-[5px] border absolute top-1 left-1 bg-[rgba(0,0,0,0.3)] rounded-[10px] flex justify-center items-start break-all"
      >
        <img class="mr-[2px] mt-[2px]" src="/icons/like.svg" alt="" />
        <span>{{ video.like_count || 0 }}</span>
      </div>
      <div
        v-if="video.author"
        class="absolute bottom-1.5 left-1.5 flex justify-between items-end"
      >
        <img
          class="inline-block w-[1.875rem] h-[2.375rem] rounded-md"
          :src="video.author.avatar"
          alt=""
        />
        <h4 class="leading-3 ml-1">
          {{ video.author.display_name }}
        </h4>
      </div>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    classes: {
      type: String,
      default: 'w-32 h-56',
    },
    video: {
      type: Object,
      default: () => ({
        id: 2,
        user_id: 1,
        type: 'video',
        title: 'テストビデオ',
        status: 'publish',
        comment_count: 10,
        like_count: 20,
        content:
          '本文本文本文本文本文本文本文本文\r\n本文本文\r\n本文本文本文本文本文本文\r\n\r\n本文本文本文本文本文本文\r\n本文本文本文本文本文本文本文本文',
        upate_user_id: null,
        publish_at: '2022-01-31T08:27:30',
        meta: {
          durationInMs: {
            meta_key: 'durationInMs',
            meta_label: '再生時間（ミリ秒）',
            meta_value: '100000',
          },
          audience: {
            meta_key: 'audience',
            meta_label: '公開範囲',
            meta_value: 'private',
          },
          thumbnail: {
            meta_key: 'thumbnail',
            meta_label: 'サムネイル',
            meta_value:
              'https://sagasanight.com/media/video/1/123456789/sample-5s.0000000.jpg',
          },
          src: {
            meta_key: 'src',
            meta_label: '映像ソース',
            meta_value:
              'https://sagasanight.com/media/video/1/123456789/sample-5s.m3u8',
          },
        },
        tags: [
          {
            label: '乳首',
            slug: '乳首',
            id: 1,
          },
          {
            label: '手ぶら',
            slug: '手ぶら',
            id: 2,
          },
          {
            label: '乳',
            slug: '乳',
            id: 3,
          },
          {
            label: 'かわいい',
            slug: 'かわいい',
            id: 4,
          },
          {
            label: 'おっぱい',
            slug: 'おっぱい',
            id: 5,
          },
          {
            label: 'すっぴん',
            slug: 'すっぴん',
            id: 6,
          },
          {
            label: 'パジャマ',
            slug: 'パジャマ',
            id: 7,
          },
          {
            label: 'テストタグテストタグ',
            slug: 'テストタグテストタグ',
            id: 8,
          },
          {
            label: 'ラブホで',
            slug: 'ラブホで',
            id: 9,
          },
          {
            label: 'プレイ後',
            slug: 'プレイ後',
            id: 10,
          },
        ],
        author: {
          id: 1,
          display_name: 'システム管理者',
          avatar:
            'https://sagasanight.com/uploads/2022/0224/1/PDZgNAfRuFolwXck.png',
        },
        upload_url: null,
        src: 'https://sagasanight.com/media/video/1/123456789/sample-5s.m3u8',
        duration_in_ms: 100000,
        audience: 'private',
        thumbnail: 'https://via.placeholder.com/153x271',
      }),
    },
  },
}
</script>
