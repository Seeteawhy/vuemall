<template>
  <div class="check-button" :class="{checked:isChecked}">
    <img src="~@/assets/img/cart/tick.svg" >
  </div>
</template>

<script>
export default {
  name:'checkButton',
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  .check-button {
    border-radius: 50%;
    border: 2px solid #6a6a6a;
  }
  .checked {
    background-color: red;
    border-color: red;
  }
</style>