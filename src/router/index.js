import Vue from 'vue'
import VueRouter from 'vue-router'
const home = () => import("../views/home/Home")
const category = () => import("../views/category/Category")
const shopcart = () => import("../views/cart/Shopcart")
const profile = () => import("../views/profile/Profile")
const detail = () => import("../views/detail/Detail")

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: "/home"
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/shopcart',
    component: shopcart
  },
  {
    path: '/profile',
    component: profile
  },
  {
    path: '/detail/:iid',
    component: detail
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
