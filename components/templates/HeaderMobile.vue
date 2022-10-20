<template>
  <div>
    <div class="relative">
      <div class="flex justify-between outline outline-black outline-1">
        <div>
          <nuxt-link to="/">
            <img
              class="h-16 max-sm:h-12"
              src="/icons/logo_transparent.png"
              alt="logo"
            />
          </nuxt-link>
        </div>
        <button
          class="border-2 border-black rounded-[5px] flex justify-center items-center h-[4.5rem] w-[4.5rem] max-sm:w-[3.375rem] max-sm:h-[3.375rem]"
          @click="isShowNav = !isShowNav"
        >
          <img
            class="max-sm:w-3/4 max-sm:h-3/4"
            src="/icons/menu-button.svg"
            alt=""
          />
        </button>
      </div>
      <div id="mobile-menu" class="absolute top-0 left-0 right-0 z-[1000000]">
        <div
          :class="{ 'translate-x-full hidden': !isShowNav }"
          class="inset-y-0 right-0 transform transition duration-200 ease-in-out min-h-screen flex flex-row-reverse"
        >
          <div class="bg-[#fed9d9] bg-opacity-90 text-white w-[85%]">
            <div class="ml-8 max-sm:ml-4">
              <nuxt-link to="/">
                <img
                  class="h-16 max-sm:h-12"
                  src="/icons/logo_transparent.png"
                  alt="logo"
                />
              </nuxt-link>
            </div>
            <div
              v-if="!isAuthenticated"
              class="flex flex-row-reverse mt-[46px]"
            >
              <div class="w-[572px] bg-[#fdbbbb] ml-[10%]">
                <ul>
                  <li class="border-b border-b-[#9b9b9b] py-8 pl-[27px]">
                    <button
                      class="font-bold w-full text-4xl max-sm:text-lg flex justify-start items-center"
                      @click="openRegisterModal"
                    >
                      <img
                        class="w-12 mr-[34px] max-sm:w-6 max-sm:mr-[17px]"
                        src="/icons/register-mobile.svg"
                        alt=""
                      />
                      <span>無料会員登録</span>
                    </button>
                  </li>
                  <li class="pl-[27px] py-8">
                    <button
                      class="font-bold w-full text-4xl max-sm:text-lg flex justify-start items-center"
                      @click="openLoginModal"
                    >
                      <img
                        class="w-12 mr-[34px] max-sm:w-6 max-sm:mr-[17px]"
                        src="/icons/login-mobile.svg"
                        alt=""
                      />
                      <span>ログイン</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div class="mt-20 max-sm:mt-10">
              <ul>
                <li
                  v-for="navBarLink in navBarLinks"
                  :key="navBarLink.title"
                  class="flex border-t h-24 border-t-[#9b9b9b] max-sm:h-16"
                >
                  <div
                    class="mr-8 ml-28 max-sm:mr-4 max-sm:ml-14 text-4xl max-sm:text-lg w-full grid content-center text-[#232323] font-bold"
                  >
                    <nuxt-link
                      class="flex justify-between"
                      :to="navBarLink.href"
                    >
                      <p class="block">
                        {{ navBarLink.title }}
                      </p>
                      <p class="block">></p>
                    </nuxt-link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="w-28 p-3">
            <img
              class="w-[4.5rem] max-sm:w-[2.25rem]"
              src="/icons/close_1.svg"
              alt="close-icon"
              @click="isShowNav = !isShowNav"
            />
          </div>
        </div>
      </div>
      <div
        v-if="isShowNav"
        class="absolute top-0 z-[100000] w-[100vw] !h-[100vh] backdrop-brightness-50"
      ></div>
    </div>
    <!-- <v-modal name="login">
      <login-modal />
    </v-modal>
    <v-modal name="register">
      <register-modal />
    </v-modal> -->
  </div>
</template>

<script>
import { NavBarLink } from '~/constants'
export default {
  name: 'MobileLayout',
  data() {
    return {
      isShowNav: false,
      navBarLinks: NavBarLink,
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters['auth/isAuthenticated']
    },
  },
  methods: {
    openLoginModal() {
      this.isShowNav = !this.isShowNav
      this.$modal.open({ name: 'login' })
    },
    openRegisterModal() {
      this.isShowNav = !this.isShowNav
      this.$modal.open({ name: 'register' })
    },
  },
}
</script>
