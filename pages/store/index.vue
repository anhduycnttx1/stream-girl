<template>
  <div>
    <div
      class="flex flex-col items-center justify-center mt-[22px] max-md:hidden"
    >
      <img src="~assets/images/banner.png" alt="banner" class="w-[47%]" />
      <div class="flex w-full justify-between mt-[23px]">
        <video
          class="w-[63%] aspect-video"
          loop
          controls
          :src="videoSrc"
        ></video>
        <grid-card
          class="w-[35%]"
          :list="['', '', '', '', '', '', '', '', '', '', '', '']"
        />
      </div>
      <work-card
        class="w-full mt-[35px]"
        :list="[
          {
            start: new Date(61200000),
            end: new Date(75600000),
            name: 'あやな',
            age: 20,
            t: 150,
            w: 70,
            b: 50,
            h: 70,
          },
          {
            start: new Date(61200000),
            end: new Date(75600000),
            name: 'あやな',
            age: 20,
            t: 150,
            w: 70,
            b: 50,
            h: 70,
          },
          {
            start: new Date(61200000),
            end: new Date(75600000),
            name: 'あやな',
            age: 20,
            t: 150,
            w: 70,
            b: 50,
            h: 70,
          },
          {
            start: new Date(61200000),
            end: new Date(75600000),
            name: 'あやな',
            age: 20,
            t: 150,
            w: 70,
            b: 50,
            h: 70,
          },
          {
            start: new Date(61200000),
            end: new Date(75600000),
            name: 'あやな',
            age: 20,
            t: 150,
            w: 70,
            b: 50,
            h: 70,
          },
          {
            start: new Date(61200000),
            end: new Date(75600000),
            name: 'あやな',
            age: 20,
            t: 150,
            w: 70,
            b: 50,
            h: 70,
          },
        ]"
      />

      <video-slider-home class="w-full" />
      <business-card class="mt-[19px]" />
      <div class="text-3xl font-bold mt-[33px]">さがさnight割引</div>
      <div
        class="w-[617px] h-[76px] border-y-[2px] border-[#ff25ba] flex items-center mt-[11px]"
      >
        <div
          class="w-[67px] h-[61px] bg-[#ff25ba] flex flex-col items-center justify-center ml-[2px]"
        >
          <h3 class="text-xl font-bold text-white leading-[25px]">
            10%<br />OFF
          </h3>
        </div>
        <div class="ml-[13px]">
          <div class="text-lg line-through">通常料金 60分 20,000円</div>
          <div class="flex items-end text-[#ff25ba] font-bold leading-[33px]">
            <div class="text-xl">総額</div>
            <div class="flex items-end ml-[14px]">
              <div class="text-3xl">60</div>
              <div class="text-xl">分</div>
              <div class="text-3xl">18,000</div>
              <div class="text-xl">円</div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg-[#fff5f5] flex flex-col items-center justify-center mt-[36px]"
      >
        <h2 class="text-2xl font-bold text-[#ff25b9] mt-[18px]">
          イベント一覧
        </h2>
        <h3 class="text-xl font-bold mt-[44px]">ご新規様割引</h3>
        <img
          class="w-[70%] mt-[20px]"
          src="~assets/images/background.png"
          alt=""
        />
        <div class="relative flex flex-col items-center justify-center">
          <p
            class="text-base w-[90%] mt-[14px] leading-[18px]"
            :class="isExpandA ? '' : 'h-[70px] overflow-hidden'"
          >
            割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント
            割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント
            割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント
            割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント
            割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント
            割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント
          </p>
          <div
            v-show="!isExpandA"
            class="absolute h-[20px] bg-gradient-to-t from-[#fff5f5] w-full bottom-0"
          ></div>
        </div>
        <button
          class="w-[145px] h-[41px] bg-white border-[#ff27ba] border-[1px] rounded-md mt-[10px]"
          @click="expandA"
        >
          全文表示
        </button>
        <div
          class="border-dashed border-b-[2px] border-black w-full my-[20px]"
        ></div>
        <h3 class="text-xl font-bold">ご新規様割引</h3>
        <img
          class="w-[70%] mt-[20px]"
          src="~assets/images/background.png"
          alt=""
        />
        <div class="relative flex flex-col items-center justify-center">
          <p
            class="text-base w-[90%] mt-[14px] leading-[18px]"
            :class="isExpandB ? '' : 'h-[70px] overflow-hidden'"
          >
            割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント
            割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント
            割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント
            割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント
            割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント
            割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント割引コメント
          </p>
          <div
            v-show="!isExpandB"
            class="absolute h-[20px] bg-gradient-to-t from-[#fff5f5] w-full bottom-0"
          ></div>
        </div>
        <button
          class="w-[145px] h-[41px] bg-white border-[#ff27ba] border-[1px] rounded-md mb-[30px] mt-[10px]"
          @click="expandB"
        >
          全文表示
        </button>
      </div>
      <table class="w-full mt-[37px] text-base">
        <thead class="bg-[#fff5f5] border-[1px] border-black">
          <tr class="h-[54px]">
            <th colspan="6" class="text-left pl-[21px]">9:00〜18:00</th>
          </tr>
        </thead>
        <tbody>
          <tr class="h-[54px]">
            <td class="border-[1px] border-black text-center">50分</td>
            <td class="border-[1px] border-black text-center">60分</td>
            <td class="border-[1px] border-black text-center">90分</td>
            <td class="border-[1px] border-black text-center">120分</td>
            <td class="border-[1px] border-black text-center">150分</td>
            <td class="border-[1px] border-black text-center">180分</td>
          </tr>
          <tr class="h-[54px]">
            <td class="border-[1px] border-black text-center">10,000円</td>
            <td class="border-[1px] border-black text-center">15,000円</td>
            <td class="border-[1px] border-black text-center">24,000円</td>
            <td class="border-[1px] border-black text-center">32,000円</td>
            <td class="border-[1px] border-black text-center">40,000円</td>
            <td class="border-[1px] border-black text-center">48,000円</td>
          </tr>
        </tbody>
      </table>
      <table class="w-full mt-[20px] text-base">
        <thead class="bg-[#fff5f5] border-[1px] border-black">
          <tr class="h-[54px]">
            <th colspan="6" class="text-left pl-[21px]">9:00〜18:00</th>
          </tr>
        </thead>
        <tbody>
          <tr class="h-[54px]">
            <td class="border-[1px] border-black text-center">50分</td>
            <td class="border-[1px] border-black text-center">60分</td>
            <td class="border-[1px] border-black text-center">90分</td>
            <td class="border-[1px] border-black text-center">120分</td>
            <td class="border-[1px] border-black text-center">150分</td>
            <td class="border-[1px] border-black text-center">180分</td>
          </tr>
          <tr class="h-[54px]">
            <td class="border-[1px] border-black text-center">10,000円</td>
            <td class="border-[1px] border-black text-center">15,000円</td>
            <td class="border-[1px] border-black text-center">24,000円</td>
            <td class="border-[1px] border-black text-center">32,000円</td>
            <td class="border-[1px] border-black text-center">40,000円</td>
            <td class="border-[1px] border-black text-center">48,000円</td>
          </tr>
        </tbody>
      </table>
      <table class="w-full mt-[20px] text-base">
        <thead class="bg-[#fff5f5] border-[1px] border-black">
          <tr class="h-[54px]">
            <th colspan="6" class="text-left pl-[21px]">9:00〜18:00</th>
          </tr>
        </thead>
        <tbody>
          <tr class="h-[54px]">
            <td class="border-[1px] border-black text-center">50分</td>
            <td class="border-[1px] border-black text-center">60分</td>
            <td class="border-[1px] border-black text-center">90分</td>
            <td class="border-[1px] border-black text-center">120分</td>
            <td class="border-[1px] border-black text-center">150分</td>
            <td class="border-[1px] border-black text-center">180分</td>
          </tr>
          <tr class="h-[54px]">
            <td class="border-[1px] border-black text-center">10,000円</td>
            <td class="border-[1px] border-black text-center">15,000円</td>
            <td class="border-[1px] border-black text-center">24,000円</td>
            <td class="border-[1px] border-black text-center">32,000円</td>
            <td class="border-[1px] border-black text-center">40,000円</td>
            <td class="border-[1px] border-black text-center">48,000円</td>
          </tr>
        </tbody>
      </table>
      <table class="w-full mt-[20px] text-base table-fixed">
        <tbody>
          <tr class="h-[54px]">
            <td
              class="border-[1px] border-black text-center bg-[#fff5f5] font-bold"
            >
              入会金
            </td>
            <td class="border-[1px] border-black text-center">1,000円</td>
            <td
              class="border-[1px] border-black text-center bg-[#fff5f5] font-bold"
            >
              指名料
            </td>
            <td class="border-[1px] border-black text-center">1,000円</td>
            <td
              class="border-[1px] border-black text-center bg-[#fff5f5] font-bold"
            >
              本指名
            </td>
            <td class="border-[1px] border-black text-center">1,000円</td>
          </tr>
        </tbody>
      </table>
      <div class="bg-[#fff5f5] py-[45px] pl-[10%] mt-[24px] w-full">
        <p class="text-base w-[60%] leading-[18px]">
          料金備考料金備考料金備考料金備考料金備考料金備考料金備考
          料金備考料金備考料金備考料金備考料金備考<br /><br />
          料金備考料金備考料金備考料金備考料金備考料金備考料金備考料金備考
          料金備考料金備考
        </p>
      </div>
      <table class="w-full mt-[20px] text-base table-fixed">
        <tbody>
          <tr class="h-[89px]">
            <td
              class="border-[1px] border-black text-center bg-[#fff5f5] font-bold px-5"
            >
              パンストor網タイツ、アイマ スク（お客様）、パンティー
            </td>
            <td class="border-[1px] border-black text-center">1,000円</td>
            <td
              class="border-[1px] border-black text-center bg-[#fff5f5] font-bold px-3"
            >
              ローター、バイブ、アイマスク （コンパニオン）、コスプレ
            </td>
            <td class="border-[1px] border-black text-center">2,000円</td>
          </tr>
          <tr class="h-[54px]">
            <td
              class="border-[1px] border-black text-center bg-[#fff5f5] font-bold"
            >
              電マ、即尺、オナニー、放尿
            </td>
            <td class="border-[1px] border-black text-center">3,000円</td>
            <td
              class="border-[1px] border-black text-center bg-[#fff5f5] font-bold"
            >
              ごっくん、顔射
            </td>
            <td class="border-[1px] border-black text-center">5,000円</td>
          </tr>
        </tbody>
      </table>
      <div class="max-w-[1000px] pt-[64px]">
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
          <button class="px-6 h-8 bg-[#ff9d9d] rounded-[5px] text-white">
            もっと見る
          </button>
        </div>
      </div>
      <div class="max-w-[1000px] pb-8 pt-[39px]">
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
          <button class="px-6 h-8 bg-[#ff9d9d] rounded-[5px] text-white">
            もっと見る
          </button>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center md:hidden mt-[12px]">
      <img src="~assets/images/banner.png" alt="banner" class="w-[97%]" />
      <video
        class="w-[97%] aspect-video mt-[12px]"
        loop
        controls
        :src="videoSrc"
      ></video>
      <business-card class="w-[97%] mt-4" />
      <video-list-mobile class="w-[97%] mt-4 font-Nikumaru" title="動画" />
      <section class="mt-[24px] w-[97%]">
        <h1 class="text-lg font-bold font-Nikumaru ml-2">
          <img class="inline-block mr-1 mb-1 w-4" src="/icons/icon_li_sp.svg" />
          写メ日記
        </h1>
        <div class="grid grid-cols-5 gap-2 mt-3">
          <div
            v-for="i of 5"
            :key="i"
            class="bg-slate-400 w-full h-auto rounded-[10px] cursor-pointer"
          >
            <img
              class="rounded-[10px] w-full object-cover aspect-square max-h-[135px]"
              src="@/assets/images/test_image-2.png"
            />
          </div>
        </div>
      </section>
      <schedule-card class="w-[97%] mt-[35px]" />
      <div class="w-[97%] border-[1px] rounded-lg mt-[20px]">
        <div class="flex mt-[10px] ml-4">
          <img class="w-4" src="/icons/pink_dot.svg" />
          <h1 class="text-lg font-bold font-Nikumaru">さがさnight割</h1>
        </div>
        <div
          class="w-[90%] h-20 border-y-[2px] border-[#ff25ba] flex items-center mt-[11px] mx-auto"
        >
          <div
            class="w-16 h-16 bg-[#ff25ba] flex flex-col items-center justify-center ml-[2px]"
          >
            <h3 class="text-2xl font-bold text-white">10%<br />OFF</h3>
          </div>
          <div class="ml-[13px]">
            <div class="text-xl line-through">通常料金 60分 20,000円</div>
            <div class="flex items-end text-[#ff25ba] font-bold">
              <div class="text-xl">総額</div>
              <div class="flex items-end ml-2">
                <div class="text-4xl">60</div>
                <div class="text-xl">分</div>
                <div class="text-4xl">18,000</div>
                <div class="text-xl">円</div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex mt-2 ml-4">
          <img class="w-4" src="/icons/pink_dot.svg" />
          <h1 class="text-lg font-bold font-Nikumaru">イベント一覧</h1>
        </div>
        <h2 class="text-center text-base text-[#ff25ba] font-bold mt-2">
          ご新規様割引
        </h2>
        <img
          class="w-[95%] mt-2 mx-auto"
          src="~assets/images/background.png"
          alt=""
        />
        <p class="w-[95%] mx-auto text-xs mt-[14px]">
          割引コメント割引コメント割引コメント割引コメント割引コメント割引コ
          メント割引コメント割引コメント割引コメント割引コメント割引コメント
          割引コメント割引コメント割引コメント割引コメント割引コメント割引コ
          メント割引コメント割引コメント割引コメント割引コメント割引コメント
        </p>
        <div class="flex justify-center">
          <button
            class="w-1/4 h-8 border-[#ff27ba] border-[1px] rounded-md text-xs mt-4"
          >
            全文表示
          </button>
        </div>
        <div
          class="border-dashed border-b-[0.1rem] border-black w-full my-2"
        ></div>
        <h2 class="text-center text-base text-[#ff25ba] font-bold">
          ロングコース割引
        </h2>
        <img
          class="w-[95%] mt-2 mx-auto"
          src="~assets/images/background.png"
          alt=""
        />
        <p class="w-[95%] mx-auto text-xs mt-[14px]">
          割引コメント割引コメント割引コメント割引コメント割引コメント割引コ
          メント割引コメント割引コメント割引コメント割引コメント割引コメント
          割引コメント割引コメント割引コメント割引コメント割引コメント割引コ
          メント割引コメント割引コメント割引コメント割引コメント割引コメント
        </p>
        <div class="flex justify-center">
          <button
            class="w-1/4 h-8 border-[#ff27ba] border-[1px] rounded-md text-xs mb-[18px] mt-4"
          >
            全文表示
          </button>
        </div>
      </div>
      <div class="w-[97%] border-[1px] rounded-lg mt-[20px]">
        <div class="flex mt-[10px] ml-4">
          <img class="w-4" src="/icons/pink_dot.svg" />
          <h1 class="text-lg font-bold font-Nikumaru">システム</h1>
        </div>
        <table class="w-[90%] mx-auto text-lg font-Hiramaru">
          <thead class="border-b-[1px] border-black">
            <tr class="h-8 mt-4">
              <th colspan="2" class="text-left text-[#ff9d9d] font-normal">
                コース料金
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="h-8 border-b-[1px] border-black">
              <td class="text-left pl-3">60分</td>
              <td class="text-right pr-3">20,000円</td>
            </tr>
            <tr class="h-8 border-b-[1px] border-black">
              <td class="text-left pl-3">90分</td>
              <td class="text-right pr-3">24,000円</td>
            </tr>
            <tr class="h-8 border-b-[1px] border-black">
              <td class="text-left pl-3">120分</td>
              <td class="text-right pr-3">32,000円</td>
            </tr>
          </tbody>
        </table>
        <table class="w-[90%] mx-auto text-lg font-Hiramaru mt-4">
          <thead class="border-b-[1px] border-black">
            <tr class="h-8">
              <th colspan="2" class="text-left text-[#ff9d9d] font-normal">
                コース料金
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="h-8 border-b-[1px] border-black">
              <td class="text-left pl-3">60分</td>
              <td class="text-right pr-3">20,000円</td>
            </tr>
            <tr class="h-8 border-b-[1px] border-black">
              <td class="text-left pl-3">90分</td>
              <td class="text-right pr-3">24,000円</td>
            </tr>
            <tr class="h-8 border-b-[1px] border-black">
              <td class="text-left pl-3">120分</td>
              <td class="text-right pr-3">32,000円</td>
            </tr>
          </tbody>
        </table>
        <table class="w-[90%] mx-auto text-lg mb-4 font-Hiramaru mt-4">
          <thead class="border-b-[1px] border-black">
            <tr class="h-8">
              <th colspan="2" class="text-left text-[#ff9d9d] font-normal">
                オプション
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="h-8">
              <td class="text-left pl-3">パンスト</td>
              <td class="text-right pr-3" rowspan="3">1,000円</td>
            </tr>
            <tr class="h-8">
              <td class="text-left pl-3">アイマスク</td>
            </tr>
            <tr class="h-8 border-b-[1px] border-black">
              <td class="text-left pl-3">パンティー</td>
            </tr>
            <tr class="h-8">
              <td class="text-left pl-3">ローター</td>
              <td class="text-right pr-3" rowspan="3">2,000円</td>
            </tr>
            <tr class="h-8">
              <td class="text-left pl-3">バイブ</td>
            </tr>
            <tr class="h-8 border-b-[1px] border-black">
              <td class="text-left pl-3">コスプレ</td>
            </tr>
            <tr class="h-8">
              <td class="text-left pl-3">電マ</td>
              <td class="text-right pr-3" rowspan="2">3,000円</td>
            </tr>
            <tr class="h-8 border-b-[1px] border-black">
              <td class="text-left pl-3">即尺</td>
            </tr>
          </tbody>
        </table>
      </div>
      <video-list-mobile title="◯◯◯動画" class="w-[97%] mt-4" />
      <button
        class="w-[70%] h-12 bg-gradient-to-l from-[#eb0bdd] to-[#fa86f3] text-white rounded-full font-bold relative my-4"
      >
        <img class="absolute w-8 left-4 top-2" src="/icons/phone.svg" />
        <p class="text-xl leading-5">01-234-5678</p>
        <p class="text-base leading-4">電話する</p>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'StorePage',
  data() {
    return {
      videoSrc:
        'https://assets.mixkit.co/videos/preview/mixkit-two-girls-walking-down-a-market-street-3566-large.mp4',
      isExpandA: false,
      isExpandB: false,
    }
  },
  methods: {
    expandA() {
      this.isExpandA = !this.isExpandA
    },
    expandB() {
      this.isExpandB = !this.isExpandB
    },
  },
}
</script>
