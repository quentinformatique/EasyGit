<script setup lang="ts">

defineProps({
      currentRepo: String
    }
)

</script>

<template>
  <div class="container">
    <div class="left">
      <select name="repo" id="repo">
        <option value="repo1">MyProjectRepository</option>
        <option value="repo2">Repo2</option>
        <option value="repo3">Repo3</option>
      </select>
    </div>
    <div class="right">
      <div class="scan">
        <font-awesome-icon icon="search"/>
        <h3>Scan new repositories</h3>
      </div>
      <div class="branch">
        branch
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.container {
  height: 80px;

  display: flex;
  justify-content: space-between;

  background-color: #2C303A;
  border-bottom: 1px solid #232323;


  .left {
    width: 222px;
    background-color: #373C49;
    border-right: 1px solid #232323;

    display: flex;
    align-items: center;
    justify-content: center;

    select {
      background-color: #373C49;
      color: white;
      border: none;
      font-size: 15px;
      font-weight: bold;

      cursor: pointer;
      transition: 0.3s;

      &:hover {
        transform: scale(1.02);
      }

      &:focus {
        outline: none;
      }
    }
  }

  .right {
    display: flex;
    justify-content: space-between;
    width: 658px;

    .scan {
      display: flex;
      align-items: center;
      font-size: 15px;
      font-weight: bold;
      color: white;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        transform: scale(1.02);
      }

      font-awesome-icon {
        font-size: 20px;
      }
    }

    .branch {
      display: flex;
      align-items: center;
      font-size: 15px;
      font-weight: bold;
      color: white;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        transform: scale(1.02);
      }
    }
  }
}
</style>