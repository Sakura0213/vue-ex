<!-- About.vue -->
<template>
  <BaseFooter
    title="2. 使用mock模拟接口，使用axios请求并接收，弹窗后延迟显示数据"
  ></BaseFooter>

  <el-button @click="getData">请求数据</el-button>
  <p>这是请求到的数据： {{ testData }}</p>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseFooter from "./BaseFooter.vue";
import API from "../plugins/axiosInstance";
import { ElMessage } from "element-plus";

let testData = ref();

//测试请求方法
function getData() {
  testData.value = ""; //点击后重置为空
  API({
    url: "http://localhost:8080/test2",
    method: "get",
  }).then((res) => {
    if (res.data) {
      ElMessage({
        message: `请求成功!状态码：${res.data.status}`,
        type: "success", //消息提示的类型
        offset: 10, //距离窗口顶部的偏移量
        duration: 1500, //存在时间
        // showClose: true, //是否显示关闭按钮
      });
      setTimeout(() => {
        testData.value = res.data.dataList;
      }, 1000);
    } else {
      ElMessage({
        message: `请求失败!状态码：${res.data.status}`,
        type: "warning",
      });
    }
  });
}
</script>
