<template>
  <div>
    <!-- PC -->
    <div class="max-md:hidden mt-8 relative text-[#373737]">
      <base-button
        text=""
        class="fixed z-50 bottom-6 left-[73%] flex flex-col justify-center items-center"
        classes="btn__present"
        ><img src="/icons/present.svg" alt="" />
        <base-span text="応援" class="text-white" />
      </base-button>
      <div class="grid grid-cols-10">
        <div class="col-span-7 pr-4">
          <div
            class="h-full pt-4 pl-9 pb-14 rounded-[0.625rem] border border-solid flex drop-shadow-[0_0_2px_rgba(120,120,120,0.54)] bg-white"
          >
            <div class="grid grid-cols-1 grid-rows-5 gap-y-2 w-[9.053%]">
              <div v-for="i in 5" :key="i" class="h-20">
                <img
                  class="w-full rounded-[0.3125rem] h-full object-cover"
                  src="~assets/images/default_image.jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="ml-7 w-[32%]">
              <div class="w-full h-[17.0625rem]">
                <img
                  class="w-full h-full object-cover rounded-[0.625rem]"
                  src="~assets/images/default_image.jpg"
                  alt=""
                />
              </div>
              <div class="mt-4">
                <div class="flex items-baseline ml-[0.625rem]">
                  <img src="/icons/star.svg" alt="" />
                  <base-span
                    text="なつみ"
                    class="ml-1"
                    classes="span__info-name"
                  />
                  <base-span text="(20)" class="text-sm text-[#313131] ml-1" />
                </div>
                <div class="border-t bg-black mb-2"></div>
                <div class="text-sm">
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
                <div>
                  <base-button
                    text="+フォロー"
                    classes="btn__follow"
                    class="mr-[0.3125rem] mb-[0.375rem] w-5/12"
                  />
                  <base-button
                    text="Twitterでフォロー"
                    classes="btn__follow-twitter"
                    class="w-2/3"
                  />
                </div>
              </div>
            </div>
            <div class="ml-8 w-[45%]">
              <base-span text="一言キャッチコピー" class="text-[#2e2e2e]" />
              <div
                class="border border-solid border-[#a9a9a9] rounded-lg w-full h-[18.5rem] p-4"
              >
                <p class="text-sm text-[#2e2e2e]">
                  コメントコメントコメントコメントコメ ントコメントコメント
                </p>
              </div>
              <div class="mt-5">
                <base-span
                  text="よくUPしている動画＃"
                  class="text-sm text-[#2e2e2e]"
                />
                <div class="grid grid-cols-3 gap-2">
                  <div
                    v-for="i in 6"
                    :key="i"
                    class="h-[1.4375rem] rounded-[0.6875rem] bg-[#d9d9d9] text-center"
                  >
                    <base-span class="text-sm text-[#fefefe]" text="SM" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-3">
          <div
            class="rounded-[0.625rem] border border-solid pt-4 text-center drop-shadow-[0_0_2px_rgba(120,120,120,0.54)] bg-white"
          >
            <base-span
              text="応援ランキング"
              class="text-sm text-[#343434] font-bold"
            />
            <div class="mt-2">
              <ul class="top-list w-[96%] mx-auto">
                <li
                  v-for="i of 3"
                  :key="i"
                  class="flex items-center pb-1 border-b border-[#c2c2c2] mt-1"
                >
                  <img
                    class="mr-[1.4%] ml-[2.8%]"
                    :src="`/icons/top${i}_profile.svg`"
                    alt=""
                  />
                  <img
                    class="w-11 h-11 object-cover rounded-full"
                    :src="`/icons/avatar_top${i}.svg`"
                    alt=""
                  />
                  <h3 class="text-sm ml-[5.6%]">ユーザー名</h3>
                  <h3 class="font-bold ml-[14%]">45,060 P</h3>
                </li>
              </ul>
              <base-button
                text="さらに見る"
                classes="btn__more btn__more--longer"
                class="my-3"
                @clicked="openSupportRankModal"
              />
            </div>
          </div>
          <attendance-info class="mt-3" classes="btn__more--longer" />
        </div>
      </div>
      <div class="mt-11">
        <div class="flex justify-center items-center">
          <div
            class="flex items-center justify-center pl-[0.1875rem] w-[1.5625rem] h-[1.5625rem] rounded-[0.8125rem] bg-white border-2 border-solid border-[rgba(255,99,143,0.99)]"
          >
            <div>
              <img src="/icons/play.svg" alt="" />
            </div>
          </div>
          <base-span
            text="動画で自己紹介"
            class="text-[1.5625rem] text-[#2f2f2f] font-bold ml-3"
          />
        </div>
        <div class="mt-5 flex justify-center items-center">
          <div>
            <base-button
              classes="btn__talking"
              class="flex justify-center items-center"
              text="トーク"
              ><img class="mr-5" src="/icons/talking.png" alt=""
            /></base-button>
          </div>
          <div class="ml-6 w-[52%] h-[18.625rem]">
            <video
              src="https://assets.mixkit.co/videos/preview/mixkit-fireworks-illuminating-the-beach-sky-4157-large.mp4"
              controls
              class="w-full h-full object-cover rounded-[0.625rem]"
            ></video>
          </div>
          <div class="ml-6">
            <base-button
              classes="btn__voice"
              class="flex justify-center items-center"
              text="ボイス"
              ><img class="mr-5" src="/icons/voice.png" alt=""
            /></base-button>
          </div>
        </div>
      </div>
      <div class="mt-8">
        <video-slider-home :type="2" />
      </div>
      <div class="mt-9 flex justify-center">
        <div
          class="grid justify-items-center w-max rounded-[0.625rem] drop-shadow-[0_0_4.5px_rgba(0,0,0,21%)] bg-white pt-[0.75rem] px-2"
        >
          <base-span
            text="Gossip Girl"
            class="text-[#313131] text-[1.125rem] font-bold mb-3"
          />
          <div class="w-full">
            <img class="w-full" src="~assets/images/shop-head.png" alt="" />
          </div>
          <div class="mt-4 mb-[1.125rem]">
            <div class="grid grid-cols-2 text-sm text-[#313131]">
              <div class="grid grid-cols-5 gap-y-2 gap-x-4">
                <base-span
                  text="電話番号"
                  class="col-span-2 text-left font-bold"
                />
                <base-span text="：04-7170-2298" class="col-span-3" />
                <base-span text="業種" class="col-span-2 text-left font-bold" />
                <base-span text="：デリバリーヘルス" class="col-span-3" />
              </div>
              <div class="grid grid-cols-5 gap-y-2 gap-x-4">
                <base-span
                  text="地域"
                  class="col-span-2 text-right font-bold"
                />
                <base-span text="：千葉県・柏" class="col-span-3" />
                <base-span
                  text="営業時間"
                  class="col-span-2 text-right font-bold"
                />
                <base-span text="：9：00〜17：00" class="col-span-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-6 grid grid-cols-2 mb-32">
        <div
          class="w-full drop-shadow-[0_0_2px_rgba(120,120,120,0.54)] bg-white rounded-[0.625rem] px-3 pt-4"
        >
          <div class="flex justify-between">
            <base-span
              text="なつみさんの投稿日記"
              class="text-sm text-[#313131] font-bold"
            />
            <base-span
              text="日記一覧へ >"
              class="text-sm text-[#ffa0bb] font-bold"
            />
          </div>
          <div
            class="mt-4 grid grid-cols-4 gap-x-1 gap-y-3 max-h-[29.6875rem] overflow-auto"
          >
            <div v-for="i in 12" :key="i" class="text-center">
              <div class="w-full h-[7.4375rem]">
                <img
                  class="rounded-[0.625rem] w-full h-full object-cover"
                  src="~assets/images/default_image.jpg"
                  alt=""
                />
              </div>
              <base-span
                text="コメントコメントコ..."
                class="text-[0.625rem] text-black font-medium"
              />
            </div>
          </div>
        </div>
        <div class="w-full pl-5">
          <div
            class="w-full drop-shadow-[0_0_2px_rgba(120,120,120,0.54)] bg-white rounded-[0.625rem] px-3 pt-4"
          >
            <div class="flex justify-between">
              <base-span
                text="なつみさんの他の動画"
                class="text-sm text-[#313131] font-bold"
              />
              <base-span
                text="日記一覧へ >"
                class="text-sm text-[#ffa0bb] font-bold"
              />
            </div>
            <div
              class="mt-4 grid grid-cols-3 gap-x-1 gap-y-3 max-h-[29.6875rem] overflow-auto"
            >
              <div v-for="i in 6" :key="i" class="text-center">
                <div class="w-full h-[11.8125rem] relative">
                  <base-span
                    text="コメントコメントコメントコ メントココメントコメント..."
                    class="absolute bottom-0 left-2 right-2 text-[0.625rem] text-justify text-white font-medium"
                  />
                  <img
                    class="rounded-[0.625rem] w-full h-full object-cover"
                    src="~assets/images/default_image.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <v-modal name="support-rank" classes="w-[29.5rem]">
        <support-rank-modal />
      </v-modal>
      <v-modal name="attendance-info" classes="w-[22.1875rem]">
        <attendance-info-modal />
      </v-modal>
    </div>
    <!-- SP -->
    <div class="md:hidden">
      <div>
        <div
          class="w-full relative bg-cover pt-[56%] mt-1 bg-[url('~assets/images/default_image.jpg')]"
        >
          <base-span
            text="りんか"
            class="font-[Nikumaru] ml-2 text-white drop-shadow-[0px_3px_3px_rgba(0,0,0,0.5)]"
          />
          <base-span
            text="(20)"
            class="font-[Nikumaru] text-sm text-white drop-shadow-[0px_3px_3px_rgba(0,0,0,0.5)]"
          />
          <br /><base-span
            text="店名・キャッチコピー"
            class="text-sm ml-2 text-white drop-shadow-[0px_3px_3px_rgba(0,0,0,0.5)]"
          />
        </div>
        <div class="grid grid-cols-5 gap-x-1 mt-2 px-2">
          <div
            v-for="i in 5"
            :key="i"
            class="h-[5.75rem]"
            @click="openImageSlideSpModal"
          >
            <img
              class="w-full h-full object-cover rounded-[0.25rem]"
              src="~assets/images/default_image.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="mt-3 grid grid-cols-2">
          <div class="text-center border-r-2 border-[#afafaf] border-solid">
            <base-span text="555" class="font-bold text-[1.3125rem]" />
            <div class="flex justify-center items-center">
              <div>
                <img class="w-[0.625rem]" src="/icons/human-pink.png" alt="" />
              </div>
              <base-span text="フォロワー" class="text-sm ml-1" />
            </div>
          </div>
          <div class="text-center">
            <base-span text="333" class="font-bold text-[1.3125rem]" />
            <div class="flex justify-center items-center">
              <div>
                <img src="/icons/like.svg" alt="" />
              </div>
              <base-span text="いいね" class="text-sm ml-1" />
            </div>
          </div>
        </div>
        <div class="mt-3 flex justify-center pb-3">
          <base-button
            text="+フォローする"
            classes="btn__follow btn__follow--pink"
            class="px-2"
          />
          <base-button
            text="Twitterでフォロー"
            classes="btn__follow-twitter"
            class="px-2 ml-3"
          />
        </div>
      </div>
      <div class="mt-3 px-2 flex items-center">
        <div
          class="w-[0.8125rem] h-[0.8125rem] rounded-full bg-[#fc85df]"
        ></div>
        <base-span text="投稿動画" class="font-[Nikumaru] ml-1" />
      </div>
      <div class="px-2 grid grid-cols-3 gap-x-2 h-[9.125rem]">
        <img
          v-for="i in 3"
          :key="i"
          class="rounded-[0.25rem] h-full w-full object-cover"
          src="~assets/images/default_image.jpg"
          alt=""
        />
      </div>
      <div class="mt-3 px-2 flex items-center">
        <div
          class="w-[0.8125rem] h-[0.8125rem] rounded-full bg-[#fc85df]"
        ></div>
        <base-span text="投稿日記" class="font-[Nikumaru] ml-1" />
      </div>
      <div class="grid grid-cols-5 px-2 gap-1">
        <div
          v-for="i in 5"
          :key="i"
          class="pt-[100%] bg-cover rounded-[0.25rem] bg-[url('~assets/images/default_image.jpg')]"
        ></div>
      </div>
      <div class="mt-6 px-2 flex items-center">
        <div
          class="w-[0.8125rem] h-[0.8125rem] rounded-full bg-[#fc85df]"
        ></div>
        <base-span text="応援ランキング" class="font-[Nikumaru] ml-1" />
      </div>
      <ul
        class="w-[84%] max-sm:w-[90%] mx-auto mt-2 max-sm:text-xl sm-range:text-2xl"
      >
        <li
          v-for="i of 3"
          :key="i"
          class="flex items-center justify-between pb-1"
        >
          <div class="flex justify-center items-center">
            <img class="mr-2 ml-2" :src="`/icons/top${i}_profile.svg`" alt="" />
            <img
              class="w-11 h-11 object-cover rounded-full"
              :src="`/icons/avatar_top${i}.svg`"
              alt=""
            />
          </div>
          <h3>ユーザー名</h3>
          <h3 class="font-bold mr-4">45,060 P</h3>
        </li>
      </ul>
      <ul class="mt-2 px-6">
        <li class="flex ml-[1.125rem] items-center">
          <div class="relative text-center">
            <base-span
              text="1"
              class="absolute text-white text-[0.75rem] font-bold left-0 right-0 bottom-0"
            />
            <img src="/icons/gold-crown.png" alt="" />
          </div>
          <div class="ml-3 w-[2.6875rem] h-[2.6875rem]">
            <img
              class="w-full h-full object-cover rounded-full"
              src="/icons/human-top-1.png"
              alt=""
            />
          </div>
          <base-span text="ユーザー名" class="text-sm ml-4" />
          <base-span text="11,060 P" class="text-sm font-bold ml-10" />
        </li>
        <li class="flex ml-[1.125rem] items-center mt-2">
          <div class="relative text-center">
            <base-span
              text="2"
              class="absolute text-white text-[0.75rem] font-bold left-0 right-0 bottom-0"
            />
            <img src="/icons/silver-crown.png" alt="" />
          </div>
          <div class="ml-3 w-[2.6875rem] h-[2.6875rem]">
            <img
              class="w-full h-full object-cover rounded-full"
              src="/icons/human-top-1.png"
              alt=""
            />
          </div>
          <base-span text="ユーザー名" class="text-sm ml-4" />
          <base-span text="11,060 P" class="text-sm font-bold ml-10" />
        </li>
        <li class="flex ml-[1.125rem] items-center mt-2">
          <div class="relative text-center">
            <base-span
              text="3"
              class="absolute text-white text-[0.75rem] font-bold left-0 right-0 bottom-0"
            />
            <img src="/icons/copper-crown.png" alt="" />
          </div>
          <div class="ml-3 w-[2.6875rem] h-[2.6875rem]">
            <img
              class="w-full h-full object-cover rounded-full"
              src="/icons/human-top-1.png"
              alt=""
            />
          </div>
          <base-span text="ユーザー名" class="text-sm ml-4" />
          <base-span text="11,060 P" class="text-sm font-bold ml-10" />
        </li>
      </ul>
      <div class="text-center mt-3">
        <base-button
          text="もっと見る"
          classes="btn__more btn__more--longer btn__more--bg-pink"
          @clicked="openSupportRankSpModal"
        />
      </div>
      <div class="mt-6 px-2 flex items-center">
        <div
          class="w-[0.8125rem] h-[0.8125rem] rounded-full bg-[#fc85df]"
        ></div>
        <base-span text="出勤情報" class="font-[Nikumaru] ml-1" />
      </div>
      <div class="px-2">
        <div
          class="py-3 px-1 mt-1 border-2 border-[rgba(106,106,106,0.99)] border-solid rounded-[0.3125rem] grid grid-cols-4"
        >
          <div class="border-r border-solid border-[#313131] text-center">
            <base-span text="8/1(土)" class="text-[#8c97ff]" />
            <div class="mt-2">
              <base-span text="9:00〜17:00" class="text-[0.6875rem]" />
            </div>
          </div>
          <div class="border-r border-solid border-[#313131] text-center">
            <base-span text="8/2(日)" class="text-[#ff8c8c]" />
            <div class="mt-2">
              <base-span text="9:00〜17:00" class="text-[0.6875rem]" />
            </div>
          </div>
          <div class="border-r border-solid border-[#313131] text-center">
            <base-span text="8/3(月)" class="" />
            <div class="mt-2">
              <base-span text="-" class="text-[0.6875rem]" />
            </div>
          </div>
          <div class="text-center">
            <base-span text="8/4(火)" class="" />
            <div class="mt-2">
              <base-span text="9:00〜17:00" class="text-[0.6875rem]" />
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-3">
        <base-button
          text="もっと見る"
          classes="btn__more btn__more--longer btn__more--bg-pink"
          @clicked="openAttendanceInfoSpModal"
        />
      </div>
      <div class="mt-6 px-2 flex items-center">
        <div
          class="w-[0.8125rem] h-[0.8125rem] rounded-full bg-[#fc85df]"
        ></div>
        <base-span text="プロフィール" class="font-[Nikumaru] ml-1" />
      </div>
      <div class="w-[70%] m-auto">
        <p class="text-sm">
          お店コメントコメントコメントコメン トコメントコメントコメントコメント
          コメントコメントコメント
        </p>
      </div>
      <ul class="px-6 mt-3">
        <li
          class="py-3 flex justify-between border-t-2 border-solid border-[#a6a6a6] rounded-[0.0625rem]"
        >
          <base-span text="体型" class="text-sm font-bold" />
          <base-span text="スレンダー" class="text-sm" />
        </li>
        <li
          class="py-3 flex justify-between border-t-2 border-solid border-[#a6a6a6] rounded-[0.0625rem]"
        >
          <base-span text="身長" class="text-sm font-bold" />
          <base-span text="170" class="text-sm" />
        </li>
        <li
          class="py-3 flex justify-between border-t-2 border-solid border-[#a6a6a6] rounded-[0.0625rem]"
        >
          <base-span text="カップ" class="text-sm font-bold" />
          <base-span text="E" class="text-sm" />
        </li>
        <li
          class="py-3 flex justify-between border-t-2 border-solid border-[#a6a6a6] rounded-[0.0625rem]"
        >
          <base-span text="スリーサイズ" class="text-sm font-bold" />
          <base-span text="B93 / W63 / H90" class="text-sm" />
        </li>
        <li
          class="py-3 flex justify-between border-t-2 border-solid border-[#a6a6a6] rounded-[0.0625rem]"
        >
          <base-span text="性格" class="text-sm font-bold" />
          <base-span text="明るい" class="text-sm" />
        </li>
        <li
          class="py-3 flex justify-between border-t-2 border-solid border-[#a6a6a6] rounded-[0.0625rem]"
        >
          <base-span text="特徴" class="text-sm font-bold" />
          <base-span text="キレイ系" class="text-sm" />
        </li>
        <li
          class="py-3 flex justify-between border-t-2 border-solid border-[#a6a6a6] rounded-[0.0625rem]"
        >
          <base-span text="得意プレイ" class="text-sm font-bold" />
          <base-span text="全身リップ" class="text-sm" />
        </li>
        <li
          class="py-3 flex justify-between border-t-2 border-solid border-[#a6a6a6] rounded-[0.0625rem]"
        >
          <base-span text="S/M" class="text-sm font-bold" />
          <base-span text="ソフトS" class="text-sm" />
        </li>
        <li
          class="py-3 flex justify-between border-t-2 border-solid border-[#a6a6a6] rounded-[0.0625rem]"
        >
          <base-span text="喫煙" class="text-sm font-bold" />
          <base-span text="吸わない" class="text-sm" />
        </li>
        <li
          class="border-t-2 border-solid border-[#a6a6a6] rounded-[0.0625rem]"
        ></li>
      </ul>
      <div class="mt-4 px-3">
        <div
          class="border border-solid rounded-[0.3125rem] border-[rgba(152,152,152,0.99)] px-3 py-1"
        >
          <div class="text-center">
            <base-span text="Gossip Girl柏店" class="font-[Nikumaru] text-sm" />
          </div>
          <img src="~assets/images/shop-head.png" alt="" />
          <div class="grid grid-cols-3 text-sm">
            <base-span text="業種" class="col-span-1 text-left font-bold" />
            <base-span text=":デリバリーヘルス" class="col-span-2" />
            <base-span text="地域" class="col-span-1 text-left font-bold" />
            <base-span text=":千葉県・柏" class="col-span-2" />
            <base-span text="電話番号" class="col-span-1 text-left font-bold" />
            <base-span text=":04-7170-2298" class="col-span-2" />
            <base-span text="営業時間" class="col-span-1 text-left font-bold" />
            <base-span text=":9:00〜17:00" class="col-span-2" />
          </div>
          <div class="flex mt-2">
            <div class="relative">
              <base-span
                text="おすすめコース"
                class="text-sm text-white absolute left-4"
              />
              <img class="h-5" src="/icons/folded-paper.png" alt="" />
            </div>
            <base-span
              text="さがさnight見たで"
              class="text-[0.75rem] text-black ml-1"
            />
          </div>
          <base-span
            text="60分 15,000円〜"
            class="text-[1.25rem] text-[#ff0000] font-bold"
          />
          <p class="text-[0.625rem] text-black">
            特典説明特典説明特典説明特典説明特典説明
          </p>
        </div>
      </div>
      <div class="mt-3 px-2 flex items-center">
        <div
          class="w-[0.8125rem] h-[0.8125rem] rounded-full bg-[#fc85df]"
        ></div>
        <base-span text="類似動画" class="font-[Nikumaru] ml-1" />
      </div>
      <div class="px-2 mt-1 grid grid-cols-3 gap-x-1">
        <div
          v-for="i in 3"
          :key="i"
          class="rounded-[0.625rem] h-4 pt-[127%] bg-[url('~assets/images/default_image.jpg')] bg-cover"
        ></div>
      </div>
      <div class="mt-6 h-10 bg-[#ffc0c0] flex relative">
        <base-button
          text="オフィシャルHP"
          classes="btn__officialHP"
          class="absolute bottom-0 left-4"
        />
        <img
          class="absolute left-36 h-11 bottom-0"
          src="/icons/arrow-up.png"
          alt=""
        />
        <img
          class="absolute right-28 h-11 bottom-0"
          src="/icons/talking.png"
          alt=""
        />
        <img
          class="absolute right-16 h-11 bottom-0"
          src="/icons/happy-girl.png"
          alt=""
        />
        <img
          class="absolute right-2 h-11 bottom-0"
          src="/icons/present-red.png"
          alt=""
        />
      </div>
      <v-modal name="image-slide-sp" classes="w-[90%]">
        <image-slide-sp-modal />
      </v-modal>
      <v-modal name="support-rank-sp" classes="w-[90%]">
        <support-rank-modal />
      </v-modal>
      <v-modal name="attendance-info-sp" classes="w-[90%]">
        <attendance-info-modal />
      </v-modal>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GirlPage',
  methods: {
    openSupportRankModal() {
      this.$modal.open({ name: 'support-rank' })
    },
    openSupportRankSpModal() {
      this.$modal.open({ name: 'support-rank-sp' })
    },
    openAttendanceInfoSpModal() {
      this.$modal.open({ name: 'attendance-info-sp' })
    },
    openImageSlideSpModal() {
      this.$modal.open({ name: 'image-slide-sp' })
    },
  },
}
</script>

<style scoped>
.top-list > li:last-child {
  @apply !border-b-0;
}
</style>
