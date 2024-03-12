<script setup lang="ts">
import Header from "./components/Header.vue";

window.electronAPI.sendMessage('Hello from App.vue!');
</script>

<template>
  <div class="container">
    <Header current-repo="test" />
  </div>
</template>

<style lang="scss" scoped>

.container {
  height: 100vh;
  display: flex;
  background-color: #282c34;
}


</style>
