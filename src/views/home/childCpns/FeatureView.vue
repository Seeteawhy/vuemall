<template>
  <div class="featureview">
    <a href="https://act.mogujie.com/zzlx67">
      <img src="~@/assets/img/home/recommend_bg.jpg" @load="imgLoad">
    </a>
  </div>
</template>

<script>
export default {
  name: 'FeatureView',
  data() {
    return {
      isLoad: false
    }
  },
  methods: {
    imgLoad() {
      if(!this.isLoad){
        this.$emit("featureLoad")
        this.isLoad = true
      }
    }
  }
}
</script>

<style>
  .featureview img {
    width: 100%;
  }
</style>