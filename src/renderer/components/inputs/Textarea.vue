<script setup lang="ts">
defineProps({
  name: String,
  id: String,
  placeholder: String,
  rows: Number
});
</script>

<template>
  <textarea :name="name" :id="id" :placeholder="placeholder" :rows="rows"></textarea>
</template>

<style scoped lang="scss">

textarea {
  border: none;
  background-color: #2C303A;
  color: white;
  border-radius: 5px;
  width: 90%;
  resize: none;
  font-family: 'Roboto', sans-serif;

  &:focus {
    outline: none;
  }
}

</style>