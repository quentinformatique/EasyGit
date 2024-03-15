<script setup lang="ts">

import Action from "../buttons/Action.vue";
</script>

<template>

  <div class="container">
    <div class="first-actions">
      <Action bgColor="#6BC0BC" icon="upload"/>
      <Action bgColor="#3F4552" icon="arrows-rotate"/>
      <Action bgColor="#3F4552" icon="code-branch"/>
    </div>
    <div class="second-actions">
      <Action bgColor="#3F4552" icon="gear"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.container {
  width: 100px;
  height: 100%;
  background-color: #2C303A;
  border-right: 1px solid #232323;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .first-actions {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    gap: 20px;
  }
  .second-actions {
    margin-bottom: 20px;
  }
}

</style>