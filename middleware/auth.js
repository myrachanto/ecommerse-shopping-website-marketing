export default (context) => {
  if (!context.store.getters.isLoggedin) {
    context.redirect('/')
  }
}
