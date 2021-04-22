export default {
  addcount(state, payload) {
    payload.count += 1
  },
  additem(state, payload) {
    state.cartList.push(payload)
  }
}