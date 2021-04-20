<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <feature-view></feature-view>
      <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabclk="switchgoods"></tab-control>
      <goods-list :goods="goods[curType].list"></goods-list>
    </scroll>
    <back-top @click.native="backClick"></back-top>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar"
import HomeSwiper from "./childCpns/HomeSwiper"
import HomeRecommend from "./childCpns/HomeRecommend"
import FeatureView from "./childCpns/FeatureView"
import TabControl from '../../components/content/TabControl.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'

import {getHomeMultidata, getHomeItems} from "@/network/home"
import Scroll from '../../components/common/scroll/Scroll.vue'
import BackTop from '../../components/content/backTop/BackTop.vue'

export default {
  name: 'home',
  data() {
    return {
      banners:[],
      recommends: [],
      goods: {
        'pop': {page:0 , list:[]},
        'new': {page:0 , list:[]},
        'sell': {page:0 , list:[]}
      },
      curType: 'pop'
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  methods: {
    //网络请求
    getHomeMultidata() {
      getHomeMultidata().then(res => {
      this.banners = res.data.data.banner.list
      this.recommends = res.data.data.recommend.list
    })
    },
    getHomeItems(type) {
      const page = this.goods[type].page + 1
      getHomeItems(type, page).then(res => {
        console.log(res)
        this.goods[type].list.push(...res.data.data.list) 
        this.goods[type].page += 1
      })
    },
    //事件
    switchgoods(event) {
      if(event === 0) {
        this.curType = 'pop'
      }else if (event === 1) {
        this.curType = 'new'
      }else if (event === 2) {
        this.curType = 'sell'
      }
    },
    backClick() {
      this.$refs.scroll.scroll.scrollTo(0,0,400)
    }
  },
  created() {
    this.getHomeMultidata(),
    this.getHomeItems('pop')
    this.getHomeItems('new')
    this.getHomeItems('sell')
  },
}
</script>

<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }
  .home-nav {
    color: white;
    background-color: var(--color-tint);
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0;
    z-index: 10
  }
/*   .tab-control {
    position: sticky;
    top: 44px;
    z-index: 10;
  } */
  .content {
    
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
  }
</style>