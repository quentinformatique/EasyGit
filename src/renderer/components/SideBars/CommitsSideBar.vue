<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="top">
      <h2>History</h2>
    </div>
    <div class="main">
      commits
    </div>
  </div>

</template>

<style lang="scss" scoped>

.container {
  width: 320px;
  height: 800px;

  background-color: #2C303A;
  color: white;
  box-sizing: border-box;

  border-right: 1px solid #232323;
  display: flex;
  flex-direction: column;

  .top {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid #232323;
    border-left: 1px solid #232323;
  }

  .main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-left: 1px solid #232323;
    flex: 1;
  }
}


</style>