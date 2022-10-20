<template>
  <div>
    <div class="text-sm mb-[12px]">{{ title }}</div>
    <div v-for="item of list" :key="item.id">
      <div class="flex items-center mt-[3px]">
        <input
          :id="item.id"
          class="w-[15px]"
          type="checkbox"
          :value="item.slug"
          @input="$emit('input', $event.target.value)"
        />
        <label :for="item.id" class="ml-[12px] text-sm">{{ item.label }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      searchTerm: '',
    }
  },
}
</script>
