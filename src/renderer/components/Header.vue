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
        <span class="scan-title">Scan new repositories</span>
      </div>
      <div class="branch">
        <div class="current">
          <span>Current branch <font-awesome-icon icon="code-branch"/> </span>
        </div>
        <div class="branch-select">
          <select name="branch" id="branch">
            <option value="branch1">Master</option>
            <option value="branch2">Branch2</option>
            <option value="branch3">Branch3</option>
          </select>
        </div>
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
  box-sizing: border-box;


  .left {
    width: 222px;
    background-color: #373C49;
    border-right: 1px solid #232323;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: center;

    select {
      background-color: #373C49;
      color: white;
      border: none;
      font-size: 15px;
      font-weight: bold;
      padding: 10px;
      margin: 10px;
      cursor: pointer;
      transition: 0.3s;

      &:focus {
        outline: none;
      }
    }
  }

  .right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 658px;

    .scan {
      display: flex;
      align-items: center;
      font-size: 15px;
      font-weight: bold;
      color: white;
      cursor: pointer;
      transition: 0.3s;
      padding: 25px;

      &:hover {
        transform: scale(1.02);
      }

      font-awesome-icon {
        font-size: 20px;
      }

      .scan-title {
        font-size: 15px;
        margin-left: 10px;
      }
    }

    .branch {
      display: flex;
      flex-direction: column;
      align-items: center;

      .current {
        font-size: 12px;
        font-weight: normal;
        color: white;
        margin-right: 20px;
      }

      .branch-select {
        select {
          background-color: #2C303A;
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
    }
  }
}
</style>