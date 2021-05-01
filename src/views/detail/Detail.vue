<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav-bar" 
                    @itemclked="itemclked"
                    ref="navbar"></detail-nav-bar>
    <scroll class="content" 
            ref="scroll"
            @scrolledTo="scrolledTo"
            :probe-type="3">
      <detail-swiper :topImage="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info ref="params" :paramInfo="paramInfo"></detail-param-info>
      <detail-comment-info ref="comment" :commentInfo="commentInfo"></detail-comment-info>
      <goods-list ref="recommend" :goods="recommends"></goods-list>
    </scroll>
    <detail-buttom-bar @addToCart="addToCart"></detail-buttom-bar>
    <back-top v-show="isShownBackTop" @click.native="backTopClick"></back-top>

  </div>
</template>

<script>
//网络请求
import {getDetail, Goods, Shop, GoodsParam, getRecommend} from '@/network/details'
import {debounce} from 'common/utils.js'
//cpn import
import DetailNavBar from './childCpns/DetailNavBar.vue'
import DetailSwiper from './childCpns/DetailSwiper.vue'
import DetailBaseInfo from './childCpns/DetailBaseInfo.vue'
import DetailShopInfo from './childCpns/DetailShopInfo.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import DetailGoodsInfo from './childCpns/DetailGoodsInfo.vue'
import DetailParamInfo from './childCpns/DetailParamInfo.vue'
import DetailCommentInfo from './childCpns/DetailCommentInfo.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'
import DetailButtomBar from './childCpns/DetailButtomBar.vue'
import BackTop from '../../components/content/backTop/BackTop.vue'


export default {
  name: 'Detail',
  components: { 
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailButtomBar,
    BackTop,

  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends:[],
      arr: [0,-500,-1000,-1500],
      getJumpOffsetTop: null,
      curidx: 0,
      isShownBackTop: false,
      toastmsg: '',
      isShowtoast: false
    }
  },
  created() {
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res => {
      this.topImages = res.data.result.itemInfo.topImages
      this.goods = new Goods(res.data.result.itemInfo, res.data.result.columns,res.data.result.shopInfo.services)
      this.shop = new Shop(res.data.result.shopInfo)
      this.detailInfo = res.data.result.detailInfo
      this.paramInfo = new GoodsParam(res.data.result.itemParams.info,res.data.result.itemParams.rule)
      if (res.data.result.rate.cRate > 0) {
        this.commentInfo = res.data.result.rate.list[0]
      }
    })
    getRecommend().then(res => {
      this.recommends = res.data.data.list
    })
    this.getJumpOffsetTop = debounce(()=> {
      this.arr = []
      this.arr.push(0)
      this.arr.push(-this.$refs.params.$el.offsetTop)
      this.arr.push(-this.$refs.comment.$el.offsetTop)
      this.arr.push(-this.$refs.recommend.$el.offsetTop)
    })
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh()
      this.getJumpOffsetTop()
    },
    itemclked(idx) {
      this.$refs.scroll.scroll.scrollTo(0, this.arr[idx],200)
    },
    scrolledTo(pos) {
      this.isShownBackTop = -pos.y > 1000
      if(-pos.y > -this.arr[0] && -pos.y < -this.arr[1]) {
        this.curidx = 0
      }else if (-pos.y >= -this.arr[1] && -pos.y < -this.arr[2]) {
        this.curidx = 1
      }else if (-pos.y >= -this.arr[2] && -pos.y < -this.arr[3]) {
        this.curidx = 2
      }else if (-pos.y >= -this.arr[3]) {
        this.curidx = 3
      }
      this.$refs.navbar.currentIndex = this.curidx
    },
    backTopClick(){
      this.$refs.scroll.scroll.scrollTo(0,0,400)
    },
    addToCart() {
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid
      this.$store.dispatch("addCart", product).then(res=> {
        this.$toast.show('已加入购物车',1000)
      })
    }
  }
}
</script>

<style scoped>
  .detail {
    position: relative;
    z-index: 9;
    background-color: white;
    height: 100vh;
  }
  .content {
    height: calc(100% - 44px - 58px);
  }

  .detail-nav-bar{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
</style>