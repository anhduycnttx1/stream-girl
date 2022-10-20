<template>
  <div
    class="bg-[#d0f4fc] w-[750px] md:w-[582px] max-sm:w-[370px] flex flex-col justify-center items-center rounded-[10px]"
  >
    <policy-text-box class="mt-[27px] md:mt-[15px]" />
    <div class="flex items-center mt-8 md:mt-6 max-sm:mt-3">
      <input
        id="policy"
        class="w-3"
        type="checkbox"
        :checked="agree"
        @change="checkPolicy"
      />
      <label
        for="policy"
        class="ml-[6px] text-[20px] md:text-[16px] max-sm:text-sm"
        >利用規約に同意します</label
      >
    </div>
    <p v-if="fetchState.error" class="text-red-600 text-center">
      {{ fetchState.error.response.data.description }}
    </p>
    <base-button
      class="mb-[28px] mt-[12px]"
      :disabled="!agree || Boolean(fetchState.error) || fetchState.pending"
      classes="blue-gradient text-sm"
      text="次へ"
      @clicked="redirectForm"
    />
  </div>
</template>

<script setup>
import {
  computed,
  useFetch,
  useRoute,
  useRouter,
  useStore,
} from '@nuxtjs/composition-api'

const store = useStore()
const route = useRoute()
const router = useRouter()

const agree = computed(() => store.state.auth.isChecked)

const { fetchState } = useFetch(async () => {
  await store.dispatch('auth/verifyToken', route.value.query.t)
})

function redirectForm() {
  if (!agree || Boolean(fetchState.error) || fetchState.pending) {
    return null
  }
  router.push('/register/form')
}

function checkPolicy(event) {
  store.commit('auth/checkPolicy', event.target.checked)
}
</script>
