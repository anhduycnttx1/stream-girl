<template>
  <div class="border-[1px] rounded-lg px-[9px]">
    <div class="flex items-center mt-1">
      <img class="w-4" src="/icons/pink_dot.svg" />
      <h1 class="text-lg font-Nikumaru ml-3">出勤情報</h1>
    </div>
    <div class="flex justify-between mt-1">
      <button
        v-for="(item, index) of list"
        :key="item.day"
        class="w-[13%] aspect-square rounded-full"
        :class="index == choosingDay ? 'bg-[#ff9d9d]' : 'bg-[#d8d8d8]'"
        @click="chooseDay(index)"
      >
        <h2 class="text-base leading-4 font-bold font-NotoSansJP">
          {{ item.day }}
        </h2>
        <h2 class="text-xs leading-4 font-NotoSansJP">
          {{ item.weekday }}
        </h2>
      </button>
    </div>
    <div class="flex flex-wrap justify-center mt-[11px]">
      <img
        v-for="item of list[choosingDay].girls"
        :key="item"
        class="w-[31.5%] aspect-square object-cover rounded-lg m-[0.75%]"
        src="~assets/images/default_image.jpg"
      />
    </div>
    <div class="flex justify-center">
      <button
        class="w-[40%] h-10 bg-gradient-to-r from-[#4fabfd] to-[#00f1fd] text-lg rounded-full my-2 font-Nikumaru"
      >
        もっと見る
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          day: 4,
          weekday: '水',
          girls: [
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
          ],
        },
        {
          day: 5,
          weekday: '木',
          girls: [
            { id: 11 },
            { id: 12 },
            { id: 13 },
            { id: 14 },
            { id: 15 },
            { id: 16 },
          ],
        },
        {
          day: 6,
          weekday: '金',
          girls: [
            { id: 21 },
            { id: 22 },
            { id: 23 },
            { id: 24 },
            { id: 25 },
            { id: 26 },
          ],
        },
        {
          day: 7,
          weekday: '土',
          girls: [
            { id: 31 },
            { id: 32 },
            { id: 33 },
            { id: 34 },
            { id: 35 },
            { id: 36 },
          ],
        },
        {
          day: 8,
          weekday: '日',
          girls: [
            { id: 41 },
            { id: 42 },
            { id: 43 },
            { id: 44 },
            { id: 45 },
            { id: 46 },
          ],
        },
        {
          day: 9,
          weekday: '月',
          girls: [
            { id: 51 },
            { id: 52 },
            { id: 53 },
            { id: 54 },
            { id: 55 },
            { id: 56 },
          ],
        },
        {
          day: 10,
          weekday: '火',
          girls: [
            { id: 61 },
            { id: 62 },
            { id: 63 },
            { id: 64 },
            { id: 65 },
            { id: 66 },
          ],
        },
      ],
      choosingDay: 0,
    }
  },
  methods: {
    chooseDay(day) {
      this.choosingDay = day
    },
  },
}
</script>
