import timeConverter from '~/helper/timeConverter'

/* eslint-disable */
const state = () => ({
  rooms: [{}],
  messages: {},
  verify: {},
})

const actions = {
  async getActionRooms({ commit }) {
    const rooms = await this.$repository.rooms.getApiRooms()
    commit('SET_ROOMS', rooms.items[0])
  },
  async loadOlderMessage({ commit }, { roomId, params }) {
    const rooms = await this.$repository.rooms.getApiRoomMessage(roomId, params)
    return rooms
  },
  addOlderMessage({ commit }, olderMessage) {
    commit('ADD_OLDER_MESSAGE', olderMessage)
  },
  async getActionRoomMessage({ commit }, { roomId, params }) {
    const rooms = await this.$repository.rooms.getApiRoomMessage(roomId, params)
    const message = rooms.content
    commit('SET_MESSAGES', { ...rooms, content: message })
  },
  async verify({ commit }) {
    const token = await window.localStorage.getItem('id_token')
    commit('WS_VERIFY', token)
  },
  sendMessage({ commit }, payload) {
    // eslint-disable-next-line no-console
    commit('WS_SEND_MESSAGES', payload)
  },
}

const mutations = {
  SET_ROOMS(state, rooms) {
    state.rooms = rooms
  },
  SET_MESSAGES(state, messages) {
    state.messages = messages
  },
  WS_SEND_MESSAGES(state, data) {
    state.messages.content.push(data)
  },
  WS_VERIFY(state, token) {
    state.verify = { message: token }
  },
  ADD_OLDER_MESSAGE(state, olderMessage) {
    if (olderMessage.first === true) {
      state.messages = olderMessage
      state.messages.content = olderMessage.content.reverse()
    } else {
      const removeDate = []
      for (const item of state.messages.content) {
        if (!item.begin_time) {
          removeDate.push(item)
        }
      }
      state.messages.content = removeDate
      state.messages.content.unshift(...olderMessage.content.reverse())
    }
    let createdTime = []
    let differDate = []
    for (const item of state.messages.content) {
      createdTime.push(item.created_at)
    }
    for (const item of createdTime) {
      const timeConverted = timeConverter(item)
      if (differDate.length == 0) {
        differDate.push(timeConverted)
      } else {
        if (timeConverted !== differDate[differDate.length - 1]) {
          differDate.push(timeConverted)
        }
      }
    }
    console.log(differDate)
    let index = 0
    let processListMessage = []
    processListMessage.push({
      begin_time: differDate[index],
    })
    for (let i = 0; i < state.messages.content.length; i++) {
      const message = state.messages.content[i]
      const timeConverted = timeConverter(message.created_at)
      if (timeConverted === differDate[index]) {
        processListMessage.push(message)
      } else {
        processListMessage.push({
          begin_time: differDate[index + 1],
        })
        index = Math.min(index + 1, differDate.length - 1)
        processListMessage.push(message)
      }
    }
    state.messages.content = processListMessage
  },
}

const getters = {}

export { state, mutations, actions, getters }
