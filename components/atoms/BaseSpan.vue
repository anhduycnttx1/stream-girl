<template>
  <span :class="classes">{{ text }}</span>
</template>

<script>
export default {
  name: 'BaseSpan',
  props: {
    text: { type: [String, Number], default: 'Span' },
    classes: { type: String, default: '' },
  },
}
</script>

<style scoped>
.span__modify-account {
  @apply text-[1.25rem] leading-[1.25rem] text-[#399bff] font-bold block;
}

.span__edit-email {
  @apply text-[1rem] leading-[1rem] text-[#373737] font-bold block;
}

.span-red {
  @apply text-[0.875rem] leading-[0.875rem] text-[#ff6a6a] font-bold block;
}

.span-time-current-history {
  @apply text-[0.75rem] leading-[0.75rem] text-[#a1a1a1] font-bold block;
}

.span-time-point-history {
  @apply text-[0.75rem] leading-[0.75rem] text-[#959595] font-bold block;
}

.span-normal {
  @apply text-[0.875rem] leading-[0.875rem] w-[17.6875rem] block;
}

.span__info-name {
  @apply text-[1.125rem] text-[#313131] font-bold;
}
</style>
