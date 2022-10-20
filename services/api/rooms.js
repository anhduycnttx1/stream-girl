import makeFactoryClass from '../class_factory'
import BaseClass from './base_class'

class Rooms extends BaseClass {
  getApiRooms() {
    throw new Error('Not implement')
  }

  getApiRoomMessage() {
    throw new Error('Not implement')
  }
}

class RoomsMock extends Rooms {
  getApiRooms() {
    return Promise.resolve([])
  }

  getApiRoomMessage(roomId) {
    return Promise.resolve([])
  }
}

class RoomsApi extends Rooms {
  getApiRooms() {
    return this.$axios.$get(`/api/rooms/myrooms`)
  }

  getApiRoomMessage(roomId, params) {
    console.log(params)
    return this.$axios.$get(`/api/rooms/${roomId}/messages`, { params })
  }
}

export default makeFactoryClass(RoomsMock, RoomsApi)
