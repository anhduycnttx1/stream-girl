<template>
  <div
    class="w-full mt-5 flex justify-between items-start max-md:justify-center"
  >
    <div
      class="max-md:hidden w-[30%] pb-5 rounded-md shadow-[0_0_5px_rgba(0,0,0,0.2)]"
    >
      <h1
        class="text-lg text-center font-bold border-b border-[#969696] leading-[56px]"
      >
        Gossip Girl 柏店
      </h1>
      <div class="w-[84%] mx-auto mt-4">
        <div>
          <ul>
            <li class="flex justify-center items-center my-2">
              <div class="w-1/2 flex items-center">
                <img class="mr-[10px]" src="/icons/icon_li.svg" alt="" />
                <span class="text-sm font-bold">地域</span>
              </div>
              <p class="w-1/2 text-sm">：千葉県・柏</p>
            </li>
            <li class="flex justify-center items-center my-2">
              <div class="w-1/2 flex items-center">
                <img class="mr-[10px]" src="/icons/icon_li.svg" alt="" />
                <span class="text-sm font-bold">業種</span>
              </div>
              <p class="w-1/2 text-sm">：デリバリーヘルス</p>
            </li>
            <li class="flex justify-center items-center my-2">
              <div class="w-1/2 flex items-center">
                <img class="mr-[10px]" src="/icons/icon_li.svg" alt="" />
                <span class="text-sm font-bold">営業時間</span>
              </div>
              <p class="w-1/2 text-sm">：9:00〜翌5:00</p>
            </li>
            <li class="flex justify-center items-center my-2">
              <div class="w-1/2 flex items-center">
                <img class="mr-[10px]" src="/icons/icon_li.svg" />
                <span class="text-sm font-bold">電話番号</span>
              </div>
              <p class="w-1/2 text-sm">：04-1234-5678</p>
            </li>
          </ul>
        </div>

        <detail-user name="なつみ" />
      </div>
    </div>

    <!-- video  -->
    <div class="max-md:w-[98%] w-[68%] posts">
      <post-list
        action="media/getVideosByAuthor"
        type="videos"
        :params="{
          size: 2,
        }"
        :queryData="{
          id: this.$route.params.id,
        }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideosPage',
}
</script>
