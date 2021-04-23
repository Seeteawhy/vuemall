<template>
  <div class="toast" v-show="isShow">
    <div >{{msg}}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      msg: '',
      isShow: false,
    }
  },
  methods: {
    show(message, duration = 2000) {
      this.isShow = true
      this.msg = message
      setTimeout(() => {
        this.isShow = false
      }, duration);
    }
  }
}
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -30%);
    padding: 20px 20px;
    border-radius: 5px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 10;
  }
</style>