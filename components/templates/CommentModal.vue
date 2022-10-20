<template>
  <div class="w-full text-sm break-all">
    <div class="m-5 md:hidden">
      <base-span class="text-[#1b1b1b] text-sm font-bold" text="コメント" />
    </div>
    <div
      class="md:mt-20 bg-[#fff5f6] px-5 md:px-11 w-full min-h-[60vh] max-h-[60vh] md:h-[41rem] overflow-auto"
    >
      <div
        v-for="comment of comments"
        :key="comment.id"
        class="flex py-10 items-start border-b"
      >
        <img
          class="mr-3 rounded-full w-11 h-11 object-cover"
          :src="comment.commenter.avatar || '/icons/comment-human.png'"
        />
        <div>
          <base-span
            :text="comment.commenter.display_name || ''"
            class="md:text-[1.25rem] text-[#1b1b1b] font-bold"
          />
          <div class="mt-2">
            <p class="md:text-[1.25rem] text-[#1b1b1b] mb-2">
              {{ comment.content }}
            </p>
            <base-span
              :text="convertToTime(comment.created_at)"
              class="text-[#939393] text-[12px] md:text-[1rem]"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="mx-4 mt-4 mb-5">
      <form class="flex items-center" @submit.prevent="submitComment">
        <input
          id="comment"
          v-model="value"
          type="text"
          name="comment"
          class="rounded-[0.625rem] bg-[#d9f9ff] h-11 w-[30.75rem] text-[#1b1b1b] font-medium text-[1.25rem] px-2"
        />
        <base-button
          :disabled="Boolean(!value.trim())"
          class="ml-2"
          type="submit"
          classes="btn__send-comment"
          text="投稿"
        />
      </form>
    </div>
  </div>
</template>

<script>
import timeConverter from '../../helper/timeConverter.js'
export default {
  props: {
    comments: {
      type: Array,
      default: () => [],
    },
  },
  data: () => {
    return {
      value: '',
    }
  },
  methods: {
    submitComment() {
      this.$emit('comment', this.value.trim())
      this.value = ''
    },
    convertToTime(time) {
      const commentTime = Date.parse(time)
      return timeConverter(commentTime)
    },
  },
}
</script>
