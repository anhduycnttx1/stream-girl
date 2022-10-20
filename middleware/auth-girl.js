export default function ({ store, redirect, route }) {
  if (
    !route.path.includes('/login') &&
    (!store.getters['auth/isAuthenticated'] || !store.getters['auth/isGirl'])
  ) {
    redirect('/girl/login')
  }
}
