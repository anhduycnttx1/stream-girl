<template>
  <div class="flex flex-col items-center relative">
    <button
      class="absolute w-full h-[30%] top-[-30%] z-50"
      @click="closeModal"
    ></button>
    <div
      class="rounded-[50%] w-32 h-16 bg-white flex items-center justify-center absolute -top-8"
    >
      <img class="mb-4 w-7" src="/icons/setting_pink.svg" />
    </div>
    <h1 class="text-base font-bold mt-6 z-50">表示条件のカスタマイズ</h1>
    <div class="w-[80%] border-b border-[#bbbbbb] mt-6"></div>
    <button-group
      class="mt-5 w-[80%]"
      :list="industories"
      group="industry"
      title="業種"
      :choosing-list="choosingIndustories"
      @clicked="industrySelect"
    />
    <button-group
      class="mt-5 w-[80%]"
      title="地域"
      :list="cities"
      group="area"
      :choosing-list="choosingCities"
      @clicked="citySelect"
    />
    <button-group
      class="mt-5 w-[80%]"
      title="タイプ"
      :list="girl"
      group="type"
      :choosing-list="choosingGirl"
      @clicked="typeSelect"
    />
    <button-group
      class="mt-5 w-[80%]"
      title="人気のハッシュタグ"
      :list="videoTags"
      group="videoTags"
      :choosing-list="choosingVideoTags"
      @clicked="tagSelect"
    />
    <div class="w-[80%] border-b border-[#bbbbbb] mt-[29px]"></div>
    <div class="my-[29px] w-[90%] flex justify-between">
      <button
        class="rounded-full text-xl font-bold w-[40%] h-16 bg-[#e4e4e4]"
        @click="closeModal"
      >
        リセット
      </button>
      <button
        class="rounded-full text-white text-xl font-bold w-[50%] h-16 bg-[#fc85df]"
        @click="search"
      >
        設定
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
    closeModal() {
      this.$modal.close({ name: 'criteria' })
      this.$emit('search')
    },

    citySelect(value) {
      this.choosingCities.push(value)
    },

    industrySelect(value) {
      this.choosingIndustories.push(value)
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
