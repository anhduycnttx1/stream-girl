export default function ({ redirect, $cookies, query, store }) {
  if (store.getters['auth/isAuthenticated']) {
    redirect('/')
  }
  if (!query.t) {
    const token = $cookies.get('token_register')
    token ? redirect(`/register/policy?t=${token}`) : redirect('/')
  }
}
