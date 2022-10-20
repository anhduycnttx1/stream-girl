import makeFactoryClass from '../class_factory'
import BaseClass from './base_class'

class Video extends BaseClass {
  getTag() {
    throw new Error('not implement')
  }

  getVideoByTag() {
    throw new Error('not implement')
  }

  getVideoByFilter() {
    throw new Error('not implement')
  }
}

// mock
class VideoMock extends Video {
  getTag() {
    return Promise.resolve([])
  }

  getVideoByTag() {
    return Promise.resolve([])
  }

  getVideoByFilter(params) {
    return Promise.resolve([])
  }
}

// api
class VideoApi extends Video {
  getTag() {
    return this.$axios.$get(`/api/videos/tags`)
  }

  getVideoByTag(tag) {
    return this.$axios.$get(`/api/videos/tags/${tag}`)
  }

  getVideoByFilter(params) {
    return this.$axios.$get(`/api/videos`, { params })
  }

  postVideo(data) {
    return this.$axios.$post(`/api/videos`, data)
  }

  deleteVideo(id) {
    return this.$axios.$delete(`/api/videos/${id}`)
  }
}

export default makeFactoryClass(VideoMock, VideoApi)
