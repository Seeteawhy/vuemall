<template>
  <div class="shop-cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{itemAmounts}})</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item, index) in $store.state.cartList"
                :key="index"
                :item-info="item"></cart-list-item>
    </scroll>
    <cart-bottom></cart-bottom>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import NavBar from '../../components/common/NavBar.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import cartListItem from '../../views/cart/childCpns/cartListItem'
import CartBottom from './childCpns/cartBottom.vue'
export default {
  components: { 
    NavBar,
    Scroll,
    cartListItem,
    CartBottom
  },
  name: 'shopcart',
  computed: {
    ...mapGetters(['itemAmounts'])
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
  .shop-cart {
    height: 100vh;
  }
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    z-index: 9;
  }
  .content {
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }
</style>