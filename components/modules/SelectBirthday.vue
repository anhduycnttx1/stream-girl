<template>
  <div class="flex w-[381px] max-sm:w-fit">
    <div>
      <select
        id="year"
        v-model="time.year"
        class="w-24 max-sm:w-16"
        @change="onChange"
      >
        <option v-for="n in 83" :key="'year' + n" :value="year - 17 - n">
          {{ year - 17 - n }}
        </option>
      </select>
      <label for="year">年</label>
    </div>
    <div>
      <select
        id="month"
        v-model="time.month"
        class="w-[70px] max-sm:w-10"
        @change="onChange"
      >
        <option v-for="n in 12" :key="'month' + n" :value="n">
          {{ n }}
        </option>
      </select>
      <label for="month">月</label>
    </div>
    <div>
      <select
        id="date"
        v-model="time.date"
        class="w-[70px] max-sm:w-10"
        name=""
        @change="onChange"
      >
        <option v-for="n in maxDate" :key="'date' + n" :value="n">
          {{ n }}
        </option>
      </select>
      <label for="date">日</label>
    </div>
  </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'
import { formatDate } from '~/helper/formatDate'
export default {
  props: {
    birthdayDefault: {
      type: Array,
      default: () => [1990, 1, 1],
    },
  },
  setup(props) {
    const time = ref({})
    time.value = {
      year: props.birthdayDefault[0],
      month: props.birthdayDefault[1],
      date: props.birthdayDefault[2],
    }
    return { time }
  },
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
  computed: {
    maxDate() {
      return new Date(this.time.year, this.time.month, 0).getDate()
    },
    birthday() {
      return `${formatDate(this.time.year)}-${formatDate(
        this.time.month
      )}-${formatDate(this.time.date)}`
    },
  },
  methods: {
    onChange() {
      if (this.time.date > this.maxDate) {
        this.time.date = 1
      }
      this.$emit('change', { value: this.birthday })
    },
  },
}
</script>

<style scoped>
select {
  @apply bg-white border rounded-[5px] h-10;
}

label {
  @apply !mx-3 max-sm:!mx-2;
}
</style>
