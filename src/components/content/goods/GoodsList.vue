<template>
  <div class="goods-list">
    <goods-list-item v-for="(item,idx,key) in goods" 
    :key="key" 
    :items="item"
    class="listitem"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  name: 'GoodsList',
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      dafault() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

</style>