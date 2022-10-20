<template>
  <div>
    <div
      class="text-[24px] md:ml-[73px] font-bold mt-[38px] max-md:text-center max-md:text-[35px]"
    >
      ユーザー様用パスワード再発行フォーム
    </div>
    <div class="flex flex-col items-center">
      <div
        class="w-[733px] text-[17px] mt-[63px] max-md:w-[90%] max-md:text-[26px]"
      >
        パスワードをお忘れのユーザー様はご登録いただきましたメールアドレスと登録した生年月日を
        入力してください。
      </div>
      <div class="w-[80%] mt-[38px]">
        <div class="md:flex">
          <div
            class="text-[23px] max-md:text-[30px] font-bold md:w-[184px] text-right max-md:text-center pr-[23px]"
          >
            メールアドレス
          </div>
          <input
            class="w-[563px] h-[42px] border-[1px] rounded-sm max-md:mt-[23px] max-md:w-full"
          />
        </div>
        <div class="md:flex mt-[24px] max-md:mt-[52px]">
          <div
            class="text-[23px] max-md:text-[30px] font-bold md:w-[184px] text-right max-md:text-center pr-[23px]"
          >
            生年月日
          </div>
          <select-birthday class="font-bold max-md:mx-auto max-md:mt-[18px]" />
        </div>
      </div>

      <button
        class="w-[149px] max-md:w-[179px] h-[51px] bg-[#737373] text-white font-bold text-[23px] max-md:text-[30px] rounded-lg mt-[67px] max-md:mt-[96px]"
      >
        確認する
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PasswordRecoveryPage',
}
</script>
