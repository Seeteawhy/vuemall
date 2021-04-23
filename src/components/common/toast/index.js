import Toast from "./Toast"
const obj = {}

obj.install = function (Vue) {
  //将组件转化成组件对象：1.根据原组件，用vue创建组件构造器函数 2.用函数生成组件对象
  const ToastConstructor = Vue.extend(Toast)
  const toast = new ToastConstructor()
  //将组件对象挂到一个元素上，将对象挂到body上
  toast.$mount(document.createElement('div'))
  document.body.appendChild(toast.$el)
  //将对象挂到vue原型上
  Vue.prototype.$toast = toast
}
export default obj