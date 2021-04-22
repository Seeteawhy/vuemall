<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="['流行','新款','精选']" 
                  @tabclk="switchgoods"
                  v-show="isShownTab"
                  class="tab-shown"
                  ref="tabControl1"></tab-control>
    <scroll class="content" 
            ref="scroll" 
            :probeType="3" 
            @scrolledTo="scrollPos"
            :pull-up-load="true"
            @pullup="loadmore">
      <home-swiper :banners="banners" @swiperImgLoaded="swiperImgLoaded"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <feature-view></feature-view>
      <tab-control :titles="['流行','新款','精选']" 
                    @tabclk="switchgoods"
                    ref="tabControl2"></tab-control>
      <goods-list :goods="goods[curType].list"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShownBackTop"></back-top>
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
import {debounce} from "@/common/utils"

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
      curType: 'pop',
      isShownBackTop: false,
      tabOffsetTop: 546,
      isShownTab: false,
      seenPlace: 0
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
        this.$refs.scroll.finishPull()
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
      this.$refs.tabControl2.curidx = event
      this.$refs.tabControl1.curidx = event
    },
    backClick() {
      this.$refs.scroll.scroll && this.$refs.scroll.scroll.scrollTo(0,0,400)
    },
    scrollPos(pos) {
      this.isShownBackTop = -pos.y > 1000
      this.isShownTab = -pos.y > this.tabOffsetTop
    },
    loadmore() {
      this.getHomeItems(this.curType)
    },
    swiperImgLoaded() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    }
  },
  created() {
    this.getHomeMultidata(),
    this.getHomeItems('pop')
    this.getHomeItems('new')
    this.getHomeItems('sell')

  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 200)
    this.$bus.$on("imgloaded",()=> {
      refresh()
    })
  },
  activated() {
    this.$refs.scroll.scroll.scrollTo(0,this.seenPlace,0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    this.seenPlace = this.$refs.scroll.scroll.y
  }
}
</script>

<style scoped>
  #home {
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
  }
  .home-nav {
    color: white;
    background-color: var(--color-tint);
/*     position: fixed;
    top: 0px;
    left: 0px;
    right: 0;
    z-index: 10 */
  }
  .tab-shown {
    position: relative;
    z-index: 11;
  }
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>