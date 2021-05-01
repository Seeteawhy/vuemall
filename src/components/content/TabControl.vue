<template>
  <div class="tab-control">
    <div v-for="(item,idx,key) in titles" :key="key" 
    class="tab-control-item" 
    :class="{active: curidx === idx}"
    @click="itemclick(idx)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  data() {
    return {
      curidx: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    itemclick(idx) {
      this.curidx = idx
      //console.log(idx)
      this.$emit('tabclk', idx)
    }
  }
}
</script>

<style>
  .tab-control {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    background-color: white;
  }
  .tab-control-item {
    flex: 1;
  }
  .tab-control-item span {
    padding-bottom: 4px;
  }
  .active {
    color: var(--color-high-text)
  }
  .active span {
    border-bottom: 3px solid var(--color-high-text);
  }
</style>