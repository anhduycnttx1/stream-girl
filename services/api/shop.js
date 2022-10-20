import makeFactoryClass from '../class_factory'
import BaseClass from './base_class'

class Shop extends BaseClass {
  getShop() {
    throw new Error('not implement')
  }
}

// mock
class ShopMock extends Shop {
  getShop(params) {
    return Promise.resolve([])
  }
}

// api
class ShopApi extends Shop {
  getShop(params) {
    return this.$axios.$get(`/api/shops`, { params })
  }
}

export default makeFactoryClass(ShopMock, ShopApi)
