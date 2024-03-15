<script setup lang="ts">

defineProps({
  bgColor: String,
  icon: String
})

</script>

<template>

  <div class="button" :style="{ backgroundColor: bgColor }">
    <font-awesome-icon :icon="icon"/>
  </div>

</template>

<style scoped lang="scss">

.button {
  width: 70px;
  height: 70px;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  .svg-inline--fa {
    font-size: 35px;
  }
}

</style>