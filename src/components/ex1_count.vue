<template>
  <BaseFooter title="1. 点击按钮实现 count"></BaseFooter>

  <el-button class="button" @click="countNum">{{ num }}</el-button>

</template>

<script setup>
import { ref } from "vue";
import BaseFooter from "./BaseFooter.vue";

const num = ref(0);

function countNum() {
  ++num.value;
}
</script>

<style scoped>
.button {
  width: 100px;
}
</style>
