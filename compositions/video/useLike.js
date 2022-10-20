import { useStore } from '@nuxtjs/composition-api'
import { useFetcher } from '../'

export default function (action) {
  const store = useStore()
  const {
    loading: loadingLike,
    error: errorLike,
    getData: like,
  } = useFetcher((id) => store.dispatch(action, id))

  async function likeMedia(videoId) {
    if (!store.getters['auth/isAuthenticated']) {
      alert('Login')
      return false
    } else {
      await like(videoId)
      return !errorLike.value
    }
  }

  return { loadingLike, errorLike, likeMedia }
}
