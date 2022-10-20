/* eslint-disable */
import { saveToken, destroyToken, getToken } from '~/helper/jwt'

const state = () => ({
  isAuthenticated: false,
  verifyRes: {},
  isChecked: false,
  role: 'no',
})

const actions = {
  async girlLogin({ commit, dispatch }, data) {
    const res = await this.$repository.user.girlLogin(data)
    saveToken(res, this.$cookies, this.$axios)
    commit('setAuthenticated', true)
    commit('setRole', 'girl')
    localStorage.setItem('role', 'girl')
    await dispatch('user/getMe', null, { root: true })
  },

  async ownerLogin({ commit, dispatch }, data) {
    const res = await this.$repository.user.ownerLogin(data)
    saveToken(res, this.$cookies, this.$axios)
    commit('setAuthenticated', true)
    commit('setRole', 'owner')
    localStorage.setItem('role', 'owner')
    await dispatch('user/getMe', null, { root: true })
  },

  async login({ commit, dispatch }, data) {
    const res = await this.$repository.user.login(data)
    saveToken(res, this.$cookies, this.$axios)
    commit('setAuthenticated', true)
    commit('setRole', 'user')
    localStorage.setItem('role', 'user')
    await dispatch('user/getMe', null, { root: true })
  },

  async signup({ commit, state: { verifyRes } }, data) {
    const res = await this.$repository.user.signup(
      {
        ...data,
        username: verifyRes.mailaddress,
        mailaddress: verifyRes.mailaddress,
      },
      verifyRes.token
    )
    this.$cookies.remove('token_register')
    return res
  },

  async checkToken({ commit }) {
    const { token, refreshToken, tokenStorage, tokenType, user } = getToken(
      this.$cookies
    )

    // nếu như người dùng chưa tồn tại thì thực hiện set Authenticate là false
    if (!user) {
      return commit('setAuthenticated', false)
    }

    try {
      // nếu chưa có token
      if (!token) {
        // nếu cả refreshToken và tokenStorage đều tồn tại
        // thì thực hiện truy vấn lại token và lưu lại thông tin token
        if (refreshToken && tokenStorage) {
          this.$axios.setToken(false)
          const res = await this.$repository.user.refreshToken({
            access_token: tokenStorage,
            refresh_token: refreshToken,
          })
          saveToken(res, this.$cookies, this.$axios)
        } else {
          commit('setAuthenticated', false)
        }
      } else {
        // còn nếu đã có token thì thực hiện xác thực luôn
        this.$axios.setToken(token, tokenType)
        commit('setAuthenticated', true)
        const role = localStorage.getItem('role')
        commit('setRole', role)
        commit('user/setUser', user, { root: true })
      }
    } catch (error) {
      destroyToken(this.$cookies, this.$axios)
      commit('setAuthenticated', false)
    }
  },

  async sendEmail(_, email) {
    await this.$repository.user.sendEmail(email)
  },

  async verifyToken({ commit, state }, token) {
    if (!token) {
      token = state.verifyRes.token
    }
    const response = await this.$repository.user.verifyToken(token)
    if (response) {
      this.$cookies.set('token_register', response.token, {
        expires: new Date(
          new Date(response.created_at).getTime() + 3600 * 1000 * 24
        ),
        path: '/',
      })
      commit('setVerifyResponse', response)
    }
  },

  logout({ commit }) {
    // const res = await this.$repository.user.logout()
    destroyToken(this.$cookies, this.$axios)
    commit('setAuthenticated', false)
    this.$router.push('/')
  },
}

const mutations = {
  setRole(state, role) {
    state.role = role
  },
  setAuthenticated(state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated
  },
  setVerifyResponse(state, data) {
    state.verifyRes = data
  },
  checkPolicy(state, isChecked) {
    state.isChecked = isChecked
  },
}

const getters = {
  isAuthenticated(state) {
    return state.isAuthenticated
  },
  isGirl(state) {
    return state.role === 'girl'
  },
  isUser(state) {
    return state.role === 'user'
  },
}

export { state, mutations, actions, getters }
