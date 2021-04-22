export default {
  addCart(context, payload) {
    let oldItem = context.state.cartList.find(item => {
      return item.iid === payload.iid
    })
    if (oldItem) {
      context.commit('addcount',oldItem)
    } else {
      payload.count = 1
      payload.isChecked = true
      context.commit('additem', payload)
    }
  }
}