<template>
  <div class="flex justify-around w-1/3 max-sm:w-2/3">
    <div to="policy" class="text-center">
      <base-button
        :classes="[{ 'step-btn': step === 1 }, 'text-sm']"
        :text="text[0]"
        @clicked="changeStep(`/register/policy?t=${token}`)"
      />
    </div>
    <span> > </span>
    <div to="" class="text-center">
      <base-button
        :disabled="!agree"
        :classes="[{ 'step-btn': step === 2 }, 'text-sm']"
        :text="text[1]"
        @clicked="changeStep('/register/form')"
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
  computed: {
    agree() {
      return (
        this.$store.state.auth.isChecked &&
        this.$store.state.auth.verifyRes.token
      )
    },
    token() {
      return this.$store.state.auth.verifyRes.token
    },
  },
  methods: {
    changeStep(path) {
      this.$router.push(path)
    },
  },
}
</script>
