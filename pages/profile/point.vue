<template>
  <div class="w-[45rem] mx-auto max-sm:w-full">
    <profile-menu title="ポイント履歴" />
    <ul class="mt-28">
      <li class="mt-7">
        <h2 class="text-sm text-[#2d2d2d]">
          100Pを消費して、みほさん にキャンディをプレゼントしました。
        </h2>
        <p class="text-[12px] text-[#959595] text-right mb-2">
          <span>2021年10月15日</span>
          <span>13:15</span>
        </p>
        <hr />
      </li>
      <li class="mt-7">
        <h2 class="text-sm text-[#2d2d2d]">
          100Pを消費して、みほさん にキャンディをプレゼントしました。
        </h2>
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
  name: 'PointPage',
  middleware: 'auth',
}
</script>
