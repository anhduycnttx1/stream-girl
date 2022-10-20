<template>
  <div>
    <div v-if="isLabel" :class="classes">
      <label for="">{{ main }}</label>
    </div>
    <div v-else class="flex w-full justify-center items-start">
      <div
        :class="[
          'text-right max-sm:text-center text-[#f44bcb] w-44 max-sm:w-fit',
          isBold && 'font-bold',
        ]"
      >
        <p class="text-lg">
          {{ main }}
          <span class="block mr-4 right-0 text-sm">
            {{ sub }}
          </span>
        </p>
      </div>
      <p
        v-if="required"
        class="w-12 mx-4 my-1 px-2 font-bold text-sm text-white bg-[#f44bcb] rounded-full text-center"
      >
        必須
      </p>
      <p
        v-else
        class="w-12 mx-4 my-1 px-2 font-bold text-sm rounded-full text-center max-sm:hidden"
      ></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseLabel',
  props: {
    main: {
      type: String,
      default: '',
    },
    sub: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    isLabel: {
      type: Boolean,
      default: false,
    },
    classes: {
      type: String,
      default: '',
    },
    isBold: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style scoped>
.label__edit-account {
  @apply text-[0.875rem] text-[#373737] leading-[0.875rem];
}
</style>
