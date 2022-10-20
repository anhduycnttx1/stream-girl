export default async function ({ store, redirect, $cookies }) {
  store.getters['auth/isAuthenticated'] && redirect('/')

  const agree = store.state.auth.isChecked
  const token = $cookies.get('token_register')
  token ?? redirect(`/`)
  if (agree) {
    try {
      await store.dispatch('auth/verifyToken')
    } catch (error) {
      redirect(`/register/policy?t=${token}`)
    }
  } else {
    redirect(`/register/policy?t=${token}`)
  }
}
