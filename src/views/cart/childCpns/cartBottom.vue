<template>
  <div class="bottom-menu">
    <check-button class="select-all" 
                  :isChecked="isAllSelected"
                  @click.native="selectAll"></check-button>
    <span>全选</span>
    <span class="total-price">合计：¥{{totalPrice}}</span>
    <van-button class="buy-product"
                @click="goBuy"
                color="linear-gradient(to right, #ee0a24, #FF1493)">
      去结算({{totalqnt}})
    </van-button>
  </div>
</template>

<script>
import CheckButton from '@/components/content/checkButton/checkButton.vue'
export default {
  name:'cartBottom',
  components: {
    CheckButton
  },
  computed: {
    totalPrice() {
      return this.$store.state.cartList.filter(it => {
        return it.isChecked
      }).reduce((prev, curr) => {
        return prev + curr.price * curr.count 
      },0).toFixed(2)
    },
    totalqnt() {
      return this.$store.state.cartList.filter(it => {
        return it.isChecked
      }).reduce((prev, curr) => {
        return prev + curr.count 
      },0)
    },
    isAllSelected() {
      if(this.$store.state.cartList.length === 0) return false
      return this.$store.state.cartList.every(it => it.isChecked)
    },
  },
  methods: {
    selectAll() {
      if(this.isAllSelected) {
        this.$store.state.cartList.forEach(it => it.isChecked = false)
      }else {
        this.$store.state.cartList.forEach(it => it.isChecked = true)
      }
    },
    goBuy() {
      if (this.$store.state.cartList.filter(it => it.isChecked).length === 0) {
        this.$toast.show('请添加商品', 1000)
      }
    }
  }
}
</script>
    

<style scoped>
  .bottom-menu {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 50px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
  }
  .bottom-menu .select-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }
  .bottom-menu .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }
  .bottom-menu .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
</style>