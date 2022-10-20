/* eslint-disable */
export default function ({ store, redirect }) {
  if (!store.getters['auth/isAuthenticated'] || !store.getters['auth/isUser']) {
    redirect('/')
  }
}
