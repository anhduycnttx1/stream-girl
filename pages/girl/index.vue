<template>
  <div class="text-2xl text-[#4e4e4e] mb-12 max-sm:text-base">
    <girl-navbar :has-logo="false" class="-mb-1" />

    <section class="bg-[#ffecec] border-t-[3px] border-t-[#ada1db]">
      <header class="relative pb-8 text-center">
        <div
          class="-translate-y-[25%] flex items-center border-b border-black w-[95%] mx-auto pb-2"
        >
          <img
            class="border-[3px] rounded-full w-[190px] h-[190px] max-sm:w-[130px] max-sm:h-[130px] object-cover"
            src="@/assets/images/avatar_home.png"
            alt="avatar"
          />
          <div class="ml-4 max-sm:ml-2">
            <h1>
              <span class="text-[32px] max-sm:text-2xl font-bold">ともえ</span
              ><span>さん</span>
            </h1>
            <h2>Gossip Girl</h2>
          </div>
        </div>

        <div
          class="w-[92%] flex items-center justify-around rounded-[10px] border-2 border-[#ff9898] mx-auto"
        >
          <img src="/icons/qua_icon.svg" alt="" />
          <span class="font-bold py-4 -ml-[5%] max-sm:-ml-[2.5%]"
            >総プレゼント数</span
          >
          <span>1,000P</span>
        </div>

        <div
          class="grid grid-cols-2 w-[92%] mx-auto mt-2 gap-[4.5rem] max-sm:gap-4"
        >
          <!-- left -->
          <div>
            <div class="flex justify-between items-center mt-3">
              <button
                class="text-white font-bold rounded-[10px] w-[63%] h-10 bg-[#ff9898]"
              >
                フォロワー
              </button>
              <span class="">1,000 人</span>
            </div>
            <div class="flex justify-between items-center mt-3">
              <button
                class="text-white font-bold rounded-[10px] w-[63%] h-10 bg-[#ff9898]"
              >
                総いいね数
              </button>
              <span class="">1,000 件</span>
            </div>
            <div class="flex justify-between items-center mt-3">
              <button
                class="text-white font-bold rounded-[10px] w-[63%] h-10 bg-[#ff9898]"
              >
                昨日の再生数
              </button>
              <span class="">1,000 回</span>
            </div>
          </div>
          <!-- right -->
          <div>
            <div class="flex justify-between items-center mt-3">
              <button
                class="text-white font-bold rounded-[10px] w-[63%] h-10 bg-[#ff9898]"
              >
                フォロワー
              </button>
              <span class="">1,000 人</span>
            </div>
            <div class="flex justify-between items-center mt-3">
              <button
                class="text-white font-bold rounded-[10px] w-[63%] h-10 bg-[#ff9898]"
              >
                総いいね数
              </button>
              <span class="">1,000 件</span>
            </div>
            <div class="flex justify-between items-center mt-3">
              <button
                class="text-white font-bold rounded-[10px] w-[63%] h-10 bg-[#ff9898]"
              >
                昨日の再生数
              </button>
              <span class="">1,000 回</span>
            </div>
          </div>
        </div>
      </header>
    </section>
    <section class="mt-3 bg-[#ffecec] grid grid-cols-2 gap-10 pt-3 pb-7 px-8">
      <nuxt-link
        to="/girl/message"
        class="bg-[#fff5f5] border-2 border-[#ff25ba] flex justify-center items-center flex-col rounded-[10px] py-1"
      >
        <img src="/icons/message_icon.svg" alt="" />
        <h3>メッセージ</h3>
      </nuxt-link>
      <nuxt-link
        to="/girl/list-user"
        class="bg-[#fff5f5] text-[#ff25ba] border-2 border-[#ff25ba] flex justify-center items-center flex-col rounded-[10px] py-1"
      >
        <h3>現在アタック可能!!</h3>
      </nuxt-link>
    </section>

    <section class="mt-3 bg-[#ffecec] drop-shadow-[0_0_3px_rgba(0,0,0,0.32)]">
      <h1 class="font-bold py-3 px-8">投稿する</h1>
      <div class="bg-[#ffbcbc] px-8 py-6">
        <div class="grid grid-cols-2 gap-10 mb-4">
          <nuxt-link
            to="/girl/post/add-image"
            class="bg-[#fff5f5] border-2 border-[#ff25ba] flex justify-center items-center flex-col rounded-[10px] py-1"
          >
            <img src="/icons/girls_icon_1.svg" alt="" />
            <h3>画像で投稿</h3>
          </nuxt-link>
          <nuxt-link
            to="/girl/post/add-video"
            class="bg-[#fff5f5] border-2 border-[#ff25ba] flex justify-center items-center flex-col rounded-[10px] py-1"
          >
            <img src="/icons/girls_icon_2.svg" alt="" />
            <h3>動画で投稿</h3>
          </nuxt-link>
        </div>
        <nuxt-link
          to="/girl/post/edit"
          class="bg-[#fff5f5] border-2 border-[#ff25ba] flex justify-center items-center rounded-[10px] py-5"
        >
          <img class="mr-5" src="/icons/girls_icon_4.svg" alt="" />
          <h3>投稿の編集・削除</h3>
        </nuxt-link>
      </div>
    </section>

    <section class="mt-3 bg-[#ffecec] drop-shadow-[0_0_3px_rgba(0,0,0,0.32)]">
      <h1 class="font-bold py-3 px-8">投稿する</h1>
      <div class="bg-[#ffbcbc] px-8 py-6">
        <div class="grid grid-cols-2 gap-10">
          <nuxt-link
            to="/girl/post/add-voice"
            class="bg-[#fff5f5] border-2 border-[#ff25ba] flex justify-center items-center flex-col rounded-[10px] py-1"
          >
            <img src="/icons/girls_icon_5.svg" alt="" />
            <h3>画像で投稿</h3>
          </nuxt-link>
          <nuxt-link
            to="/girl/introduce"
            class="bg-[#fff5f5] border-2 border-[#ff25ba] flex justify-center items-center flex-col rounded-[10px] py-1"
          >
            <img src="/icons/girls_icon_6.svg" alt="" />
            <h3>動画で投稿</h3>
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'GirlsPage',
  middleware: 'auth-girl',
}
</script>
