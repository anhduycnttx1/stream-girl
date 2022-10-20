<template>
  <div>
    <!-- PC -->
    <div class="max-md:hidden mt-8 relative">
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
                  <base-span
                    text="(20)"
                    class="text-[0.875rem] text-[#313131] ml-1"
                  />
                </div>
                <div class="border-t bg-black mb-2"></div>
                <div class="text-[0.875rem]">
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
                <p class="text-[0.875rem] text-[#2e2e2e]">
                  コメントコメントコメントコメントコメ ントコメントコメント
                </p>
              </div>
              <div class="mt-2">
                <p class="text-[0.875rem] text-[#2e2e2e] mb-2">
                  よくUPしている動画＃
                </p>
                <div class="grid grid-cols-3 gap-2">
                  <div
                    v-for="i in 6"
                    :key="i"
                    class="h-[1.4375rem] rounded-[0.6875rem] bg-[#d9d9d9] text-center"
                  >
                    <base-span
                      class="text-[0.875rem] text-[#fefefe]"
                      text="SM"
                    />
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
              class="text-[0.875rem] text-[#343434] font-bold"
            />
            <div class="mt-3">
              <ul>
                <li class="flex ml-[1.125rem] items-center">
                  <img class="w-8" src="/icons/top1.svg" alt="" />
                  <div class="ml-[0.375rem] w-[2.6875rem] h-[2.6875rem]">
                    <img
                      class="w-full h-full object-cover rounded-full"
                      src="/icons/user_ava.svg"
                      alt=""
                    />
                  </div>
                  <base-span
                    text="ユーザー名"
                    class="text-[0.875rem] text-[#373737] ml-4"
                  />
                  <base-span
                    text="45,060 P"
                    class="text-[0.875rem] text-[#373737] font-bold ml-10"
                  />
                </li>
                <div class="m-2 border-t border-solid bg-[#c2c2c2]"></div>
                <li class="flex ml-[1.125rem] items-center">
                  <img class="w-8" src="/icons/top2.svg" alt="" />

                  <div class="ml-[0.375rem] w-[2.6875rem] h-[2.6875rem]">
                    <img
                      class="w-full h-full object-cover rounded-full"
                      src="/icons/user_ava.svg"
                      alt=""
                    />
                  </div>
                  <base-span
                    text="ユーザー名"
                    class="text-[0.875rem] text-[#373737] ml-4"
                  />
                  <base-span
                    text="11,060 P"
                    class="text-[0.875rem] text-[#373737] font-bold ml-10"
                  />
                </li>
                <div class="m-2 border-t border-solid bg-[#c2c2c2]"></div>
                <li class="flex ml-[1.125rem] items-center">
                  <img class="w-8" src="/icons/top3.svg" alt="" />
                  <div class="ml-[0.375rem] w-[2.6875rem] h-[2.6875rem]">
                    <img
                      class="w-full h-full object-cover rounded-full"
                      src="/icons/user_ava.svg"
                      alt=""
                    />
                  </div>
                  <base-span
                    text="ユーザー名"
                    class="text-[0.875rem] text-[#373737] ml-4"
                  />
                  <base-span
                    text="10,060 P"
                    class="text-[0.875rem] text-[#373737] font-bold ml-10"
                  />
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
      <h1 class="text-center text-2xl font-bold mt-6">新着動画</h1>
      <video-slider-home :type="2" />
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
            <div class="grid grid-cols-2 text-[0.875rem] text-[#313131]">
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
              class="text-[0.875rem] text-[#313131] font-bold"
            />
            <base-span
              text="日記一覧へ >"
              class="text-[0.875rem] text-[#ffa0bb] font-bold"
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
                class="text-[0.875rem] text-[#313131] font-bold"
              />
              <base-span
                text="動画一覧へ >"
                class="text-[0.875rem] text-[#ffa0bb] font-bold"
              />
            </div>
            <div
              class="mt-4 grid grid-cols-3 gap-x-1 gap-y-3 max-h-[29.6875rem] overflow-auto pb-3"
            >
              <div v-for="i in 6" :key="i" class="text-center">
                <div class="w-full h-[11.8125rem] relative">
                  <base-span
                    text="コメントコメントコメントコ メントココメントコメント..."
                    class="absolute bottom-2 left-2 right-2 text-[0.625rem] text-justify text-white font-medium"
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
      <div class="bg-gradient-to-t from-[#bdbdbd] via-white to-[#bdbdbd] pt-1">
        <div class="relative">
          <img
            class="aspect-[751/421] object-cover"
            src="~assets/images/default_image.jpg"
          />
          <div
            class="absolute bottom-2 left-2 text-white drop-shadow-[0px_3px_3px_rgba(0,0,0,0.5)]"
          >
            <div class="flex items-end font-[Nikumaru]">
              <p class="text-lg">りんか</p>
              <p class="text-md ml-1">(20)</p>
            </div>
            <p class="text-[0.875rem]">店名・キャッチコピー</p>
          </div>
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
            <base-span
              text="555"
              class="text-[#373737] font-bold text-[1.3125rem]"
            />
            <div class="flex justify-center items-center">
              <div>
                <img class="w-[0.625rem]" src="/icons/human-pink.png" alt="" />
              </div>
              <base-span
                text="フォロワー"
                class="text-[#373737] text-[0.875rem] ml-1"
              />
            </div>
          </div>
          <div class="text-center">
            <base-span
              text="333"
              class="text-[#373737] font-bold text-[1.3125rem]"
            />
            <div class="flex justify-center items-center">
              <div>
                <img src="/icons/like.svg" alt="" />
              </div>
              <base-span
                text="いいね"
                class="text-[#373737] text-[0.875rem] ml-1"
              />
            </div>
          </div>
        </div>
        <div class="mt-3 flex justify-center pb-3">
          <base-button
            text="＋フォローする"
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
        <base-span
          text="投稿動画"
          class="font-[Nikumaru] text-[#373737] ml-1"
        />
      </div>
      <div class="flex justify-between px-[1.5%]">
        <div v-for="i in 3" :key="i" class="w-[32.5%] relative">
          <img
            class="rounded-[0.25rem] object-cover aspect-[229/292]"
            src="~assets/images/default_image.jpg"
            alt=""
          /><img
            class="absolute w-[40%] bottom-[30%] left-[30%]"
            src="/icons/play_button.png"
          />
        </div>
      </div>
      <div class="mt-3 px-2 flex items-center">
        <div
          class="w-[0.8125rem] h-[0.8125rem] rounded-full bg-[#fc85df]"
        ></div>
        <base-span
          text="投稿日記"
          class="font-[Nikumaru] text-[#373737] ml-1"
        />
      </div>
      <div class="flex justify-between px-[1.5%]">
        <img
          v-for="i in 5"
          :key="i"
          class="rounded-[0.25rem] h-full w-[19%] object-cover aspect-square"
          src="~assets/images/default_image.jpg"
          alt=""
        />
      </div>
      <div class="mt-6 px-2 flex items-center">
        <div
          class="w-[0.8125rem] h-[0.8125rem] rounded-full bg-[#fc85df]"
        ></div>
        <base-span
          text="応援ランキング"
          class="font-[Nikumaru] text-[#373737] ml-1"
        />
      </div>
      <ul class="mt-2 px-6">
        <li class="flex ml-[1.125rem] items-center">
          <img class="w-10" src="/icons/top1.svg" alt="" />
          <div class="ml-3 w-[2.6875rem] h-[2.6875rem]">
            <img
              class="w-full h-full object-cover rounded-full"
              src="/icons/user_ava.svg"
              alt=""
            />
          </div>
          <base-span
            text="ユーザー名"
            class="text-[0.875rem] text-[#373737] ml-4"
          />
          <base-span
            text="11,060 P"
            class="text-[0.875rem] text-[#373737] font-bold ml-10"
          />
        </li>
        <li class="flex ml-[1.125rem] items-center mt-2">
          <img class="w-10" src="/icons/top2.svg" alt="" />
          <div class="ml-3 w-[2.6875rem] h-[2.6875rem]">
            <img
              class="w-full h-full object-cover rounded-full"
              src="/icons/user_ava.svg"
              alt=""
            />
          </div>
          <base-span
            text="ユーザー名"
            class="text-[0.875rem] text-[#373737] ml-4"
          />
          <base-span
            text="11,060 P"
            class="text-[0.875rem] text-[#373737] font-bold ml-10"
          />
        </li>
        <li class="flex ml-[1.125rem] items-center mt-2">
          <img class="w-10" src="/icons/top3.svg" alt="" />
          <div class="ml-3 w-[2.6875rem] h-[2.6875rem]">
            <img
              class="w-full h-full object-cover rounded-full"
              src="/icons/user_ava.svg"
              alt=""
            />
          </div>
          <base-span
            text="ユーザー名"
            class="text-[0.875rem] text-[#373737] ml-4"
          />
          <base-span
            text="11,060 P"
            class="text-[0.875rem] text-[#373737] font-bold ml-10"
          />
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
        <base-span
          text="出勤情報"
          class="font-[Nikumaru] text-[#373737] ml-1"
        />
      </div>
      <div class="px-2">
        <div
          class="py-3 px-1 mt-1 border-2 border-[rgba(106,106,106,0.99)] border-solid rounded-[0.3125rem] grid grid-cols-4"
        >
          <div class="border-r border-solid border-[#313131] text-center">
            <base-span text="8/1(土)" class="text-[#8c97ff]" />
            <div class="mt-2">
              <base-span
                text="9:00〜17:00"
                class="text-[0.6875rem] text-[#373737]"
              />
            </div>
          </div>
          <div class="border-r border-solid border-[#313131] text-center">
            <base-span text="8/2(日)" class="text-[#ff8c8c]" />
            <div class="mt-2">
              <base-span
                text="9:00〜17:00"
                class="text-[0.6875rem] text-[#373737]"
              />
            </div>
          </div>
          <div class="border-r border-solid border-[#313131] text-center">
            <base-span text="8/3(月)" class="text-[#373737]" />
            <div class="mt-2">
              <base-span text="-" class="text-[0.6875rem] text-[#373737]" />
            </div>
          </div>
          <div class="text-center">
            <base-span text="8/4(火)" class="text-[#373737]" />
            <div class="mt-2">
              <base-span
                text="9:00〜17:00"
                class="text-[0.6875rem] text-[#373737]"
              />
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
        <base-span
          text="プロフィール"
          class="font-[Nikumaru] text-[#373737] ml-1"
        />
      </div>
      <div class="w-[70%] m-auto">
        <p class="text-[#373737] text-[0.875rem]">
          お店コメントコメントコメントコメン トコメントコメントコメントコメント
          コメントコメントコメント
        </p>
      </div>
      <ul class="px-6 mt-3">
        <li
          class="py-3 flex justify-between border-t-2 border-solid border-[#a6a6a6] rounded-[0.0625rem]"
        >
          <base-span
            text="体型"
            class="text-[0.875rem] font-bold text-[#373737]"
          />
          <base-span text="スレンダー" class="text-[0.875rem] text-[#373737]" />
        </li>
        <li
          class="py-3 flex justify-between border-t-2 border-solid border-[#a6a6a6] rounded-[0.0625rem]"
        >
          <base-span
            text="身長"
            class="text-[0.875rem] font-bold text-[#373737]"
          />
          <base-span text="170" class="text-[0.875rem] text-[#373737]" />
        </li>
        <li
          class="py-3 flex justify-between border-t-2 border-solid border-[#a6a6a6] rounded-[0.0625rem]"
        >
          <base-span
            text="カップ"
            class="text-[0.875rem] font-bold text-[#373737]"
          />
          <base-span text="E" class="text-[0.875rem] text-[#373737]" />
        </li>
        <li
          class="py-3 flex justify-between border-t-2 border-solid border-[#a6a6a6] rounded-[0.0625rem]"
        >
          <base-span
            text="スリーサイズ"
            class="text-[0.875rem] font-bold text-[#373737]"
          />
          <base-span
            text="B93 / W63 / H90"
            class="text-[0.875rem] text-[#373737]"
          />
        </li>
        <li
          class="py-3 flex justify-between border-t-2 border-solid border-[#a6a6a6] rounded-[0.0625rem]"
        >
          <base-span
            text="性格"
            class="text-[0.875rem] font-bold text-[#373737]"
          />
          <base-span text="明るい" class="text-[0.875rem] text-[#373737]" />
        </li>
        <li
          class="py-3 flex justify-between border-t-2 border-solid border-[#a6a6a6] rounded-[0.0625rem]"
        >
          <base-span
            text="特徴"
            class="text-[0.875rem] font-bold text-[#373737]"
          />
          <base-span text="キレイ系" class="text-[0.875rem] text-[#373737]" />
        </li>
        <li
          class="py-3 flex justify-between border-t-2 border-solid border-[#a6a6a6] rounded-[0.0625rem]"
        >
          <base-span
            text="得意プレイ"
            class="text-[0.875rem] font-bold text-[#373737]"
          />
          <base-span text="全身リップ" class="text-[0.875rem] text-[#373737]" />
        </li>
        <li
          class="py-3 flex justify-between border-t-2 border-solid border-[#a6a6a6] rounded-[0.0625rem]"
        >
          <base-span
            text="S/M"
            class="text-[0.875rem] font-bold text-[#373737]"
          />
          <base-span text="ソフトS" class="text-[0.875rem] text-[#373737]" />
        </li>
        <li
          class="py-3 flex justify-between border-t-2 border-solid border-[#a6a6a6] rounded-[0.0625rem]"
        >
          <base-span
            text="喫煙"
            class="text-[0.875rem] font-bold text-[#373737]"
          />
          <base-span text="吸わない" class="text-[0.875rem] text-[#373737]" />
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
            <base-span
              text="Gossip Girl柏店"
              class="font-[Nikumaru] text-[0.875rem]"
            />
          </div>
          <img src="~assets/images/shop-head.png" alt="" />
          <div class="grid grid-cols-3 text-[0.875rem] mt-2">
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
                class="text-[0.875rem] text-white absolute left-4"
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
        <base-span
          text="投稿動画"
          class="font-[Nikumaru] text-[#373737] ml-1"
        />
      </div>
      <div class="flex justify-between px-[1.5%]">
        <div v-for="i in 3" :key="i" class="w-[32.5%] relative">
          <img
            class="rounded-[0.25rem] object-cover aspect-[229/292]"
            src="~assets/images/default_image.jpg"
            alt=""
          /><img
            class="absolute w-[40%] bottom-[30%] left-[30%]"
            src="/icons/play_button.png"
          />
        </div>
      </div>
      <div class="mt-6 h-10 bg-[#ffc0c0] flex relative">
        <base-button
          text="オフィシャルHP"
          classes="btn__officialHP"
          class="absolute bottom-0 left-4"
        />
        <button @click="scrollTop">
          <img
            class="absolute left-36 h-11 bottom-0"
            src="/icons/arrow-up.png"
            alt=""
          />
        </button>
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
  middleware: 'auth-girl',
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
    scrollTop() {
      window.scrollTo(0, 0)
    },
  },
}
</script>
