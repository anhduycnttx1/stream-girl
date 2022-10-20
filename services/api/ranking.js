import makeFactoryClass from '../class_factory'
import BaseClass from './base_class'

class Ranking extends BaseClass {
  getByLike() {
    throw new Error('Not implement')
  }

  getByGirl() {
    throw new Error('Not implement')
  }

  getGenre() {
    throw new Error('Not implement')
  }

  getByGenre() {
    throw new Error('Not implement')
  }
}

class RankingMock extends Ranking {
  getByLike() {
    return Promise.resolve([])
  }

  getByGirl() {
    return Promise.resolve([])
  }

  getByGenre(genre) {
    return Promise.resolve([])
  }

  getGenre() {
    return Promise.resolve([])
  }

  getByView() {
    return Promise.resolve([])
  }

  getByShop() {
    return Promise.resolve([])
  }
}

class RankingApi extends Ranking {
  getByLike() {
    return this.$axios.$get(`/api/ranking/girls/like`)
  }

  getByGirl() {
    return this.$axios.$get(`/api/ranking/girls`)
  }

  getByGenre(genre) {
    return this.$axios.$get(`/api/ranking/genres/${genre}`)
  }

  getGenre() {
    return this.$axios.$get(`/api/users/tags/groups/industories`)
  }

  getByView() {
    return this.$axios.$get('/api/ranking/videos/views')
  }

  getByShop() {
    return this.$axios.$get('/api/ranking/shops')
  }
}

export default makeFactoryClass(RankingMock, RankingApi)
