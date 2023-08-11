<template>
  <BaseFooter title="7.测试 Pinia (复刻ex1)"></BaseFooter>
<el-button class="button" @click="countNum">{{ num }}</el-button>
  <h1>{{ componentName }}</h1>
</template>

<script setup>
import { ref } from "vue";
import BaseFooter from "./BaseFooter.vue";
import counter from "../stores/counter.js"

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
