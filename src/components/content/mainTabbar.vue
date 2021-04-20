<template>
    <tabbar>
      <tabbar-item path="/home">
        <img slot="icon" src="~@/assets/img/tabbar/home.svg" alt="">
        <img slot="iconact" src="~@/assets/img/tabbar/home_active.svg" alt="">
        <div slot="txt">首页</div>
      </tabbar-item>
      <tabbar-item path= '/category'>
        <img slot="icon" src="~@/assets/img/tabbar/category.svg" alt="">
        <img slot="iconact" src="~@/assets/img/tabbar/category_active.svg" alt="">
        <div slot="txt">分类</div>
      </tabbar-item>
      <tabbar-item path= '/shopcart'>
        <img slot="icon" src="~@/assets/img/tabbar/shopcart.svg" alt="">
        <img slot="iconact" src="~@/assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="txt">购物车</div>
      </tabbar-item>
      <tabbar-item path= '/profile'>
        <img slot="icon" src="~@/assets/img/tabbar/profile.svg" alt="">
        <img slot="iconact" src="~@/assets/img/tabbar/profile_active.svg" alt="">
        <div slot="txt">我的</div>
      </tabbar-item>
    </tabbar>
</template>

<script>
import tabbar from "@/components/common/tabbar/Tabbar"
import tabbarItem from '@/components/common/tabbar/TabbarItem.vue'
export default {
  name: 'mainTabbar',
  components: {
    tabbar,
    tabbarItem
  }
}
</script>

<style>

</style>