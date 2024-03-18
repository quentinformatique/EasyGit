<script setup lang="ts">

defineProps({
  text: String
})

</script>

<template>
  <div class="commit-submit">
    <button>{{ text }}</button>
  </div>
</template>

<style scoped lang="scss">
.commit-submit {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 90%;
    height: 100%;
    border: none;
    background-color: #6BC0BC;
    color: white;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 5px;

    &:hover {
      background-color: #5BA9A2;
    }
  }
}


</style>