const state = () => ({})

const actions = {
  async getShop(_, params) {
    return await this.$repository.shop.getShop(params)
  },
}

const mutations = {}

const getters = {}

export { state, mutations, actions, getters }
