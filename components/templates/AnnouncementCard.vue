<template>
  <div class="mt-[5.125rem] flex flex-col justify-center items-center">
    <div class="text-lg font-bold text-center">
      <h2>会員登録が完了しました。</h2>
      <h2 class="mt-2">引き続きさがさnightをお楽しみ下さい。</h2>
    </div>
    <base-button
      classes="dark-blue-gradient mt-[4.125rem]"
      text="マイページへ"
      @clicked="signup"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: false,
    }
  },
  methods: {
    signup() {
      this.$router.push('/profile')
    },
  },
}
</script>
