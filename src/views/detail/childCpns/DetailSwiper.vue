<template>
  <div>
    <swiper class="detail-swp">
      <swiper-item v-for="(item,idx,key) in topImage" 
                  :key="key">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import Swiper from '@/components/common/swiper/Swiper.vue'
import SwiperItem from '@/components/common/swiper/SwiperItem.vue'
export default {
  components: { 
    Swiper,
    SwiperItem 
  },
  name:'DetailSwiper',
  props: {
    topImage:{
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
  .detail-swp {
    height: 300px;
    overflow: hidden;
  }
</style>