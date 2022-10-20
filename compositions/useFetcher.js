import { ref } from '@nuxtjs/composition-api'

// input: một function thực hiện callAPI
// ví dụ: (data) => store.dispath("auth/login", data)
// ouput:
// hàm này cung cấp cho bạn cách thực hiện lấy API, nó trả về
// trạng thái đang loading hay không với biến loading
// trạng thái lỗi của API thông qua biến error
// hàm thực hiện call API getData, lúc cần call api chỉ cần gọi hàm này
// các trạng thái sẽ được cập nhật thông qua các biến ở trên
//
export default function (callingAPI) {
  const data = ref({})
  const loading = ref(false)
  const error = ref(null)

  const getData = async (withData) => {
    console.log('Calling Girl API')
    loading.value = true
    data.value = {}
    error.value = null
    try {
      data.value = await callingAPI(withData)
    } catch (err) {
      error.value = err
    }
    loading.value = false
  }

  return {
    data, // dữ liệu được trả về từ API
    loading, // trạng thái API đang loading hay không
    error, // API có trả về lỗi gì hay không
    getData, // hàm sử dụng để gọi API
  }
}
