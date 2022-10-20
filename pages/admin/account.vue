<template>
  <div class="mb-20">
    <div>
      <form action="">
        <table class="w-full border-collapse border border-[#a9a9a9]">
          <tbody>
            <tr>
              <td
                colspan="2"
                class="text-lg font-bold bg-[#efefef] h-[50px] text-center"
              >
                メールアドレス変更
              </td>
            </tr>
            <tr class="h-[75px]">
              <td class="w-1/4 border border-[#a9a9a9] bg-[#efefef]">
                <p class="pl-5">現在のメールアドレス</p>
              </td>
              <td class="border border-[#a9a9a9]">
                <span class="inline-block ml-5">gossipgirl@gmail.com</span>
              </td>
            </tr>
            <tr class="h-[75px]">
              <td class="w-1/4 border border-[#a9a9a9] bg-[#efefef]">
                <label for="email" class="block pl-5"
                  >新しいメールアドレス</label
                >
              </td>
              <td class="border border-[#a9a9a9]">
                <input
                  id="email"
                  type="text"
                  class="ml-5 pl-2 h-8 w-[55.5%] border border-black"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-center mt-6">
          <button
            type="submit"
            class="w-[284px] h-[71px] border-2 border-[#ff8181] rounded-[5px] text-lg text-[#ff8181]"
          >
            確認画面へ進む
          </button>
        </div>
      </form>
    </div>

    <!-- form 2 -->
    <div class="mt-10">
      <form action="">
        <table class="w-full border-collapse border border-[#a9a9a9]">
          <tbody>
            <tr>
              <td
                colspan="2"
                class="text-lg font-bold bg-[#efefef] h-[50px] text-center"
              >
                パスワード変更
              </td>
            </tr>
            <tr class="h-[75px]">
              <td class="w-1/4 border border-[#a9a9a9] bg-[#efefef]">
                <label for="email" class="block pl-5">現在のパスワード</label>
              </td>
              <td class="border border-[#a9a9a9]">
                <input
                  id="email"
                  type="text"
                  class="ml-5 pl-2 h-8 w-[55.5%] border border-black"
                />
              </td>
            </tr>
            <tr class="h-[75px]">
              <td class="w-1/4 border border-[#a9a9a9] bg-[#efefef]">
                <label for="email" class="block pl-5">新しいパスワード</label>
              </td>
              <td class="border border-[#a9a9a9]">
                <input
                  id="email"
                  type="text"
                  class="ml-5 pl-2 h-8 w-[55.5%] border border-black"
                />
              </td>
            </tr>
            <tr class="h-[75px]">
              <td class="w-1/4 border border-[#a9a9a9] bg-[#efefef]">
                <label for="email" class="block pl-5"
                  >新しいパスワード（確認）</label
                >
              </td>
              <td class="border border-[#a9a9a9]">
                <input
                  id="email"
                  type="text"
                  class="ml-5 pl-2 h-8 w-[55.5%] border border-black"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-center mt-6">
          <button
            type="submit"
            class="w-[284px] h-[71px] border-2 border-[#ff8181] rounded-[5px] text-lg text-[#ff8181]"
          >
            確認画面へ進む
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AdminAccountPage',
  layout: 'admin',
}
</script>
