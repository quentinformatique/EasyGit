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
  width: 20vw;
  background-color: #282c34;
  box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.2);
  height: 100vh;

  .item {
    color: white;
  }

  button {
    background-color: #99E1D9;
    color: #282c34;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    margin: 20px;
    width: 100px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      transform: scale(1.1);
      background-color: #7ED8D3;
    }
  }
}

</style>