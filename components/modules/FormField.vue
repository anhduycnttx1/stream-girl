<template>
  <div
    class="my-7 max-sm:my-4 flex items-center justify-around max-sm:flex-col"
  >
    <base-label
      :required="required"
      :main="label"
      :sub="sub"
      :is-bold="isBold"
      class="w-[45%] max-sm:w-full max-sm:justify-center"
    />
    <base-text-field
      v-model="value"
      class="w-[45%] max-sm:w-5/6"
      :classes="classes"
      :errors="errors"
      :type="type"
      @input="$emit('input', value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    classes: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    required: {
      type: Boolean,
      default: false,
    },
    sub: {
      type: String,
      default: '',
    },
    errors: {
      type: Array,
      default: () => [],
    },
    isBold: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      value: '',
    }
  },
}
</script>
