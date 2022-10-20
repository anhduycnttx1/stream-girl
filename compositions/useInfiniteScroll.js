import { ref, useStore } from '@nuxtjs/composition-api'

export default function (action, queryData, params) {
  const store = useStore()
  const items = ref([])
  const page = ref(-1)

  function infiniteScroll($state) {
    page.value++ // next page
    store
      .dispatch(action, {
        ...queryData,
        params: {
          ...params,
          page: page.value,
        },
      })
      .then((resp) => {
        if (resp.content.length > 1) {
          items.value.push(...resp.content)
          $state.loaded()
        } else {
          $state.complete()
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return { infiniteScroll, items, page }
}
