import makeFactoryClass from '../class_factory'
import BaseClass from './base_class'
const videos = {
  content: [
    {
      id: 7,
      user_id: 1,
      type: 'video',
      title: 'たいとる5',
      status: 'publish',
      comment_count: 0,
      like_count: 0,
      content: '#test #aaa #bbb',
      upate_user_id: 1,
      publish_at: '2022-01-31T08:28:30',
      meta: {
        durationInMs: {
          meta_key: 'durationInMs',
          meta_label: '再生時間（ミリ秒）',
          meta_value: '100000',
        },
        audience: {
          meta_key: 'audience',
          meta_label: '公開範囲',
          meta_value: 'public',
        },
        thumbnail: {
          meta_key: 'thumbnail',
          meta_label: 'サムネイル',
          meta_value: 'https://loremflickr.com/320/240',
        },
        src: {
          meta_key: 'src',
          meta_label: '映像ソース',
          meta_value:
            'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8',
        },
        token: {
          meta_key: 'token',
          meta_label: 'token',
          meta_value: 'gUOGJsbzgLkPKbEQ',
        },
      },
      tags: [],
      author: {
        id: 1,
        display_name: 'システム管理者',
        avatar:
          'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRGNens_IGL9MqtOmRCvPhC2fbq4Mkra_OQNjT_L88N2TyviO0g',
      },
      upload_url: null,
      src: 'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8',
      duration_in_ms: 100000,
      audience: 'public1',
      thumbnail: 'https://loremflickr.com/320/240',
    },
    {
      id: 8,
      user_id: 1,
      type: 'video',
      title: 'たいとる6',
      status: 'publish',
      comment_count: 0,
      like_count: 0,
      content: '#test #aaa #bbb',
      upate_user_id: 1,
      publish_at: '2022-01-31T08:28:33',
      meta: {
        durationInMs: {
          meta_key: 'durationInMs',
          meta_label: '再生時間（ミリ秒）',
          meta_value: '100000',
        },
        audience: {
          meta_key: 'audience',
          meta_label: '公開範囲',
          meta_value: 'public',
        },
        thumbnail: {
          meta_key: 'thumbnail',
          meta_label: 'サムネイル',
          meta_value: 'https://loremflickr.com/320/240',
        },
        src: {
          meta_key: 'src',
          meta_label: '映像ソース',
          meta_value:
            'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8',
        },
        token: {
          meta_key: 'token',
          meta_label: 'token',
          meta_value: 'gUOGJsbzgLkPKbEQ',
        },
      },
      tags: [],
      author: {
        id: 1,
        display_name: 'システム管理者',
        avatar:
          'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRGNens_IGL9MqtOmRCvPhC2fbq4Mkra_OQNjT_L88N2TyviO0g',
      },
      upload_url: null,
      src: 'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8',
      duration_in_ms: 100000,
      audience: 'public',
      thumbnail: 'https://loremflickr.com/320/240',
    },
    {
      id: 9,
      user_id: 1,
      type: 'video',
      title: 'たいとる7',
      status: 'publish',
      comment_count: 0,
      like_count: 0,
      content: '#test #aaa #bbb',
      upate_user_id: 1,
      publish_at: '2022-01-31T08:28:36',
      meta: {
        durationInMs: {
          meta_key: 'durationInMs',
          meta_label: '再生時間（ミリ秒）',
          meta_value: '100000',
        },
        audience: {
          meta_key: 'audience',
          meta_label: '公開範囲',
          meta_value: 'public',
        },
        thumbnail: {
          meta_key: 'thumbnail',
          meta_label: 'サムネイル',
          meta_value: 'https://loremflickr.com/320/240',
        },
        src: {
          meta_key: 'src',
          meta_label: '映像ソース',
          meta_value:
            'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8',
        },
        token: {
          meta_key: 'token',
          meta_label: 'token',
          meta_value: 'gUOGJsbzgLkPKbEQ',
        },
      },
      tags: [],
      author: {
        id: 1,
        display_name: 'システム管理者',
        avatar:
          'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRGNens_IGL9MqtOmRCvPhC2fbq4Mkra_OQNjT_L88N2TyviO0g',
      },
      upload_url: null,
      src: 'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8',
      duration_in_ms: 100000,
      audience: 'public',
      thumbnail: 'https://loremflickr.com/320/240',
    },
    {
      id: 10,
      user_id: 1,
      type: 'video',
      title: 'たいとる8',
      status: 'publish',
      comment_count: 0,
      like_count: 0,
      content: '#test #aaa #bbb',
      upate_user_id: 1,
      publish_at: '2022-01-31T08:28:39',
      meta: {
        durationInMs: {
          meta_key: 'durationInMs',
          meta_label: '再生時間（ミリ秒）',
          meta_value: '100000',
        },
        audience: {
          meta_key: 'audience',
          meta_label: '公開範囲',
          meta_value: 'public',
        },
        thumbnail: {
          meta_key: 'thumbnail',
          meta_label: 'サムネイル',
          meta_value: 'https://loremflickr.com/320/240',
        },
        src: {
          meta_key: 'src',
          meta_label: '映像ソース',
          meta_value:
            'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8',
        },
        token: {
          meta_key: 'token',
          meta_label: 'token',
          meta_value: 'gUOGJsbzgLkPKbEQ',
        },
      },
      tags: [],
      author: {
        id: 1,
        display_name: 'システム管理者',
        avatar:
          'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRGNens_IGL9MqtOmRCvPhC2fbq4Mkra_OQNjT_L88N2TyviO0g',
      },
      upload_url: null,
      src: 'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8',
      duration_in_ms: 100000,
      audience: 'public',
      thumbnail: 'https://loremflickr.com/320/240',
    },
    {
      id: 11,
      user_id: 1,
      type: 'video',
      title: 'たいとる9',
      status: 'publish',
      comment_count: 0,
      like_count: 0,
      content: '#test #aaa #bbb',
      upate_user_id: 1,
      publish_at: '2022-01-31T08:28:41',
      meta: {
        durationInMs: {
          meta_key: 'durationInMs',
          meta_label: '再生時間（ミリ秒）',
          meta_value: '100000',
        },
        audience: {
          meta_key: 'audience',
          meta_label: '公開範囲',
          meta_value: 'public',
        },
        thumbnail: {
          meta_key: 'thumbnail',
          meta_label: 'サムネイル',
          meta_value: 'https://loremflickr.com/320/240',
        },
        src: {
          meta_key: 'src',
          meta_label: '映像ソース',
          meta_value:
            'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8',
        },
        token: {
          meta_key: 'token',
          meta_label: 'token',
          meta_value: 'gUOGJsbzgLkPKbEQ',
        },
      },
      tags: [],
      author: {
        id: 1,
        display_name: 'システム管理者',
        avatar:
          'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRGNens_IGL9MqtOmRCvPhC2fbq4Mkra_OQNjT_L88N2TyviO0g',
      },
      upload_url: null,
      src: 'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8',
      duration_in_ms: 100000,
      audience: 'public',
      thumbnail: 'https://loremflickr.com/320/240',
    },
    {
      id: 12,
      user_id: 2,
      type: 'video',
      title: 'たいとる10',
      status: 'publish',
      comment_count: 0,
      like_count: 0,
      content: '#test #aaa #bbb',
      upate_user_id: 1,
      publish_at: '2022-01-31T08:28:46',
      meta: {
        durationInMs: {
          meta_key: 'durationInMs',
          meta_label: '再生時間（ミリ秒）',
          meta_value: '100000',
        },
        audience: {
          meta_key: 'audience',
          meta_label: '公開範囲',
          meta_value: 'public',
        },
        token: {
          meta_key: 'token',
          meta_label: 'token',
          meta_value: 'gUOGJsbzgLkPKbEQ',
        },
      },
      tags: [],
      author: {
        id: 2,
        display_name: 'つなぐ太郎',
        avatar: '/img/money_satsutaba2.png',
      },
      upload_url: null,
      src: null,
      duration_in_ms: 100000,
      audience: 'public',
      thumbnail: null,
    },
  ],
  pageable: {
    sort: {
      unsorted: true,
      sorted: false,
      empty: true,
    },
    offset: 6,
    page_number: 1,
    page_size: 6,
    paged: true,
    unpaged: false,
  },
  total_pages: 6,
  total_elements: 33,
  last: false,
  size: 6,
  number: 1,
  sort: {
    unsorted: true,
    sorted: false,
    empty: true,
  },
  first: false,
  number_of_elements: 6,
  empty: false,
}
class Media extends BaseClass {}

// mock
class MediaMock extends Media {
  getVideos() {
    return videos
  }

  getVideo(id) {
    const video = videos.content.find((video) => +video.id === +id)
    if (!video) {
      throw new Error('Not found')
    }
    return video
  }

  getComments(id, params) {
    return {
      content: [
        {
          id: 6,
          post_id: 1,
          user_id: 1,
          comment_parent: null,
          content: 'か',
          commenter: {
            id: 1,
            display_name: 'aaaaasdfasdfあｓｄふぁｓｄｆさ',
            avatar:
              'https://sagasanight.com/uploads/2022/0210/1/xLkoxFypjoQTTpbW.png',
          },
        },
        {
          id: 7,
          post_id: 1,
          user_id: 1,
          comment_parent: 2,
          content: 'き',
          commenter: {
            id: 1,
            display_name: 'aaaaasdfasdfあｓｄふぁｓｄｆさ',
            avatar:
              'https://sagasanight.com/uploads/2022/0210/1/xLkoxFypjoQTTpbW.png',
          },
        },
      ],
      pageable: {
        sort: {
          unsorted: true,
          sorted: false,
          empty: true,
        },
        offset: 5,
        page_number: 1,
        page_size: 5,
        paged: true,
        unpaged: false,
      },
      total_pages: 2,
      total_elements: 7,
      last: true,
      size: 5,
      number: 1,
      sort: {
        unsorted: true,
        sorted: false,
        empty: true,
      },
      first: false,
      number_of_elements: 2,
      empty: false,
    }
  }

  postComment(videoId, data) {
    return {
      videoId,
      data,
    }
  }

  like() {}

  getVideosByAuthor(id, params) {
    return Promise.resolve(videos)
  }

  getDiariesByAuthor(id, params) {
    return Promise.resolve(videos)
  }

  uploadMedia(formData) {
    return {
      id: 4,
      src: 'https://sagasanight.com/uploads/2022/0210/10/ktAqCzuAlBWLjTKR.png',
      type: 'image',
    }
  }

  getPosts(params) {
    return Promise.resolve([])
  }
}

// api
class MediaApi extends Media {
  uploadMedia(formData) {
    return this.$axios.$post(`/api/media`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  }

  uploadImagePost(data) {
    return this.$axios.$post(`/api/photos`, data)
  }

  deleteImagePost(id) {
    return this.$axios.$delete(`/api/photos/${id}`)
  }

  uploadAudioPost(data) {
    return this.$axios.$post(`/api/audios`, data)
  }

  deleteAudioPost(id) {
    return this.$axios.$delete(`/api/audios/${id}`)
  }

  getVideo(id) {
    return this.$axios.$get(`/api/videos/${id}`)
  }

  getComments(videoId, params) {
    return this.$axios.$get(`/api/videos/${videoId}/comments`, { params })
  }

  postComment(videoId, data) {
    return this.$axios.$post(`/api/videos/${videoId}/comments`, data)
  }

  likeVideo(videoId) {
    return this.$axios.$put(`/api/videos/${videoId}/like`)
  }

  likePhoto(photoId) {
    return this.$axios.$put(`/api/photos/${photoId}/like`)
  }

  getVideosByAuthor(id, params) {
    return this.$axios.$get(`/api/users/${id}/videos`, { params })
  }

  getDiariesByAuthor(id, params) {
    return this.$axios.$get(`/api/users/${id}/photos`, { params })
  }

  getPostsByUser(id, params) {
    return this.$axios.$get(`/api/users/${id}/posts`, { params })
  }

  getPost(params) {
    return this.$axios.$get('/api/posts', { ...params })
  }
}

export default makeFactoryClass(MediaMock, MediaApi)
