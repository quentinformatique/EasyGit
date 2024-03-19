<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

defineProps({
  name: String,
  type: String,
})
</script>

<template>
<div class="container">
  <div class="check">
    <input type="checkbox" name="check" :id="name">
  </div>
  <div class="title">
    {{ name }}
  </div>
  <div class="type">
    <div v-if="type == 'new'" :class="type">
      <FontAwesomeIcon icon="plus"/>
    </div>
    <div v-else-if="type == 'delete'" :class="type">
      <FontAwesomeIcon icon="xmark"/>
    </div>
    <div v-else-if="type == 'edit'" :class="type">
      <FontAwesomeIcon icon="pen"/>
    </div>
    <div v-else></div>
  </div>
</div>
</template>

<style scoped lang="scss">

.container {
  display: flex;
  align-items: center;
  .check {
    flex: none;
    input[type="checkbox"] {
      width: 14px;
      height: 14px;
      margin: 0;
      accent-color: #6BC0BC;
      cursor: pointer;
    }
  }
  .title {
    flex: 1;
    margin-left: 10px;
  }
  .type {
    flex: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .new {
    color: #64F66A;
    font-size: 1.2rem;
  }
  .delete {
    color: #F64D4D;
    font-size: 1.3rem;
  }
  .edit {
    color: #F6C64D;
  }
}

</style>