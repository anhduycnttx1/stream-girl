const state = () => ({})

const actions = {
  async getTrendUser(params) {
    return await this.$repository.trend.getTrendUser(params)
  },

  async getTrendVideo(params) {
    return await this.$repository.trend.getTrendVideo(params)
  },
}

const mutations = {}

const getters = {}

export { state, mutations, actions, getters }
