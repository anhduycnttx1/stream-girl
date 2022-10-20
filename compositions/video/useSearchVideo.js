import { ref, useFetch } from '@nuxtjs/composition-api'

export default function (emit) {
  const girl = ref([])
  const cities = ref([])
  const industories = ref([])
  const videoTags = ref([])

  const choosingGirl = ref([])
  const choosingCities = ref([])
  const choosingIndustories = ref([])
  const choosingVideoTags = ref([])

  useFetch(async ({ $store }) => {
    girl.value = await $store.dispatch('tag/getTag', 'girl')
    cities.value = await $store.dispatch('tag/getTag', 'cities')
    industories.value = await $store.dispatch('tag/getTag', 'industories')
    videoTags.value = await $store.dispatch('video/getTag')
  })

  function choosingTag(index) {
    videoTags.value[index].choosing = !videoTags.value[index].choosing
  }

  function search() {
    const query = {
      cities: choosingCities.value.toString(),
      industries: choosingIndustories.value.toString(),
      types: choosingGirl.value.toString(),
      tags: choosingVideoTags.value.toString(),
    }
    const queryRel = {}
    for (const key in query) {
      if (query[key]) {
        queryRel[key] = query[key]
      }
    }
    emit('clicked', queryRel) // -> gọi tới search(query) ở videos/search/index.vue
    this.$modal.close({ name: 'criteria' })
    emit('search')
  }
  return {
    girl,
    cities,
    industories,
    videoTags,
    choosingGirl,
    choosingCities,
    choosingIndustories,
    choosingVideoTags,
    choosingTag,
    search,
  }
}
