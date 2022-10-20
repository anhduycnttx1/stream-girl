<template>
  <div class="w-full border rounded-xl shadow-md">
    <h1 class="text-sm my-[13px] ml-[10px] font-bold">条件で探す</h1>
    <div class="border-b border-[#989898]"></div>
    <h2 class="text-sm ml-[10px] mt-[12px]">人気のハッシュタグ</h2>
    <div class="px-[9px] py-[5px]">
      <div class="grid grid-cols-3 gap-2 items-center">
        <button
          v-for="item in videoTags"
          :key="item.id"
          class="text-[12px] py-[2px] rounded-[10px] font-bold h-fit"
          :class="
            choosingVideoTags.includes(item.slug)
              ? 'bg-[#ffbbbb]'
              : 'bg-[#e7e7e7]'
          "
          @click="tagSelect(item.slug)"
        >
          #{{ item.slug }}
        </button>
      </div>
    </div>
    <div class="">
      <select-field
        class="mx-auto mt-[17px]"
        label="地域"
        name="region"
        :list="cities"
        @input="citySelect"
        aria-placeholder="ALL"
      />
      <select-field
        class="mx-auto mt-[30px]"
        label="業種"
        name="type"
        :list="industories"
        @input="industrySelect"
        aria-placeholder="ALL"
      />
      <check-box-list
        class="mt-[19px] ml-[13px]"
        title="女の子タイプ"
        :list="girl"
        @input="typeSelect"
      />
    </div>
    <div class="flex justify-center">
      <button
        class="bg-[#f44bcb] text-white my-[17px] mx-auto py-[8px] px-[32px] rounded-full text-sm font-bold"
        @click="search"
      >
        この条件で検索する
      </button>
    </div>
  </div>
</template>

<script>
import { useSearchVideo } from '~/compositions'
export default {
  setup(_, { emit }) {
    const {
      girl,
      cities,
      industories,
      videoTags,
      choosingGirl,
      choosingCities,
      choosingIndustories,
      choosingVideoTags,
      choosingTag,
      search,
    } = useSearchVideo(emit)
    return {
      girl,
      cities,
      industories,
      videoTags,
      choosingGirl,
      choosingCities,
      choosingIndustories,
      choosingVideoTags,
      choosingTag,
      search,
    }
  },
  methods: {
    citySelect(value) {
      this.choosingCities = []
      if (value !== 'all') this.choosingCities.push(value)
    },

    industrySelect(value) {
      this.choosingIndustories = []
      if (value !== 'all') this.choosingIndustories.push(value)
    },

    tagSelect(value) {
      if (this.choosingVideoTags.includes(value)) {
        this.choosingVideoTags = this.choosingVideoTags.filter(
          (e) => e !== value
        )
      } else {
        this.choosingVideoTags.push(value)
      }
    },

    typeSelect(value) {
      if (this.choosingGirl.includes(value)) {
        this.choosingGirl = this.choosingGirl.filter((e) => e !== value)
      } else {
        this.choosingGirl.push(value)
      }
    },
  },
}
</script>
