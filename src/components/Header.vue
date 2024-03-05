<script setup lang="ts">
import {reactive} from "vue";

const repos = reactive({
  repos: ['test', 'test2', 'test3'],
  selected: 1,
})

//   <div v-for="repo in repos.repos">{{ repo }}</div>

</script>

<template>
  <header>
    <h1>My App </h1>
  </header>
</template>

<style lang="scss" scoped>

header {
  background-color: #373737;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 60px;
  h1 {
    color: #fff;
    font-size: 24px;
    line-height: 60px;
    margin: 0;
  }
}
</style>