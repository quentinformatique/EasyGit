<script setup lang="ts">
import Header from "./components/Header.vue";
import LeftSideBar from "./components/SideBars/ChangesSideBar.vue";
import CommitsSideBar from "./components/SideBars/CommitsSideBar.vue";
import GestionSIdeBar from "./components/SideBars/GestionSIdeBar.vue";

window.electronAPI.sendMessage('Hello from App.vue!');
</script>

<template>
  <div class="app-container">
    <div class="left-section">
      <Header currentRepo="Repo"/>
      <div class="content-section">
        <div class="sidebar-section">
          <GestionSIdeBar/>
          <LeftSideBar/>
        </div>
        <div class="main-section">
          <div class="main-content">
            main
          </div>
        </div>
      </div>
    </div>
    <div class="right-section">
      <CommitsSideBar/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-container {
  display: flex;
  background-color: white;

  .left-section {
    display: flex;
    flex-direction: column;
    .content-section {
      display: flex;
      flex: 1;
    }

    .sidebar-section {
      display: flex;
    }

    .main-section {
      .main-content {
        flex: 1;
        width: 550px;
        height: 100%;
        background-color: #282C34;
      }
    }
  }

  .right-section {
    display: flex;
  }
}
</style>