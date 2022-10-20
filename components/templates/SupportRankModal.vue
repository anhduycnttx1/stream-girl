<template>
  <div
    class="w-full h-[62vh] md:h-[45.375rem] px-9 py-11 text-center overflow-auto"
  >
    <ul>
      <li
        v-for="i in 6"
        :key="i"
        class="flex md:ml-[0.625rem] items-center border-b border-solid pb-2 mb-2 border-[#c2c2c2]"
      >
        <div class="relative">
          <base-span
            v-if="i !== 1 && i !== 2 && i !== 3"
            :text="i"
            class="absolute text-[0.75rem] md:text-[0.875rem] font-bold left-0 right-0 bottom-0"
          />
          <base-span
            v-else
            :text="i"
            class="absolute text-white text-[0.75rem] md:text-[0.875rem] font-bold left-0 right-0 bottom-0"
          />
          <div
            v-if="i !== 1 && i !== 2 && i !== 3"
            class="h-7 md:h-8 w-9"
          ></div>
          <img
            v-else
            class="h-7 md:h-8"
            :src="
              i === 1
                ? '/icons/gold-crown.png'
                : i === 2
                ? '/icons/silver-crown.png'
                : i === 3
                ? '/icons/copper-crown.png'
                : ''
            "
            alt=""
          />
        </div>
        <div
          class="ml-2 md:ml-6 w-[1.75rem] h-[1.75rem] md:w-[3.25rem] md:h-[3.25rem]"
        >
          <img
            class="w-full h-full object-cover rounded-full"
            src="/icons/human-top-1.png"
            alt=""
          />
        </div>
        <base-span
          text="ユーザー名"
          class="md:text-[1.0625rem] text-[#373737] ml-4 md:ml-8"
        />
        <base-span
          text="45,060 P"
          class="md:text-[1.0625rem] text-[#373737] font-bold ml-4 md:ml-[4.625rem]"
        />
      </li>
    </ul>
  </div>
</template>
