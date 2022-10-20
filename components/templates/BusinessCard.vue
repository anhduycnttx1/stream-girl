<template>
  <div class="border-[1px] rounded-lg px-[3%]">
    <div class="flex justify-between mt-[15px]">
      <button
        class="w-[87px] max-md:w-[32%] h-[31px] max-md:h-[2rem] bg-[#37b6ff] text-white rounded-md text-xs max-md:text-lg"
      >
        デリヘル
      </button>
      <button
        class="w-[169px] max-md:w-[61%] h-[31px] max-md:h-[2rem] bg-[#ff5c37] max-md:bg-[#ff9d9d] text-white rounded-md text-xs max-md:text-lg flex justify-center items-center"
      >
        オフィシャルサイト<img
          class="w-[16px] max-md:w-[7%] ml-[2px]"
          src="/icons/external_link_icon.svg"
        />
      </button>
    </div>
    <div class="mt-[27px] max-md:text-sm max-md:font-Nikumaru">
      ゴシップガール カシワテン
    </div>
    <div class="text-3xl max-md:text-3xl max-md:font-Nikumaru font-bold">
      Gossip Girl 柏店
    </div>
    <div class="flex mt-[38px] max-md:hidden">
      <div class="w-[50%]">
        <list-item-bullet
          bullet="map"
          class=""
          title="電話番号"
          info="04-1234-5678"
        />
        <list-item-bullet
          bullet="map"
          class="my-[28px]"
          title="業種"
          info="デリバリーヘルス"
        />
        <list-item-bullet
          bullet="map"
          class=""
          title="店舗住所"
          info="千葉県柏市東神長1-20-30 東神長ビル2F"
        />
      </div>
      <div class="w-[50%]">
        <list-item-bullet
          bullet="map"
          class=""
          title="地域"
          info="千葉県・柏"
        />
        <list-item-bullet
          bullet="map"
          class="my-[28px]"
          title="営業時間"
          info="9:00〜17:00"
        />
        <list-item-bullet
          bullet="map"
          class=""
          title="出張エリア"
          info="柏発 千葉県全域、取手地域、三郷地域、流山地域"
        />
      </div>
    </div>
    <div class="mt-[38px] max-md:mt-[35px] max-md:px-[5%] md:hidden">
      <list-item-bullet bullet="dot" title="電話番号" info="04-1234-5678" />
      <list-item-bullet
        bullet="dot"
        class="my-2"
        title="業種"
        info="デリバリーヘルス"
      />
      <list-item-bullet
        bullet="dot"
        class=""
        title="店舗住所"
        info="千葉県柏市東神長1-20-30 東神長ビル2F"
      />
      <list-item-bullet
        bullet="dot"
        class="my-2"
        title="地域"
        info="千葉県・柏"
      />
      <list-item-bullet
        bullet="dot"
        class=""
        title="営業時間"
        info="9:00〜17:00"
      />
      <list-item-bullet
        bullet="dot"
        class="my-2"
        title="出張エリア"
        info="柏発 千葉県全域、取手地域、三郷地域、流山地域"
      />
    </div>
    <div class="md:w-[60%] my-2 max-md:text-base max-md:font-Hiramaru">
      <div>
        コメントコメントコメントコメントコメントコメントコメントコメントコ
        メントコメントコメントコメントコメントコメントコメントコメントコメ
        ントコメント
      </div>
    </div>
  </div>
</template>
