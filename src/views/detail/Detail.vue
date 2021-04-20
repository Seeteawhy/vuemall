<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
  </div>
</template>

<script>
import DetailNavBar from './childCpns/DetailNavBar.vue'
export default {
  name: 'Detail',
  components: { 
    DetailNavBar
  },
  data() {
    return {
      xxx: null
    }
  },
  created() {
    this.xxx = this.$route.params.xxx
  }
}
</script>

<style scoped>

</style>