const state = () => ({})

const actions = {
  async update(_, data) {
    await this.$repository.video.update(data)
  },

  async getTag(_) {
    return await this.$repository.video.getTag()
  },

  async getVideoByTag(_, tag) {
    return await this.$repository.video.getVideoByTag(tag)
  },

  async getVideoByFilter(_, search) {
    return await this.$repository.video.getVideoByFilter(search)
  },

  async postVideo(_, data) {
    return await this.$repository.video.postVideo(data)
  },

  async deleteVideo(_, id) {
    return await this.$repository.video.deleteVideo(id)
  },
}

const mutations = {}

const getters = {}

export { state, mutations, actions, getters }
