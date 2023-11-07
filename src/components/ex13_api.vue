<template>
  <BaseFooter title="13.测试接口"></BaseFooter>
  <el-button @click="getImageUrl">点击获取图片</el-button>
  <div>{{ status }}</div>
  <img :src="url" style="width: 320px;"/>
</template>

<script setup>
import { ref } from "vue";
import BaseFooter from "./BaseFooter.vue";
import API from "../axios/axiosInstance";

const url = ref("http://zengxinyou.test.upcdn.net/ocq/头像.jpg");
const status = ref(false);

function getImageUrl() {
  API.get('https://api.vvhan.com/api/acgimg?type=json')
  .then(function (response) {
    // 处理成功情况
    console.log(response);
    url.value = response.data.imgurl;
    status.value = response.data.success;
  })
  .catch(function (error) {
    // 处理错误情况
    console.log(error);
  })
  .then(function () {
    // 总是会执行
  });
}
</script>
