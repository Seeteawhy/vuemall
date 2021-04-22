<template>
  <div>
    <nav-bar class="detail-nav-bar">
      <div slot="left" class="back-image" @click="backClick">
        <img src="~@/assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,idx,key) in arr" 
            :key="key"
            class="centertext"
            :class="{active: idx === currentIndex}"
            @click="titleClick(idx)">
          {{item}}
        </div>
      </div>
      <div slot="right" class="cart-image" @click="cartClick">
        <img src="~@/assets/img/tabbar/shopcart_active.svg" alt="">
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar.vue'
export default {
  name: 'DetailNaviBar',
  components: { 
    NavBar
  },
  data() {
    return {
      arr: ['商品','参数','评论','推荐'],
      currentIndex: 0
    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
      this.$emit('itemclked', index)
    },
    backClick() {
      this.$router.back()
    },
    cartClick() {
      this.$router.push('/shopcart')
    }
  }
}
</script>

<style scoped>
  .title {
    display: flex;
    font-size: 12px;
  }
  .centertext {
    flex: 1
  }
  .center .active {
    color: var(--color-high-text);
  }
  .back-image img {
    margin-top: 12px;
  }
  .cart-image img {
    width: 30px;
    margin-top: 9px;
  }
</style>