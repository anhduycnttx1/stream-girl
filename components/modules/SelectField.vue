<template>
  <div class="flex flex-col w-[90%]">
    <label class="text-sm" :for="name">{{ label }}</label>

    <select
      :id="name"
      :name="name"
      class="bg-white border-b mt-[10px]"
      @input="$emit('input', $event.target.value)"
    >
      <option value="all">すべて</option>
      <option v-for="item in list" :key="item.id" :value="item.slug">
        {{ item.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    list: {
      type: Array,
      default: () => [],
    },
    errors: {
      type: Array,
      default: () => [],
    },
  },
  data: () => {
    return {
      value: '',
    }
  },
}
</script>
