<template>
  <div>
    <h1 class="text-[24px] font-bold mt-[42px] ml-8">
      店舗様管理画面パスワード再発行フォーム
    </h1>
    <div class="w-[730px] mx-auto mt-[72px]">
      <p class="text-[18px]">
        パスワードをお忘れの店舗様はご登録いただきましたメールアドレスを入力してください。
      </p>
      <div class="mt-[40px]">
        <label for="email" class="text-[24px] font-bold">メールアドレス</label>
      </div>
      <div class="mt-[12px]">
        <input
          id="email"
          type="email"
          class="w-[436px] h-[42px] border-[1px] px-[2%]"
        />
      </div>
      <button
        class="text-[24px] text-white font-bold bg-[#737373] rounded-xl w-[149px] h-[51px] mt-[9px]"
      >
        確認する
      </button>
      <p class="text-[18px] mt-[57px]">
        メールアドレスが新しく変わった方・メールアドレスがわからない方は、「<nuxt-link
          to="#"
          class="text-[#0012ff]"
          >お問い合わせ</nuxt-link
        >」より ご連絡ください。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecoveryPage',
  layout: 'plain',
}
</script>
