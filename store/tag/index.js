const state = () => ({})

const actions = {
  async update(_, data) {
    await this.$repository.tag.update(data)
  },

  async getTag(_, tag) {
    return await this.$repository.tag.getTag(tag)
  },

  async getArea(_) {
    return await this.$repository.tag.getArea()
  },
}

const mutations = {}

const getters = {}

export { state, mutations, actions, getters }
