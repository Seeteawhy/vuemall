<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="icon"></slot></div>
    <div v-else><slot name="iconact"></slot></div>
    <div :style="activeStyle"><slot name="txt"></slot></div>
  </div>
</template>

<script>
export default {
  name:'tabbarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {

    }
  },
  computed: {
    isActive(){
      return this.$route.path.includes(this.path)
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor}: {}
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
    }
  }
}
</script>

<style>
  .tabbar-item {
    /* margin-top: 6px; */
    flex: 1;
    text-align: center;
    height: 49px;
    
    font-size: 12px;
  }
  .tabbar-item img {
    margin-top: 6px;
    height: 22px;
    vertical-align: middle;
  }

</style>