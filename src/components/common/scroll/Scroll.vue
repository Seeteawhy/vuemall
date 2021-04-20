<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"

export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    refresh() {
      console.log("debounce refresh")
      this.scroll && this.scroll.refresh()
    },
    finishPull() {
      this.scroll && this.scroll.finishPullUp()
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    if(this.probeType === 2 || this.probeType === 3){
      this.scroll.on("scroll", (pos) => {
        this.$emit('scrolledTo', pos)
      })
    }
    if(this.pullUpLoad) {
      this.scroll.on("pullingUp", ()=> {
        this.$emit('pullup')
      })
    }
  }
}
</script>

<style scoped>

</style>

