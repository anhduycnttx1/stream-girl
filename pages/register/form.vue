<template>
  <div>
    <div
      v-if="!verify"
      class="flex flex-col justify-center items-center text-[#222222]"
    >
      <h1 class="text-lg font-bold my-7 max-sm:my-4">
        さがさnight無料会員登録
      </h1>
      <register-step-navbar
        :step="2"
        :text="['確認事項', 'プロフィール入力']"
      />
      <register-form class="mt-[1.125rem] mb-[3.375rem]" @signup="signup" />
    </div>
    <announcement-card v-else />
  </div>
</template>

<script>
export default {
  name: 'RegisterFormPage',
  middleware: ['policy-agree'],
  data() {
    return {
      verify: false,
    }
  },

  methods: {
    signup() {
      this.verify = true
    },
  },
}
</script>
