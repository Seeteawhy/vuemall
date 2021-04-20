<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tabbar'
}
</script>

<style>
  .tabbar {
    display: flex;
    background-color: #f2f2f2;
    box-shadow: 0px -1px 1px rgba(111, 111, 111, 0.2);
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }

</style>