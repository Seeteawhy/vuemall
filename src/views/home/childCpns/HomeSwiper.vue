<template>
  <swiper>
    <swiper-item v-for="(item,key) in banners" :key="key">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from "@/components/common/swiper/index"

export default {
  name: 'HomeSwiper',
  data() {
    return {
      isLoad: false
    }
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imgLoad() {
      if(!this.isLoad){
        console.log('lll')
        this.$emit("swiperImgLoaded")
        this.isLoad = true
      }
    }
  }
}
</script>

<style>

</style>