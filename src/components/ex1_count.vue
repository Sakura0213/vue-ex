<template>
  <BaseFooter title="1. 点击按钮实现 count"></BaseFooter>

  <el-button style="width:90px" @click="countNum">{{ num }}</el-button>
  <h1>{{ componentName }}</h1>
</template>

<script setup>
import { ref } from "vue";
import BaseFooter from "./BaseFooter.vue";

const num = ref(0);

function countNum() {
  ++num.value;
}
</script>
