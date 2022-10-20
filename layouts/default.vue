<template>
  <div class="max-md:static">
    <header-mobile class="md:hidden" />
    <the-header class="max-md:hidden" />
    <login-navbar v-if="!isAuthenticated" class="max-md:hidden" />
    <hr />
    <main>
      <Nuxt class="max-w-[1000px] mx-auto" />
    </main>
    <div v-if="!isAuthenticated">
      <v-modal
        name="register"
        classes="w-[426px] max-sm:w-[90%] sm-range:w-[500px] border border-[rgba(255,37,186,0.99)]"
      >
        <register-modal />
      </v-modal>
      <v-modal
        name="login"
        classes="w-[471px] max-sm:w-[90%] sm-range:w-[600px]"
      >
        <login-modal />
      </v-modal>
    </div>
  </div>
</template>

<script>
import 'swiper/swiper-bundle.min.css'
export default {
  name: 'DefaultLayout',
  middleware: ['check-token'],
  computed: {
    isAuthenticated() {
      return this.$store.getters['auth/isAuthenticated']
    },
  },
}
</script>
