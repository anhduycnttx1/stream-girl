import { ref } from '@nuxtjs/composition-api'

export default function useError() {
  const error = ref({
    errors: undefined,
  })

  const setError = (errors) => {
    error.value = errors
  }

  return {
    error,
    setError,
  }
}
