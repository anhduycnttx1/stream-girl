/* eslint-disable */
import makeFactoryClass from '../class_factory'
import BaseClass from './base_class'

class User extends BaseClass {
  login() {
    throw new Error('not implement')
  }

  signup() {
    throw new Error('not implement')
  }

  getCurrentUser() {
    throw new Error('not implement')
  }

  refreshToken() {
    throw new Error('not implement')
  }

  sendEmail() {
    throw new Error('not implement')
  }

  logout() {
    throw new Error('not implement')
  }

  getMe() {
    throw new Error('not implement')
  }

  updateMe() {
    throw new Error('not implement')
  }
}

// mock
class UserMock extends User {
  girlLogin(data) {
    return Promise.resolve([])
  }
  userLogin(data) {
    return Promise.resolve([])
  }
  login(data) {
    return Promise.resolve({
      token_type: 'Bearer',
      access_token:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0Iiwicm9sZXMiOiJVU0VSUyIsIm5hbWUiOiJ0ZXN0IiwiaWF0IjoxNjQyNzM4NDM4LCJleHAiOjE2NDI3NDAyMzh9.1L-Jg7k-3l8hB8KwpQE8FddCkkyqmfL-zrPBZsT2CRPaCeB7eOMzEAvdfOBA46mcias3R9yxvTNpQs7qXyZHpg',
      expire: '2022-12-21T13:43:58.246196019',
      refresh_token:
        'gSLAIXAwJKQBgyzMQNHK0TMnuHcNDKSdj2XZ3mW8qhlmHxf9rsYLGyOiWBGhaLUe',
      refresh_expire: '2022-12-20T13:13:58.246196019',
    })
  }

  signup(data, token) {
    return Promise.resolve({
      allow_login: true,
      avatar: 'string',
      birthday: '2022-01-26',
      created_at: '2022-01-26T03:32:54.231Z',
      disabled: true,
      display_name: 'string',
      id: 0,
      mailaddress: 'string',
      meta: {},
      mv: 'string',
      updated_at: '2022-01-26T03:32:54.231Z',
      user_type: 'string',
      username: 'string',
    })
  }

  getMe() {
    return Promise.resolve({
      allow_login: null,
      avatar: null,
      birthday: '1990-06-01',
      disabled: null,
      display_name: 'hello',
      id: 13,
      mailaddress: 'hoan.nv.bk63@gmail.com',
      meta: {
        frequent_city: {
          meta_key: 'frequent_city',
          meta_key_label: 'よく遊ぶエリア',
          meta_value: '秋葉原, 上野',
        },
        preferred_type: {
          meta_key: 'preferred_type',
          meta_key_label: '好みのタイプ',
          meta_value: '一般的な女性',
        },
        comment: {
          meta_key: 'comment',
          meta_key_label: 'PRコメント',
          meta_value: 'こんにちは\nよろしくお願いします。',
        },
        preferred_play: {
          meta_key: 'preferred_play',
          meta_key_label: '好きなプレイ',
          meta_value: 'ノーマルプレイ',
        },
      },
      mv: null,
      name: 'hoan.nv.bk63@gmail.com',
      user_type: null,
      username: 'hoan.nv.bk63@gmail.com',
    })
  }

  updateMe() {}

  refreshToken() {
    return Promise.resolve({
      token_type: 'Bearer',
      access_token:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0Iiwicm9sZXMiOiJVU0VSUyIsIm5hbWUiOiJ0ZXN0IiwiaWF0IjoxNjQyNzM4NDM4LCJleHAiOjE2NDI3NDAyMzh9.1L-Jg7k-3l8hB8KwpQE8FddCkkyqmfL-zrPBZsT2CRPaCeB7eOMzEAvdfOBA46mcias3R9yxvTNpQs7qXyZHpg',
      expire: '2022-12-21T13:43:58.246196019',
      refresh_token:
        'gSLAIXAwJKQBgyzMQNHK0TMnuHcNDKSdj2XZ3mW8qhlmHxf9rsYLGyOiWBGhaLUe',
      refresh_expire: '2022-12-20T13:13:58.246196019',
    })
  }

  sendEmail(email) {
    return Promise.resolve()
  }

  verifyToken(token) {
    return {
      token: '61fe492262f5206b7de87cc4b4624a2b',
      mailaddress: 'hoan6527@gmail.com',
      created_at: '2022-11-10T01:14:51',
    }
  }

  deleteAccount(id) {}

  logout() {
    return Promise.resolve({ code: 200 })
  }
}

// api
class UserApi extends User {
  ownerLogin(data) {
    return this.$axios.$post('/api/login/owner', data)
  }

  girlLogin(data) {
    return this.$axios.$post('/api/login/girl', data)
  }

  login(data) {
    return this.$axios.$post('/api/login', data)
  }

  signup(data, token) {
    return this.$axios.$post('/api/register', data, {
      params: {
        t: token,
      },
    })
  }

  getMe(params) {
    return this.$axios.$get('/api/me', { params })
  }

  updateMe(user, id) {
    return this.$axios.$put(`/api/users/${id}`, user)
  }

  getUser(id) {
    return this.$axios.$get(`/api/users/${id}`)
  }

  sendEmail(email) {
    return this.$axios.$post('/api/register/sendtoken', { m: email })
  }

  refreshToken(tokens) {
    return this.$axios.$get('/api/refresh', tokens)
  }

  verifyToken(token) {
    return this.$axios.$get('/api/register/verify', { params: { t: token } })
  }

  deleteAccount(id) {
    return this.$axios.$delete(`/api/users/${id}`)
  }

  logout() {
    return this.$axios.$post('/api/logout')
  }
}

export default makeFactoryClass(UserMock, UserApi)
