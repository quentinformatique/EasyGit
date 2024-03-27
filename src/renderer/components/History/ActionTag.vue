<script setup lang="ts">
defineProps({
  tag: String
})
</script>

<template>

  <div class="tag">
    <div class="tag-content">
      {{ tag }}
    </div>
  </div>

</template>

<style scoped lang="scss">

.tag {
  background-color: #50555D;
  color: white;
  padding: 2px 5px;
  border-radius: 2px;
  height: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  .tag-content {
    font-size: 12px;
  }
}

</style>