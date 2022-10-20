<template>
  <div class="mb-16">
    <header>
      <img src="@/assets/images/home_banner.png" alt="home banner" />
    </header>
    <main class="max-md:w-[95%] mx-auto">
      <section class="max-md:hidden mt-9">
        <video-slider-home />
      </section>
      <section class="md:hidden mt-9">
        <video-list-mobile />
      </section>
      <div
        class="relative flex justify-center items-center cursor-pointer w-[516px] max-sm:w-[90%] h-12 text-lg max-sm:text-base text-[#727272] font-bold border-2 border-[#727272] rounded-[10px] mx-auto mt-10"
      >
        <span>女の子タイプ・エリア別検索はコチラ</span>
        <img
          class="w-[10px] inline-block absolute right-5"
          src="/icons/next_home_black.svg"
        />
      </div>
      <section
        class="my-12 rounded-[10px] shadow-[0_0_8.5px_rgba(0,0,0,0.35)] w-full"
      >
        <div
          class="relative bg-[#3a3a3a] h-28 flex items-center rounded-t-[10px]"
        >
          <div class="absolute left-[20%] max-md:left-[5%]">
            <div
              class="w-[88px] h-[88px] max-sm:w-14 max-sm:h-14 relative bg-white rounded-full"
            >
              <img
                src="/icons/1500108.svg"
                class="w-auto absolute top-1/2 -translate-y-1/2"
              />
            </div>
          </div>
          <div class="text-white font-bold text-center w-full">
            <h1 class="md:text-lg">貴方のタイプと出会いを繋ぐ</h1>
            <h1 class="text-[40px] max-sm:text-[20px]">風俗マッチング</h1>
          </div>
        </div>
        <div class="h-96 max-sm:h-60 grid grid-cols-3 items-center">
          <img
            class="w-auto ml-[15%] max-md:ml-1 max-md:hidden"
            src="@/assets/images/条件に一致する女の子にだけ 貴方の通知が届く。.png"
          />
          <img
            class="w-auto ml-[15%] max-md:ml-1 md:hidden"
            src="@/assets/images/条件に一致する女の子に だけ貴方の通知が届く_sp.png"
          />
          <div
            class="flex flex-col items-center justify-center col-span-2 max-md:flex-col-reverse"
          >
            <button
              class="w-[62%] max-md:w-[90%] rounded-[5px] border-2 border-[#ff25ba]"
              @click="openModalMatching"
            >
              <div
                class="bg-[#ff25ba] rounded-[5px] h-[88px] max-sm:h-12 flex justify-center items-center m-1"
              >
                <span class="text-[32px] max-sm:text-base text-white font-bold"
                  >マッチングを始める</span
                >
                <img
                  class="ml-14 max-sm:ml-5 w-[14px]"
                  src="/icons/next_home.svg"
                  alt=""
                />
              </div>
            </button>
            <v-modal
              name="start-matching"
              classes="w-[680px] max-sm:w-[90%] sm-range:w-[600px] mt-5"
            >
              <start-matching-modal />
            </v-modal>
            <div
              class="relative w-[68%] max-md:w-[90%] py-8 max-sm:py-2 max-sm:pl-1 max-sm:text-sm sm-range:text-lg pl-4 md:mt-14 max-md:mb-4 border-2 border-[#adadad] rounded-[5px]"
            >
              <img
                class="absolute top-0 left-5 -translate-x-1/2 -translate-y-1/2 max-sm:w-14"
                src="@/assets/images/point.png"
              />
              <p class="text-[#2c2c2c] max-md:pt-3">
                女の子が自らアタックした事で、女の子のやる気もアップ!
                <br />より濃密な時間が楽しめる...!?
                <br />
                さらに会員限定のサービスだから女の子も安心できちゃう!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="w-[70%] mx-auto max-md:w-[95%]">
        <div
          class="cursor-pointer rounded-[5px] border-[6px] border-[#c6c6c6] py-2 px-4 max-sm:px-1 max-sm:py-1 flex justify-between items-center"
        >
          <img
            class="max-sm:w-16"
            src="@/assets/images/home_長方形 2 のコピー.png"
          />
          <div class="flex justify-between items-center">
            <div>
              <h1 class="text-[27px] max-sm:text-lg text-[#ff25ba] font-bold">
                女の子・ジャンル別再生ランキング！
              </h1>
              <p class="text-[15px] max-sm:text-[12px]">
                多くのユーザーに見られている女の子をピックアップ！
              </p>
            </div>
            <img class="ml-1" src="/icons/next_home_black.svg" />
          </div>
        </div>

        <div
          class="text-center text-2xl max-sm:text-base mt-7 grid grid-cols-4 gap-2 max-sm:gap-1"
        >
          <button
            class="max-sm:p-1 p-5 border-2 border-[#949494] rounded-[10px]"
          >
            お店 <br />
            ランキング
          </button>
          <button
            class="max-sm:p-1 p-5 border-2 border-[#949494] rounded-[10px]"
          >
            女の子 <br />
            ランキング
          </button>
          <button
            class="max-sm:p-1 p-5 border-2 border-[#949494] rounded-[10px]"
          >
            動画視聴 <br />
            ランキング
          </button>
          <button
            class="max-sm:p-1 p-5 border-2 border-[#949494] rounded-[10px]"
          >
            いいね数 <br />
            ランキング
          </button>
        </div>
      </section>

      <section class="mt-11 grid md:grid-cols-2">
        <div>
          <h1 class="text-4xl max-sm:text-2xl text-[#a1a1a1] font-bold">
            総再生回数ランキングTOP3
          </h1>
          <div class="text-[19px] mt-4 items-container">
            <div
              v-for="(i, index) of 3"
              :key="i"
              class="flex items-start border-b-[3px] border-b-[#e5e5e5]"
            >
              <img class="w-[106px] h-[163px] object-cover"  src="https://gamek.mediacdn.vn/133514250583805952/2021/7/2/base64-16252430110351141040426.png" alt="" />
              <div class="ml-2">
                <div class="flex items-end">
                  <img :src="`/icons/top${index + 1}.svg`" alt="" />
                  <h2 class="font-bold">りさ</h2>
                </div>
                <div class="text-[#727272]">
                  <h3>GossipGirl 柏店</h3>
                  <h3>
                    投稿動画数 <span class="inline-block ml-7">123個</span>
                    <img
                      class="inline-block mb-1"
                      src="@/assets/images/text_up.png"
                      alt=""
                    />
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="max-md:hidden">
          <h1 class="text-4xl text-[#a1a1a1] font-bold">
            総いいねランキングTOP3
          </h1>
          
          <div class="text-[19px] mt-4 items-container">
            <div
              v-for="(i, index) of 3"
              :key="i"
              class="flex items-start border-b-[3px] border-b-[#e5e5e5]"
            >
              <img class="w-[106px] h-[163px] object-cover" src="https://cdn.24h.com.vn/upload/3-2021/images/2021-08-09/7-1628476022-651-width650height867.jpg" alt="" />
              <div class="ml-2">
                <div class="flex items-end">
                  <img :src="`/icons/top${index + 1}.svg`" alt="" />
                  <h2 class="font-bold">りさ</h2>
                </div>
                <div class="text-[#727272]">
                  <h3>GossipGirl 柏店</h3>
                  <h3>
                    投稿動画数 <span class="inline-block ml-7">123個</span>
                    <img
                      class="inline-block mb-1"
                      src="@/assets/images/text_up.png"
                      alt=""
                    />
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- pc -->
      <div class="max-md:hidden">
        <section class="relative mt-12">
          <div
            class="bg-[#F9FAFF] absolute -left-[50%] w-[200vw] h-full z-[-1]"
          ></div>
          <div class="max-w-[1000px] pb-8 pt-3">
            <h1 class="flex justify-center items-center w-fit mb-2">
              急上昇 <img class="ml-1" src="/icons/icon_trend.svg" alt="" />
            </h1>
            <video-slider
              id="home-1"
              classes="w-[9.5rem] h-[16.875rem]"
              classes-container="!w-[10rem]"
              class="w-[95%] mx-auto"
            />
            <div class="text-center mt-5">
              <button
                class="text-[#2b2a2a] px-8 h-8 bg-[#ff9d9d] rounded-[5px]"
              >
                もっと見る
              </button>
            </div>
          </div>
        </section>
        <section class="relative mt-4">
          <div class="absolute -left-[50%] w-[200vw] h-full z-[-1]"></div>
          <div class="max-w-[1000px] pb-8 pt-3">
            <h1 class="flex justify-center items-center w-fit mb-2">
              急上昇 <img class="ml-1" src="/icons/icon_trend.svg" alt="" />
            </h1>
            <video-slider
              id="home-2"
              classes="w-[9.5rem] h-[16.875rem]"
              classes-container="!w-[10rem]"
              class="w-[95%] mx-auto"
            />
            <div class="text-center mt-5">
              <button
                class="text-[#2b2a2a] px-8 h-8 bg-[#ff9d9d] rounded-[5px]"
              >
                もっと見る
              </button>
            </div>
          </div>
        </section>
        <section class="relative mt-4">
          <div
            class="bg-[#F9FAFF] absolute -left-[50%] w-[200vw] h-full z-[-1]"
          ></div>
          <div class="max-w-[1000px] pb-8 pt-3">
            <h1 class="flex justify-center items-center w-fit mb-2">
              急上昇 <img class="ml-1" src="/icons/icon_trend.svg" alt="" />
            </h1>
            <video-slider
              id="home-3"
              classes="w-[9.5rem] h-[16.875rem]"
              classes-container="!w-[10rem]"
              class="w-[95%] mx-auto"
            />
            <div class="text-center mt-5">
              <button
                class="text-[#2b2a2a] px-8 h-8 bg-[#ff9d9d] rounded-[5px]"
              >
                もっと見る
              </button>
            </div>
          </div>
        </section>
        <section class="relative mt-4">
          <div class="absolute -left-[50%] w-[200vw] h-full z-[-1]"></div>
          <div class="max-w-[1000px] pb-8 pt-3">
            <h1 class="flex justify-center items-center w-fit mb-2">
              急上昇 <img class="ml-1" src="/icons/icon_trend.svg" alt="" />
            </h1>
            <video-slider
              id="home-4"
              classes="w-[9.5rem] h-[16.875rem]"
              classes-container="!w-[10rem]"
              class="w-[95%] mx-auto"
            />
            <div class="text-center mt-5">
              <button
                class="text-[#2b2a2a] px-8 h-8 bg-[#ff9d9d] rounded-[5px]"
              >
                もっと見る
              </button>
            </div>
          </div>
        </section>
        <section class="relative mt-4">
          <div
            class="bg-[#F9FAFF] absolute -left-[50%] w-[200vw] h-full z-[-1]"
          ></div>
          <div class="max-w-[1000px] pb-8 pt-3">
            <h1 class="flex justify-center items-center w-fit mb-2">
              急上昇 <img class="ml-1" src="/icons/icon_trend.svg" alt="" />
            </h1>
            <video-slider
              id="home-5"
              classes="w-[9.5rem] h-[16.875rem]"
              classes-container="!w-[10rem]"
              class="w-[95%] mx-auto"
            />
            <div class="text-center mt-5">
              <button
                class="text-[#2b2a2a] px-8 h-8 bg-[#ff9d9d] rounded-[5px]"
              >
                もっと見る
              </button>
            </div>
          </div>
        </section>
      </div>

      <!-- mobile -->
      <div class="md:hidden">
        <!-- grid 5 -->
        <section class="mt-9">
          <h1 class="text-3xl font-bold">
            <img class="inline-block mr-1 mb-1" src="/icons/icon_li_sp.svg" />
            写メ日記
          </h1>
          <div class="grid grid-cols-5 gap-3 mt-3">
            <div
              v-for="i of 5"
              :key="i"
              class="bg-slate-400 w-full h-auto rounded-[10px] cursor-pointer"
            >
              <img
                class="rounded-[10px] w-full object-cover max-h-[135px]"
                src="@/assets/images/test_image-2.png"
              />
            </div>
          </div>
        </section>
        <section class="mt-9">
          <video-list-mobile title="◯◯◯動画" styles="w-[95%] mx-auto" />
        </section>
        <section class="mt-9">
          <video-list-mobile title="◯◯◯動画" styles="w-[95%] mx-auto" />
        </section>
        <section class="mt-9">
          <video-list-mobile title="◯◯◯動画" styles="w-[95%] mx-auto" />
        </section>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  methods: {
    openModalMatching() {
      this.$modal.open({ name: 'start-matching' })
    },
  },
}
</script>
