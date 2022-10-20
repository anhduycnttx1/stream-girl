const state = () => ({})

const actions = {
  async getByLike(_) {
    return await this.$repository.ranking.getByLike()
  },
  async getByGirl(_) {
    return await this.$repository.ranking.getByGirl()
  },
  async getByGenre(_, genre) {
    return await this.$repository.ranking.getByGenre(genre)
  },
  async getGenre(_) {
    return await this.$repository.ranking.getGenre()
  },
  async getByView(_) {
    return await this.$repository.ranking.getByView()
  },
  async getByShop(_) {
    return await this.$repository.ranking.getByShop()
  },
}

const mutations = {}

const getters = {}

export { state, mutations, actions, getters }
