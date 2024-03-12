<script setup lang="ts">
import Header from "./components/Header.vue";
import LeftSideBar from "./components/SideBars/ChangesSideBar.vue";

window.electronAPI.sendMessage('Hello from App.vue!');
</script>

<template>
  <div class="container">
    <Header current-repo="test" />
    <LeftSideBar />
  </div>
</template>

<style lang="scss" scoped>

.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #282c34;
}


</style>
