import { ErrorType } from '~/constants'
import userRepository from '~/services/api/user'
import mediaRepository from '~/services/api/media'
import tagRepository from '~/services/api/tag'
import videoRepository from '~/services/api/video'
import rankingRepository from '~/services/api/ranking'
import shopRepository from '~/services/api/shop'
import trendRepository from '~/services/api/trend'
import roomsRepository from '~/services/api/rooms'

const createRepository = ({ app, $axios, redirect, $config }) => {
  $axios.onError((error) => {
    if (!error.response) {
      return
    }

    const code = error.response.status

    switch (code) {
      case ErrorType.Unprocessable:
        Promise.reject(error.response.data.errors)
        break
      case ErrorType.Unauthorized:
        app?.store?.dispatch('auth/logout')
        break
      case ErrorType.Forbidden:
        app?.router?.back()
        break
      case ErrorType.NotFound:
        break
      default:
        break
    }
  })

  return {
    user: userRepository($config.environment, { $axios }),
    media: mediaRepository($config.environment, { $axios }),
    tag: tagRepository($config.environment, { $axios }),
    video: videoRepository($config.environment, { $axios }),
    ranking: rankingRepository($config.environment, { $axios }),
    shop: shopRepository($config.environment, { $axios }),
    trend: trendRepository($config.environment, { $axios }),
    rooms: roomsRepository($config.environment, { $axios }),
  }
}

export default createRepository
