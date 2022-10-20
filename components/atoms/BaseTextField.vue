<template>
  <div>
    <input
      v-model="value"
      :class="[classes, { error: errors.length }]"
      :type="type"
      @input="$emit('input', { value: $event.target.value })"
    />
    <div v-for="error of errors" :key="error.$uid" class="error-msg">
      <div class="error-msg">{{ error.$message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    classes: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
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

<style scoped>
.input__edit-email,
.input__edit-password {
  @apply text-[#373737] w-[17.6875rem] h-[1.6875rem] bg-[#ffffff] px-0 border-0 rounded-none;

  filter: drop-shadow(0 0 3.5px rgba(0 0 0 / 16%));
  border: 1px solid rgba(159 159 159 / 99%);
}

input {
  @apply !px-2 w-full h-10 border-2 rounded-md max-sm:text-sm;
}

.short-field {
  @apply w-[237px];
}

.big-field {
  @apply w-[364px] h-[209px];
}

.error-msg {
  @apply text-red-600 max-w-full;
}
</style>
