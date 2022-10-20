<template>
  <div class="w-[45rem] mx-auto max-sm:w-full">
    <profile-menu title="プレゼント履歴" />
    <ul class="mt-6">
      <li class="mt-7">
        <div class="flex justify-between items-center">
          <div class="flex items-center w-4/5 text-sm">
            <img src="~/assets/images/avatar_following.png" alt="" />
            <p class="ml-8 text-[#2b2b2b]">
              みほさん へキャンディをプレゼントしました。
            </p>
          </div>
          <span class="text-[#ff6a6a] font-bold">100P</span>
        </div>
        <p class="text-[12px] text-[#959595] text-right mb-2">
          <span>2021年10月15日</span>
          <span>13:15</span>
        </p>
        <hr />
      </li>
      <li class="mt-7">
        <div class="flex justify-between items-center">
          <div class="flex items-center w-4/5 text-sm">
            <img src="~/assets/images/avatar_following.png" alt="" />
            <p class="ml-8 text-[#2b2b2b]">
              みほさん へキャンディをプレゼントしました。
            </p>
          </div>
          <span class="text-[#ff6a6a] font-bold">100P</span>
        </div>
        <p class="text-[12px] text-[#959595] text-right mb-2">
          <span>2021年10月15日</span>
          <span>13:15</span>
        </p>
        <hr />
      </li>
    </ul>

    <three-dot class="mt-12" />
  </div>
</template>

<script>
export default {
  name: 'PresentPage',
  middleware: 'auth',
}
</script>
