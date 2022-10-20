<template>
  <div class="flex flex-col justify-center items-center text-[#222222]">
    <h1 class="text-lg font-bold my-7 max-sm:my-4">さがさnight無料会員登録</h1>
    <register-step-navbar :step="1" :text="['確認事項', 'プロフィール入力']" />
    <div class="flex flex-col justify-center items-center my-6 max-sm:my-3">
      <policy-card />
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterPolicyPage',
  middleware: 'policy-redirect',
}
</script>
