<script setup lang="ts">
import Commit from "../History/Action.vue";

</script>

<template>
  <div class="container">
    <div class="top">
      <h2>History</h2>
    </div>
    <div class="main">
      <Commit title="Bug fix: blablablabla..." type="commit" tag="47a3f02" date="2021-10-10" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ligula."/>
      <Commit title="Merge dev/fct -> Main" type="merge" tag="47a3f02" date="2021-10-10" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ligula."/>
      <Commit title="Create branch feature" type="branch" tag="47a3f02" date="2021-10-10" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum ligula."/>
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
    align-items: center;
    border-left: 1px solid #232323;
    flex: 1;
  }
}


</style>