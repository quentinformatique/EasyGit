<script setup lang="ts">

defineProps({
    name: String,
    id: String,
    placeholder: String
});

</script>

<template>
  <input type="text" :name="name" :id="id" :placeholder="placeholder"/>
</template>

<style scoped lang="scss">


input {
  border: none;
  background-color: #2C303A;
  height: 30px;
  color: white;
  width: 82%;
  border-radius: 5px;

  padding: 0 10px;

  &:focus {
    outline: none;
  }
}

</style>