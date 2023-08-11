<template>
  <BaseFooter title="5.测试VUe(无意义请忽略)"></BaseFooter>
  <el-button @click="modify">点击</el-button>
  <p>{{ str }}</p>
</template>

<script setup>
import { ref } from "vue";
import BaseFooter from "./BaseFooter.vue";

const str = ref("initial");

function modify() {
  str.value = "modified";
}
</script>
