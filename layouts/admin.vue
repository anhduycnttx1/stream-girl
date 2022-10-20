<template>
  <div>
    <nav>
      <div class="w-1/2 max-w-[1000px] mx-auto py-1 md:w-full">
        <div class="relative flex items-center justify-between h-16">
          <div class="flex-1 flex items-stretch justify-between">
            <div
              class="flex-shrink-0 flex items-center bg-white pr-3 py-3 cursor-pointer"
            >
              <nuxt-link to="/admin"
                ><img
                  class="h-[2.375rem] w-[10.375rem]"
                  src="/icons/logo.jpg"
                  alt="logo"
              /></nuxt-link>
            </div>
            <div class="">
              <div class="flex h-full justify-center items-center space-x-4">
                <!-- <base-link href="#" classes="link--pc px-3 py-2"
                  >マッチング</base-link
                > -->
                <nuxt-link to="#">
                  <div
                    class="h-8 flex items-center justify-center text-sm rounded-[5px] px-[10px] border-2 border-[#ff9898]"
                  >
                    <span class="inline-block text-[#2e2e2e]">マッチング</span>
                    <span
                      class="inline-block w-[22px] h-[22px] text-center leading-[22px] bg-[#ff9898] text-white rounded-full"
                      >1</span
                    >
                  </div>
                </nuxt-link>

                <nuxt-link to="#">
                  <div
                    class="h-8 w-[5.375rem] text-sm rounded-[5px] bg-[#a6b3ff] text-center leading-8"
                  >
                    <span class="text-[#2e2e2e]">店舗ページ</span>
                  </div>
                </nuxt-link>

                <nuxt-link to="/admin/account">
                  <div
                    class="h-8 w-[115px] text-sm rounded-[5px] bg-[#a6ffcc] text-center leading-8"
                  >
                    <span class="text-[#2e2e2e]">アカウント管理</span>
                  </div>
                </nuxt-link>
                <nuxt-link to="#">
                  <div
                    class="h-8 w-[115px] text-sm rounded-[5px] bg-[#d0d0d0] text-center leading-8"
                  >
                    <span class="text-[#2e2e2e]">ログアウト</span>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <main class="max-w-[1000px] mx-auto">
      <section class="text-sm">
        <div class="flex justify-between">
          <h3 class="text-[#262626]">店舗様用</h3>
          <h3 class="text-black font-medium">今週の◯◯◯◯様のプレンゼントは</h3>
        </div>

        <div class="flex justify-between">
          <p class="text-[#262626]">
            <span>管理画面</span>
            <span class="inline-block ml-8">◯◯◯◯◯</span>
            <span>様</span>
          </p>
          <h3 class="text-black font-medium text-lg">1000 Nポイントです。</h3>
        </div>
      </section>
      <h1
        class="h-[46px] pl-4 leading-[44px] border border-[#88BED9] border-b-[#E3AAA9] rounded-[5px] text-[#262626]"
      >
        マッチング可能な案件が◯◯件あります。
      </h1>

      <section
        class="mt-2 mb-8 border-b-2 border-b-[#ff8181] text-[#ff8181] text-sm text-center leading-10"
      >
        <ul class="flex h-10">
          <li
            class="px-[26px] rounded-t-[5px] bg-[#ff8181] text-white cursor-pointer"
          >
            トップページ
          </li>
          <li class="px-[26px] cursor-pointer">お店情報</li>
          <li class="px-[26px] cursor-pointer">コンテンツ管理</li>
          <li class="px-[26px] cursor-pointer">イベント</li>
          <li class="px-[26px] cursor-pointer">マッチング</li>
          <li class="px-[26px] cursor-pointer">Q & A</li>
        </ul>
      </section>

      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  name: 'AdminLayout',
}
</script>
