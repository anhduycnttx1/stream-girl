<template>
  <div
    class="flex items-center w-full rounded-[0.625rem] drop-shadow-[0_0_4.5px_rgba(0,0,0,21%)] bg-white py-[0.625rem] pl-[0.625rem]"
  >
    <img
      class="h-full w-[6.5625rem] rounded-[0.625rem]"
      src="https://via.placeholder.com/105x135"
      alt=""
    />
    <div class="w-[72.75%] ml-4">
      <div class="flex items-baseline ml-[0.625rem]">
        <img src="/icons/star.svg" alt="" />
        <base-span text="なつみ" class="ml-1" classes="span__info-name" />
        <base-span text="(20)" class="text-[0.875rem] text-[#313131] ml-1" />
      </div>
      <div class="border bg-[#c3c3c3] mr-6 mb-2"></div>
      <div class="ml-[0.625rem] text-[0.875rem]">
        <base-span text="T.160 B.80(A) W.50 H80" />
        <div class="grid grid-cols-2 mb-2">
          <div class="flex">
            <img src="/icons/human.svg" alt="" />
            <base-span text="フォロワー" class="ml-2" />
          </div>
          <base-span text="1.2K" />
          <div class="flex">
            <img src="/icons/black-like.svg" alt="" />
            <base-span text="いいね" class="ml-2" />
          </div>
          <base-span text="888" />
        </div>
      </div>
      <div class="flex pr-2">
        <base-button
          text="+フォロー"
          classes="btn__follow"
          class="mr-[0.3125rem] w-1/3"
        />
        <base-button
          text="Twitterでフォロー"
          classes="btn__follow-twitter"
          class="w-2/3"
        />
      </div>
    </div>
  </div>
</template>
