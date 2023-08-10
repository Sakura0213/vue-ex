<template>
  <BaseFooter title="4.axios获取网络请求"></BaseFooter>

  <el-button @click="getData">点击获取网络请求</el-button>

  <el-dialog
    v-model="dialogVisible"
    title="获取请求成功"
    width="30%"
    :before-close="handleClose"
  >
    <span>
      <p>网址为：{{ url }}</p>
      <br />
      <p>状态码：{{ rData.status }}</p>
      <p>squadName：{{ rData.data.squadName }}</p>
      <p>homeTown：{{ rData.data.homeTown }}</p>
      <p>formed：{{ rData.data.formed }}</p>
      <p>secretBase：{{ rData.data.secretBase }}</p>
    </span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref } from "vue";
import BaseFooter from "./BaseFooter.vue";
import API from "../plugins/axiosInstance";

const dialogVisible = ref(false);
const url = ref(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);
const rData = ref();

function getData() {
  API({
    url: url.value,
    method: "get",
  }).then((res) => {
    if (res.status === 200) {
      dialogVisible.value = true;
      rData.value = res;
    }
  });
}
</script>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
