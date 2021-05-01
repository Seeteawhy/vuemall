<template>
  <div class="home-recommend">
    <div v-for="(item,key) in recommends" :key="key" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoad">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isLoad: false
    }
  },
  methods: {
    imgLoad() {
      if(!this.isLoad){
        this.$emit("recommendLoaded")
        this.isLoad = true
      }
    }
  }
}
</script>

<style>
  .home-recommend {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 15px 0 30px;
    border-bottom: 8px solid #eee;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend-item img {
    width: 80%;
    padding: 5px;
    margin-bottom: 4px;
  }
</style>