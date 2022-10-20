const state = () => ({})

const actions = {
  async getVideos() {
    return await this.$repository.media.getMedias()
  },

  async getVideo(_, id) {
    return await this.$repository.media.getVideo(id)
  },

  async getComments(_, { id, params }) {
    return await this.$repository.media.getComments(id, params)
  },

  async uploadImagePost(_, data) {
    return await this.$repository.media.uploadImagePost(data)
  },

  async deleteImagePost(_, id) {
    return await this.$repository.media.deleteImagePost(id)
  },

  async uploadAudioPost(_, data) {
    return await this.$repository.media.uploadAudioPost(data)
  },

  async deleteAudioPost(_, id) {
    return await this.$repository.media.deleteAudioPost(id)
  },

  async postComment({ rootGetters }, { videoId, data }) {
    const response = await this.$repository.media.postComment(videoId, data)
    // eslint-disable-next-line camelcase
    const { avatar, display_name, id } = rootGetters['user/user']
    response.commenter = {
      avatar,
      // eslint-disable-next-line camelcase
      display_name,
      id,
    }
    return response
  },

  async getPostsByUser(_, { id, params }) {
    return await this.$repository.media.getPostsByUser(id, params)
  },

  async likeVideo(_, videoId) {
    return await this.$repository.media.likeVideo(videoId)
  },

  async likePhoto(_, photoId) {
    return await this.$repository.media.likePhoto(photoId)
  },

  async getVideosByAuthor(_, { id, params }) {
    console.log('🚀 ~ action')

    return await this.$repository.media.getVideosByAuthor(id, params)
  },

  async getDiariesByAuthor(_, { id, params }) {
    return await this.$repository.media.getDiariesByAuthor(id, params)
  },

  async uploadMedia(_, file) {
    return await this.$repository.media.uploadMedia(file)
  },

  async getPost(_, params) {
    console.log('This is getPost')
    return await this.$repository.media.getPost(params)
  },
}
const mutations = {}

export { state, actions, mutations }
