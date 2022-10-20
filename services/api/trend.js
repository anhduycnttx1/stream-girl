import makeFactoryClass from '../class_factory'
import BaseClass from './base_class'

class Trend extends BaseClass {
  getTrendUser() {
    throw new Error('Not implement')
  }

  getTrendVideo() {
    throw new Error('Not implement')
  }
}

class TrendMock extends Trend {
  getTrendUser() {
    return Promise.resolve([])
  }

  getTrendVideo() {
    return Promise.resolve([])
  }
}

class TrendApi extends Trend {
  getTrendVideo(_, params) {
    return this.$axios.$get('/api/trends/videos', { params })
  }

  getTrendUser(_, params) {
    return this.$axios.$get('/api/trends/users', { params })
  }
}

export default makeFactoryClass(TrendMock, TrendApi)
