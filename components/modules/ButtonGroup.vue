<template>
  <div>
    <div class="flex items-center mb-1">
      <img class="h-2" src="/icons/pink_dot.svg" />
      <div class="text-base font-bold ml-1">
        {{ title }}
      </div>
    </div>
    <div class="flex flex-wrap justify-start">
      <button
        v-for="item of list"
        :key="item.label"
        class="h-8 text-sm rounded-md m-[1%] truncate"
        :class="[
          group == 'videoTags' ? 'px-2' : 'w-[23%]',
          choosingList.includes(item.slug)
            ? 'bg-[#fc85df] text-white'
            : 'bg-[#e4e4e4]',
        ]"
        @click="clickButton(item.slug)"
      >
        {{ item.label }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    list: {
      type: Array,
      required: true,
    },
    choosingList: {
      type: Array,
      default: () => [],
    },
    group: {
      type: String,
      required: true,
    },
  },
  methods: {
    clickButton(value) {
      this.$emit('clicked', value)
    },
  },
}
</script>
