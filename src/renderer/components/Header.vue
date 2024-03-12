<script setup lang="ts">

defineProps({
      currentRepo: String
    }
)

</script>

<template>
  <div class="header">
    <div class="item">GAUCHE</div>
    <div class="item">{{ currentRepo }}</div>
    <div class="item">DROITE</div>
  </div>
</template>

<style scoped>

.header {
  display: flex;
  justify-content: space-between;
  width: 100vw;
  background-color: #282c34;
  box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.2);
  height: 50px;
  .item {
    color: white;
  }
}
</style>