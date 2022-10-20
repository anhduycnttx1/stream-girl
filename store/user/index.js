const state = () => ({
  user: {}, // người dùng là trạng thái của auth
})

const actions = {
  // cập nhật thông tin người dùng
  async update({ commit }, data) {
    await this.$repository.user.update(data)
  },

  // lấy thông tin người dùng
  async getMe({ commit, state }, params) {
    const user = await this.$repository.user.getMe(params)
    commit('setUser', user)
  },

  // update thông tin người dùng
  async updateMe({ commit }, { user, id, file }) {
    if (file) {
      const formData = new FormData()
      formData.append('file', file)
      const data = await this.$repository.media.uploadMedia(formData)
      user.profile_image_id = data.id
    }
    const userUpdate = await this.$repository.user.updateMe(user, id)
    commit('setUser', userUpdate)
  },

  // xóa tài khoản người dùng
  async deleteMe({ dispatch }, id) {
    await this.$repository.user.deleteAccount(id)
    dispatch('auth/logout', null, { root: true })
  },
}

const mutations = {
  setUser(state, user) {
    window.localStorage.setItem('user', JSON.stringify(user))
    for (const key in user.meta) {
      user.meta[key] = user.meta[key].meta_value
    }
    state.user = user
  },
}

const getters = {
  user(state) {
    return state.user
  },
}

export { state, mutations, actions, getters }
