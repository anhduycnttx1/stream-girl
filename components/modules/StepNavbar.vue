<template>
  <div class="flex justify-around w-full">
    <div class="text-center">
      <base-button
        :classes="[{ 'step-btn': step === 1 }, 'text-sm']"
        :text="text[0]"
      />
    </div>
    <span> > </span>
    <div class="text-center">
      <base-button
        :classes="[{ 'step-btn': step === 2 }, 'text-sm']"
        :text="text[1]"
      />
    </div>
    <span> > </span>
    <div class="text-center">
      <base-button
        :classes="[{ 'step-btn': step === 3 }, 'text-sm']"
        :text="text[2]"
      />
    </div>
    <span> > </span>
    <div class="text-center">
      <base-button
        :classes="[{ 'step-btn': step === 4 }, 'text-sm']"
        :text="text[3]"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    step: {
      type: Number,
      required: true,
    },
    text: {
      type: Array,
      required: true,
    },
  },
}
</script>
