<template>
  <nav class="bg-[#4DD7F5]">
    <div class="w-1/2 max-w-[1000px] mx-auto py-1 md:w-full">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              @click="toggleNavbar"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="flex-1 flex items-stretch justify-start">
          <div
            class="flex-shrink-0 flex items-center bg-white pr-3 py-3 cursor-pointer"
          >
            <nuxt-link to="/"
              ><img
                class="h-[2.375rem] w-[10.375rem]"
                src="/icons/logo.jpg"
                alt="logo"
            /></nuxt-link>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex h-full justify-center items-center space-x-4">
              <base-link
                v-for="link of links"
                :key="link.href + link.title"
                :href="link.href"
                :title="link.title"
                classes="link--pc px-3 py-2"
                >{{ link.title }}</base-link
              >
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 w-[13.125rem] flex items-center sm:static sm:inset-auto"
        >
          <label for=""></label>
          <input
            type="text"
            placeholder="キーワード検索"
            class="w-full p-2 rounded-md"
          />
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <!-- <div id="mobile-menu" class="sm:hidden">
      <div
        v-for="link of links"
        v-show="showMenu"
        :key="link.href + link.title"
        class="px-2 pt-2 pb-3 space-y-1"
      >
        <base-link :href="link.href" :title="link.title" class="link--sp" />
      </div>
    </div> -->
  </nav>
</template>

<script>
import { NavBarLink } from '~/constants'
export default {
  data() {
    return {
      showMenu: false,
      links: NavBarLink,
    }
  },
  methods: {
    toggleNavbar() {
      this.showMenu = !this.showMenu
    },
  },
}
</script>

<style scoped>
label {
  position: relative;
}

label::before {
  content: '';
  position: absolute;
  left: 10px;
  top: 0;
  bottom: 0;
  width: 20px;
  background: url('/icons/search.svg') center / contain no-repeat;
}
</style>
