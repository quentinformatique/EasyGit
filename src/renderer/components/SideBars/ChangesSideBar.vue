<script setup lang="ts">

import Commit from "../buttons/Commit.vue";
import Textarea from "../inputs/Textarea.vue";
import Text from "../inputs/Text.vue";
import FileChanged from "../FileChanged.vue";

defineProps({
  nbFilesChanged: {
    type: Number,
    default: 0
  }
})

</script>

<template>
  <div class="left-side-bar">
    <div class="top">
      <div class="title">Files changed</div>
      <div class="nb-file-changed">
        <div v-if="nbFilesChanged <= 99 && nbFilesChanged >= 0">{{ nbFilesChanged }}</div>
        <div v-else>99+</div>
      </div>
    </div>
    <div class="mid">
      <div class="file-changed">
        <FileChanged name="index.php" type="new"/>
        <FileChanged name="script.js" type="edit"/>
        <FileChanged name=".htaccess" type="delete"/>
      </div>
    </div>
    <div class="bot">
      <div class="commit-title">
        <Text name="title" id="title" placeholder="commit title..."/>
      </div>
      <div class="commit-desc">
        <Textarea name="desc" id="desc" placeholder="description..." rows="4"/>
      </div>
      <Commit text="Commit"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.left-side-bar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 230px;
  background-color: #3F4551;
  border-right: 1px solid #232323;
  box-sizing: border-box;
  height: 100%;
  color: white;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #232323;

    .title {
      font-size: 15px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      font-weight: 500;
    }

    .nb-file-changed {
      border-left: 1px solid #232323;
      padding: 0 10px;
      font-size: 14px;
      height: 100%;
      display: flex;
      align-items: center;
    }
  }

  .mid {
    height: 100%;
    width: 100%;
    .file-changed {
      display: flex;
      flex-direction: column;
      gap: 7px;
      padding: 15px;
    }
  }

  .bot {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    width: 220px;
    margin: 10px 0;


    .commit-title {
      width: 100%;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .commit-desc {
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>