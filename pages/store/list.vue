<template>
  <div
    class="w-full mt-5 mb-20 flex justify-between items-start max-md:justify-center md:flex-row flex-col"
  >
    <!-- search bar -->
    <div class="max-md:hidden w-[26%] right">
      <div
        class="shadow-[0_0_5px_rgba(0,0,0,0.2)] drop-shadow-sm rounded-[10px]"
      >
        <h1 class="text-sm tracking-[1px] py-2 pl-3 rounded-t-[10px]">
          キーワードで探す
        </h1>
        <div class="p-[10px] bg-[#f0f0f0] rounded-b-[10px] relative">
          <label for=""
            ><img
              src="/icons/search_pink.svg"
              class="absolute top-1/2 left-6 -translate-y-1/2"
          /></label>
          <input
            type="text"
            class="w-full h-11 rounded-[21px] text-sm pl-10"
            placeholder="地域名・業種など"
            v-model="query.keyword"
          />
        </div>
      </div>

      <!-- filter -->
      <div
        class="shadow-[0_0_5px_rgba(0,0,0,0.2)] drop-shadow-sm rounded-[10px] mt-6 text-sm"
      >
        <h1 class="tracking-[1px] py-2 pl-3 border-b border-b-[#c2c2c2]">
          条件で探す
        </h1>
        <div class="px-3">
          <form>
            <div class="mt-4">
              <label for="地域" class="block mb-1">地域</label>
              <select
                id="地域"
                class="w-full bg-white border-b !border-[#9a9a9a]"
                name="city"
                v-model="query.area"
              >
                <option value=""></option>
                <optgroup
                  v-for="(item, index) in citiesList"
                  :key="'city' + index"
                  :label="item.label"
                >
                  <option
                    v-for="(childrenItem, index) in item.children"
                    :key="'childrenItem' + item.slug + index"
                  >
                    {{ childrenItem.label }}
                  </option>
                </optgroup>
              </select>
            </div>
            <div class="mt-4">
              <label for="業種" class="block mb-1">業種</label>
              <select
                id="業種"
                class="w-full bg-white border-b !border-[#9a9a9a]"
                name="industory"
                v-model="query.industory"
              >
                <option value=""></option>
                <option
                  v-for="(item, index) in industriesList"
                  :key="'industry' + index"
                  :value="item.slug"
                >
                  {{ item.label }}
                </option>
              </select>
            </div>
            <div class="text-center">
              <button
                class="text-white font-bold px-7 py-2 mt-5 mb-4 rounded-[17px] bg-[#f44bcb]"
                type="button"
                @click="search"
              >
                この条件で検索する
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- moblie search -->
    <div class="md:hidden w-full mt-[25px] text-[28px] max-sm:text-lg mb-5">
      <div class="w-[92%] mx-auto">
        <div
          class="w-full py-3 mb-3 rounded-[5px] border border-[rgba(31,31,31,0.99)] flex items-center"
        >
          <label for="地域-mobile" class="flex items-center h-10">
            <span class="text-xl max-sm:text-sm mx-10 max-sm:mx-3">地域</span>
            <span> ： </span>
          </label>
          <select id="地域-mobile" class="w-3/4 bg-white">
            <option value="">柏</option>
          </select>
        </div>

        <div
          class="w-full py-3 rounded-[5px] border border-[rgba(31,31,31,0.99)] flex items-center"
        >
          <label for="業種-mobile" class="flex items-center h-10">
            <span class="text-xl max-sm:text-sm mx-10 max-sm:mx-3">業種</span>
            <span class="inline-block"> ： </span>
          </label>
          <select id="業種-mobile" class="w-3/4 bg-white">
            <option value="">デリヘル</option>
          </select>
        </div>
      </div>
    </div>

    <!-- store list -->
    <div class="w-full md:w-[71%]">
      <store-card
        v-for="(item, index) in shopsList.content"
        :key="index"
        :info="item"
      />
      <infinite-loading spinner="bubbles" @infinite="infiniteHandle" />
      <three-dot class="mt-12" />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import {
  reactive,
  useRouter,
  ref,
  useFetch,
  useStore,
} from '@nuxtjs/composition-api'
export default {
  name: 'StoreListPage',
  setup() {
    const page = ref(0)
    const store = useStore()
    const citiesList = ref([])
    const industriesList = ref([])
    const shopsList = ref({})
    const keyWord = ref('')
    const router = useRouter()
    const query = reactive({
      area: '',
      industory: '',
      keyword: '',
    })

    let prevTime = 1
    const debounchTime = 125 // thiết lập thời gian chờ nhận thông tin giữa 2 lâần nhập là 100ms

    // thực hiện gọi API để lấy dữ liệu
    useFetch(async (props) => {
      citiesList.value = await store.dispatch('tag/getArea')
      industriesList.value = await store.dispatch('tag/getTag', 'industories')
    })

    async function infiniteHandle($state) {
      const infiniteData = await store.dispatch('shop/getShop', {
        ...query,
        size: 3,
        page: page.value,
      })
      if (shopsList.value.content === undefined) {
        shopsList.value = infiniteData
        page.value++
        $state.loaded()
        return
      }
      if (infiniteData.content.length != 0) {
        page.value++
        shopsList.value.content.push(...infiniteData.content)
        $state.loaded()
      } else {
        $state.complete()
      }
    }

    async function search() {
      page.value = 1
      shopsList.value = await store.dispatch('shop/getShop', {
        ...query,
        page: 0,
        size: 3,
      })
      router.push({ query: query.value })
    }

    return {
      citiesList,
      industriesList,
      shopsList,
      keyWord,
      query,
      search,
      infiniteHandle,
    }
  },
}
</script>
