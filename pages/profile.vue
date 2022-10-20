<template>
  <div class="w-[45rem] mx-auto max-sm:w-full">
    <nuxt-child v-if="!fetchState.pending && !fetchState.error" />
  </div>
</template>

<script>
import { useFetch } from '@nuxtjs/composition-api'
export default {
  name: 'ProfileBase',
  middleware: 'auth',
  setup() {
    const { fetchState } = useFetch(async ({ $store }) => {
      await $store.dispatch('user/getMe', {
        m: 'comment,frequent_city,frequent_use,preferred_play,preferred_type',
      })
    })
    return { fetchState }
  },
}
</script>
