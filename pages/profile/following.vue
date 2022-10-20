<template>
  <div class="w-[45rem] mx-auto max-sm:w-full">
    <profile-menu title="フォロー中" />
    <ul>
      <li class="flex justify-between items-start mt-14 mb-5">
        <div class="flex justify-center">
          <img src="~/assets/images/avatar_following.png" alt="" />
          <div class="ml-4">
            <h1 class="font-bold text-[#373737]">まゆみ(20)</h1>
            <div class="text-[12px] text-[#8d8d8d] mt-1 leading-5">
              <p>Gossip Girl 柏店</p>
              <p>柏</p>
              <p>フォロー日時 ： 2021年10月15日 13:12</p>
              <p>メッセージ履歴 : ありorなし</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-between items-end">
          <button class="button--following">フォロー中</button>
          <button class="button--message my-[14px]">メッセージ</button>
          <button class="button--present">
            <span>プレゼント</span>
            <span>5,432P</span>
          </button>
        </div>
      </li>
      <hr />
      <li class="flex justify-between items-start mt-7 mb-5">
        <div class="flex justify-center">
          <img src="~/assets/images/avatar_following.png" alt="" />
          <div class="ml-4">
            <h1 class="font-bold text-[#373737]">まゆみ(20)</h1>
            <div class="text-[12px] text-[#8d8d8d] mt-1 leading-5">
              <p>Gossip Girl 柏店</p>
              <p>柏</p>
              <p>フォロー日時 ： 2021年10月15日 13:12</p>
              <p>メッセージ履歴 : ありorなし</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-between items-end">
          <button class="button--following">フォロー中</button>
          <button class="button--message my-[14px]">メッセージ</button>
          <button class="button--present">
            <span>プレゼント</span>
            <span>5,432P</span>
          </button>
        </div>
      </li>
      <hr />
    </ul>
    <three-dot class="mt-12" />
  </div>
</template>

<script>
export default {
  name: 'FollowingPage',
  middleware: 'auth',
}
</script>

<style scoped>
button {
  @apply w-[7.75rem] h-10 rounded-[10px] text-white text-[12px];
}

.button--following {
  background-image: linear-gradient(-87deg, #ed6e9ffe 0%, #eb8b6b 100%);
}

.button--message {
  background-image: linear-gradient(102deg, #37d6e1 0%, #66a5ff 100%);
}

.button--present {
  @apply w-36 h-6 bg-[#e7e7e7] rounded-[5px] text-[#373737];
}
</style>
