<script setup lang="ts">

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

    </div>
    <div class="bot">
      <div class="commit-title">
        <input type="text" name="name" id="name" placeholder="commit title...">
      </div>
      <div class="commit-desc">
        <textarea name="desc" id="desc" placeholder="description..."></textarea>
      </div>
      <div class="commit-submit">
        <button>Commit</button>
      </div>
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
      font-size: 16px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
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

      input {
        border: none;
        background-color: #2C303A;
        height: 30px;
        color: white;
        width: 90%;
        border-radius: 5px;

        &:focus {
          outline: none;
        }
      }
    }

    .commit-desc {
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;

      textarea {
        border: none;
        background-color: #2C303A;
        height: 40px;
        color: white;
        border-radius: 5px;
        width: 90%;
        resize: none;

        &:focus {
          outline: none;
        }
      }
    }

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
    }
  }
</style>