<script setup lang="ts">

</script>

<template>
  <div class="left-side-bar">
    <div class="item">GAUCHE</div>
    <button>Commit</button>
  </div>
</template>

<style lang="scss" scoped>

.left-side-bar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 230px;
  background-color: #3F4551;
  border-right: 1px solid #232323;
  box-sizing: border-box;
  height: 100%;

  .item {
    color: white;
  }

  button {
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    margin: 20px;
    width: 100px;
    cursor: pointer;
    transition: 0.3s;
    background-color: #7ED8D3;

    &:hover {
      transform: scale(1.1);
      background-color: #7ED8D3;
    }
  }
}

</style>