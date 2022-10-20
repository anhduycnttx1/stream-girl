<template>
  <div class="max-md:static">
    <div class="bg-[#4dd7f5] h-[36px]"></div>
    <nav>
      <div class="w-full max-w-[1000px] mx-auto">
        <div class="relative flex items-center justify-between h-16">
          <div class="flex-1 flex items-stretch justify-start">
            <div
              class="flex-shrink-0 flex items-center bg-white pr-3 cursor-pointer"
            >
              <nuxt-link to="/"
                ><img
                  class="h-[2.375rem] w-[10.375rem]"
                  src="/icons/logo.jpg"
                  alt="logo"
              /></nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <hr />
    <main>
      <Nuxt class="max-w-[1000px] mx-auto" />
    </main>
  </div>
</template>

<script>
import 'swiper/swiper-bundle.min.css'
export default {
  name: 'PlainLayout',
  middleware: ['check-token'],
  computed: {
    isAuthenticated() {
      return this.$store.getters['auth/isAuthenticated']
    },
  },
}
</script>
