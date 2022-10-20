const ID_TOKEN_KEY = 'id_token'

const getToken = ($cookies) => {
  const token = $cookies.get('access_token')
  const refreshToken = $cookies.get('refresh_token')
  const tokenType = $cookies.get('token_type')
  const tokenStorage = window.localStorage.getItem(ID_TOKEN_KEY)
  const userString = window.localStorage.getItem('user')

  return {
    token,
    refreshToken,
    tokenStorage,
    tokenType,
    user: userString ? JSON.parse(userString) : null,
  }
}

const saveToken = (res, $cookies, $axios) => {
  $cookies.set('access_token', res.access_token, {
    expires: new Date(res.expire),
    path: '/',
  })
  $cookies.set('token_type', res.token_type)
  $cookies.set('refresh_token', res.refresh_token, {
    expires: new Date(res.refresh_expire),
    path: '/',
  })

  window.localStorage.setItem(ID_TOKEN_KEY, res.access_token)
  $axios.setToken(res.access_token, res.token_type)
}

const destroyToken = ($cookies, $axios) => {
  $cookies.remove('access_token')
  $cookies.remove('token_type')
  $cookies.remove('refresh_token')
  $axios.setToken(false)
  window.localStorage.removeItem(ID_TOKEN_KEY)
}

export { getToken, saveToken, destroyToken }
