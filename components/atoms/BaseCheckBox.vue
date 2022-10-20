<template>
  <div class="flex items-center">
    <input
      :id="id"
      class="w-[12px]"
      type="checkbox"
      @change="$emit('check', $event.target.checked)"
    />
    <label :for="id" class="ml-[6px] text-[16px]">{{ text }}</label>
  </div>
</template>

<script>
export default {
  name: 'BaseCheckBox',
  props: {
    text: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      default: '',
    },
  },
}
</script>
