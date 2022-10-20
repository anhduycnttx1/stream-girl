<template>
  <div class="w-[250px] border rounded-xl shadow-md">
    <div class="pl-[13px]">
      <div class="text-sm my-[13px] font-bold">条件で探す</div>
      <div class="border-b border-[#989898]"></div>
      <select-field class="mx-auto mt-[17px]" label="地域" name="region" />
      <select-field class="mx-auto mt-[30px]" label="業種" name="type" />
      <check-box-list
        class="mt-[19px]"
        title="女の子タイプ"
        :list="[
          'スレンダー',
          'スレンダー',
          'スレンダー',
          'スレンダー',
          'スレンダー',
          'スレンダー',
        ]"
      />
    </div>
    <div class="flex justify-center">
      <button
        class="bg-[#f44bcb] text-white my-[17px] mx-auto py-[8px] px-[32px] rounded-full text-sm font-bold"
      >
        この条件で検索する
      </button>
    </div>
  </div>
</template>

<script setup></script>
