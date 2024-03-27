<script setup lang="ts">

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import ActionTag from "./ActionTag.vue";

defineProps({
  title: String,
  type: String,
  tag: String,
  date: String,
  description: String
})

</script>

<template>
  <div class="container">
    <div class="row">
      <font-awesome-icon :icon="`code-${type}`"/>
      <div class="type">
        {{ type }}
      </div>
      <ActionTag :tag="tag"/>
    </div>
    <div class="row">
      <div class="title">
        {{ title }}
      </div>
    </div>
    <div class="content">
      <div class="date">
        {{ date }}
      </div>
      <div class="description">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.container {
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  height: fit-content ;
  width: 100%;

  .row {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    .title {
      font-size: 15px;
      font-weight: bold;
    }

    .type {
      font-size: 22px;
      font-weight: bold;
      margin: 0 20px;
    }

    svg {
      font-size: 22px;
    }
  }

  .content {
    display: flex;
    flex-direction: column;

    .date {
      font-size: 12px;
      color: #6B6B6B;
    }

    .description {
      font-size: 14px;
      color: #B3B3B3;
    }
  }
}

</style>